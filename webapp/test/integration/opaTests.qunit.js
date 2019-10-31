/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Practice1/Practice_UI5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});