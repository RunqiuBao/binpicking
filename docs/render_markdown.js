// Get the markdown-it instance
var md = window.markdownit();

// Get the Markdown content from the script tag
var markdownText = document.getElementById("markdown").innerHTML;

// Convert the Markdown content to HTML
var htmlContent = md.render(markdownText);

// Insert the converted HTML into the center-block
document.getElementById("markdown-content").innerHTML = htmlContent;
