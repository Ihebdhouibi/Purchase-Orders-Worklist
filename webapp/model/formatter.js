sap.ui.define([
	"sap/ui/core/library"
], function (coreLibrary) {
	"use strict";

	// shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;
	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} iValue the language code 
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		languageState : function(iValue) {
			if (iValue == 'E') {
				//console.log(ValueState.Error)
				return ValueState.Error;
			} else if (iValue == 'F') {
				return ValueState.Success;
			} else {
				return ValueState.Warning;
			}
		}

	};

});