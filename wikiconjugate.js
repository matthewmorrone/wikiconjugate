searchWiktionary = function(word){
	var query = word.selectionText;
	chrome.tabs.create({url: "https://en.wiktionary.org/wiki/" + query});
};
chrome.contextMenus.create({
	title: "Search on Wiktionary",
	contexts:["selection"],
	onclick: searchWiktionary
});