import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { VaultFixes, TrimIndexText } from "./vault-fixes"

const config = await loadQuartzConfig()

// Run VaultFixes right before CrawlLinks (plugin name "LinkProcessing") so CrawlLinks
// resolves the hrefs/srcs it rewrites. See vault-fixes.ts.
const transformers = config.plugins.transformers
const linkIdx = transformers.findIndex((t) => t.name === "LinkProcessing")
transformers.splice(linkIdx === -1 ? transformers.length : linkIdx, 0, VaultFixes())
// 검색 색인 다이어트(vault-fixes.ts 3번): Description이 text를 채운 뒤, 맨 끝에
transformers.push(TrimIndexText())

export default config
export const layout = await loadQuartzLayout()
