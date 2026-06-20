$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Script = Join-Path $ProjectRoot "start-mindmate.ps1"
$OutLog = Join-Path $ProjectRoot "mindmate-dev.out.log"
$ErrLog = Join-Path $ProjectRoot "mindmate-dev.err.log"

$psi = [System.Diagnostics.ProcessStartInfo]::new()
$psi.FileName = "powershell.exe"
$psi.Arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$Script`""
$psi.WorkingDirectory = $ProjectRoot
$psi.UseShellExecute = $false
$psi.CreateNoWindow = $true
$psi.RedirectStandardOutput = $true
$psi.RedirectStandardError = $true
$psi.Environment.Clear()
$psi.Environment["SystemRoot"] = $env:SystemRoot
$psi.Environment["TEMP"] = $env:TEMP
$psi.Environment["TMP"] = $env:TMP
$psi.Environment["PATH"] = "C:\Windows\System32;C:\Windows;C:\Windows\System32\WindowsPowerShell\v1.0"

$process = [System.Diagnostics.Process]::Start($psi)
$process.BeginOutputReadLine()
$process.BeginErrorReadLine()

Start-Sleep -Seconds 4

try {
  $response = Invoke-WebRequest -Uri "http://127.0.0.1:3000" -UseBasicParsing -TimeoutSec 10
  "MindMate is running: http://127.0.0.1:3000 ($($response.StatusCode))"
} catch {
  "MindMate did not respond yet."
  if (Test-Path $ErrLog) { Get-Content -LiteralPath $ErrLog -Tail 80 }
  exit 1
}
