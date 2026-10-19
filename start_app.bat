@echo off
title Kids Chinese Learning App
echo ========================================================
echo   KIDS CHINESE LEARNING APP - SONG NGU TRUNG - VIET
echo ========================================================
echo.

:: Them D:\nodejs vao PATH neu ton tai
if exist "d:\nodejs" (
    set "PATH=d:\nodejs;%PATH%"
)

:: Kiem tra xem may co Node.js/NPM hay khong
where npm >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Tim thay Node.js / NPM. Dang khoi dong che do phat trien (Dev Mode)...
    start "" http://localhost:5173
    npm run dev -- --host
) else (
    echo [THONG BAO] Chua cai dat Node.js tren may.
    echo Dang khoi dong Web Server cuc bo qua ban dong goi (dist)...
    echo Trinh duyet se tu dong mo ngay bay gio!
    echo.
    powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
)

pause
