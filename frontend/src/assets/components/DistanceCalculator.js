import Geocode from "react-geocode";
import haversine from "haversine-distance";

// Set the API key for Geocode
const DistanceCalculator = () => {
  Geocode.setApiKey("AIzaSyCEKoQQxGs6mrvHRSPAhLfbMFmquVYY20c");
  let distance = 0;
  Geocode.fromPostalCode(90210).then((response1) => {
    const { lat: lat1, lng: lng1 } = response1.results[0].geometry.location;

    Geocode.fromPostalCode(90220).then((response2) => {
      const { lat: lat2, lng: lng2 } = response2.results[0].geometry.location;

      distance = haversine({ lat: lat1, lng: lng1 }, { lat: lat2, lng: lng2 });

      console.log(distance); // Distance in meters
    });
  });
  return distance;
};

export default DistanceCalculator;
