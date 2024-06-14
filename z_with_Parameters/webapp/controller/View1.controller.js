sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_with_Parameters.controller.View1", {
		onSubmit:function(){
			debugger;
			var cName = this.getView().byId("companyName").getValue();
			var cNumber = this.getView().byId("contactNumber").getValue();
			var cEmailId = this.getView().byId("companyEmailId").getValue();
			var cLocation = this.getView().byId("companyLocation").getValue();
			
			var objectPayload = {
				"name" : cName,
				"number" : cNumber,
				"emailId" : cEmailId,
				"location" : cLocation
			};
			
			this.getOwnerComponent().getRouter().navTo("View2" , JSON.stringify(objectPayload));
		}
	});
});