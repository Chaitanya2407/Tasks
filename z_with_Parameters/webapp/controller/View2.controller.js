sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_with_Parameters.controller.View2", {
		onInit: function() {
			debugger;
	        var oRouter = this.getOwnerComponent().getRouter();
	        oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatched, this);
    	},
    	
    	onRouteMatched: function (oEvent) {
    		var oName = oEvent.getParameter("arguments").objectPayload.name;
    		var oNumber = oEvent.getParameter("arguments").objectPayload.number;
    		var oEmail = oEvent.getParameter("arguments").objectPayloademailId;
    		var oLocation = oEvent.getParameter("arguments").objectPayload.location;
    		
    		this.getView().byId("bindName").setText(oName);
    		this.getView().byId("bindNumber").setText(oNumber);
    		this.getView().byId("bindEmail").setText(oEmail);
    		this.getView().byId("bindLocation").setText(oLocation);
    		
        }
    	
	});
});