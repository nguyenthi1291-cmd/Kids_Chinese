[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
$filePath = "d:\Kids_Chinese\tailieuhoc\1792894250505_4603203874401719620_4603203874401719620_c219c9924b5ac7fcf6a44fcad23be94b.jpg"

try {
    $asyncOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($filePath)
    while ($asyncOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) { Start-Sleep -Milliseconds 10 }
    $file = $asyncOp.GetResults()

    $streamOp = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    while ($streamOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) { Start-Sleep -Milliseconds 10 }
    $stream = $streamOp.GetResults()

    $decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    while ($decoderOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) { Start-Sleep -Milliseconds 10 }
    $decoder = $decoderOp.GetResults()

    $bmpOp = $decoder.GetSoftwareBitmapAsync()
    while ($bmpOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) { Start-Sleep -Milliseconds 10 }
    $softBmp = $bmpOp.GetResults()

    $ocrOp = $engine.RecognizeAsync($softBmp)
    while ($ocrOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) { Start-Sleep -Milliseconds 10 }
    $res = $ocrOp.GetResults()

    Write-Host "Success! Text lines: $($res.Lines.Count)"
    $res.Lines | ForEach-Object { Write-Host $_.Text }
} catch {
    Write-Host "Error: $_"
    Write-Host $_.Exception.ToString()
}
