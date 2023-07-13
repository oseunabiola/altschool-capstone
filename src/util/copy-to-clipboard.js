export function copyToClipboard(content) {
  console.log("Copied to clipboard");
  navigator.clipboard.writeText(content);
}
