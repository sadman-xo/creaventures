$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Node = "C:\Users\sadma\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

Set-Location $ProjectRoot
& $Node ".\node_modules\next\dist\bin\next" dev -H 127.0.0.1 -p 3000
