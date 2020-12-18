var root = document.querySelector(":root");

//functions
export function append(element, placeToAppend) {
	return placeToAppend.appendChild (element)
}

export function updateCssVarAndTextOnChangedInput(label, input, cssVar, addToCssVar) {
	label.innerHTML = input.value;
	root.style.setProperty(cssVar, input.value + addToCssVar);//if addToCssVar isnt defined this wile return a error
}

export function liveInputToCssVarAndLabel (label, input, cssVar, addToCssVar) {
	updateCssVarAndTextOnChangedInput(label, input, cssVar, addToCssVar);
	input.oninput = () => {
		updateCssVarAndTextOnChangedInput(label, input, cssVar, addToCssVar);
	};
}

export function CreateSetting(name, cssVarToChange, extraCode, addToVariable, settingType = "range") {
	var settingsContent = document.querySelector("#settingsContent");

	var settingsContainer = settingsContent.appendChild(document.createElement("label"));
	settingsContainer.append(name)
	
	var settingsInput = settingsContainer.appendChild(document.createElement("input"));
	settingsInput.setAttribute("type", settingType);

	var settingsLabel = settingsContainer.appendChild(document.createElement("span"))

	extraCode(settingsInput);

	//updating everything when settings changes
	liveInputToCssVarAndLabel(settingsLabel, settingsInput, cssVarToChange, addToVariable);
}

// functions for navigation and show or hide system
export function showOrHide (ID) {
	document.querySelector (ID).classList.toggle("hide");
}