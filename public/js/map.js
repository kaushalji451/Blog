mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/standard-satellite",
  center: blog.geometry.coordinates,
  zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(blog.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${blog.location}</h4><p>Its Your Exact Location</P>`
    )
  )
  .addTo(map);
