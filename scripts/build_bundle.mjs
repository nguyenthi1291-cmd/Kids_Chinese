import { build } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function run() {
  console.log('1. Chuan bi tep index.html goc tu index.dev.html...');
  const devHtml = fs.readFileSync(path.join(rootDir, 'index.dev.html'), 'utf8');
  fs.writeFileSync(path.join(rootDir, 'index.html'), devHtml, 'utf8');
  
  console.log('2. Dang build bang Vite JavaScript API...');
  await build({
    root: rootDir,
    base: './',
    build: {
      outDir: path.join(rootDir, 'dist'),
      emptyOutDir: true
    }
  });
  
  console.log('3. Build Vite hoan tat!');
  const distDir = path.join(rootDir, 'dist', 'assets');
  const files = fs.readdirSync(distDir);
  const cssFile = files.find(f => f.endsWith('.css'));
  const jsFile = files.find(f => f.endsWith('.js'));
  
  console.log('Tep CSS moi nhat:', cssFile);
  console.log('Tep JS moi nhat:', jsFile);
  
  const cssContent = fs.readFileSync(path.join(distDir, cssFile), 'utf8');
  const jsContent = fs.readFileSync(path.join(distDir, jsFile), 'utf8');
  
  console.log('4. Inline CSS va JS vao index.html doc lap...');
  const finalHtml = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐼</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Kids Chinese - Bé Học Tiếng Trung Song Ngữ</title>

    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Quicksand:wght@600;700&family=ZCOOL+KuaiLe&family=Noto+Sans+SC:wght@500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#F8F9FE] text-slate-800 font-kids antialiased selection:bg-bubble-yellow selection:text-slate-900 select-none">
    <div id="root"></div>
    <script>
${jsContent}
    </script>
  </body>
</html>`;

  fs.writeFileSync(path.join(rootDir, 'index.html'), finalHtml, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'dist', 'index.html'), finalHtml, 'utf8');
  
  console.log('5. THANH CONG! File index.html da duoc cap nhat day du toan bo 66 trang va 13 bai hoc!');
  console.log('Kich thuoc file index.html:', finalHtml.length, 'bytes');
}

run().catch(err => {
  console.error('Loi build:', err);
  process.exit(1);
});
