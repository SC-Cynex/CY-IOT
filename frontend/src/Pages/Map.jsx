import React, { useEffect, useState } from "react";
import Defaultframe from "../Components/Defaultframe";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { getDashboardData } from "../Helpers/dashboardData";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const UpdateMapCenter = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location.lat !== 0 && location.lng !== 0) {
      map.setView([location.lat, location.lng], map.getZoom());
    }
  }, [location, map]);

  return null;
};

const Map = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboardData = await getDashboardData();
  
        const firstValidEntry = dashboardData.find(
          (entry) => entry.latitude && entry.longitude
        );
  
        if (firstValidEntry) {
          const { latitude: lat, longitude: lng } = firstValidEntry;
          setLocation({ lat, lng });
        } else {
          console.warn(
            "Nenhum registro válido encontrado com latitude e longitude."
          );
        }
      } catch (error) {
        console.error("Erro ao buscar os dados de localização:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);  

  return (
    <Defaultframe>
      <div style={{ backgroundColor: "#d9d9d9" }}>
        <h2 style={{ marginLeft: "20px" }}>Mapa</h2>
      </div>
      {isLoading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>Carregando mapa...</div>
      ) : (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={15}
          style={{ height: "calc(100vh - 126.82px)", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.lat, location.lng]}>
            <Popup>
              Última localização registrada: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
            </Popup>
          </Marker>
          <UpdateMapCenter location={location} />
        </MapContainer>
      )}
    </Defaultframe>
  );
};

export default Map;
