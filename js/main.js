$(document).ready(function () {

    var spreadSheet = 'https://docs.google.com/spreadsheets/d/1PAS_OmAgq9SmkYTr-eNcBsPrGpDuF9DWOguKlIl3yh8#gid=0';

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

    $('#menuTable').sheetrock({
        url: spreadSheet,
        sql: 'select %ID%, %NAME%',
        chunkSize: 5,
        userCallback: function () {
            var menuTable = $('#menuTable').tableToJSON();
            console.log(JSON.stringify(menuTable));
            for (var i = 0; menuTable.length - 1; i++) {
                var item = menuTable[i];
                console.log(item);
                $('ul[role="navigation"]').append("<li><a href='?id=" + item.ID + "'>" + item.NAME + "</a></li>")
            }
        }
    });

    if (getUrlParameter('id') != null) {
     $('#contentTable').sheetrock({
         url: spreadSheet,
         sql: 'select %TEXT% where %ID% = ' + getUrlParameter('id'),
         chunkSize: 1,
         userCallback: function () {
             var contentTable = $('#contentTable').tableToJSON();
             var item = contentTable[0];
         }

     })

 }

});