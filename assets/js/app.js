window.onload = () => {
  console.log("Systems operational");

  let dataMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
  });

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1Ijoia29yYmVuaWsiLCJhIjoiY2poeG5idDJqMGFkdTNwcXNzMDNpeHQ4OCJ9.-IvDdr4zgTcZeqS7HDkK8A"
  ).addTo(dataMap);

  let queryurl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  d3.json(queryurl, response => {
    locations = response.features;
    // console.log(locations);
    let markers = L.markerClusterGroup();
    console.log(locations[0]);
    locations.forEach( eqPoint => {
      coordsMetaInfo = eqPoint.properties
      coordsCurrentEqpoint = eqPoint.geometry.coordinates;
      // console.log(coordsCurrentEqpoint);
      cleanedCoords = [coordsCurrentEqpoint[1], coordsCurrentEqpoint[0]];
      // console.log(cleanedCoords);

      if (cleanedCoords) {
        let descriptor =
        markers.addLayer(L.marker(cleanedCoords).bindPopup(`<h1>Hit Point</h1> <hr> <p>${coordsMetaInfo.place}</p>`));
      };
    });
    dataMap.addLayer(markers)

  });
};
