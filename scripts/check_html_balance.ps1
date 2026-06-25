$path = 'src\app\features\landing\pages\landing\landing.html'
$text = Get-Content -Raw $path -Encoding UTF8
$clean = [regex]::Replace($text, '@(for|if|else if|else|empty)[^\r\n]*', '')
$clean = [regex]::Replace($clean, '\{\{.*?\}\}', '')
$lines = $clean -split '\r?\n'
$voids = @('area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr')
$stack = @()
$pattern = '<(/?)([a-zA-Z0-9_-]+)([^>]*)>'
$mismatch = $false
for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    [regex]::Matches($line, $pattern) | ForEach-Object {
        $closing = $_.Groups[1].Value -eq '/'
        $tag = $_.Groups[2].Value.ToLower()
        $rest = $_.Groups[3].Value
        if ($voids -contains $tag -or $rest.TrimEnd().EndsWith('/')) { return }
        if ($closing) {
            if (-not $stack -or $stack[-1] -ne $tag) {
                Write-Host "MISMATCH line $($i+1) closing </$tag> expected </$($stack[-1])> stack=[${stack -join ', '} ]"
                $mismatch = $true
                if ($stack -contains $tag) {
                    while ($stack[-1] -ne $tag) { $stack = $stack[0..($stack.Count-2)] }
                    if ($stack[-1] -eq $tag) { $stack = $stack[0..($stack.Count-2)] }
                }
            } else {
                $stack = $stack[0..($stack.Count-2)]
            }
        } else {
            $stack += $tag
        }
    }
}
if (-not $mismatch) { Write-Host 'NO MISMATCH' }
Write-Host "REMAINING stack = [${stack -join ', '}]"
