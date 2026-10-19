@echo off
title Kids Chinese Learning App
echo ========================================================
echo   KIDS CHINESE LEARNING APP - SONG NGU TRUNG - VIET
echo ========================================================
echo.
echo Dang khoi dong ung dung hoc tieng Trung cho be...
set PATH=d:\nodejs;%PATH%
start "" http://localhost:5173
d:\nodejs\npm.cmd run dev -- --host
pause
