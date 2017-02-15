sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Biometric_texting.controller.View1", {
			sample: function() {
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
			},
			dilop:function(){
			// 		if (!this._oDialog) {
			// 			this._oDialog  = new sap.m.Dialog({
			// 				resizable: true,
			// 				width:' 500px',
			// 				height : '500px',
							
			// 					// content:	
			// 					// 	  sap.m.URLHelper.redirect( "https://www.google.co.in/", false)
									  
									
								
			// 			});
					
					
			// 			// ]);
			// 	// this._oDialog = sap.ui.xmlfragment("Biometric_texting.view.dilo", this);
			// }
			// this.getView().addDependent(this._oDialog);
			
			
			// this._oDialog.open();
			sap.m.URLHelper.redirect( "https://www.google.co.in/", false);
				
			}

	});
});