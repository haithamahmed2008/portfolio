import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const projects = [
  {
    id: 'preview-saeedbawazir',
    url: 'https://saeedbawazir.com',
    output: 'public/images/preview-saeedbawazir.png',
  },
  {
    id: 'preview-daralamirat-pos',
    url: 'https://daralamiratpos.de',
    output: 'public/images/preview-daralamirat-pos.png',
  },
  {
    id: 'preview-daralamirat-appointment',
    url: 'https://appointment.daralamiratpos.de',
    output: 'public/images/preview-daralamirat-appointment.png',
  },
  {
    id: 'preview-daralamirat-hrms',
    url: 'https://hrms.daralamiratpos.de/',
    output: 'public/images/preview-daralamirat-hrms.png',
  },
  {
    id: 'preview-daralamirat-report',
    url: 'https://report.daralamiratpos.de',
    output: 'public/images/preview-daralamirat-report.png',
  },
  {
    id: 'preview-daralamirat-prod',
    url: 'https://prod.daralamiratpos.de',
    output: 'public/images/preview-daralamirat-prod.png',
  }
];

async function captureScreenshots() {
  console.log('Launching headless browser to capture live production sites...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    ignoreHTTPSErrors: true
  });

  for (const project of projects) {
    const page = await context.newPage();
    const outputPath = path.resolve(project.output);
    console.log(`\nNavigating to: ${project.url}...`);
    try {
      await page.goto(project.url, { waitUntil: 'load', timeout: 20000 });
      // Wait a moment for any client-side Vue/React rendering or animations
      await page.waitForTimeout(3000);
      await page.screenshot({ path: outputPath, fullPage: false });
      console.log(`✓ Successfully captured: ${outputPath}`);
    } catch (err) {
      console.log(`! Error capturing ${project.url}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nAll screenshot operations finished.');
}

captureScreenshots();
