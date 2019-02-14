const request = require('request');

let URL = "https://services.gisqatar.org.qa/server/rest/services/Vector/QARS1/MapServer/0/query?f=json&where=ZONE_NO%20%3D51%20and%20STREET_NO%3D961%20and%20BUILDING_NO%3D58&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=ZONE_NO%2CSTREET_NO%2CBUILDING_NO%2CQARS%2CELECTRICITY_NO%2CWATER_NO%2CQTEL_ID";

exports.fetchMap = function (req, res, query) {
    request({
      uri: URL,
      method: 'GET',
      timeout: 120000
    }, function (error, response, body) {
      console.log(response.statusCode)
      if (!error && response.statusCode == 200) {
        //console.log(body)
        return res.status(200).json(body);
      } else {
        console.error("Error on this page: ", URL)
        return res.status(400).json("{error:true}");
      }
    })
  }
