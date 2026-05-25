const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const outputDir = 'C:\\Users\\nisha\\.gemini\\antigravity\\brain\\4ddfc83c-9df8-4bb9-8c7e-023032434804';

const pages = [
  { name: '01_homepage', url: 'http://localhost:3001/' },
  { name: '02_services', url: 'http://localhost:3001/services' },
  { name: '03_website_development', url: 'http://localhost:3001/services/website-development' },
  { name: '04_google_my_business', url: 'http://localhost:3001/services/google-my-business' },
  { name: '05_portfolio', url: 'http://localhost:3001/portfolio' },
  { name: '06_about', url: 'http://localhost:3001/about' },
  { name: '07_blog_listing', url: 'http://localhost:3001/blog' },
  { name: '08_blog_article', url: 'http://localhost:3001/blog/why-every-local-business-in-india-needs-a-website-in-2025' },
  { name: '09_contact', url: 'http://localhost:3001/contact' },
  { name: '10_city_landing', url: 'http://localhost:3001/web-design/agartala' },
];

async function capturePages() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const results = [];

  for (const page of pages) {
    console.log(`\nCapturing: ${page.name} - ${page.url}`);
    const tab = await browser.newPage();
    
    // Set a desktop viewport
    await tab.setViewport({ width: 1440, height: 900 });
    
    const consoleErrors = [];
    tab.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    try {
      // Navigate with a timeout
      const response = await tab.goto(page.url, { 
        waitUntil: 'networkidle2', 
        timeout: 30000 
      });
      
      const statusCode = response ? response.status() : 'unknown';
      console.log(`  Status: ${statusCode}`);
      
      // Wait a bit for animations/fonts to load
      await new Promise(r => setTimeout(r, 2000));
      
      // Get page title
      const title = await tab.title();
      
      // Check key elements
      const checks = await tab.evaluate(() => ({
        hasNavbar: !!document.querySelector('nav') || !!document.querySelector('header'),
        hasFooter: !!document.querySelector('footer'),
        hasWhatsApp: !!document.querySelector('[href*="wa.me"]') || !!document.querySelector('[href*="whatsapp"]') || Array.from(document.querySelectorAll('a')).some(a => a.href && a.href.includes('wa.me')),
        pageTitle: document.title,
        h1Count: document.querySelectorAll('h1').length,
        h1Text: document.querySelector('h1') ? document.querySelector('h1').textContent.trim() : 'NONE',
        bodyBgColor: window.getComputedStyle(document.body).backgroundColor,
        metaDescription: document.querySelector('meta[name="description"]')?.content || 'NONE',
        imageCount: document.querySelectorAll('img').length,
        brokenImages: Array.from(document.querySelectorAll('img')).filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src).slice(0, 5),
      }));
      
      // Take full-page screenshot
      const screenshotPath = path.join(outputDir, `screenshot_${page.name}.png`);
      await tab.screenshot({ 
        path: screenshotPath, 
        fullPage: true 
      });
      
      // Get page dimensions
      const dimensions = await tab.evaluate(() => ({
        scrollHeight: document.documentElement.scrollHeight,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      
      results.push({
        name: page.name,
        url: page.url,
        status: statusCode,
        title,
        screenshot: screenshotPath,
        dimensions,
        consoleErrors,
        checks,
      });
      
      console.log(`  Title: ${title}`);
      console.log(`  H1: ${checks.h1Text}`);
      console.log(`  Page height: ${dimensions.scrollHeight}px`);
      console.log(`  Navbar: ${checks.hasNavbar}, Footer: ${checks.hasFooter}, WhatsApp: ${checks.hasWhatsApp}`);
      console.log(`  Images: ${checks.imageCount}, Broken: ${checks.brokenImages.length}`);
      console.log(`  Console errors: ${consoleErrors.length}`);
      if (consoleErrors.length > 0) console.log('  Errors:', consoleErrors.slice(0, 3));
      console.log(`  Screenshot saved: ${screenshotPath}`);
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
      results.push({
        name: page.name,
        url: page.url,
        status: 'ERROR',
        error: err.message,
        consoleErrors,
      });
    }
    
    await tab.close();
  }

  await browser.close();
  
  // Save results JSON
  const resultsPath = path.join(outputDir, 'screenshot_results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`\n=== All done! Results saved to: ${resultsPath} ===`);
}

capturePages().catch(console.error);
