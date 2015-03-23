sap.ui.jsview("view.OrderInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapsalesordersdemo.OrderInfo
	*/ 
	getControllerName : function() {
		return "view.OrderInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapsalesordersdemo.OrderInfo
	*/ 
	createContent : function(oController) {
		
		var oList = new sap.m.List("orderlist1", {
			headerText: "{orderinfo>SalesOrderID}",
			noDataText: "No Orders Found"
		});
		
		var oTemp = new sap.m.StandardListItem({
			title: "Product",
		    description: "{orderinfo>ProductName}",
		    type: sap.m.ListType.Active,
			press: function(evt){ oController.itemInfo(evt);}
		});
		
		oList.bindItems("orderinfo>SalesOrderItems", oTemp);
		
 		return new sap.m.Page({
			title: "Order Info",
			content: [
			   oList
			]
		});
	}

});