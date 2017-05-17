$(document).ready(function () {
  $.getJSON('js/grid_Data.js').done(function(data){
    //console.log(data);


    var stringData = (data.fs_DATABROWSE_F4101.data.gridData.rowset);

    /*for (var property in stringData) {
    if (stringData.hasOwnProperty("F4101_ITM")) {
    }
}*/
    for (var i = 0; i < stringData.length; i++) {
      var record = stringData[i];
      var whatsWanted = [];

      /*console.log(record.F4101_UOM1);
      console.log(record.F4101_ITM);
      console.log(record.F4101_AITM);
      console.log(record.F4101_BPFG);
      console.log(record.F4101_STKT);
      console.log(record.F4101_ALN);*/

      if (record.F4101_UOM1) {
        whatsWanted.push({F4101_UOM1: record.F4101_UOM1 })
      }

      if (record.F4101_ITM) {
        whatsWanted.push({F4101_ITM: record.F4101_ITM})
      }

      if (record.F4101_AITM) {
        whatsWanted.push({F4101_AITM: record.F4101_AITM})
      }

      if (record.F4101_BPFG) {
        whatsWanted.push({F4101_BPFG: record.F4101_BPFG})
      }

      if (record.F4101_ITM) {
        whatsWanted.push({F4101_STKT: record.F4101_STKT})
      }

      if (record.F4101_ITM) {
        whatsWanted.push({F4101_ALN: record.F4101_ALN})
      }
    }
    console.log(whatsWanted);
    document.querySelector('.results').innerHTML = whatsWanted;
  })
}) // wait for document to be ready


/*
    var req = {}; // empty object to hold our http request
    req.deviceName = 'SD2105'; // <<---- here change to a unique name
    req.username = "demo";
    req.password = "demo";

    // authenticate with the system by getting a token
    $.ajax({
        url: "http://demo.steltix.com/jderest/tokenrequest", // <<- JD Edwards API token service
        type: 'post', // <<- the method that we using
        data: JSON.stringify(req), // <<- JSON of our request obj
        contentType: 'application/json', // <<- telling server how we are going to communicate
        fail: function (xhr, textStatus, errorThrown) {

            console.log(errorThrown, textStatus, xhr) //  <<- log any http errors to the console

        }
    }).done(function (data, textStatus, xhr) {

        if (data.hasOwnProperty('userInfo')) {  // <<- see example response below

            var token = data.userInfo.token;

            // build a request obj to fetch data
            var reqData = {
                    "deviceName" : "SD2105",
                    "targetName" : "F4101",
                    "targetType" : "table",
                    "outputType":"GRID_DATA",
                    "dataServiceType" : "BROWSE",
                    "maxPageSize" : "100",
                    "query" : {
                        "autoFind" : true,
                        "condition" : []
                        }
                    }


            reqData.token = token;  // <<- add our token from 1st request

            $.ajax({
                url: "http://demo.steltix.com/jderest/dataservice", // <<- can also try http://demo.steltix.com/jderest/formservice with example request object below"
                type: "post",
                contentType: "application/json",
                data: JSON.stringify(reqData.targetName)
            }).done(function (data) {

                console.log(JSON.stringify(data)) // <<- log data to console
                const resultsElem = document.querySelector('.results');  // <<- handle for results
                resultsElem.textContent = JSON.stringify(data);  // <<-  add data to DOM

            })

        }

    })

})



// Token request response example
// {
//   "username": "DEMO",
//   "environment": "JDV920",
//   "role": "*ALL",
//   "jasserver": "http://e1srv:7020",
//   "userInfo": {
//     "token": "044v2SEf1SZK9xhb/Say3dkrNzm43TUDkvtVBvPe8X08XQ=MDE4MDA5OTM5NTM0ODA4MTg2MTY3MzY1YWlzVGVzdGVyMTQ5NDk2NTI1OTg0Nw==",
//     "langPref": "  ",
//     "locale": "en",
//     "dateFormat": "MDE",
//     "dateSeperator": "/",
//     "simpleDateFormat": "MM/dd/yyyy",
//     "decimalFormat": ".",
//     "addressNumber": 0,
//     "alphaName": "DEMO",
//     "appsRelease": "E920",
//     "country": " ",
//     "username": "DEMO"
//   },
//   "userAuthorized": false,
//   "version": null,
//   "poStringJSON": null,
//   "altPoStringJSON": null,
//   "aisSessionCookie": "negS345IlfkoLIS3aLD2mO4uM35_uX0LzNVTbtemxEy-AhVMLdO1!1643583743!1494965259848",
//   "adminAuthorized": false,
//   "deprecated": true
// }



//  extra credit to play around with Form Services
// form service
//   var reqData = {
//                 "version": "ZJDE0001",
//                 "formActions": [],
//                 "deviceName": "SD2105",
//                 "formName": "P4101_W4101A"
//   }
*/
