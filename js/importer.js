const importTags = document.querySelectorAll("import");
const head = document.querySelector("head");
const importKeywords = [
	["base", [
		"css/base",
		"js/logic:module"
	]],

	["all", [
		"css/all",
		"js/create-settings:module",
		"js/popup",
		"js/run-last"
	]]
]

function importCss(path, type="") {
	let tag = document.createElement('link'); 

	tag.rel = 'stylesheet';  
	tag.href = path;

	head.appendChild(tag);
}

function importJs(path, type="") {
	let tag = document.createElement('script');

	tag.src = path;
	tag.defer = true;
	tag.type = type;

	head.appendChild(tag);
}

function importJsOrCss(importText, importTagPath="") {
	//setting up lets
	let slashParts = importText.split("/");
	let colonParts = importText.split(":");
	
	let importType = colonParts[1];
	let importEnding = slashParts[0];

	let path = (
		importTagPath +
		colonParts[0].replaceAll("-", " ") +
		"." +
		importEnding);

	if (importEnding == "css") { importCss(path, importType); }
	else if (importEnding == "js") { importJs(path, importType); }
}

for (let importTag of importTags) {
	importTag.style.display = "none";
	importTag.innerHTML.split(" ").forEach((import_) => {
		//if import is a keywaord like popup than we can import everything needed to implement that
		for (let importKeyword of importKeywords) {
			if (import_ == importKeyword[0]) {
				importKeyword[1].forEach(item => { importJsOrCss( item, importTag.getAttribute("path") ) });
				return; //!skip iteration of loop 5 lines above
			}
		}
		
		importJsOrCss(import_, importTag.getAttribute("path"));// if you are confused as to why this isnt runnig look at look up 4 lines
	})
}