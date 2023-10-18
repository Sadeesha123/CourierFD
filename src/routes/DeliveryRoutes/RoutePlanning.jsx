import { useState } from "react";

import Sidepanel from "../../components/sidepanel";

import bg2 from "../../images/bg2.jpg";
import axios from "axios";

function RoutePlanning() {
  const [status, setStatus] = useState("");
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [mapUrl, setMapUrl] = useState(
    "https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
  );

  const [isLoading, setIsLoading] = useState(false);

  const cityOptions = [
    { name: "Nugegoda", coordinates: "(6.8649,79.8997)" },
    { name: "Maharagama", coordinates: "(6.8511,79.9212)" },
    { name: "Dehiwala", coordinates: "(6.8518,79.8662)" },
    { name: "Mount Lavinia", coordinates: "(6.8277,79.8630)" },
    { name: "Rajagiriya", coordinates: "(6.9271,79.9182)" },
    { name: "Battaramulla", coordinates: "(6.9102,79.9585)" },
    { name: "Pannipitiya", coordinates: "(6.8532,79.9882)" },
    { name: "Malabe", coordinates: "(6.9176,79.9701)" },
    { name: "Kottawa", coordinates: "(6.8337,80.0036)" },
    { name: "Homagama", coordinates: "(6.8416,80.0037)" },
  ];

  const handlePickupChange = (e) => {
    setPickup(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDelivery(e.target.value);
  };

  const handleSubmit = async (event) => {
    setStatus("");
    event.preventDefault();

    try {
      if (pickup === delivery) setIsLoading(true);
      setMapUrl("");
      const API_URL = "http://MapAPI.pythonanywhere.com/maps";

      // Make FormData
      var formData = new FormData();
      // formData.append("pickup", "(6.9271, 79.8612)")
      // formData.append("delivery", "(7.0840, 80.0098)")

      // (6.8649,79.8997) Nugegoda

      // (6.8511,79.9212) Maharagama

      formData.append("pickup", pickup);
      formData.append("delivery", delivery);

      if (pickup === delivery) {
        alert("Pick Up and Delivery locations cannot be the same.");
        setIsLoading(false);
        return;
      }

      await axios
        .post(API_URL, formData)
        .then((resp) => {
          setStatus("success");
          setMapUrl(API_URL + "/map-inference.html");

          console.log(resp.data.status);
          console.log(status);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setStatus("failed");
        });
    } catch (error) {
      console.error(error);
      setStatus("failed");
    }
  };

  function alertComponent() {
    if (status == "success") {
      return (
        <>
          <div
            class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span class="block sm:inline">Success !</span>
          </div>
        </>
      );
    } else if (status == "failed") {
      return (
        <>
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span class="block sm:inline">Failed !</span>
          </div>
        </>
      );
    }
  }

  return (
    <div className="main-body h-screen w-full bg-slate-100">
      <img
        src={bg2}
        alt=""
        srcset=""
        className="object-cover w-[100%] h-[100%]"
      />
      <div className="main-body-container h-screen w-full flex flex-row absolute top-0 bg-black bg-opacity-50">
        <Sidepanel />
        <div className="w-5/6 side-panel  p-5 sm:ml-[300px] ml-16">
          <div className="common-body p-5 flex flex-col h-full items-center justify-center">
            <div className="form-body w-[90%] flex md:flex-row flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
              <div className="map sm:w-[60%] w-full text-center p-2 h-full">
                <h1 className="flex items-center justify-center pt-4 text-xl uppercase font-bold pb-4">
                  Google Map
                </h1>
                {/* <span>G-MAP will appear here</span> */}

                <div className="p-2 h-[200px] sm:h-[400px] bg-slate-400 mr-8">
                  <iframe
                    width="100%"
                    height="100%"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    title="map"
                    scrolling="no"
                    src={mapUrl}
                  ></iframe>
                </div>
              </div>

              <div className="order-details flex flex-col space-y-[20px] ">
                {alertComponent()}

                <form onSubmit={handleSubmit} className="flex flex-col w-full ">
                  <label
                    htmlFor="pickUp"
                    className="mb-2 font-semibold text-gray-600"
                  >
                    Pick Up
                  </label>
                  <select
                    id="pickUp"
                    name="pickUp"
                    className="mb-4 p-2 rounded-lg border border-gray-300"
                    onChange={handlePickupChange}
                    value={pickup}
                    required
                  >
                    <option value="">Select Pick Up Location</option>
                    {cityOptions.map((city, index) => (
                      <option key={index} value={city.coordinates}>
                        {city.name}
                      </option>
                    ))}
                  </select>

                  <label
                    htmlFor="delivery"
                    className="mb-2 font-semibold text-gray-600"
                  >
                    Delivery
                  </label>
                  <select
                    id="delivery"
                    name="delivery"
                    className="mb-4 p-2 rounded-lg border border-gray-300"
                    onChange={handleDeliveryChange}
                    value={delivery}
                    required
                  >
                    <option value="">Select Delivery Location</option>
                    {cityOptions.map((city, index) => (
                      <option key={index} value={city.coordinates}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  {isLoading ? (
                    <div className="loader">Loading...</div>
                  ) : (
                    <button
                      type="submit"
                      className="py-2 px-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg w-52 ml-auto mt-8 ml-4"
                      onClick={handleSubmit}
                    >
                      Route
                    </button>
                  )}

                  {/* <span>Order Id : #TJH097</span>
                                <span>Pick Up</span>
                                <span>Two more Steps</span>
                                <span>Delivery</span> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutePlanning;
