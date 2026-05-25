import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'
import { cities } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://localrankindia.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/services/google-my-business',
    '/services/website-development',
    '/portfolio',
    '/blog',
    '/contact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogs = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/web-design/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogs, ...cityRoutes]
}
