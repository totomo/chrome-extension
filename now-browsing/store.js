chrome.contextMenus.create({
	title: "Now Browsing",
	onclick: function(info, tab){
      copyToClipboard( "Now Browsing: " + tab.title + "- " + tab.url);
	}
});
