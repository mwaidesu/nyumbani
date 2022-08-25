import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
// import validator from "validator";

const center = { lat: 1.9577, lng: 37.2972 };

function Location({ nextStep, prevStep }) {
  const handleClickNext = () => {
    nextStep();
  };

  const handleClickPrev = () => {
    prevStep();
  };

  // const [error, setError] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    // console.log(results)
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <div className="w-5/5 mx-auto">
      <form onSubmit={calculateRoute}>
        <div className="flex w-4/5 columns-2 ...">
          <div className="flex grid row mx-auto">
            <label
              for="origin"
              class="block mb-2 text-sm font-auto text-white dark:text-gray-400"
            >
              input your origin
              <Autocomplete>
                <Input
                  className="py-2 px-8 rounded mx-auto map-form"
                  type="text"
                  color="black"
                  placeholder="Input Origin eg. Nairobi"
                  ref={originRef}
                />
              </Autocomplete>
            </label>
          </div>
          <div className="flex grid row mx-auto ">
            <label
              for="destination"
              class="block mb-2 text-auto font-auto text-white dark:text-gray-400"
            >
              input your destination
              <Autocomplete>
                <Input
                  className="py-2 px-8 rounded mx-auto map-form"
                  type="text"
                  color="black"
                  placeholder="Input Destination eg. Kitale"
                  ref={destiantionRef}
                />
              </Autocomplete>
            </label>
          </div>
          <ButtonGroup>
            <Button
              className="py-2 px-2 rounded mx-2"
              bg="#f3d34e"
              colorScheme="#faf3c7"
              textColor="black"
              type="submit"
              onClick={calculateRoute}
              // borderRadius={0}
            >
              See Route
            </Button>
            {/* <IconButton
                  aria-label="center back"
                  icon={<FaTimes />}
                  onClick={clearRoute}
                /> */}
          </ButtonGroup>         
        </div>
        <div class="flex grid-row-1 gap-4">
          
        </div>
      </form>
    </div>
  );
}

export default Location;
