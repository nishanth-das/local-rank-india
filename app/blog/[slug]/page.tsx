import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/lib/blog'
import { WHATSAPP_DEFAULT } from '@/lib/constants'
import BlogCard from '@/components/blog/BlogCard'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  
  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      url: `https://localrankindia.com/blog/${post.slug}`,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
      type: "article",
      publishedTime: post.publishedAt,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  // Get 2 related posts from same category (excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  return (
    <main className="bg-[#FBFBFF] min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-[100] pointer-events-none">
        <div className="h-full bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] w-0 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(27,79,255,0.5)]" id="reading-progress"></div>
      </div>

      {/* Hero Section - Matches Portfolio/Services Premium Dark */}
      <section className="relative bg-[#0A0F1E] pt-32 pb-48 md:pt-40 md:pb-64 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-dot-grid opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1B4FFF]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#FF6B2B]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-all text-sm font-bold mb-10 uppercase tracking-[0.3em] group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Blog Archive
          </Link>
          
          <div className="flex flex-col items-center gap-6 mb-10">
            <div className="inline-flex items-center gap-2 bg-[#1B4FFF]/20 text-[#1B4FFF] text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] border border-[#1B4FFF]/30 shadow-sm">
              {post.category}
            </div>
          </div>

          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[4.5rem] bg-gradient-to-r from-white via-white to-[#9CA3AF] bg-clip-text text-transparent leading-[1.1] tracking-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-[#9CA3AF] text-sm font-bold uppercase tracking-widest mb-12">
            <Clock className="w-4 h-4 text-[#FF6B2B]" />
            <span>{post.readTime}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span className="text-white/60">Insight</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative -mt-32 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* High-End Featured Image Frame */}
          <div className="relative max-w-5xl mx-auto mb-24 reveal-on-scroll">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-[12px] border-white bg-white group ring-1 ring-black/5">
              <Image 
                src={post.coverImage} 
                alt={post.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority={true}
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 max-w-6xl mx-auto items-start">
            
            {/* Minimalist Sticky Share */}
            <aside className="hidden lg:flex flex-col gap-8 sticky top-40 py-4">
              <div className="text-[10px] font-black text-[#9CA3AF] uppercase vertical-text tracking-[0.4em] opacity-50">SHARE</div>
              <div className="flex flex-col gap-4">
                <button className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:bg-[#1B4FFF] hover:text-white hover:border-[#1B4FFF] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.888-9.886.002-5.448-4.438-9.889-9.887-9.889-5.447 0-9.885 4.438-9.888 9.886-.001 2.125.6 3.856 1.761 5.498l-.999 3.648 3.733-.949zm11.367-7.635c-.31-.155-1.837-.906-2.12-.1.283-.103-.41-.155-.515-.077-.102.078-.386.232-.464.31-.077.077-.154.077-.464-.078-.31-.155-1.312-.483-2.498-1.542-.922-.822-1.544-1.838-1.724-2.147-.18-.31-.019-.477.136-.631.139-.139.31-.361.464-.541.155-.18.206-.309.309-.515.103-.206.052-.386-.026-.541-.077-.155-.695-1.675-.953-2.293-.251-.615-.506-.533-.695-.542-.178-.008-.385-.01-.591-.01-.206 0-.541.078-.824.386s-1.082 1.056-1.082 2.575 1.107 2.987 1.262 3.193c.155.206 2.178 3.325 5.277 4.662.737.317 1.311.507 1.758.649.741.235 1.415.202 1.947.123.594-.088 1.837-.751 2.095-1.478.258-.727.258-1.352.181-1.478-.077-.126-.283-.206-.593-.361z"/></svg>
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow max-w-3xl mx-auto">
              {/* Premium Summary Box */}
              <div className="bg-[#F8F9FF] border border-[#1B4FFF]/20 rounded-[2.5rem] p-10 mb-20 shadow-sm reveal-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#1B4FFF] flex items-center justify-center text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-[#0A0F1E]">Executive Summary</span>
                </div>
                <p className="text-[#0A0F1E] font-medium text-xl leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Enhanced Article Body */}
              <article className="prose prose-lg md:prose-xl max-w-none 
                prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:reveal-on-scroll
                prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:text-[#0A0F1E] prose-h2:mt-24 prose-h2:mb-10 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-[#1B4FFF]/10
                prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-[#0A0F1E] prose-h3:mt-16
                prose-p:text-[#4A5568] prose-p:leading-[1.9] prose-p:mb-10 prose-p:reveal-on-scroll
                prose-strong:text-[#0A0F1E] prose-strong:font-black
                prose-blockquote:border-none prose-blockquote:bg-[#0A0F1E] prose-blockquote:p-12 prose-blockquote:rounded-[3rem] prose-blockquote:not-italic prose-blockquote:font-bold prose-blockquote:text-white prose-blockquote:my-20 prose-blockquote:shadow-2xl prose-blockquote:reveal-on-scroll
                prose-a:text-[#1B4FFF] prose-a:font-bold hover:prose-a:underline
                prose-li:mb-4 prose-li:reveal-on-scroll
                prose-img:rounded-[3rem] prose-img:shadow-2xl prose-img:my-20 prose-img:reveal-on-scroll
                ">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                  className="article-body"
                />
              </article>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-24 pt-12 border-t border-[#E2E8F0] reveal-on-scroll">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-white text-[#4A5568] text-[10px] px-6 py-2.5 rounded-xl font-black uppercase tracking-widest hover:bg-[#1B4FFF] hover:text-white transition-all cursor-default border border-[#E2E8F0] shadow-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Premium CTA Section - Full Width Gradient */}
          <div className="mt-40 relative reveal-on-scroll">
            <div className="bg-[#0A0F1E] rounded-[4rem] p-12 md:p-24 text-center overflow-hidden border border-white/5 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B4FFF]/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B2B]/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-[#1B4FFF]/20 text-[#1B4FFF] text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-10">NEXT STEP</div>
                <h3 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-10">
                  Ready to upgrade <br className="hidden md:block" /> your digital presence?
                </h3>
                <p className="text-[#9CA3AF] text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                  We don&apos;t just build websites; we build growth engines. Join 50+ businesses scaling with Local Rank India.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <Link 
                    href="/contact"
                    className="bg-[#1B4FFF] text-white rounded-2xl px-12 py-5 font-black text-lg hover:bg-[#1540CC] transition-all shadow-[0_20px_40px_rgba(27,79,255,0.3)] hover:-translate-y-1 active:scale-95"
                  >
                    Start Your Project
                  </Link>
                  <a 
                    href={WHATSAPP_DEFAULT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white rounded-2xl px-12 py-5 font-black text-lg hover:bg-[#1ebd59] transition-all shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                  >
                    Message Us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-40">
              <div className="flex items-end justify-between mb-16">
                <div>
                  <div className="text-[#1B4FFF] font-black text-[10px] uppercase tracking-[0.3em] mb-4">RECOMMENDED</div>
                  <h3 className="font-display font-black text-4xl md:text-5xl text-[#0A0F1E]">Continue Reading</h3>
                </div>
                <Link href="/blog" className="hidden sm:flex items-center gap-2 text-[#1B4FFF] font-black text-sm uppercase tracking-widest hover:gap-4 transition-all group">
                  Full Blog <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {relatedPosts.map(rp => (
                  <BlogCard key={rp.slug} post={rp} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Scripts for Reading Progress and Scroll Animations */}
      <script dangerouslySetInnerHTML={{ __html: `
        // Reading Progress
        window.addEventListener('scroll', () => {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          const progressBar = document.getElementById('reading-progress');
          if (progressBar) progressBar.style.width = scrolled + '%';
        });

        // Intersection Observer for Reveal Animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        
        // Also observe child elements of article for a staggered effect
        document.querySelectorAll('.article-body > *').forEach(el => {
          el.classList.add('reveal-on-scroll');
          observer.observe(el);
        });
      `}} />
    </main>
  )
}
