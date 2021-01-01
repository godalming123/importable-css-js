import "logic.js"

CreateSetting(
	"animation duration",
	"--transition",
	function (settingsInput) {
		settingsInput.setAttribute("min", 0);
		settingsInput.setAttribute("max", 4);
		settingsInput.setAttribute("value", 1);
	},
	"s",
	"range"
);

CreateSetting(
	"roundness",
	"--border-radius",
	function (settingsInput) {
		settingsInput.setAttribute("step", 0.2)
		settingsInput.setAttribute("min", 0);
		settingsInput.setAttribute("max", 4);
		settingsInput.setAttribute("value", 1);
	},
	"vh",
	"range"
);