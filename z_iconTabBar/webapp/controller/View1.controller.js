sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, MessageToast, MessageBox, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.dpz_iconTabBar.controller.View1", {
		onInit: function () {
           this.personIdSelected = null;
        },
        
		valueHelpId:function() {
			debugger;
			if(!this.formTable1){
				this.formTable1 = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.formTable1", this);
				this.getView().addDependent(this.formTable1);
			}
			this.formTable1.open();
		},
		 
		valueHelpName:function(){
			debugger;
			if (!this.personIdSelected) {
                MessageBox.error("Please select Survey ID first.");
                return;
            }

			if(!this.formTable2){
				this.formTable2 = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.formTable2", this);
				this.getView().addDependent(this.formTable2);
			}
			this.formTable2.open();
		},
		
		valueHelpAge:function() {
			debugger;
			if (!this.personIdSelected) {
                MessageBox.error("Please select Survey ID first.");
                return;
            }

			if(!this.formTable3){
				this.formTable3 = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.formTable3", this);
				this.getView().addDependent(this.formTable3);
			}
			this.formTable3.open();
		},
		
		valueHelpDesignation:function(){
			debugger;
			if (!this.personIdSelected) {
                MessageBox.error("Please select Survey ID first.");
                return;
            }

			if(!this.formTable4){
				this.formTable4 = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.formTable4", this);
				this.getView().addDependent(this.formTable4);
			}
			this.formTable4.open();
		},
		
		valueHelpEmailId :function() {
			debugger;
			if (!this.personIdSelected) {
                MessageBox.error("Please select Survey ID first.");
                return;
            }

			if(!this.formTable5){
				this.formTable5 = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.formTable5", this);
				this.getView().addDependent(this.formTable5);
			}
			this.formTable5.open();
		},
		
		valueHelpMobileNumber:function(){
			debugger;
			if (!this.personIdSelected) {
                MessageBox.error("Please select Survey ID first.");
                return;
            }

			if(!this.formTable6){
				this.formTable6 = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.formTable6", this);
				this.getView().addDependent(this.formTable6);
			}
			this.formTable6.open();
		},
		
		valueHelpCity:function() {
			debugger;
			if (!this.personIdSelected) {
                MessageBox.error("Please select Survey ID first.");
                return;
            }

			if(!this.formTable7){
				this.formTable7 = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.formTable7", this);
				this.getView().addDependent(this.formTable7);
			}
			this.formTable7.open();
		},
		
		valueHelpCountry:function(){
			debugger;
			if (!this.personIdSelected) {
                MessageBox.error("Please select Survey ID first.");
                return;
            }

			if(!this.formTable8){
				this.formTable8 = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.formTable8", this);
				this.getView().addDependent(this.formTable8);
			}
			this.formTable8.open();
		},
		
		onCloseFn1:function(){
			debugger;
			this.formTable1.close();
		},
		
		onCloseFn2:function(){
			debugger;
			this.formTable2.close();
		},
		
		onCloseFn3:function(){
			debugger;
			this.formTable3.close();
		},
		
		onCloseFn4:function(){
			debugger;
			this.formTable4.close();
		},
		
		onCloseFn5:function(){
			debugger;
			this.formTable5.close();
		},
		
		onCloseFn6:function(){
			debugger;
			this.formTable6.close();
		},
		
		onCloseFn7:function(){
			debugger;
			this.formTable7.close();
		},
		
		onCloseFn8:function(){
			debugger;
			this.formTable8.close();
		},
		
		onSearch: function(oEvent) {
			debugger;
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0){
				var Filters = new Filter([
					new Filter("Id", FilterOperator.Contains, sQuery),
					new Filter("Name", FilterOperator.Contains, sQuery),
					new Filter("Age", FilterOperator.Contains, sQuery),
					new Filter("Designation", FilterOperator.Contains, sQuery),
					new Filter("EmailId", FilterOperator.Contains, sQuery),
					new Filter("MobileNumber", FilterOperator.Contains, sQuery),
					new Filter("City", FilterOperator.Contains, sQuery),
					new Filter("Country", FilterOperator.Contains, sQuery)
				]);
			}
			var oList = oEvent.getSource().getParent().getParent();
			var oBinding = oList.getBinding("items");
			oBinding.filter(Filters);
		},
		
		onSubmitFormFn:function(){
			debugger;
			var personName = this.getView().byId("personName_Id").getValue();
			var personAge = this.getView().byId("personAge_Id").getValue();
			var personDesignation = this.getView().byId("personDesignation_Id").getValue();
			var personEmailId = this.getView().byId("personEmailId_Id").getValue();
			var personMobileNumber = this.getView().byId("personMobileNumber_Id").getValue();
			var personAltMobileNumber = this.getView().byId("personAlternateMobileNumber_Id").getValue();
			var personCity = this.getView().byId("personCity_Id").getValue();
			var personCountry = this.getView().byId("personCountry_Id").getValue();
			
			var validName = /^[a-zA-Z\s]+$/;
			var validAge = /^[0-9]{2}$/;
			var validEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
			var validNumber = /^[6-9]{1}[0-9]{9}$/;
			
			if(personName.match(validName)){
				this.getView().byId("personName_Id").setValueState("None");
			}else{
				this.getView().byId("personName_Id").setValueState("Error");
				this.getView().byId("personName_Id").setValueStateText("Enter Your Valid Name");
			}
			
			if(personAge.match(validAge)){
				this.getView().byId("personAge_Id").setValueState("None");
			}else{
				this.getView().byId("personAge_Id").setValueState("Error");
				this.getView().byId("personAge_Id").setValueStateText("Enter Your Valid Age");
			}
			
			if(personDesignation.match(validName)){
				this.getView().byId("personDesignation_Id").setValueState("None");
			}else{
				this.getView().byId("personDesignation_Id").setValueState("Error");
				this.getView().byId("personDesignation_Id").setValueStateText("Enter Your Valid Designation");
			}
			
			if(personEmailId.match(validEmail)){
				this.getView().byId("personEmailId_Id").setValueState("None");
			}else{
				this.getView().byId("personEmailId_Id").setValueState("Error");
				this.getView().byId("personEmailId_Id").setValueStateText("Enter Your Valid Email ID");
			}
			
			if(personMobileNumber.match(validNumber)){
				this.getView().byId("personMobileNumber_Id").setValueState("None");
			}else{
				this.getView().byId("personMobileNumber_Id").setValueState("Error");
				this.getView().byId("personMobileNumber_Id").setValueStateText("Enter Your Valid Mobile Number");
			}
			
			if(personAltMobileNumber.match(validNumber)){
				this.getView().byId("personAlternateMobileNumber_Id").setValueState("None");
			}else{
				this.getView().byId("personAlternateMobileNumber_Id").setValueState("Error");
				this.getView().byId("personAlternateMobileNumber_Id").setValueStateText("Enter Your Valid Alt Mobile Number");
			}
			
			if(personCity.match(validName)){
				this.getView().byId("personCity_Id").setValueState("None");
			}else{
				this.getView().byId("personCity_Id").setValueState("Error");
				this.getView().byId("personCity_Id").setValueStateText("Enter Your Valid City Name");
			}
			
			if(personCountry.match(validName)){
				this.getView().byId("personCountry_Id").setValueState("None");
			}else{
				this.getView().byId("personCountry_Id").setValueState("Error");
				this.getView().byId("personCountry_Id").setValueStateText("Enter Your Valid Country Name");
			}
			
			if((personName.match(validName)) && (personAge.match(validAge)) && (personDesignation.match(validName)) && (personEmailId.match(validEmail)) &&
			(personMobileNumber.match(validNumber)) && (personAltMobileNumber.match(validNumber)) && (personCity.match(validName)) && (personCountry.match(validName))){
				MessageToast.show("Data Submitted Succesfully");
				
				var personObjectFormData = {
					"personObjectName" : personName,
					"personObjectAge" : personAge,
					"personObjectDesignation" : personDesignation,
					"personObjectEmailId" : personEmailId,
					"personObjectMobileNumber" : personMobileNumber,
					"personObjectAltMobileNumber" : personAltMobileNumber,
					"personObjectCity" : personCity,
					"personObjectCountry" : personCountry
				};
				
				var oModel = this.getOwnerComponent().getModel("personDataModel");
				oModel.getData().personArrayFormData.push(personObjectFormData);
				oModel.refresh("true");
				
				var iconTabBar = this.getView().byId("myIconTabBar");
				iconTabBar.setSelectedKey("tab3");
				// var iconTabFilter = iconTabBar.getItems()[2];
				// iconTabBar.setSelectedItem(iconTabFilter);
				
				this.getView().byId("personName_Id").setValue("");
				this.getView().byId("personAge_Id").setValue("");
				this.getView().byId("personDesignation_Id").setValue("");
				this.getView().byId("personEmailId_Id").setValue("");
				this.getView().byId("personMobileNumber_Id").setValue("");
				this.getView().byId("personAlternateMobileNumber_Id").setValue("");
				this.getView().byId("personCity_Id").setValue("");
				this.getView().byId("personCountry_Id").setValue("");
				// var submitData = this.getView().getBindingContext("personDataModel").getObject();
				// oModel.setProperty("/personEntityData", submitData);
				
				}else{
				MessageBox.error("Please Fill All The Mandatory Details");
			}
		},
		
		onShowDetails:function(oEvent){
			debugger;
			var oModel = this.getOwnerComponent().getModel("personDataModel");
			if(!this.oPopOver){
				this.oPopOver = sap.ui.xmlfragment("com.dpz_iconTabBar.view.Fragment.popOver", this);
				this.getView().addDependent(this.oPopOver);
			}
			var oItem = oEvent.getSource();
			var oBindingContext = oItem.getBindingContext("personDataModel").getObject();
    		oModel.setProperty("/personEntityData", oBindingContext);
			this.oPopOver.openBy(oItem);
		},
		
		onRowSelectId:function(oEvent){
			debugger;
			var selectedItems = oEvent.getParameter("listItems");

            if (selectedItems.length === 1) {
                var selectedItem = selectedItems[0];
                var oContext = selectedItem.getBindingContext("personDataModel");
                var data = oContext.getObject();
                
                if (this.personIdSelected && this.personIdSelected.Id !== data.Id) {
                	this.setInputId(data);
                	this.personIdSelected = data;
                	this.formTable1.close();
					MessageBox.warning("The selected ID has changed. Please re-select dependent fields.");
					this.DependentFields();
				}
				
				this.setInputId(data);
                	this.personIdSelected = data;
                	
                	this.getView().byId("personId").setValueState("None");
					this.getView().byId("personName").setValueState("None");
					this.getView().byId("personAge").setValueState("None");
					this.getView().byId("personDesignation").setValueState("None");
					this.getView().byId("personEmailId").setValueState("None");
					this.getView().byId("personMobileNumber").setValueState("None");
					this.getView().byId("personCity").setValueState("None");
					this.getView().byId("personCountry").setValueState("None");
			
                	this.formTable1.close();
            }
		},
		
		DependentFields: function () {
			debugger;
	    var fieldsToReset = ["personName", "personAge", "personDesignation", "personEmailId", "personMobileNumber", "personCity", "personCountry"];
		    for (var i = 0; i < fieldsToReset.length; i++) {
		        var fieldId = fieldsToReset[i];
		        var oField = this.getView().byId(fieldId);
		        oField.setValueState("Error");
		    }
		},

		
		setInputId: function (data) {
			debugger;
            this.getView().byId("personId").setValue(data.Id);
        },
        
        onRowSelectName:function(oEvent){
			debugger;
			var selectedItems = oEvent.getParameter("listItems");

            if (selectedItems.length === 1) {
                var selectedItem = selectedItems[0];
                var oContext = selectedItem.getBindingContext("personDataModel");
                var data = oContext.getObject();
                
                if(this.personIdSelected && data.Id === this.personIdSelected.Id){
                	this.setInputName(data);
                	this.formTable2.close();
                	this.getView().byId("personName").setValueState("None");
                }else {
                    MessageBox.warning("The selected name does not match the selected Survey ID.");
                    this.formTable2.close();
                    this.getView().byId("personName").setValueState("Error");
                }
            }
		},
		
		setInputName: function (data) {
			debugger;
            this.getView().byId("personName").setValue(data.Name);
        },
        
        onRowSelectAge:function(oEvent){
			debugger;
			var selectedItems = oEvent.getParameter("listItems");

            if (selectedItems.length === 1) {
                var selectedItem = selectedItems[0];
                var oContext = selectedItem.getBindingContext("personDataModel");
                var data = oContext.getObject();
                
                if(this.personIdSelected && data.Id === this.personIdSelected.Id){
                	this.setInputAge(data);
                	this.formTable3.close();
                	this.getView().byId("personAge").setValueState("None");
                }else {
                    MessageBox.warning("The selected Age does not match the selected Survey ID.");
                    this.formTable3.close();
                    this.getView().byId("personAge").setValueState("Error");
                }
            }
		},
		
		setInputAge: function (data) {
			debugger;
            this.getView().byId("personAge").setValue(data.Age);
        },
        
        onRowSelectDesignation:function(oEvent){
			debugger;
			var selectedItems = oEvent.getParameter("listItems");

            if (selectedItems.length === 1) {
                var selectedItem = selectedItems[0];
                var oContext = selectedItem.getBindingContext("personDataModel");
                var data = oContext.getObject();
                
               if(this.personIdSelected && data.Id === this.personIdSelected.Id){
                	this.setInputDesignation(data);
                	this.formTable4.close();
                	this.getView().byId("personDesignation").setValueState("None");
                }else {
                    MessageBox.warning("The selected Designation does not match the selected Survey ID.");
                    this.formTable4.close();
                    this.getView().byId("personDesignation").setValueState("Error");
                }
            }
		},
		
		setInputDesignation: function (data) {
			debugger;
            this.getView().byId("personDesignation").setValue(data.Designation);
        },
        
        onRowSelectEmailId:function(oEvent){
			debugger;
			var selectedItems = oEvent.getParameter("listItems");

            if (selectedItems.length === 1) {
                var selectedItem = selectedItems[0];
                var oContext = selectedItem.getBindingContext("personDataModel");
                var data = oContext.getObject();
                
                if(this.personIdSelected && data.Id === this.personIdSelected.Id){
                	this.setInputEmailId(data);
                	this.formTable5.close();
                	this.getView().byId("personEmailId").setValueState("None");
                }else {
                    MessageBox.warning("The selected EmailId does not match the selected Survey ID.");
                    this.formTable5.close();
                    this.getView().byId("personEmailId").setValueState("Error");
                }
            }
		},
		
		setInputEmailId: function (data) {
			debugger;
            this.getView().byId("personEmailId").setValue(data.EmailId);
        },
        
        onRowSelectMobileNumber:function(oEvent){
			debugger;
			var selectedItems = oEvent.getParameter("listItems");

            if (selectedItems.length === 1) {
                var selectedItem = selectedItems[0];
                var oContext = selectedItem.getBindingContext("personDataModel");
                var data = oContext.getObject();
                
                if(this.personIdSelected && data.Id === this.personIdSelected.Id){
                	this.setInputMobileNumber(data);
                	this.formTable6.close();
                	this.getView().byId("personMobileNumber").setValueState("None");
                }else {
                    MessageBox.warning("The selected MobileNumber does not match the selected Survey ID.");
                    this.formTable6.close();
                    this.getView().byId("personMobileNumber").setValueState("Error");
                }
            }
		},
		
		setInputMobileNumber: function (data) {
			debugger;
            this.getView().byId("personMobileNumber").setValue(data.MobileNumber);
        },
        
        onRowSelectCity:function(oEvent){
			debugger;
			var selectedItems = oEvent.getParameter("listItems");

            if (selectedItems.length === 1) {
                var selectedItem = selectedItems[0];
                var oContext = selectedItem.getBindingContext("personDataModel");
                var data = oContext.getObject();
                
                 if(this.personIdSelected && data.Id === this.personIdSelected.Id){
                	this.setInputCity(data);
                	this.formTable7.close();
                	this.getView().byId("personCity").setValueState("None");
                }else {
                    MessageBox.warning("The selected City does not match the selected Survey ID.");
                    this.formTable7.close();
                    this.getView().byId("personCity").setValueState("Error");
                }
            }
		},
		
		setInputCity: function (data) {
			debugger;
            this.getView().byId("personCity").setValue(data.City);
        },
        
        onRowSelectCountry:function(oEvent){
			debugger;
			var selectedItems = oEvent.getParameter("listItems");

            if (selectedItems.length === 1) {
                var selectedItem = selectedItems[0];
                var oContext = selectedItem.getBindingContext("personDataModel");
                var data = oContext.getObject();
                
                 if(this.personIdSelected && data.Id === this.personIdSelected.Id){
                	this.setInputCountry(data);
                	this.formTable8.close();
                	this.getView().byId("personCountry").setValueState("None");
                }else {
                    MessageBox.warning("The selected Country does not match the selected Survey ID.");
                    this.formTable8.close();
                    this.getView().byId("personCountry").setValueState("Error");
                }
            }
		},
		
		setInputCountry: function (data) {
			debugger;
            this.getView().byId("personCountry").setValue(data.Country);
        },
        
        onSubmitSurveyForm:function(){
        	debugger;
        	var Id = this.getView().byId("personId").getValue();
        	var Name = this.getView().byId("personName").getValue();
			var Age = this.getView().byId("personAge").getValue();
			var Designation = this.getView().byId("personDesignation").getValue();
			var EmailId = this.getView().byId("personEmailId").getValue();
			var MobileNumber = this.getView().byId("personMobileNumber").getValue();
			var City = this.getView().byId("personCity").getValue();
			var Country = this.getView().byId("personCountry").getValue();
			
			if(Id === ""){
				this.getView().byId("personId").setValueState("Error");
			}else{
				this.getView().byId("personId").setValueState("None");
			}
			
			if(Name === ""){
				this.getView().byId("personName").setValueState("Error");
			}else{
				this.getView().byId("personName").setValueState("None");
			}
			
			if(Age === ""){
				this.getView().byId("personAge").setValueState("Error");
			}else{
				this.getView().byId("personAge").setValueState("None");
			}
			
			if(Designation === ""){
				this.getView().byId("personDesignation").setValueState("Error");
			}else{
				this.getView().byId("personDesignation").setValueState("None");
			}
			
			if(EmailId === ""){
				this.getView().byId("personEmailId").setValueState("Error");
			}else{
				this.getView().byId("personEmailId").setValueState("None");
			}
			
			if(MobileNumber === ""){
				this.getView().byId("personMobileNumber").setValueState("Error");
			}else{
				this.getView().byId("personMobileNumber").setValueState("None");
			}
			
			if(City === ""){
				this.getView().byId("personCity").setValueState("Error");
			}else{
				this.getView().byId("personCity").setValueState("None");
			}
			
			if(Country === ""){
				this.getView().byId("personCountry").setValueState("Error");
			}else{
				this.getView().byId("personCountry").setValueState("None");
			}
			
			if(!(Id === "") && !(Name === "") && !(Age === "") && !(Designation === "") && !(EmailId === "") && !(MobileNumber === "") && !(City === "") && !(Country === "")){
					var SurveyFormObjectData = {
					"surveyObjectId" : Id,
					"surveyObjectName" : Name,
					"surveyObjectAge" : Age,
					"surveyObjectDesignation" : Designation,
					"surveyObjectEmailId" : EmailId,
					"surveyObjectMobileNumber" : MobileNumber,
					"surveyObjectCity" : City,
					"surveyObjectCountry" :Country
				};
				
				var oModel = this.getOwnerComponent().getModel("personDataModel");
				oModel.getData().surveyArrayFormData.push(SurveyFormObjectData);
				oModel.refresh("true");
				
				var iconTabBar = this.getView().byId("myIconTabBar");
				var iconTabFilter = iconTabBar.getItems()[3];
				iconTabBar.setSelectedItem(iconTabFilter);
				
				this.getView().byId("personId").setValue("");
	        	this.getView().byId("personName").setValue("");
				this.getView().byId("personAge").setValue("");
				this.getView().byId("personDesignation").setValue("");
				this.getView().byId("personEmailId").setValue("");
				this.getView().byId("personMobileNumber").setValue("");
				this.getView().byId("personCity").setValue("");
				this.getView().byId("personCountry").setValue("");
			}
			else{
				MessageBox.error("please Fill All the Mandatory Fields");
			}
			
        },
        
        deleteBtn:function(){
			debugger;
			var surveyTable = this.getView().byId("historySurveyTableId");
			var personTable = this.getView().byId("historyTableId");
            var oModel = this.getOwnerComponent().getModel("personDataModel");
            var surveyData = oModel.getProperty("/surveyArrayFormData");
            var personData = oModel.getProperty("/personArrayFormData");
            var oSurveySelected = surveyTable.getSelectedItems();
            var oPersonSelected = personTable.getSelectedItems();

            if (oSurveySelected.length === 0) {
                MessageBox.warning("No items selected for deletion.");
            }else if(oPersonSelected.length === 0){
            	MessageBox.warning("No items selected for deletion.");
            }
            MessageBox.confirm("Are you sure you want to delete Selected Items?", {
                onClose: function (oAction) {
                    if (oAction === "OK") {
                        for (var i = oSurveySelected.length - 1; i >= 0; i--) {
                            var oSurveyContext = oSurveySelected[i].getBindingContext("personDataModel");
                            var index = oSurveyContext.getPath().split("/").pop();
                            if (index >= 0) {
                                surveyData.splice(index, 1);
                            }
                        }
                        
                         for ( i = oPersonSelected.length - 1; i >= 0; i--) {
                            var oPersonContext = oPersonSelected[i].getBindingContext("personDataModel");
                            var oindex = oPersonContext.getPath().split("/").pop();
                            if (oindex >= 0) {
                                personData.splice(index, 1);
                            }
                        }
                        
                        oModel.refresh(true);
                        MessageToast.show("Selected items deleted successfully.");
                    }
                    
                   
            }
			});
			},
        
        onPersonId:function(){
        	debugger;
        	var oId = this.getView().byId("personId").getValue();
        	var oTable = sap.ui.getCore().byId("personTableId");
        	
        	if (oId === "") {
				oTable.removeSelections();
 
			}
			
        	var oModel = this.getOwnerComponent().getModel("personDataModel");
        	var oData = oModel.getData().personData;
        	for(var i = 0; i <= oData.length; i++){
        		if(oId === oData[i].Id){
        			this.object = oData[i];
        			break;
        		}
        	}
        	
        	var oName = this.getView().byId("personName").getValue();
			var oAge = this.getView().byId("personAge").getValue();
			var oDesignation = this.getView().byId("personDesignation").getValue();
			var oEmailId = this.getView().byId("personEmailId").getValue();
			var oMobileNumber = this.getView().byId("personMobileNumber").getValue();
			var oCity = this.getView().byId("personCity").getValue();
			var oCountry = this.getView().byId("personCountry").getValue();
        	
        	if (oData[i].Name === oName && oName !== "") {
				this.getView().byId("personName").setValueState("None");
			} else {
				this.getView().byId("personName").setValueState("Error");
			}
			if (oData[i].Age === oAge && oAge !== "") {
				this.getView().byId("personAge").setValueState("None");
			} else {
				this.getView().byId("personAge").setValueState("Error");
			}
			if (oData[i].Destination === oDesignation && oDesignation !== "") {
				this.getView().byId("personDesignation").setValueState("None");
			} else {
				this.getView().byId("personDesignation").setValueState("Error");
			}
			if (oData[i].EmailId === oEmailId && oEmailId !== "") {
				this.getView().byId("personEmailId").setValueState("None");
			} else {
				this.getView().byId("personEmailId").setValueState("Error");
			}
			if (oData[i].MobileNumber === oMobileNumber && oMobileNumber !== "") {
				this.getView().byId("personMobileNumber").setValueState("None");
			} else {
				this.getView().byId("personMobileNumber").setValueState("Error");
			}
			if (oData[i].City === oCity && oCity !== "") {
				this.getView().byId("personCity").setValueState("None");
			} else {
				this.getView().byId("personCity").setValueState("Error");
			}
			if (oData[i].Country === oCountry && oCountry !== "") {
				this.getView().byId("personCountry").setValueState("None");
			} else {
				this.getView().byId("personCountry").setValueState("Error");
			}
			
			oModel.getData().selectedObject = this.object;
			var oSelected = oModel.getData().selectedObject;
			var surveyIdValue = oSelected.Id;
			if(oId === surveyIdValue || oId === this.object.Id){
				this.getView().byId("personId").setValueState("None");
			}else{
				this.getView().byId("personId").setValueState("Error");
				this.getView().byId("personId").setValueStateText("Please Enter Valid Id");
			}

        },
        
        onPersonName:function(){
        	debugger;
        	var oTable = sap.ui.getCore().byId("personTableName");
        	var oInputName = this.getView().byId("personName").getValue();
        	var oInputId = this.getView().byId("personId").getValue();
        	
        	var oModel = this.getOwnerComponent().getModel("personDataModel");
        	
        	var oData = oModel.getData().personData;
        	
        	if(oInputId === "") {
        		for(var i = 0; i <= oData.length; i++){
        			
        			if(oInputName.toLowerCase() === oData[i].Name.toLowerCase()){
        				this.getView().byId("personName").setValueState("None"); 
        				break;
        			}else{
        				this.getView().byId("personName").setValueState("Error");
        			}
        		}
        	}else{
        		var oSelected = oModel.getData().selectedObject;
        		var oName = oSelected.Name;
        		if(oInputName.toLowerCase() === oName.toLowerCase() || oInputName.toLowerCase() === this.object.Name.toLowerCase()){
        			this.getView().byId("personName").setValueState("None"); 
        		}else{
        			this.getView().byId("personName").setValueState("Error"); 
        			this.getView().byId("personName").setValueStateText("Please Enter Valid Name"); 
        		}
        	}
        },
        
        onPersonAge:function(){
        	var oInputAge = this.getView().byId("personAge").getValue();
        	var oInputId = this.getView().byId("personId").getValue();
        	
        	var oModel = this.getOwnerComponent().getModel("personDataModel");
        	var oData = oModel.getData().personData;
        	
        	if(oInputId === "") {
        		for(var i = 0; i <= oData.length; i++){
        			
        			if(oInputAge.toLowerCase() === oData[i].Age.toLowerCase()){
        				this.getView().byId("personAge").setValueState("None"); 
        				break;
        			}else{
        				this.getView().byId("personAge").setValueState("Error");
        			}
        		}
        	}else{
        		var oSelected = oModel.getData().selectedObject;
        		var oAge = oSelected.Age;
        		if(oInputAge.toLowerCase() === oAge.toLowerCase() || oInputAge.toLowerCase() === this.object.Age.toLowerCase()){
        			this.getView().byId("personAge").setValueState("None"); 
        		}else{
        			this.getView().byId("personAge").setValueState("Error"); 
        			this.getView().byId("personAge").setValueStateText("Please Enter Valid Age"); 
        		}
        	}
        },
        
        onPersonDesignation:function(){
        	var oInputDesignation = this.getView().byId("personDesignation").getValue();
        	var oInputId = this.getView().byId("personId").getValue();
        	
        	var oModel = this.getOwnerComponent().getModel("personDataModel");
        	var oData = oModel.getData().personData;
        	
        	if(oInputId === "") {
        		for(var i = 0; i <= oData.length; i++){
        			
        			if(oInputDesignation.toLowerCase() === oData[i].Designation.toLowerCase()){
        				this.getView().byId("personDesignation").setValueState("None"); 
        				break;
        			}else{
        				this.getView().byId("personDesignation").setValueState("Error");
        			}
        		}
        	}else{
        		var oSelected = oModel.getData().selectedObject;
        		var oDesignation = oSelected.Designation;
        		if(oInputDesignation.toLowerCase() === oDesignation.toLowerCase() || oInputDesignation.toLowerCase() === this.object.Designation.toLowerCase()){
        			this.getView().byId("personDesignation").setValueState("None"); 
        		}else{
        			this.getView().byId("personDesignation").setValueState("Error"); 
        			this.getView().byId("personDesignation").setValueStateText("Please Enter Valid Designation"); 
        		}
        	}
        },
        
        onPersonEmailId:function(){
        	var oInputEmailId = this.getView().byId("personEmailId").getValue();
        	var oInputId = this.getView().byId("personId").getValue();
        	
        	var oModel = this.getOwnerComponent().getModel("personDataModel");
        	var oData = oModel.getData().personData;
        	
        	if(oInputId === "") {
        		for(var i = 0; i <= oData.length; i++){
        			
        			if(oInputEmailId.toLowerCase() === oData[i].EmailId.toLowerCase()){
        				this.getView().byId("personEmailId").setValueState("None"); 
        				break;
        			}else{
        				this.getView().byId("personEmailId").setValueState("Error");
        			}
        		}
        	}else{
        		var oSelected = oModel.getData().selectedObject;
        		var oEmailId = oSelected.EmailId;
        		if(oInputEmailId.toLowerCase() === oEmailId.toLowerCase() || oInputEmailId.toLowerCase() === this.object.EmailId.toLowerCase()){
        			this.getView().byId("personEmailId").setValueState("None"); 
        		}else{
        			this.getView().byId("personEmailId").setValueState("Error"); 
        			this.getView().byId("personEmailId").setValueStateText("Please Enter Valid Email Id"); 
        		}
        	}
        },
        
        onPersonMobileNumber:function(){
        	var oInputMobileNumber = this.getView().byId("personMobileNumber").getValue();
        	var oInputId = this.getView().byId("personId").getValue();
        	
        	var oModel = this.getOwnerComponent().getModel("personDataModel");
        	var oData = oModel.getData().personData;
        	
        	if(oInputId === "") {
        		for(var i = 0; i <= oData.length; i++){
        			
        			if(oInputMobileNumber.toLowerCase() === oData[i].MobileNumber.toLowerCase()){
        				this.getView().byId("personMobileNumber").setValueState("None"); 
        				break;
        			}else{
        				this.getView().byId("personMobileNumber").setValueState("Error");
        			}
        		}
        	}else{
        		var oSelected = oModel.getData().selectedObject;
        		var oMobileNumber = oSelected.MobileNumber;
        		if(oInputMobileNumber.toLowerCase() === oMobileNumber.toLowerCase() || oInputMobileNumber.toLowerCase() === this.object.MobileNumber.toLowerCase()){
        			this.getView().byId("personMobileNumber").setValueState("None"); 
        		}else{
        			this.getView().byId("personMobileNumber").setValueState("Error"); 
        			this.getView().byId("personMobileNumber").setValueStateText("Please Enter Valid MobileNumber"); 
        		}
        	}
        },
        
        onPersonCity:function(){
        	var oInputCity = this.getView().byId("personCity").getValue();
        	var oInputId = this.getView().byId("personId").getValue();
        	
        	var oModel = this.getOwnerComponent().getModel("personDataModel");
        	var oData = oModel.getData().personData;
        	
        	if(oInputId === "") {
        		for(var i = 0; i <= oData.length; i++){
        			
        			if(oInputCity.toLowerCase() === oData[i].City.toLowerCase()){
        				this.getView().byId("personCity").setValueState("None"); 
        				break;
        			}else{
        				this.getView().byId("personCity").setValueState("Error");
        			}
        		}
        	}else{
        		var oSelected = oModel.getData().selectedObject;
        		var oCity = oSelected.City;
        		if(oInputCity.toLowerCase() === oCity.toLowerCase() || oInputCity.toLowerCase() === this.object.City.toLowerCase()){
        			this.getView().byId("personCity").setValueState("None"); 
        		}else{
        			this.getView().byId("personCity").setValueState("Error"); 
        			this.getView().byId("personCity").setValueStateText("Please Enter Valid City"); 
        		}
        	}
        },
        
        onPersonCountry:function(){
        	var oInputCountry = this.getView().byId("personCountry").getValue();
        	var oInputId = this.getView().byId("personId").getValue();
        	
        	var oModel = this.getOwnerComponent().getModel("personDataModel");
        	var oData = oModel.getData().personData;
        	
        	if(oInputId === "") {
        		for(var i = 0; i <= oData.length; i++){
        			
        			if(oInputCountry.toLowerCase() === oData[i].Country.toLowerCase()){
        				this.getView().byId("personCountry").setValueState("None"); 
        				break;
        			}else{
        				this.getView().byId("personCountry").setValueState("Error");
        			}
        		}
        	}else{
        		var oSelected = oModel.getData().selectedObject;
        		var oCountry = oSelected.Country;
        		if(oInputCountry.toLowerCase() === oCountry.toLowerCase() || oInputCountry.toLowerCase() === this.object.Country.toLowerCase()){
        			this.getView().byId("personCountry").setValueState("None"); 
        		}else{
        			this.getView().byId("personCountry").setValueState("Error"); 
        			this.getView().byId("personCountry").setValueStateText("Please Enter Valid Country"); 
        		}
        	}
        },
        
        onSelectTab3:function(oEvent){
        	debugger;
        	var personDetails = oEvent.getParameter("item");
        	var iconTabFilter3 = this.getView().byId("personTab3");
        	var iconTabFilter5 = this.getView().byId("personTab5");
        	var historySurveyTable = this.getView().byId("historySurveyTableId");
        	var historypersonTable = this.getView().byId("historyTableId");
        	var personDetailsTabId = this.getView().byId("personDetailsTabId");

        	var iconTabBar = this.getView().byId("myIconTabBar");
        	if(personDetails === iconTabFilter3){
	        	if(personDetailsTabId.getItems().length >= 1){
	        		
	        	}else{
	        		MessageBox.information("No Data Exists.", {
	        			onClose: function (oAction) {
		                    if (oAction === "OK") {
		                    	iconTabBar.setSelectedKey("tab2");
		                    }
						}
	        		});
	        	}
        	}
        	
        	if(personDetails === iconTabFilter5){
        		if(historySurveyTable.getItems().length >= 1 || historypersonTable.getItems().length >= 1){
        		}else{
        			MessageBox.information("No Data Exists.", {
	        			onClose: function (oAction) {
		                    if (oAction === "OK") {
		                    	iconTabBar.setSelectedKey("tab1");
		                    }
						}
	        		});
        		}
        	}
        }
		
	});
});