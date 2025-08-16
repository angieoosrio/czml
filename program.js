Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NTIyNDlhYy03OGZhLTRkNTctYjhhOC01NGFlYTRmZGFhNTQiLCJpZCI6MzMxMzcwLCJpYXQiOjE3NTUwNDI1OTF9.01glnnDUpehAFVaOO5v6Vfk5XnvjyEPt6wgYd7jP_9c"; // pon tu token de Cesium Ion

async function init() {
  // Crear el visor con controles de animación y línea de tiempo
  const viewer = new Cesium.Viewer("cesiumContainer", {
    terrain: Cesium.Terrain.fromWorldTerrain(),
    animation: true,   // ⬅ habilita los botones play/pause
    timeline: true     // ⬅ habilita la barra de tiempo
  });

  try {
    // Cargar tu archivo CZML con las formas
    const ds = await Cesium.CzmlDataSource.load("escena.czml");
    viewer.dataSources.add(ds);

    // Ajustar la vista para enfocar las entidades cargadas
    await viewer.zoomTo(ds);

    // Opcional: iniciar el reloj automáticamente en "play"
    viewer.clock.shouldAnimate = true;
  } catch (e) {
    console.error("Error cargando CZML:", e);
  }
}

init();
