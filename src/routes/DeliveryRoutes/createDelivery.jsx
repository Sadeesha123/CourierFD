import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Sidepanel from "../../components/sidepanel";
import { post } from "../../Api";
import bg from "../../images/mainbg1.jpg";
import { BaseUrl } from "../../utils/base_url";

function CreateDelivery() {
  const navigate = useNavigate();
  const [customerIds, setCustomerIds] = useState([]);
  const [packageIds, setPackageIds] = useState([]);

  useEffect(() => {
    fetch(`${BaseUrl}/order/customers`)
      .then((response) => response.json())
      .then((data) => setCustomerIds(data.data))
      .catch((error) => console.error(error));

    fetch(`${BaseUrl}/order/pakages`)
      .then((response) => response.json())
      .then((data) => setPackageIds(data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var postData = {
      customerId: data.get("customerId"),
      packageId: data.get("packageId"),
      orderId: data.get("orderId"),
      branch_pickup: data.get("pickup"),
      vehicle: data.get("vehicle"),
      date: data.get("date"),
      destination: data.get("destination"),
      status: "Processing",
      estimated_date: data.get("date"),
      telephone_number: data.get("tp"),
      departure_date: data.get("departureDate"),
    };

    try {
      const isValidPhoneNumber = /^\d{10}$/.test(postData.telephone_number);

      if (!isValidPhoneNumber) {
        alert(
          "Invalid phone number. Please enter a valid 10-digit telephone number."
        );
        return;
      }
      const response = await fetch(`${BaseUrl}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("Order created successfully");
        alert("Order created successfully");
        navigate("/Orders");
      } else {
        alert(
          "Error creating order, Check customer id and order id if already exists"
        );
        console.error("Error creating order");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-body h-screen w-full bg-slate-100">
      <img
        src={bg}
        alt=""
        srcset=""
        className="object-cover w-[100%] h-[100%] fixed"
      />
      <div className="main-body-container w-full flex flex-row absolute">
        <Sidepanel />
        <div className="w-5/6 side-panel p-5 md:ml-[300px] ml-16">
          <div className="common-body p-5 flex flex-col h-full items-center ">
            <div className="form-body md:w-[80%] w-full flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg ">
              <h1 className="flex items-center justify-center pt-4 text-xl uppercase font-bold pb-4">
                Create Delivery
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <label htmlFor="customerId">Customer ID</label>
                <select id="customerId" name="customerId">
                  {Array.isArray(customerIds) ? (
                    customerIds.map((customer) => (
                      <option key={customer.id} value={customer.id}>
                        {customer.id}
                      </option>
                    ))
                  ) : (
                    <option value="">Loading...</option>
                  )}
                </select>

                <label htmlFor="packageId">Package ID</label>
                <select id="packageId" name="packageId">
                  {Array.isArray(packageIds) ? (
                    packageIds.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.id}
                      </option>
                    ))
                  ) : (
                    <option value="">Loading...</option>
                  )}
                </select>

                <label
                  htmlFor="orderId"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Order ID
                </label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                />

                <label
                  htmlFor="pickup"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Pickup
                </label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                />

                <label
                  htmlFor="destination"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                />

                <label
                  htmlFor="date"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Estimated Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                />

                <label
                  htmlFor="departureDate"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Departure Date
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                />

                <label
                  htmlFor="tp"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Telephone number
                </label>
                <input
                  type="text"
                  id="tp"
                  name="tp"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                  pattern="[0-9]+"
                  title="Please enter a valid 10-digit telephone number"
                />

                <label
                  htmlFor="vehicle"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Vehicle
                </label>
                <select
                  id="vehicle"
                  name="vehicle"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                >
                  <option value="Please Select">Please Select</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="truck">Truck</option>
                </select>

                <button
                  type="submit"
                  className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg w-52 ml-auto mt-8"
                >
                  Create Delivery
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDelivery;
