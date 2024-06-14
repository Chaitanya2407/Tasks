sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("com.dpz_FormTable_4Views.controller.EmpEditView2", {
		
			onInit:function(){
			var selectExperience = new JSONModel ({
				ExperienceItems : [
					{key: "exp0", text: "Select Experience"},
					{key: "exp1", text: "1"},
					{key: "exp2", text: "2"},
					{key: "exp3", text: "3"},
					{key: "exp4", text: "4"},
					{key: "exp5", text: "5"},
					{key: "exp6", text: "6"},
					{key: "exp7", text: "7"},
					{key: "exp8", text: "8"},
					{key: "exp9", text: "9"},
					{key: "exp10", text: "10"}
					]
			});
			this.getView().setModel(selectExperience);
			
				// this.getView().byId("employeeName").setValue("");
				this.getView().byId("employeeId").setEditable(false);
				// this.getView().byId("employeeEmailId").setValue("");
				// this.getView().byId("employeeMobilenumber").setValue("");
				// this.getView().byId("employeeDateOfBirth").setValue("");
				// this.getView().byId("employeeDateOfjoin").setValue("");
				// this.getView().byId("employeeExperience").setValue("Select Experience");
		},
		
		saveBtn:function(){
			debugger;
			var employeeName = this.getView().byId("employeeName").getValue();
			var validEmployeeName = /^[a-zA-Z\s]+$/;
			if(employeeName.match(validEmployeeName)){
				this.getView().byId("employeeName").setValueState("None");
			}else{
				this.getView().byId("employeeName").setValueState("Error");
				this.getView().byId("employeeName").setValueStateText("Please Enter Valid Employee Name");
			}
			
			
			var employeeId = this.getView().byId("employeeId").getValue().trim();
			var validEmployeeId = /^[0-9]{8}$/; 
			
			// if((employeeId != "") && (employeeId.match(validEmployeeId))){
			// 	var oModel = this.getOwnerComponent().getModel("DataModel");
			// 	this.employeeIdData = oModel.getData().EmployeeData;
			// 	if (this.employeeIdData.length === 0) {
			// 		this.getView().byId("employeeId").setValueState("None");
			// 		duplicateId = false;
			// 	}
			// 	for(var i=0; i<this.employeeIdData.length;i++)
			// 	{
			// 	if(employeeId === this.employeeIdData[i].employeeId)
			// 	{
			// 		this.getView().byId("employeeId").setValueState("Error");
			// 		this.getView().byId("employeeId").setValueStateText("Duplicate Ids Are Not Allowed");
			// 		var duplicateId=true;
			// 		break;
			// 	}
			// 	else
			// 	{
			// 		duplicateId=false;
				
			// 	}
			// }
			// }else {
			// 	this.getView().byId("employeeId").setValueState("Error");
			// 	this.getView().byId("employeeId").setValueStateText("Enter 8 Number With Unique Employee Id");
			// }
		
		
		
			var employeeEmailId = this.getView().byId("employeeEmailId").getValue();
			var validEmployeeEmailId = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
			if(employeeEmailId.match(validEmployeeEmailId) || employeeEmailId === ""){
				this.getView().byId("employeeEmailId").setValueState("None");
			}else{
				this.getView().byId("employeeEmailId").setValueState("Error");
				this.getView().byId("employeeEmailId").setValueStateText("Please Enter Valid Employee Email Id");
			}
			
			
			
			var employeeMobilenumber = this.getView().byId("employeeMobileNumber").getValue();
			var validEmployeeNumber = /^[6-9]{1}[0-9]{9}$/;
			if(employeeMobilenumber.match(validEmployeeNumber) || employeeMobilenumber === ""){
				this.getView().byId("employeeMobileNumber").setValueState("None");
			}else{
				this.getView().byId("employeeMobileNumber").setValueState("Error");
				this.getView().byId("employeeMobileNumber").setValueStateText("Please Enter Valid Employee Mobile Number");
			}
			
			
			
			var employeeDateOfBirth = this.getView().byId("employeeDob").getValue();
			var employeeDobDate = new Date(employeeDateOfBirth.split('.').reverse().join('-'));
            var currentYear = new Date().getFullYear();
            var birthYear = employeeDobDate.getFullYear();
            var age = currentYear - birthYear;
			if((age >= 24)){
				this.getView().byId("employeeDob").setValueState("None");
			}else{
				this.getView().byId("employeeDob").setValueState("Error");
				this.getView().byId("employeeDob").setValueStateText("Please Select DOB Greater Than or Equal to 24");
			}
			
			
			
			var employeeDateOfjoin = this.getView().byId("employeeDoj").getValue();
			var employeeDojDate = new Date(employeeDateOfjoin.split('.').reverse().join('-'));
			if((employeeDojDate >= new Date())){
				this.getView().byId("employeeDoj").setValueState("None");
			}else{
				this.getView().byId("employeeDoj").setValueState("Error");
				this.getView().byId("employeeDoj").setValueStateText("Please Select DOJ From Present Day ");
			}
			
			
			
			var employeeExperience = this.getView().byId("employeeExperience").getSelectedItem().getText();
			var experienceYears = age - employeeExperience;
			if(experienceYears >= 24 && !(employeeExperience === "Select Experience")){
				this.getView().byId("employeeExperience").setValueState("None");
			}else{
				this.getView().byId("employeeExperience").setValueState("Error");
				this.getView().byId("employeeDoj").setValueStateText("Please Select Your Work Experience");
			}
			
			if((employeeName.match(validEmployeeName)) && 
			(employeeEmailId.match(validEmployeeEmailId) || employeeEmailId === "") &&
			(employeeMobilenumber.match(validEmployeeNumber) || employeeMobilenumber === "") && ((age >= 24)) &&
			((employeeDojDate >= new Date())) && (experienceYears >= 24 && !(employeeExperience === "Select Experience"))){
				
				var employeeDataObject = {
					"employeeName" : employeeName,
					"employeeId" : employeeId,
					"employeeEmailId" : employeeEmailId,
					"employeeMobileNumber" : employeeMobilenumber,
					"employeeDob" : employeeDateOfBirth,
					"employeeDoj" : employeeDateOfjoin,
					"employeeExperience" : employeeExperience
				};
				
				var oModel = this.getOwnerComponent().getModel("DataModel");
				var updatedDetails = oModel.getData().EmployeeData;
				for (var i = 0; i < updatedDetails.length; i++) {
					var employeeID = updatedDetails[i].ID;
					if (this.employeeID === employeeID) {

					var previousPayload = oModel.getData().EmployeeData[i];
					Object.assign(previousPayload, employeeDataObject);
					oModel.refresh(true);
				}
				}
				
				this.getOwnerComponent().getRouter().navTo("EmpView1");
			}else{
				MessageBox.error("Please Fill All The Mandatory Details");
			}
		}
	});
});