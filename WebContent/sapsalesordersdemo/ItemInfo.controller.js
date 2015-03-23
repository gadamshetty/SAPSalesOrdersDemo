sap.ui.controller("view.ItemInfo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapsalesordersdemo.ItemInfo
*/
	onInit: function() {
		//debugger;
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		this._router.attachRoutePatternMatched(this.getOrderInfo, this);
	},

	getOrderInfo: function(evt){
		var orderid = evt.getParameters().arguments.orderid;
		var position = evt.getParameters().arguments.position;
	
		//debugger;
		var thismodel = sap.ui.getCore().getModel('contextmodel');
		
		this.getView().setModel(thismodel,'productinfo');
		
		//var orderscontext = thismodel.getContext('/SalesOrders('+orderid+')/');
		
		var oContext4 = new sap.ui.model.Context(thismodel, "/SalesOrderItems(Position='"+position+"',SalesOrderID='"+orderid+"')");
		//var oContext = new sap.ui.model.Context(thismodel, "/SalesOrderItems(Position='0000000010',SalesOrderID='0500000093')/Product");
		//console.log(oContext);
		this.getView().setBindingContext(oContext4, 'productinfo');
		//debugger;
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapsalesordersdemo.ItemInfo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapsalesordersdemo.ItemInfo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapsalesordersdemo.ItemInfo
*/
//	onExit: function() {
//
//	}

});