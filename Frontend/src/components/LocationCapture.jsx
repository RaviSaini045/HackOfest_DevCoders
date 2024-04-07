import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserLocation } from "../slices/authSlice";

const LocationCapture = () => {
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        dispatch(
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return null; // Replace this with your desired JSX for the component
};

export default LocationCapture;
