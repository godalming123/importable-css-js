import {liveInputToCssVarAndLabel} from "./logic.js";

const settingsContent = document.getElementById("settings").appendChild(
	document.createElement("content")
)

CreateSetting(name, cssVarToChange, extraCode, addToVariable, settingType = "range") {
	if (settingsContent != null) {
		var settingsContainer = settingsContent.appendChild(document.createElement("label"));
		settingsContainer.append(name)
		
		var settingsInput = settingsContainer.appendChild(document.createElement("input"));
		settingsInput.setAttribute("type", settingType);

		var settingsLabel = settingsContainer.appendChild(document.createElement("span"))

		extraCode(settingsInput);
	}

	// updating everything when settings changes
	liveInputToCssVarAndLabel(settingsLabel, settingsInput, cssVarToChange, addToVariable);
}

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