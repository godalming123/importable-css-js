"use strict";

var importTags = document.querySelectorAll("import");
var head = document.querySelector("head");
var importKeywords = [["base", ["css/base", "js/logic:module"]], ["all", ["css/all", "js/create-settings:module", "js/popup", "js/run-last"]]];

function importCss(path) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var tag = document.createElement('link');
  tag.rel = 'stylesheet';
  tag.href = path;
  head.appendChild(tag);
}

function importJs(path) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var tag = document.createElement('script');
  tag.src = path;
  tag.defer = true;
  tag.type = type;
  head.appendChild(tag);
}

function importJsOrCss(importText) {
  var importTagPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  //setting up lets
  var slashParts = importText.split("/");
  var colonParts = importText.split(":");
  var importType = colonParts[1];
  var importEnding = slashParts[0];
  var path = importTagPath + colonParts[0].replaceAll("-", " ") + "." + importEnding;

  if (importEnding == "css") {
    importCss(path, importType);
  } else if (importEnding == "js") {
    importJs(path, importType);
  }
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var importTag = _step.value;
    importTag.style.display = "none";
    importTag.innerHTML.split(" ").forEach(function (import_) {
      //if import is a keywaord like popup than we can import everything needed to implement that
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = importKeywords[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var importKeyword = _step2.value;

          if (import_ == importKeyword[0]) {
            importKeyword[1].forEach(function (item) {
              importJsOrCss(item, importTag.getAttribute("path"));
            });
            return; //!skip iteration of loop 5 lines above
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      importJsOrCss(import_, importTag.getAttribute("path")); // if you are confused as to why this isnt runnig look at look up 4 lines
    });
  };

  for (var _iterator = importTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}