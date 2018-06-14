window.onload = () => {
  console.log("Systems operational");

  let dataMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
  });

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1Ijoia29yYmVuaWsiLCJhIjoiY2poeG5idDJqMGFkdTNwcXNzMDNpeHQ4OCJ9.-IvDdr4zgTcZeqS7HDkK8A"
  ).addTo(dataMap);

}
