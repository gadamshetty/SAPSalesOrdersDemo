jQuery.sap.declare("sap.ui.sales.order.Component");

sap.ui.core.UIComponent.extend("sap.ui.sales.order.Component", {

	metadata: {
		routing: {
			config: {
				viewType: "JS",
				viewPath: "view",
				targetControl: "splitApp",
				clearTarget: false,
				transition: "slide"
			},
			routes: [
				{
					pattern: "employee/{empid}",
					name: "orders",
					view: "Orders",
					targetAggregation: "masterPages",
					subroutes: [
						{
							pattern: "employee/{empid}/orders/{orderid}",
							name: "orderdetail",
							view: "OrderDetail",
							targetAggregation: "detailPages"
						}
					]
				},
				{
					pattern: "cart",
					name: "cart",
					view: "Cart",
					targetAggregation: "masterPages"
				},
				{	pattern: "",
					name : "home",
					view : "SalesOrders",
					viewLevel : 1,
					targetAggregation : "masterPages",
					subroutes : [
						{
							pattern: "",
							name: "home",
							view: "Empty",
							targetAggregation: "detailPages"
						},
						{
							pattern: "order/{orderid}",
							name: "orderInfo",
							view: "OrderInfo",
							viewLevel: 3,
							targetAggregation: "detailPages",
							subroutes : [
									{
										pattern: "order/{orderid}/iteminfo/{position}",
										name: "lineiteminfo",
										view: "ItemInfo",
										targetAggregation: "detailPages"
									}
				             ]
						},
						{
							pattern : "{all*}",
							name : "notFound",
							view : "notFound",
							viewLevel : 3,
							targetAggregation : "detailPages"
						}
					]
				}
			]
		}
	},

	init : function () {

		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		jQuery.sap.require("sap.ui.sales.order.myRouter");

		// call overwritten init (calls createContent)
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		////extend the router
		this._router = this.getRouter();
		//jQuery.extend(this._router, sap.ui.ui5.ui5.myRouter);

		////navigate to initial page for !phone
		//if (!sap.ui.Device.system.phone) {
		//	this._router._myNavToWithoutHash("view.Welcome", "XML", false);
		//}

		// initialize the router
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();

	},

	destroy : function () {

		if (this._routeHandler) {
			this._routeHandler.destroy();
		}

		// call overriden destroy
		sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
	},

	createContent : function () {

		//// set i18n model
		//var oI18nModel = new sap.ui.model.resource.ResourceModel({
		//	bundleUrl : "i18n/appTexts.properties"
		//});
		//sap.ui.getCore().setModel(oI18nModel, "i18n");

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "view.app",
			type : "JS",
			viewData : { component : this }
		});

		//oView.setModel(oI18nModel, "i18n");


		//jQuery.sap.require("model.Config");
		// set data model
		//var sUrl = model.Config.getServiceUrl();

		//// start mock server
		//if (model.Config.isMock) {
		//	jQuery.sap.require("sap.ui.core.util.MockServer");
		//	var oMockServer = new sap.ui.core.util.MockServer({
		//		rootUri: sUrl
		//	});
		//	oMockServer.simulate("model/metadata.xml", "model/");
		//	oMockServer.start();

		//	jQuery.sap.require("sap.m.MessageToast");
		//	var sMsg = "Running in demo mode with mock data.";
		//	sap.m.MessageToast.show(sMsg, {
		//		duration: 2000
		//	});
		//}
		

		
	
		var omodel = new sap.ui.model.odata.ODataModel("proxy/https/sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/",false,"P1940247453", "Initial123");
		//console.log(sUrl);
		//if we do not set this property to false, this would lead to a synchronized request which blocks the ui
		//oModel.setCountSupported(false);
		sap.ui.getCore().setModel(omodel,'contextmodel');
		
		//oView.setModel(oModel,'contextmodel');

		////create and set cart model
		//var oCartModel = new sap.ui.model.json.JSONModel({
		//	entries : [],
		//	totalPrice: "0",
		//	showEditAndProceedButton: false
		//});
		//oView.setModel(oCartModel, "cartProducts");


		//// set device model
		//var oDeviceModel = new sap.ui.model.json.JSONModel({
		//	isTouch : sap.ui.Device.support.touch,
		//	isNoTouch : !sap.ui.Device.support.touch,
		//	isPhone : sap.ui.Device.system.phone,
		//	isNoPhone : !sap.ui.Device.system.phone,
		//	listMode : (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
		//	listItemType : (sap.ui.Device.system.phone) ? "Active" : "Inactive"
		//});
		//oDeviceModel.setDefaultBindingMode("OneWay");
		//oView.setModel(oDeviceModel, "device");


		// done
		return oView;
	}

});