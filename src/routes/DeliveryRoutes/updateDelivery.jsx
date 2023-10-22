import { useState, useEffect } from "react";
import Sidepanel from "../../components/sidepanel";
import axios from "axios";
import bg from "../../images/mainbg1.jpg";
import { BaseUrl } from "../../utils/base_url";
import { useNavigate, useParams } from "react-router-dom";

function UpdateDelivery() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = async (data, i) => {
    try {
      const res = await axios.get(`${BaseUrl}/order/${id}`);
      console.log(res);
      if (Array.isArray(res.data.data)) {
        setData(res.data.data[0]);
        console.log(data);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    var postData = {
      id: data.id,
      branch_pickup: data.branch_pickup,
      vehicle: data.vehicle,
      destination: data.destination,
      order_id: data.orderid,
      status: data.status,
      estimated_date: data.estimateddate,
      customer_id: data.customerid,
      telephone_number: data.telephone_number,
      departure_date: data.departure_date,
    };

    console.log(postData);

    try {
      const isValidPhoneNumber = /^\d{10}$/.test(postData.telephone_number);

      if (!isValidPhoneNumber) {
        alert(
          "Invalid phone number. Please enter a valid 10-digit telephone number."
        );
        return;
      }
      const response = await axios.put(`${BaseUrl}/order/${id}`, postData);

      if (response.status === 200) {
        console.log("Delivery updated successfully");
        navigate("/Orders");
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
                Update Delivery
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <label
                  htmlFor="customerId"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Customer ID
                </label>
                <input
                  value={data?.customer_id}
                  onChange={(e) => {
                    const newCusId = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      customer_id: newCusId,
                    }));
                  }}
                  type="text"
                  id="customerId"
                  name="customerId"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                />

                <label
                  htmlFor="customerId"
                  className="mb-2 font-semibold text-gray-600"
                >
                  package ID
                </label>
                <input
                  value={data?.package_id}
                  type="text"
                  id="customerId"
                  name="customerId"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                  readOnly
                />

                <label
                  htmlFor="orderId"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Order ID
                </label>
                <input
                  value={data?.order_id}
                  onChange={(e) => {
                    const newOrId = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      order_id: newOrId,
                    }));
                  }}
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
                  value={data?.branch_pickup}
                  onChange={(e) => {
                    const newbranchpickup = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      branch_pickup: newbranchpickup,
                    }));
                  }}
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
                  value={data?.destination}
                  onChange={(e) => {
                    const newdestination = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      destination: newdestination,
                    }));
                  }}
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
                  value={data?.estimated_date}
                  onChange={(e) => {
                    const newestimated_date = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      estimated_date: newestimated_date,
                    }));
                  }}
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
                  value={data?.departure_date}
                  onChange={(e) => {
                    const newdeparture_date = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      departure_date: newdeparture_date,
                    }));
                  }}
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
                  value={data?.telephone_number}
                  onChange={(e) => {
                    const newTelephoneNumber = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      telephone_number: newTelephoneNumber,
                    }));
                  }}
                  type="text"
                  id="tp"
                  name="tp"
                  pattern="^\d{10}$"
                  title="Please enter a valid 10-digit telephone number"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                  required
                />

                <label
                  htmlFor="vehicle"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Vehicle
                </label>
                <select
                  value={data?.vehicle}
                  onChange={(e) => {
                    const newvehicle = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      vehicle: newvehicle,
                    }));
                  }}
                  id="vehicle"
                  name="vehicle"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                >
                  <option value="Please Select">Please Select</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="truck">Truck</option>
                </select>

                <label
                  htmlFor="status"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Status
                </label>
                <select
                  value={data?.status}
                  onChange={(e) => {
                    const newstatus = e.target.value;
                    setData((prevData) => ({
                      ...prevData,
                      status: newstatus,
                    }));
                  }}
                  id="status"
                  name="status"
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                >
                  <option value="Processing">Processing</option>
                  <option value="Delivered">Delivered</option>
                </select>

                <button
                  onClick={handleSubmit}
                  className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg w-52 ml-auto mt-8"
                >
                  Update Delivery
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateDelivery;
