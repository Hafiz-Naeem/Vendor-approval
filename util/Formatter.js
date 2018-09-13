jQuery.sap.declare("com.tallymarks.trkso.util.Formatter");

com.tallymarks.trkso.util.Formatter = {

    currency: function (abcdef) {
        if (abcdef === "Yesterday") {
            return "sfsff"

        } else if (abcdef === "EUR") {
            return "Warning"

        } 
    },
    formatDate : function(umer){

    }
}