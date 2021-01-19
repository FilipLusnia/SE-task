import React from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import '../../Styles/Dashboard/Map.css';

function Map() {
  const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  
  const style = {
      default: {fill: "#d6d6da", outline: 'none'},
      hover: {fill: "#fffe5a", outline: 'none'}
  }

  return (
    <div className="map_tile_container">
      <div className="map_tile_title_container">
        <h1 className="map_tile_title">SALES REVENUE BY COUNTRY</h1>
      </div>
      <div className="map_container">
        <p className="map_hint">Pinch&Drag to move. Click to select the country.</p>
        <ComposableMap className="map" projectionConfig={{ scale: 230 }}>
            <ZoomableGroup zoom={2}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) => geographies.map(geo => (
                      <Geography key={geo.rsmKey} geography={geo} style={style}/>
                  ))}
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}
  
export default Map;