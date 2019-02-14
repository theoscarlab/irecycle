(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody{\n  font-family: \"Raleway\", sans-serif !important;\n}\n.bg--gradient{\n  align-items: center;\n  background-image: linear-gradient(-55deg, #663FB5 0%, #2B8BE3 100%);\n  height: 11em;\n  justify-content: center;\n    padding: 2em;\n    text-align: center;\n}\n.bg--gradient2{\n  align-items: center;\n  background-image: linear-gradient(-224deg, #00c6ff 0%, #0072ff 100%);\n  height: 11em;\n  justify-content: center;\n    padding: 2em;\n    text-align: center;\n}\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3;\n}\n.full {\n  color: red;\n}\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: red;\n}\n.click{\n  cursor: pointer;\n}\n/* sidebar */\n.sidebar {\n  width: 90px !important;\n  background-color: #212529;\n  min-height: calc(100vh - 56px);\n}\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem;\n}\n.sidebar .nav-item .nav-link {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  width: 90px;\n}\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block;\n}\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(90px + 0.5rem) !important;\n  margin: 0;\n}\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important;\n}\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none;\n}\n.sidebar .nav-item .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.sidebar .nav-item .nav-link:active, .sidebar .nav-item .nav-link:focus, .sidebar .nav-item .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important;\n  }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px;\n  }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline;\n  }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0;\n  }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block;\n  }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 90px !important;\n  }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem;\n  }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 90px;\n  }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block;\n  }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(90px + 0.5rem) !important;\n    margin: 0;\n  }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important;\n  }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none;\n  }\n}\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto;\n}\n/* Footer */\n#footer {\n  background: #101522;\n  padding: 0 0 25px 0;\n  color: #eee;\n  font-size: 14px;\n}\n#footer .footer-top {\n  background: #ffffff14;\n  padding: 60px 0 30px 0;\n}\n#footer .footer-top .footer-info {\n  margin-bottom: 30px;\n}\n#footer .footer-top .footer-info h3 {\n  font-size: 26px;\n  margin: 0 0 20px 0;\n  padding: 2px 0 2px 0;\n  line-height: 1;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 700;\n  color: #fff;\n}\n#footer .footer-top .footer-info img {\n  height: 40px;\n  margin-bottom: 10px;\n}\n#footer .footer-top .footer-info p {\n  font-size: 14px;\n  line-height: 24px;\n  margin-bottom: 0;\n  font-family: \"Raleway\", sans-serif;\n  color: #fff;\n}\n#footer .footer-top .social-links a {\n  font-size: 18px;\n  display: inline-block;\n  background: #222636;\n  color: #eee;\n  line-height: 1;\n  padding: 8px 0;\n  margin-right: 4px;\n  border-radius: 50%;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n}\n#footer .footer-top .social-links a:hover {\n  background: #0143a3;\n  color: #fff;\n}\n#footer .footer-top h4 {\n  font-size: 14px;\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  position: relative;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #0143a3;\n}\n#footer .footer-top .footer-links {\n  margin-bottom: 30px;\n}\n#footer .footer-top .footer-links ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#footer .footer-top .footer-links ul i {\n  padding-right: 5px;\n  color: #0143a3;\n  font-size: 18px;\n}\n#footer .footer-top .footer-links ul li {\n  border-bottom: 1px solid #262c44;\n  padding: 10px 0;\n}\n#footer .footer-top .footer-links ul li:first-child {\n  padding-top: 0;\n}\n#footer .footer-top .footer-links ul a {\n  color: #eee;\n}\n#footer .footer-top .footer-links ul a:hover {\n  color: #0143a3;\n}\n#footer .footer-top .footer-contact {\n  margin-bottom: 30px;\n}\n#footer .footer-top .footer-contact p {\n  line-height: 26px;\n}\n#footer .footer-top .footer-newsletter {\n  margin-bottom: 30px;\n}\n#footer .footer-top .footer-newsletter input[type=\"email\"] {\n  border: 0;\n  padding: 6px 8px;\n  width: 65%;\n}\n#footer .footer-top .footer-newsletter input[type=\"submit\"] {\n  background: #0143a3;\n  border: 0;\n  width: 35%;\n  padding: 6px 0;\n  text-align: center;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n#footer .footer-top .footer-newsletter input[type=\"submit\"]:hover {\n  background: #e0072f;\n}\n#footer .copyright {\n  text-align: center;\n  padding-top: 30px;\n}\n#footer .credits {\n  text-align: center;\n  font-size: 13px;\n  color: #ddd;\n}\n.circle{\n  border-radius: 50%;\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielhernandez/Documents/TRABAJO/DOHA/Proyecto_Medio_Ambiente/irecycle/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map