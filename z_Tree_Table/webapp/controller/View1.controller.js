sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.dpz_Tree_Table.controller.View1", {

		onInit: function() {
			debugger;

			var oModel = this.getOwnerComponent().getModel("TreeDataModel");
			var oDataA = oModel.getProperty("/table1Cricket").length;
			var aData = oModel.getData().table1Cricket[0].IPL.length + 1;
			var concatA = oDataA * aData;
			var oDataB = oModel.getProperty("/table2Cricket").length + 1;
			var bData = oModel.getData().table2Cricket[0].IPL.length;
			var cancatB = oDataB * bData;
			oModel.setProperty("/firstTable", concatA);
			oModel.setProperty("/secondTable", cancatB);
		},

		onPressADD: function() {
			debugger;

			var tableA = this.getView().byId("treeTableA");
			var tableB = this.getView().byId("treeTableB");

			var selectedItemsA = tableA.getSelectedIndices();
			var selectedItemsB = tableB.getSelectedIndices();

			if (selectedItemsA.length === 0 && selectedItemsB.length === 0) {
				MessageBox.warning("Please Select AtLeast One Row To Move");
				return;
			}

			if (selectedItemsA.length > 0 && selectedItemsB.length > 0) {
				MessageBox.warning("You Connot Move Items When Both Tables have Selected Rows");
				return;
			}

			var oModel = this.getOwnerComponent().getModel("TreeDataModel");
			var oDataA = oModel.getProperty("/table1Cricket");
			var oDataB = oModel.getProperty("/table2Cricket");

			if (selectedItemsA.length > 0) {
				for (var i = 0; i < selectedItemsA.length; i++) {
					var oItemIndexA = selectedItemsA[i];
					var oItemA = oDataA[oItemIndexA];
					oDataB.push(oItemA);
				}

				for (var j = 0; j < oDataB.length; j++) {
					var oIndexA = oDataA.indexOf(oDataB[j]);
					if (oIndexA > -1) {
						oDataA.splice(oIndexA, 1);
					}
				}
				oModel.refresh(true);
				tableA.clearSelection();
				tableB.clearSelection();
			}
			
			if(selectedItemsB.length > 0){
				for(var k = 0; k < selectedItemsB.length; k++){
					var oItemIndexB = selectedItemsB[k];
					var oItemB = oDataB[oItemIndexB];
					oDataA.push(oItemB);
				}
				
				for(var l = 0; l < oDataA.length; l++){
					var oIndexB = oDataB.indexOf(oDataA[l]);
					if(oIndexB > -1){
						oDataB.splice(oIndexB, 1);
					}
				}
				oModel.refresh(true);
				tableA.clearSelection();
				tableB.clearSelection();
			}
		},
		
		
		onPressRemove:function(){
			var tableA = this.getView().byId("treeTableA");
			var tableB = this.getView().byId("treeTableB");
			
			var selectedItemsA = tableA.getSelectedIndices();
			var selectedItemsB = tableB.getSelectedIndices();
			
			if (selectedItemsA.length > 0 && selectedItemsB.length > 0) {
				MessageBox.warning("You Connot Remove Items When Both Tables have Selected Rows");
				return;
			}

			if (selectedItemsA.length === 0 && selectedItemsB.length === 0) {
				MessageBox.warning("Please Select AtLeast One Row To Remove");
				return;
			}
			
			var oModel = this.getOwnerComponent().getModel("TreeDataModel");
			var oDataA = this.getOwnerComponent().getModel("table1Cricket");
			var oDataB = this.getOwnerComponent().getmodel("table2Cricket");
		}
	});
});