sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.dpz_Two_Tables.controller.View1", {
		onPressADD:function(){
			debugger;
			var tableA = this.getView().byId("personTableA");
			var tableB = this.getView().byId("personTableB");
			
			var selectedItemsA = tableA.getSelectedItems();
			var selectedItemsB = tableB.getSelectedItems();
			
			if(selectedItemsA.length > 0  &&  selectedItemsB.length > 0){
				MessageBox.warning("You Connot Move Items When Both Tables have Selected Rows");
				return;
			}
			if(selectedItemsA.length === 0  &&  selectedItemsB.length === 0){
				MessageBox.warning("Please Select AtLeast One Row To Move");
				return;
			}
			
			var oModel = this.getOwnerComponent().getModel("personDataModel");
			var oDataA = oModel.getProperty("/personEntityData");
			var oDataB = oModel.getProperty("/humanEntityData");
			
			if (selectedItemsA.length > 0){
				var aItemsMoveA = [];
				for (var i = 0; i < selectedItemsA.length; i++){
					var oItemA = selectedItemsA[i].getBindingContext("personDataModel").getObject();
					aItemsMoveA.push(oItemA);
				}
				
				for (var j = 0; j < aItemsMoveA.length; j++){
					var oIndexA = oDataA.indexOf(aItemsMoveA[j]);
					if (oIndexA > -1) {
                        oDataA.splice(oIndexA, 1);
                    }
                    oDataB.push(aItemsMoveA[j]);
				}
					tableA.removeSelections();
			}
			
			if (selectedItemsB.length > 0){
				var aItemsMoveB = [];
				for (var k = 0; k < selectedItemsB.length; k++){
					var oItemB = selectedItemsB[k].getBindingContext("personDataModel").getObject();
					aItemsMoveB.push(oItemB);
				}
				
				for (var l = 0; l < aItemsMoveB.length; l++){
					var oIndexB = oDataB.indexOf(aItemsMoveB[l]);
					if (oIndexB > -1) {
                        oDataB.splice(oIndexB, 1);
                    }
                    oDataA.push(aItemsMoveB[l]);
				}
					tableB.removeSelections();
			}
				oModel.refresh(true);
		},
		
		onPressRemove:function(){
			debugger;
			var tableA = this.getView().byId("personTableA");
			var tableB = this.getView().byId("personTableB");
			
			var selectedItemsA = tableA.getSelectedItems();
			var selectedItemsB = tableB.getSelectedItems();
			
			if(selectedItemsA.length > 0  &&  selectedItemsB.length > 0){
				MessageBox.warning("You Connot Remove Items When Both Tables have Selected Rows");
				return;
			}
			
			if(selectedItemsA.length === 0  &&  selectedItemsB.length === 0){
				MessageBox.warning("Please Select AtLeast One Row To Remove");
				return;
			}
			
			var oModel = this.getOwnerComponent().getModel("personDataModel");
			var oDataA = oModel.getProperty("/personEntityData");
			var oDataB = oModel.getProperty("/humanEntityData");
			
			MessageBox.confirm("Are You Sure You Want To Remove Selected Row ?", {
				onClose:function(oAction){
					if (oAction === "OK") {
						var itemRemoveA = [];
							for(var i = 0; i < selectedItemsA.length; i++){
								var oItemA = selectedItemsA[i].getBindingContext("personDataModel").getObject();
								itemRemoveA.push(oItemA);
							}
							
							for(var j = 0; j < itemRemoveA.length; j++){
								var oIndexA = oDataA.indexOf(itemRemoveA[j]);
								if(oIndexA > -1){
									oDataA.splice(oIndexA, 1);
								}
							}
								tableA.removeSelections();
							
						var itemRemoveB = [];
							for(var k = 0; k < selectedItemsB.length; k++){
								var oItemB = selectedItemsB[k].getBindingContext("personDataModel").getObject();
								itemRemoveB.push(oItemB);
							}
							
							for(var l = 0; l < itemRemoveB.length; l++){
								var oIndexB = oDataB.indexOf(itemRemoveB[l]);
								if(oIndexB > -1){
									oDataB.splice(oIndexB, 1);
								}
							}
						tableB.removeSelections();
					}
						oModel.refresh(true);
				}
			});
		}
	});
});