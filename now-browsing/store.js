chrome.contextMenus.create({
	title: "Now Browsing",
	contexts : ["selection"],
	onclick: function(info, tab){
      saveToClipboard( "Now Browsing: " + tab.title + "- " + tab.url);
	}
});

function saveToClipboard(str) {
    // copy 用に textareaを作る
	var textArea = document.createElement("textarea");
	textArea.style.cssText = "position:absolute;left:-100%";

	document.body.appendChild(textArea);

	textArea.value = str;
	textArea.select();
	document.execCommand("copy");

	document.body.removeChild(textArea);
}
