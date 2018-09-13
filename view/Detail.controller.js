

sap.ui.controller("com.tallymarks.trkso.view.Detail", {

  handleNavButtonPress : function (evt) {
    this.nav.back("Empty");
  },

  
  handleApprove : function (evt) {

    // show confirmation dialog
    var bundle = this.getView().getModel("i18n").getResourceBundle();
    sap.m.MessageBox.confirm(
      bundle.getText("ApproveDialogMsg"),
      function (oAction) {
        if (sap.m.MessageBox.Action.OK === oAction) {
          // notify user
          var successMsg = bundle.getText("ApproveDialogSuccessMsg");
          sap.m.MessageToast.show(successMsg);
          // TODO call proper service method and update model (not part of this session)
        }
      },

      bundle.getText("ApproveDialogTitle")
    );
  },

  handleIconTabBarSelect: function(oEvent) {
    var oView = this.getView();
    var sKey = oEvent.getParameter("key");
    var oFilter;
    var  oTable;
    var oBinding;
    if (sKey === "A") {

         oTable = oView.byId('deliveredTable');
         oBinding = oTable.getBinding("items");
         oFilter = new sap.ui.model.Filter("item_status", "EQ", sKey);
         oBinding.filter([oFilter]);
      }else if (sKey === "B") {

         oTable = oView.byId('shippedTable');
         oBinding = oTable.getBinding("items");
         oFilter = new sap.ui.model.Filter("item_status", "EQ", sKey);
         oBinding.filter([oFilter]);

      }else if (sKey === "C") {

         oTable = oView.byId('invoicedTable');
         oBinding = oTable.getBinding("items");
         oFilter = new sap.ui.model.Filter("item_status", "EQ", sKey);
         oBinding.filter([oFilter]);

      }else if (sKey === "D") {

         oTable = oView.byId('paidTable');
         oBinding = oTable.getBinding("items");
         oFilter = new sap.ui.model.Filter("item_status", "EQ", sKey);
         oBinding.filter([oFilter]);

      }else if (sKey === "All"){

       oTable = oView.byId('itemTable');
       oBinding = oTable.getBinding("items");
       oBinding.filter([]);

      }
  },

  handleLineItemPress : function (evt) {
       debugger ;
    // var context = evt.getSource().getBindingContext();
    // this.nav.to("LineItem", context);

    var context = evt.getSource().oBindingContexts.Detail.sPath.split('/');
   //var oData = evt.getSource().oBindingContexts.undefined.oModel.oData[context[1]];
    var oData = evt.getSource().oBindingContexts.Detail.oModel.oData.mdet[context[2]]; 
   var detail = this.getView().getModel().oData;
   var oModel = new sap.ui.model.json.JSONModel();
   var app = sap.ui.getCore().byId('app');

               var oData1 = {

               "detail"      : detail
               };
               console.log(oData);
               oModel.setData(oData);

                if (app.getModel('LineItem')) {
                   app.getModel('LineItem').setData(oData);
               } else {
                   app.setModel(oModel, 'LineItem');
               }
            
		


    this.nav.to("LineItem");


  }
});