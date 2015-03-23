sap.ui.jsview("view.app", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapsalesordersdemo.app
	*/ 
	getControllerName : function() {
		return "view.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapsalesordersdemo.app
	*/ 
	createContent : function(oController) {

		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		return new sap.m.SplitApp("splitApp", {
			defaultTransitionNameMaster:"fade",
			defaultTransitionNameDetail: "fade",
			backgroundColor:"lightgreen"
		});
	}

});