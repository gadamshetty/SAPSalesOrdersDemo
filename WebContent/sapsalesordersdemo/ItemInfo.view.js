sap.ui.jsview("view.ItemInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapsalesordersdemo.ItemInfo
	*/ 
	getControllerName : function() {
		return "view.ItemInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapsalesordersdemo.ItemInfo
	*/ 
	createContent : function(oController) {
		
		var form1 = new sap.ui.layout.form.Form({
			title: "Product Information",
			editable: false,
			layout: new sap.ui.layout.form.ResponsiveGridLayout({
				labelSpanL :4
			}), 
			formContainers:[
            	new sap.ui.layout.form.FormContainer({
            		formElements:
            		[
            		 	new sap.ui.layout.form.FormElement({
            		 		label: "Product",
            		 		fields: new sap.m.Text({text:"{productinfo>ProductID}"})  //{productinfo>ProductID}
            		 	}),
            		 	new sap.ui.layout.form.FormElement({
            		 		label: "Quantity",
            		 		fields: new sap.m.Text({text:"{productinfo>QuantityUnit}"})  //{productinfo>QuantityUnit}
            		 	}),
            		 	new sap.ui.layout.form.FormElement({
            		 		label: "Net Sum",
            		 		fields: new sap.m.Text({text:"{productinfo>NetSum}"})  //{productinfo>QuantityUnit}
            		 	}),
            		 	new sap.ui.layout.form.FormElement({
            		 		label: "Total Sum",
            		 		fields: new sap.m.Text({text:"{productinfo>TotalSum}"})  //{productinfo>QuantityUnit}
            		 	})              		 	
            		 ]
            	})
            ]
		})

 		return new sap.m.Page({
			title: "Order Line Item Product Information",
			content: [
			          form1
			]
		});
	}

});