sap.ui.jsview("view.Empty", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5mobiledemo.Empty
	*/ 
	getControllerName : function() {
		return "view.Empty";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5mobiledemo.Empty
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Details",
			content: [
			new sap.m.Image("img1",{
				src:"images/naresh1.JPG",
					width:"500px"
			})
			]
		});
	}

});