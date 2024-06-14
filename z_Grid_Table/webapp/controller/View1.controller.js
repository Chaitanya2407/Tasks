sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.dpz_Grid_Table.controller.View1", {

		onInit: function() {
			debugger;
			var oModel = this.getOwnerComponent().getModel("DataModel");
			var oDataA = oModel.getProperty("/personEntityData").length;
			var oDataB = oModel.getProperty("/humanEntityData").length;
			oModel.setProperty("/firstTable", oDataA);
			oModel.setProperty("/secondTable", oDataB);

		},

		onPressADD: function() {
			debugger;
			var tableA = this.getView().byId("tableA");
			var tableB = this.getView().byId("tableB");

			var selectedItemsA = tableA.getSelectedIndices();
			var selectedItemsB = tableB.getSelectedIndices();

			if (selectedItemsA.length > 0 && selectedItemsB.length > 0) {
				MessageBox.warning("You Connot Move Items When Both Tables have Selected Rows");
				return;
			}
			if (selectedItemsA.length === 0 && selectedItemsB.length === 0) {
				MessageBox.warning("Please Select AtLeast One Row To Move");
				return;
			}

			var oModel = this.getOwnerComponent().getModel("DataModel");
			var oDataA = oModel.getProperty("/personEntityData");
			var oDataB = oModel.getProperty("/humanEntityData");

			if (selectedItemsA.length > 0) {
				for (var i = 0; i < selectedItemsA.length; i++) {
					var oItemIndexA = selectedItemsA[i];
					var oItemA = oDataA[oItemIndexA];
					oDataB.push(oItemA);
					var tableBLength = oDataB.length;
					tableB.setVisibleRowCount(tableBLength);
				}

				for (var j = 0; j < oDataB.length; j++) {
					var oIndexA = oDataA.indexOf(oDataB[j]);
					if (oIndexA > -1) {
						oDataA.splice(oIndexA, 1);
						var tableALength = oDataA.length;
						tableA.setVisibleRowCount(tableALength);
					}
				}
				oModel.refresh(true);
				tableA.clearSelection();
			}

			if (selectedItemsB.length > 0) {
				for (var k = 0; k < selectedItemsB.length; k++) {
					var oItemIndexB = selectedItemsB[k];
					var oItemB = oDataB[oItemIndexB];
					oDataA.push(oItemB);
					var tableLengthA = oDataA.length;
					tableA.setVisibleRowCount(tableLengthA);
				}

				for (var l = 0; l < oDataA.length; l++) {
					var oIndexB = oDataB.indexOf(oDataA[l]);
					if (oIndexB > -1) {
						oDataB.splice(oIndexB, 1);
						var tableLengthB = oDataB.length;
						tableB.setVisibleRowCount(tableLengthB);
					}
				}
				oModel.refresh(true);
				tableB.clearSelection();
			}
		},

		onPressRemove: function() {
			var tableA = this.getView().byId("tableA");
			var tableB = this.getView().byId("tableB");

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

			var oModel = this.getOwnerComponent().getModel("DataModel");
			var oDataA = oModel.getProperty("/personEntityData");
			var oDataB = oModel.getProperty("/humanEntityData");

			MessageBox.confirm("Are You Sure You Want To Remove Selected Row ?", {
				onClose: function(oAction) {
					if (oAction === "OK") {
						var removeArrayA = [];
						for (var i = 0; i < selectedItemsA.length; i++) {
							var oItemIndexA = selectedItemsA[i];
							var oItem1 = oDataA[oItemIndexA];
							removeArrayA.push(oItem1);
						}
						
						for(var j = 0; j < removeArrayA.length; j++){
							var oItemA = oDataA.indexOf(removeArrayA[j]);
							if(oItemA > -1){
								oDataA.splice(oItemA, 1);
								var tableALength = oDataA.length;
								tableA.setVisibleRowCount(tableALength);
							}
						}
							oModel.refresh(true);
							tableA.clearSelection();
							
						var removeArrayB = [];
						for (var k = 0; k < selectedItemsB.length; k++) {
							var oItemIndexB = selectedItemsB[k];
							var oItem2 = oDataB[oItemIndexB];
							removeArrayB.push(oItem2);
						}
						
						for(var l = 0; l < removeArrayB.length; l++){
							var oItemB = oDataB.indexOf(removeArrayB[l]);
							if(oItemB > -1){
								oDataB.splice(oItemB, 1);
								var tableBLength = oDataB.length;
								tableB.setVisibleRowCount(tableBLength);
							}
						}
							oModel.refresh(true);
							tableB.clearSelection();
					}
				}
			});
		}
	});
});