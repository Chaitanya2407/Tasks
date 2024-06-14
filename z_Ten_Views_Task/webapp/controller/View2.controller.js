sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/m/Label",
	"sap/m/Input",
	"sap/ui/table/Table",
	"sap/ui/table/Column",
	"sap/ui/table/Row",
	"sap/m/Text"
], function (Controller, JSONModel, MessageToast, MessageBox, Label, Input, Table, Column, Row, Text) {
    "use strict";

    return Controller.extend("com.dpz_Ten_Views_Task.controller.View2", {

        onInit: function () {
        	debugger;
        	var oModel = new JSONModel();
            this.getView().setModel(oModel, "DataModel");
        	
        
        	
        	var column1 = new Column({
        		label : new Label ({text:"Name"}),
        		input : new Input ({text :""})
        	});
        	
        	
        	var column2 = new Column({
        		label : new Label ({text : "Mobile Number"}),
        		input : new Input ({text : ""})
        	});
        		var gridTable = new Table({
        		Columns:[column1]
        	});
        	
        	this.getView().getContent()[0].getPages()[0].addContent(gridTable);
        	
            // var oData = {
            //     personEntityData: [],
            //     firstTable: 5
            // };


            
        },

        gridAddBtn: function () {
        	debugger;
            var oModel = this.getView().getModel("DataModel");
            var aData = oModel.getProperty("/personEntityData");
            
            aData.push({
                Name: "",
                Email: "",
                Mobile: "",
                City: "",
                Country: "",
                editable: true
            });

            oModel.setProperty("/personEntityData", aData);
        },

        onSaveEditBtnPress: function (oEvent) {
        	debugger;
        	var inpNameTableId = this.getView().byId("inpNameTableId").getvalue();
        	var inpEmailTableId = this.getView().byId("inpEmailTableId").getValue();
        	var inpMobileTableId = this.getView().byId("inpMobileTableId").getValue();
        	var inpCityTableId = this.getView().byId("inpCountryTableId").getValue();
        	var inpCountryTableId = this.getView().byId("inpCountryTableId").getValue();
        	
            // var oModel = this.getView().getModel("DataModel");
            // var sPath = oEvent.getSource().getBindingContext("DataModel").getPath();
            
            // var saveBtn = this.getView().byId("gridSaveBtn");
            // saveBtn.text = "Edit";

            // var bEditable = oModel.getProperty(sPath + "/editable");
            // oModel.setProperty(sPath + "/editable", !bEditable);
        },

        gridDeleteBtn: function (){
        	debugger;
        	var oTable = this.getView().byId("gridTable");
            var oModel = this.getView().getModel("DataModel");
            var aData = oModel.getProperty("/personEntityData");
            var aSelectedIndices = oTable.getSelectedIndices();
            
            if(aSelectedIndices.length === 0){
            	MessageBox.warning("No Items Selected to Dalete");
            	return;
            }
   //         if(aSelectedIndices.length === 0){
			// 	MessageBox.warning("No Items Selected to Delete");
			// 	return;
			// }
			
			MessageBox.confirm("Are you sure you want to delete Selected Items?", {
                onClose: function (oAction) {
                    if (oAction === "OK") {
            			for (var i = aSelectedIndices.length - 1; i >= 0; i--){
            				var oGridContext = aSelectedIndices[i].getBindingContext("DataModel");
                    		var index = oGridContext.getPath().split("/").pop();
                    		if(index >= 0){
                    		 	aData.splice(index, 1);
                    		 }
            			}
                    }
                }
             });
             
             
        }

    });
});