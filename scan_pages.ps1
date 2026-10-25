Add-Type -AssemblyName System.Drawing
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Globalization.Language, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if (-not $engine) {
    $lang = [Windows.Globalization.Language]::new("en-US")
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)
}

function Get-OcrText($filePath) {
    try {
        $file = [Windows.Storage.StorageFile]::GetFileFromPathAsync($filePath).GetAwaiter().GetResult()
        $stream = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read).GetAwaiter().GetResult()
        $decoder = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream).GetAwaiter().GetResult()
        $softBmp = $decoder.GetSoftwareBitmapAsync().GetAwaiter().GetResult()
        $ocrResult = $engine.RecognizeAsync($softBmp).GetAwaiter().GetResult()
        return $ocrResult.Text
    } catch {
        return ""
    }
}

$files = Get-ChildItem "d:\Kids_Chinese\tailieuhoc\*.jpg" | Sort-Object Name
$results = @()

foreach ($f in $files) {
    $text = Get-OcrText $f.FullName
    # Find numbers that look like page numbers (1-70)
    $lines = $text -split "`r`n|`n"
    $lastLines = $lines | Select-Object -Last 5
    $firstLines = $lines | Select-Object -First 5
    $results += [PSCustomObject]@{
        Name = $f.Name
        First = ($firstLines -join " | ").Substring(0, [Math]::Min(80, ($firstLines -join " | ").Length))
        Last = ($lastLines -join " | ").Substring(0, [Math]::Min(80, ($lastLines -join " | ").Length))
        All = $text
    }
}

$results | Export-Clixml "d:\Kids_Chinese\ocr_results.xml"
Write-Host "Done scanning $($results.Count) files!"
