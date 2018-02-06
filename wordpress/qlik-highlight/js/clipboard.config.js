var snippets=document.querySelectorAll(".qlik-highlight-pre");

[].forEach.call(snippets,function(snippet){
	//snippet.firstChild.insertAdjacentHTML("beforebegin","<button class=\"btn\" data-clipboard-snippet><img class=\"clippy\" width=\"13\" src=\"" + qlikHighlightClipboardConfig.pluginsUrl + "js/clippy.svg\" alt=\"Copy to clipboard\"></button>");
	snippet.firstChild.insertAdjacentHTML("beforebegin", Sanitizer.escapeHTML("<button class=\"btn\" data-clipboard-snippet><img class=\"clippy\" width=\"13\" src=\"" + qlikHighlightClipboardConfig.pluginsUrl + "js/clippy.svg\" alt=\"Copy to clipboard\"></button>"));
	//Sanitizer.escapeHTML`<a href="${link}">click</a>`
});

var clipboardSnippets=new Clipboard("[data-clipboard-snippet]",
{
	target(trigger){
		return trigger.nextElementSibling;
	}
});

clipboardSnippets.on("success",function(e){
	e.clearSelection();
	//showTooltip(e.trigger,'Copied!');
});

clipboardSnippets.on("error",function(e){
	//showTooltip(e.trigger,fallbackMessage(e.action));
});