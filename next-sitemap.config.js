/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://localrankindia.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/sitemap.xml", "/sitemap.xml/", "/sitemap-0.xml"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      "https://localrankindia.com/sitemap.xml",
    ],
  },
  transform: async (config, path) => {
    // Higher priority for main pages
    const highPriority = ["/", "/services", "/contact", "/portfolio", "/about"]
    const medPriority = ["/services/website-development", "/services/google-my-business", "/blog"]
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: highPriority.includes(path) ? 1.0 : medPriority.includes(path) ? 0.8 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
