sap.ui.controller("view.SalesOrders", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapsalesordersdemo.SalesOrders
*/

	onInit: function() {
		//debugger;
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		
		var thismodel = sap.ui.getCore().getModel('contextmodel');
		
		this.getView().setModel(thismodel,'salesorders');
	},
	orderselect: function(evt){
		var thisOrder = evt.getParameters().listItem.getBindingContext('salesorders').getObject();
		this._router.navTo("orderInfo",{orderid : thisOrder.SalesOrderID });
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapsalesordersdemo.SalesOrders
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapsalesordersdemo.SalesOrders
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapsalesordersdemo.SalesOrders
*/
//	onExit: function() {
//
//	}

});