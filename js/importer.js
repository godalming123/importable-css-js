const importTags = document.querySelectorAll("import");
const head = document.querySelector("head");
const importKeywords = [
	["base", [
		"logic.js.module",
		"style.css",
		"scrollbar.css",
		"root.css"
	]],

	["all", [
		"dropdown.css",
		"dropdown_right.css",
		"popup.css",
		"header.css",
		"scroll_snap.css",
		"futuristic.css",
		"flashy.css",
		"section_img_header.css",
		"parrelex.css",
		"img_cycle_animater.css",
		"create settings.js",
		"popup.js"
	]]
]

function importCss(path, type) {
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

function importJsOrCss(file, importTag) {
	//setting up lets
	let parts = file.split(".");
	let importType = parts[2];
	let importEnding = parts[1];
	let path = (importTag.getAttribute("path") + "/" + importEnding + "/" + parts[0] + "." + importEnding).replaceAll("_", " ");

	if (importEnding == "css") { importCss(path, importType); }
	else if (importEnding == "js") { importJs(path, importType); }
}

for (let importTag of importTags) {
	importTag.style.display = "none";
	importTag.innerHTML.split(" ").forEach((import_) => {
		//if import is a keywaord like popup than we can import everything needed to implement that
		for (let importKeyword of importKeywords) {
			if (import_ == importKeyword[0]) {
				importKeyword[1].forEach(item => { importJsOrCss( item, importTag ) });
				return; //!skip iteration of loop 5 lines above
			}
		}
		
		importJsOrCss(import_, importTag);// if you are confused as to why this isnt runnig look at look up 4 lines
	})
}