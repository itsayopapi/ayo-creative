$ErrorActionPreference = "Stop"
$registries = @(
    "https://registry.npmjs.org/vite",
    "https://registry.npmmirror.com/vite"
)
foreach ($url in $registries) {
    $t = Get-Date
    try {
        $result = Invoke-WebRequest -Uri $url -TimeoutSec 15 -ErrorAction Stop
        $e = (Get-Date) - $t
        Write-Host ($url + " -> " + $e.TotalSeconds + "s (HTTP " + $result.StatusCode + ")")
    } catch {
        $e = (Get-Date) - $t
        Write-Host ($url + " -> " + $e.TotalSeconds + "s (FAILED: " + $_.Exception.Message + ")")
    }
}
