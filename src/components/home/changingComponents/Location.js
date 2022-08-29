import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
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
    <div className="mx-auto">
      <div className="flex grid-cols-1 gap-4">
        <div className="row ">
          <Box
            p={4}
            // borderRadius="lg"
            m={4}
            // bgColor="black"
            textColor="white"
            // shadow="base"
            minW="container.md"
            width="50vw"
            zIndex="1"
            display="flex flex-wrap"
          >
            <HStack spacing={2} 
            justifyContent="space-between"
            >
              <Box
              // flexGrow={1}
              >
                <Autocomplete>
                  <Input
                    className="py-2 px-2 rounded mx-2 map-form"
                    type="text"
                    color="black"
                    placeholder="Input Origin eg. Nairobi"
                    ref={originRef}
                  />
                </Autocomplete>
              </Box>
              <Box
              // flexGrow={1}
              >
                <Autocomplete>
                  <Input
                    className="py-2 px-2 rounded mx-2 map-form"
                    type="text"
                    color="black"
                    placeholder="Input Destination eg. Kitale"
                    ref={destiantionRef}
                  />
                </Autocomplete>
              </Box>

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
            </HStack>
            <HStack spacing={8} mt={2} justifyContent="space-evenly">
              {/* <div>
              
              </div> */}
              <Text>Distance: {distance} </Text>
              {/* console.log({distance}) */}
              <Text>Duration: {duration} </Text>

              {/* <div>
              
              </div> */}
              <IconButton
                aria-label="center back"
                icon={<FaLocationArrow />}
                isRound
                onClick={() => {
                  map.panTo(center);
                  map.setZoom(15);
                }}
              />
            </HStack>
          </Box>
          <Flex
            position="relative"
            flexDirection="column"
            alignItems="center"
            h="35vh"
            w="80vw"
          >
            <Box
              position="flex"
              left={0}
              top={0}
              h="130%"
              w="130%"
              className="mx-auto "
            >
              {/* Google Map Box */}
              <GoogleMap
              // className="z-0"
                center={center}
                zoom={6}
                mapContainerStyle={{ width: "60%", height: "100%" }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onLoad={(map) => setMap(map)}
              >
                <Marker position={center} />
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
            </Box>
          </Flex>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="mt-4"
      >
        <button
          className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          onClick={handleClickPrev}
        >
          Previous
        </button>

        <button
          className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          type="submit"
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Location;
