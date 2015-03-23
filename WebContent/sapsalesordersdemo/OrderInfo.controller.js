sap.ui.controller("view.OrderInfo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapsalesordersdemo.OrderInfo
*/
	onInit: function() {
		//debugger;
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		this._router.attachRoutePatternMatched(this.getOrderInfo, this);
	},

	getOrderInfo: function(evt){
		var orderid = evt.getParameters().arguments.orderid
	
		//debugger;
		var thismodel = sap.ui.getCore().getModel('contextmodel');
		
		this.getView().setModel(thismodel,'orderinfo');
		
		//var orderscontext = thismodel.getContext('/SalesOrders('+orderid+')/');
		
		var oContext = new sap.ui.model.Context(thismodel, "/SalesOrders('"+orderid+"')");
		//console.log(this);
		this.getView().setBindingContext(oContext, 'orderinfo');
	},
	itemInfo: function(evt){
		//console.log(this);
		//console.log(evt);
		//debugger;
		var lineitem = evt.getSource().getBindingContext('orderinfo').getObject();
		var position = lineitem.Position;
		var orderid = lineitem.SalesOrderID;
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		this._router.navTo("lineiteminfo",{orderid : orderid, position: position });
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapsalesordersdemo.OrderInfo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapsalesordersdemo.OrderInfo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapsalesordersdemo.OrderInfo
*/
//	onExit: function() {
//
//	}

});