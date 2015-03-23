sap.ui.jsview("view.SalesOrders", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapsalesordersdemo.SalesOrders
	*/ 
	getControllerName : function() {
		return "view.SalesOrders";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapsalesordersdemo.SalesOrders
	*/ 
	createContent : function(oController) {
		var oList = new sap.m.List('customerlist', {
		    headerText : "Sales Orders",
		    noDataText: "No Orders Found",
		    growing: true,
		    itemPress: function(evt){ oController.orderselect(evt,this); }
		});
		
		var oTemp = new sap.m.ObjectListItem({
		    title: "{salesorders>CustomerName}",
		    number: "{salesorders>NetSum}",
		    numberUnit : "{salesorders>Currency}",
		    firstStatus: new sap.m.ObjectStatus({ text: "{salesorders>Status}"}),
		    attributes :[new sap.m.ObjectAttribute({text: "{salesorders>TotalSum}"}), new sap.m.ObjectAttribute({text: "{salesorders>BusinessPartnerID}"})],
		    type: sap.m.ListType.Active
		});

		oList.bindItems("salesorders>/SalesOrders/", oTemp);
				
		
			return new sap.m.Page({
			title: "Sales Order Demo NW Gateway",
			showNavButton: true,
			content: [
			oList
			]
		});
	}

});