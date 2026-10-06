// Local fixes for Obsidian-vault quirks that the stock v5 plugins (1.0.0) don't handle.
// Registered in quartz.ts so that it runs right BEFORE CrawlLinks ("LinkProcessing"),
// which then resolves the rewritten hrefs/srcs with its normal "shortest" strategy.
//
// 1. Folder notes: `책/존재양식의 탐구/존재양식의 탐구.md` gets the slug
//    `책/존재양식의-탐구/index`, so a bare `[[존재양식의 탐구]]` finds no file whose last
//    slug segment is `존재양식의-탐구` and falls back to `/존재양식의-탐구` (a 404).
//    We rewrite such hrefs to the folder path (`책/존재양식의-탐구/`).
// 2. SVG embeds: ObsidianFlavoredMarkdown turns `![[x.svg]]` into a raw
//    `<object data="x.svg">` string that CrawlLinks never sees, so the bare filename is
//    left relative to the page and 404s. We turn it into an <img> element, which
//    CrawlLinks resolves (and SPA/popover URL rebasing handles).
import { visit } from "unist-util-visit"
import type { Element, Root } from "hast"
import type { QuartzTransformerPlugin } from "./quartz/plugins/types"
import { slugifyFilePath, type FilePath } from "./quartz/util/path"

const svgObjectRe =
  /^<object data="([^"]+)" type="image\/svg\+xml" width="([^"]*)" height="([^"]*)" aria-label="([^"]*)"><\/object>$/

const isExternal = (href: string) => /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")

export const VaultFixes: QuartzTransformerPlugin = () => ({
  name: "VaultFixes",
  htmlPlugins(ctx) {
    return [
      () => (tree: Root) => {
        const allSlugs = ctx.allSlugs as string[]
        const lastSegments = new Set(allSlugs.map((s) => s.split("/").at(-1)))

        // 2. <object type="image/svg+xml"> embeds -> <img>. OFM's rehype-raw has already
        //    turned the HTML string into an element by now; the raw branch is a fallback.
        visit(tree, (node: any, index, parent: any) => {
          if (!parent || index === undefined) return
          let src: string, width: string, height: string, alt: string
          if (
            node.type === "element" &&
            node.tagName === "object" &&
            node.properties?.type === "image/svg+xml" &&
            typeof node.properties?.data === "string"
          ) {
            src = node.properties.data
            width = String(node.properties.width ?? "")
            height = String(node.properties.height ?? "")
            alt = String(node.properties.ariaLabel ?? "")
          } else if (node.type === "raw") {
            const m = svgObjectRe.exec(String(node.value).trim())
            if (!m) return
            ;[, src, width, height, alt] = m
          } else {
            return
          }
          if (isExternal(src)) return
          const img: Element = {
            type: "element",
            tagName: "img",
            properties: {
              src,
              alt,
              className: ["svg-embed"],
              ...(width && width !== "auto" ? { width } : {}),
              ...(height && height !== "auto" ? { height } : {}),
            },
            children: [],
          }
          parent.children[index] = img
        })

        // 1. bare wikilinks to folder notes
        visit(tree, "element", (node: Element) => {
          if (node.tagName !== "a") return
          const href = node.properties?.href
          if (typeof href !== "string" || href === "" || href.startsWith("#") || isExternal(href))
            return
          let decoded: string
          try {
            decoded = decodeURI(href)
          } catch {
            return
          }
          const hashIdx = decoded.indexOf("#")
          const fp = hashIdx === -1 ? decoded : decoded.slice(0, hashIdx)
          const anchor = hashIdx === -1 ? "" : decoded.slice(hashIdx)
          if (fp === "" || fp.includes("/")) return // only bare names need help
          const slug = slugifyFilePath(fp as FilePath)
          if (lastSegments.has(slug)) return // a normal note matches; leave it alone
          const folderNotes = allSlugs.filter(
            (s) => s === `${slug}/index` || s.endsWith(`/${slug}/index`),
          )
          if (folderNotes.length !== 1) return
          node.properties.href = folderNotes[0].replace(/index$/, "") + anchor
        })
      },
    ]
  },
})

// 3. 검색 색인(contentIndex.json) 다이어트: 강 노트 본문 전체(수만 자)를 색인에 넣으면 7천 쪽 서가의
//    색인이 25MB가 된다. 강·친절판·부록 노트는 앞부분만 색인에 남긴다(개체 노트는 그대로).
//    Description 플러그인이 file.data.text를 채운 뒤에 돌아야 하므로 변환기 맨 끝에 붙인다.
const TRIM_TYPES = new Set(["강", "친절판", "부록"])
const TRIM_LEN = 3000
export const TrimIndexText: QuartzTransformerPlugin = () => ({
  name: "TrimIndexText",
  htmlPlugins() {
    return [
      () => (_tree: Root, file: any) => {
        const t = file.data?.frontmatter?.type
        const text = file.data?.text
        if (TRIM_TYPES.has(t) && typeof text === "string" && text.length > TRIM_LEN) {
          file.data.text = text.slice(0, TRIM_LEN)
        }
      },
    ]
  },
})
