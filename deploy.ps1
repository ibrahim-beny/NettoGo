# NettoGo Deployment Script
# This script helps with local development and deployment

Write-Host "🚀 NettoGo Deployment Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Please run this script from the project root." -ForegroundColor Red
    exit 1
}

# Function to install dependencies
function Install-Dependencies {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
}

# Function to build the project
function Build-Project {
    Write-Host "🔨 Building project..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Project built successfully" -ForegroundColor Green
    } else {
        Write-Host "❌ Build failed" -ForegroundColor Red
        exit 1
    }
}

# Function to start development server
function Start-DevServer {
    Write-Host "🌐 Starting development server..." -ForegroundColor Yellow
    Write-Host "📱 Your app will be available at: http://localhost:5173" -ForegroundColor Cyan
    npm run dev
}

# Function to preview production build
function Preview-Build {
    Write-Host "👀 Previewing production build..." -ForegroundColor Yellow
    if (Test-Path "dist") {
        Write-Host "📁 Serving dist folder..." -ForegroundColor Cyan
        npx serve dist
    } else {
        Write-Host "❌ No dist folder found. Please build the project first." -ForegroundColor Red
    }
}

# Main menu
function Show-Menu {
    Clear-Host
    Write-Host "🚀 NettoGo Deployment Script" -ForegroundColor Green
    Write-Host "================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "1. Install dependencies" -ForegroundColor White
    Write-Host "2. Build project" -ForegroundColor White
    Write-Host "3. Start development server" -ForegroundColor White
    Write-Host "4. Preview production build" -ForegroundColor White
    Write-Host "5. Full setup (install + build)" -ForegroundColor White
    Write-Host "6. Exit" -ForegroundColor White
    Write-Host ""
}

# Main loop
do {
    Show-Menu
    $choice = Read-Host "Enter your choice (1-6)"
    
    switch ($choice) {
        "1" { Install-Dependencies; Read-Host "Press Enter to continue..." }
        "2" { Build-Project; Read-Host "Press Enter to continue..." }
        "3" { Start-DevServer; break }
        "4" { Preview-Build; Read-Host "Press Enter to continue..." }
        "5" { 
            Install-Dependencies
            Build-Project
            Write-Host "🎉 Full setup completed!" -ForegroundColor Green
            Read-Host "Press Enter to continue..."
        }
        "6" { 
            Write-Host "👋 Goodbye!" -ForegroundColor Green
            break 
        }
        default { 
            Write-Host "❌ Invalid choice. Please try again." -ForegroundColor Red
            Start-Sleep -Seconds 2
        }
    }
} while ($choice -ne "6")
