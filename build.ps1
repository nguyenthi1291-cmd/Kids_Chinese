# Build script danh cho Kids Chinese (Single-file Portable Bundle)
$ErrorActionPreference = "Stop"

$nodeExe = "C:\Users\thaotl\AppData\Local\Programs\antigravity\Antigravity.exe"
$viteJs = Join-Path $PSScriptRoot "node_modules\vite\bin\vite.js"

Write-Host "Dang build du an bang Vite..." -ForegroundColor Cyan
$env:ELECTRON_RUN_AS_NODE = "1"
& $nodeExe $viteJs build

$cssPath = Get-ChildItem (Join-Path $PSScriptRoot "dist\assets\*.css") | Select-Object -First 1 -ExpandProperty FullName
$jsPath = Get-ChildItem (Join-Path $PSScriptRoot "dist\assets\*.js") | Select-Object -First 1 -ExpandProperty FullName

$cssContent = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)
$jsContent = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)

$html = @"
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐼</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Kids Chinese - Bé Học Tiếng Trung Song Ngữ</title>

    <!-- DNS prefetch & Preconnect for fast loading -->
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>

    <!-- Google Fonts with display=swap for zero render-blocking -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Quicksand:wght@600;700&family=ZCOOL+KuaiLe&family=Noto+Sans+SC:wght@500;700;900&display=swap" rel="stylesheet">
    
    <!-- Font Awesome 6 Free -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
$cssContent
    </style>
  </head>
  <body class="bg-[#F8F9FE] text-slate-800 font-kids antialiased selection:bg-bubble-yellow selection:text-slate-900 select-none">
    <div id="root"></div>
    <script>
$jsContent
    </script>
  </body>
</html>
"@

$rootHtml = Join-Path $PSScriptRoot "index.html"
$distHtml = Join-Path $PSScriptRoot "dist\index.html"

[System.IO.File]::WriteAllText($rootHtml, $html, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText($distHtml, $html, [System.Text.Encoding]::UTF8)

Write-Host "Build thanh cong file index.html doc lap (Standalone)!" -ForegroundColor Green
Write-Host "Kich thuoc: $((Get-Item $rootHtml).Length) bytes" -ForegroundColor Yellow
