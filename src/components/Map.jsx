import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [79.3832, -43.6532, 0], // Center around Toronto's coordinates for better view
        scale: 1500, // Adjust scale to your liking for zoom level
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json" // Assuming this path points to your provided JSON
        fill="#001f3f"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-79.3832, 43.6532]} // Toronto's coordinates for annotation
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"I'm in Toronto"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
