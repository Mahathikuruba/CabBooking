import { useState, useRef } from "react";
import {
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
};

const center = {
  lat: 13.6288,
  lng: 79.4192,
};

function GoogleMapComponent({ bookingData, setBookingData, fare, setFare }) {
  const pickupRef = useRef(null);
  const destinationRef = useRef(null);

  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const calculateRoute = async () => {
    if (!pickupRef.current || !destinationRef.current) return;

    const pickupPlace = pickupRef.current.getPlace();
    const destinationPlace = destinationRef.current.getPlace();

    if (
      !pickupPlace?.formatted_address ||
      !destinationPlace?.formatted_address
    ) {
      return;
    }

    const origin = pickupPlace.formatted_address;
    const destination = destinationPlace.formatted_address;

    const directionsService = new window.google.maps.DirectionsService();

    try {
      const results = await directionsService.route({
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      });

      setDirections(results);

      const leg = results.routes[0].legs[0];

      setBookingData({
        ...bookingData,
        pickup: origin,
        destination,
        distance: leg.distance.text,
        duration: leg.duration.text,
      });

      setDistance(leg.distance.text);
      setDuration(leg.duration.text);

      const km = parseFloat(leg.distance.text.replace(" km", ""));

      const calculatedFare = Math.round(50 + km * 12);

      setFare(calculatedFare);
    } catch (err) {
      console.error(err);
      alert("Unable to calculate route.");
    }

    setBookingData({
      ...bookingData,
      pickup: origin,
      destination,
      distance: leg.distance.text,
      duration: leg.duration.text,
    });

    setDistance(leg.distance.text);
    setDuration(leg.duration.text);

    const km = parseFloat(leg.distance.text);

    const calculatedFare = Math.round(50 + km * 12);

    setFare(calculatedFare);
  };

  if (!isLoaded) {
    return <h3>Loading Map...</h3>;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px",
        }}
      >
        <Autocomplete
          onLoad={(autocomplete) => (pickupRef.current = autocomplete)}
          onPlaceChanged={calculateRoute}
        >
          <input
            type="text"
            placeholder="Pickup Location"
            style={{
              width: "50%",
              padding: "12px",
            }}
          />
        </Autocomplete>

        <Autocomplete
          onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
          onPlaceChanged={calculateRoute}
        >
          <input
            type="text"
            placeholder="Destination"
            style={{
              width: "50%",
              padding: "12px",
            }}
          />
        </Autocomplete>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        <Marker position={center} />

        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>

      <div
        style={{
          marginTop: "15px",
          fontWeight: "bold",
        }}
      >
        <p>Distance : {distance}</p>

        <p>Duration : {duration}</p>

        <p>Estimated Fare : ₹{fare}</p>
      </div>
    </>
  );
}

export default GoogleMapComponent;
