@echo off
chcp 65001 >nul
echo.
echo === Subir Artestudio a GitHub ===
echo.

if "%~1"=="" (
  echo Uso: SUBIR-A-GITHUB.bat TU_USUARIO_GITHUB
  echo Ejemplo: SUBIR-A-GITHUB.bat chris123
  echo.
  echo Si ya creaste el repo en GitHub, ejecuta lo anterior con tu usuario.
  echo Si no, abre: https://github.com/new?name=artestudio
  echo Crea el repo (sin README) y luego ejecuta este script con tu usuario.
  pause
  exit /b 1
)

set USER=%~1
cd /d "%~dp0"

if exist .git\refs\remotes\origin (
  echo Remoto 'origin' ya existe. Haciendo push...
  git push -u origin main
) else (
  echo Añadiendo remoto: https://github.com/%USER%/artestudio.git
  git remote add origin "https://github.com/%USER%/artestudio.git"
  echo Subiendo a GitHub...
  git push -u origin main
)

if %ERRORLEVEL% equ 0 (
  echo.
  echo Listo. Repo en: https://github.com/%USER%/artestudio
) else (
  echo.
  echo Error. Comprueba:
  echo - Que el repo "artestudio" exista en github.com/%USER%/
  echo - Que hayas iniciado sesión en GitHub (credenciales o token).
  echo - En Windows: Configuración ^> Cuentas de Git ^> GitHub.
)

echo.
pause
