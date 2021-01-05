const importTags = document.querySelectorAll("import");
const head = document.querySelector("head");

importKeywords = [
	["base", [
		"logic.js.module",
		"style.css",
		"root.css"
	]]
]

function importCss(path, type) {
	var tag = document.createElement('link'); 

	tag.rel = 'stylesheet';  
	tag.href = path;

	head.appendChild(tag)
}

function importJs(path, type) {
	var tag = document.createElement('script');

	tag.src = path;
	tag.defer = true;
	tag.type = type;

	head.appendChild(tag);
}

function importJsOrCss(file) {
	//setting up vars
	var parts = file.split(".")
	var importType = parts[2];
	var importEnding = parts[1];
	var path = (importTag.getAttribute("path") + "/" + importEnding + "/" + parts[0] + "." + importEnding).replace("_", " ");

	if (importEnding == "css") { importCss(path, importType) }
	else if (importEnding == "js") { importJs(path, importType) }
}

for (importTag of importTags) {
	importTag.style.display = "none";
	importTag.innerHTML.split(" ").forEach((import_) => {
		//if import is a keywaord like popup than we can import everything needed to implement that
		for (importKeyword of importKeywords) {
			if (import_ == importKeyword[0]) {
				importKeyword[1].forEach(importJsOrCss);
				return; //!skip iteration of loop 5 lines above
			}
		}
		
		importJsOrCss(import_);// if you are confused as to why this isnt runnig look at look up 4 lines
	})
}