import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { VaultFixes } from "./vault-fixes"

const config = await loadQuartzConfig()

// Run VaultFixes right before CrawlLinks (plugin name "LinkProcessing") so CrawlLinks
// resolves the hrefs/srcs it rewrites. See vault-fixes.ts.
const transformers = config.plugins.transformers
const linkIdx = transformers.findIndex((t) => t.name === "LinkProcessing")
transformers.splice(linkIdx === -1 ? transformers.length : linkIdx, 0, VaultFixes())

export default config
export const layout = await loadQuartzLayout()
