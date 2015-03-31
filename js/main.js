$(function () {

    var spreadSheet = 'docs.google.com/spreadsheets/d/1PAS_OmAgq9SmkYTr-eNcBsPrGpDuF9DWOguKlIl3yh8/';


    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split("=");
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }
    $('#table').sheetrock({
        url: spreadSheet,
        sql: "select A,B,C,D,E,L where E = 'Both' order by L desc",
        chunkSize: 10
    });




})