
jQuery.sap.declare("com.tallymarks.trkso.Component");

sap.ui.core.UIComponent.extend("com.tallymarks.trkso.Component", {

    metadata: {

    },
    createContent: function () {

        var headerModel = new sap.ui.model.json.JSONModel();
        headerModel.loadData("model/poworkflow.json");

        // create root view
        var oView = sap.ui.view({
            id: "app",
            viewName: "com.tallymarks.trkso.view.App",
            type: "JS",
            viewData: { component: this }
        });

        oView.setModel(headerModel);
        return oView;
    }
});


// sap.ui.core.UIComponent.prototype.createContent = {


// }