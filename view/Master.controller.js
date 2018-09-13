
jQuery.sap.require("com.tallymarks.trkso.util.Formatter");
sap.ui.controller("com.tallymarks.trkso.view.Master", {
  onExit : function () {
    if (this._lineItemViewDialog) {
      this._lineItemViewDialog.destroy();
      this._lineItemViewDialog = null;
    }
  },
  handleListItemPress : function (evt) {
    debugger;
  //  var context = evt.getSource().getBindingContext();
  //  this.nav.to("Detail", context);



   var context = evt.getSource().oBindingContexts.undefined.sPath.split('/');
   //var oData = evt.getSource().oBindingContexts.undefined.oModel.oData[context[1]];
    var oData = evt.getSource().oBindingContexts.undefined.oModel.oData.Header[context[2]]; 
   var detail = this.getView().getModel().oData;
   var oModel = new sap.ui.model.json.JSONModel();
   var app = sap.ui.getCore().byId('app');

               var oData1 = {

               "detail"      : detail
               };
               console.log(oData);
               oModel.setData(oData);

                if (app.getModel('Detail')) {
                   app.getModel('Detail').setData(oData);
               } else {
                   app.setModel(oModel, 'Detail');
               }
            
		


    this.nav.to("Detail");
 },

  
  handleSearch : function (evt) {
  var oModel = new sap.ui.model.json.JSONModel();
  var vbeln = evt.getParameter("query");
  var oView = sap.ui.getCore().byId('app');
// creating service model
    com.tallymarks.trkso.util.dataManagerLib.getSearchData(vbeln,
      function (response){
        if(response.results.length   > 0)
        {
          if (response.results[0].json.length > 2) {
             _data = {
              'SalesOrderCollection' : JSON.parse(response.results[0].json)
            };
            console.log(_data['SalesOrderCollection'].length);
            oModel.setData(_data);
            oView.setModel(oModel);
          }
          else
          {
           oModel.setData(null);
           oView.setModel(oModel);
          }
        }
      }, function (error) {
        console.log(response);
      });
    // create model filter
 //   var filters = [];
  //  var query = evt.getParameter("query");
   // if (query && query.length > 0) {
    //  var filter = new sap.ui.model.Filter("vbeln", sap.ui.model.FilterOperator.Contains, query);
    //  filters.push(filter);
   // }
    // update list binding
 //   var list = this.getView().byId("list");
  //  var binding = list.getBinding("items");
   // binding.filter(filters);
  },
  handleListSelect : function (evt) {
    var context = evt.getParameter("listItem").getBindingContext();
    this.nav.to("Detail", context);
  },
  handleFilterChangeStatus: function(oEvent)
  {
    var filters = [];
    var oView = this.getView();
    // add filter for filter
    var select = oView.byId("filterStatus");
    var selectedText = select.getSelectedKey();
    debugger;
      var list = oView.byId("list");
    var binding = list.getBinding("items");
    if (selectedText == '1')
    {
     binding.filter([]);
    }else{
      filters.push(new sap.ui.model.Filter("ebeln", sap.ui.model.FilterOperator.EQ, selectedText));
      binding.filter(filters);
      }

    // update list binding
  }
  // handleViewSettings : function (evt) {
  //  // create dialog
  //  var that = this;
  //  if (!this._lineItemViewDialog) {
  //    this._lineItemViewDialog = new sap.m.ViewSettingsDialog({
  //      groupItems : [
  //        new sap.m.ViewSettingsItem({
  //          text : "Price",
  //          key : "netwr"
  //        }),
  //        new sap.m.ViewSettingsItem({
  //          text : "Status",
  //          key : "lfstk"
  //        })
  //      ],
  //      confirm : function (evt) {
  //        var aSorters = [];
  //        var mParams = evt.getParameters();
  //        if (mParams.groupItem) {
  //          var sPath = mParams.groupItem.getKey();
  //          var bDescending = mParams.groupDescending;
  //          var vGroup = com.tallymarks.trkso.util.Grouper[sPath];
  //          aSorters.push(new sap.ui.model.Sorter(sPath, bDescending, vGroup));
  //        }
  //        var oBinding = that.getView().byId("list").getBinding("items");
  //        oBinding.sort(aSorters);
  //      }
  //    });
  //  }
  //  // open dialog
  //  this._lineItemViewDialog.open();
  // }
});