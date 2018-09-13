sap.ui.jsview("com.tallymarks.trkso.view.App", {

  getControllerName: function () {
    return "com.tallymarks.trkso.view.App";
  },

  createContent: function (oController) {

    // to avoid scroll bars on desktop the root view must be set to block display
    this.setDisplayBlock(true);

    // create app
    this.app = new sap.m.SplitApp();

    // load the master page
    var master = sap.ui.xmlview("Master", "com.tallymarks.trkso.view.Master");
    master.getController().nav = this.getController();
    this.app.addPage(master, true);

    // load the empty page
    var empty = sap.ui.xmlview("Empty", "com.tallymarks.trkso.view.Empty");
    this.app.addPage(empty, false);

    // wrap app with shell
    return new sap.m.Shell("Shell", {
      title : "{i18n>ShellTitle}",
      showLogout : false,
      app : this.app
    });
  }
});