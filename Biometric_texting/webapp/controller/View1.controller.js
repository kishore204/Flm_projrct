sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Biometric_texting.controller.View1", {
		onInit:function(){
	  //  this.arry = [];
	  //  this.model = new sap.ui.model.odata.ODataModel("proxy/http/192.168.1.3:8080/sap/opu/odata/SAP/ZADHARCARD_SRV" , true );
	  //sap.ui.getCore().setModel(this.model);
		}
		,
		liveChange:function(){
		
			
		}	,
			sample: function() {
					var input = this.getView().byId("input");
			if((input.getValue().length) == 12)
			{
				input.setValueState(sap.ui.core.ValueState.None);
					var img = this.getView().byId('__image111');
				
					var url = "https://localhost.emudhra.com:26766/MorphoMSO1300E2/captureData?env=preprod";
						var that = this;
							$.ajax({
								url: url,
								type: "Get",
								crossDomain: true,
								dataType: "jsonp",
								success: function(result) {
										img.setVisible(true) ;
										img.setSrc("data:image/bmp;base64," + result.bMPBase64);
									
								},
								err:function(){}
							});
				
			}
			else
			{
					input.setValueState(sap.ui.core.ValueState.Error);
			}
				
			},
			dilop:function(){
					if (!this._oDialog) {
						// this._oDialog  = new sap.m.Dialog({
						// 	resizable: true,
						// 	width:' 500px',
						// 	height : '500px'
							
						// 		// content:	
						// 		// 	  sap.m.URLHelper.redirect( "https://www.google.co.in/", false)
									  
									
								
						// });
					
					
						// ]);
				this._oDialog = sap.ui.xmlfragment("Biometric_texting.view.dilo", this);
			}
			this.getView().addDependent(this._oDialog);
			
			
			this._oDialog.open();
			// sap.m.URLHelper.redirect( "https://www.google.co.in/", false);
				
			},
			closeDialog:function(){
					this._oDialog.close();
				
			},
			Save:function(){
				
			},
		mobile:function(evt){
				 var textregex = /[0-9]/;
				 var pin = sap.ui.getCore().byId(evt.mParameters.id);
			
				   if (evt.mParameters.newValue.match(textregex) )
				   {
             pin.setValueState(sap.ui.core.ValueState.None);
				   }
                  else
               {
              pin.setValueState(sap.ui.core.ValueState.Error);
                }
	  
			},
			Name:function(evt){
			 
  // var name = this.getView().byId("name");
   var textregex = /^[a-zA-Z ]*$/;
   	 var name = sap.ui.getCore().byId(evt.mParameters.id);
   if (!(evt.mParameters.newValue.match(textregex)) ){
    name.setValueState(sap.ui.core.ValueState.Error);
   } else {
    name.setValueState(sap.ui.core.ValueState.None);
   }
 	
			},
			save:function(){
			var that = this;
				var obj ={};
				obj.Name = sap.ui.getCore().byId('Name').getValue();
					obj.Adhar = sap.ui.getCore().byId('Adhar').getValue();
				obj.Address = sap.ui.getCore().byId('Street').getValue();
					// obj.Address = sap.ui.getCore().byId('City').getValue();
						obj.Gender = sap.ui.getCore().byId('gen').getSelectedItem().mProperties.text;
						
						
						
							var url = "https://localhost.emudhra.com:26766/MorphoMSO1300E2/captureData?env=preprod";
						var that = this;
							$.ajax({
								url: url,
								type: "Get",
								crossDomain: true,
								dataType: "jsonp",
								success: function(result) {
										// img.setVisible(true) ;
										// img.setSrc("data:image/bmp;base64," + result.bMPBase64);
										obj.Content = result.bMPBase64;
										obj.Mime = "data:image/bmp;base64,";
										obj.Filename = 	obj.Name ;
									that.model.create('/ADHARCARDSet',obj ,
									function(){
											sap.m.MessageToast.show("Create sucress");
											obj = {};
										
									}),
									function(){
											sap.m.MessageToast.show("failed to register try again");
										
									};
										
									
								},
								err:function(){
								sap.m.MessageToast.show("put fingres properly");
									
								}
							});
						
			}

	});
});