import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Sidepanel from "../../components/sidepanel";
import bg from "../../images/mainbg1.jpg";
import axios from "axios";
import { BaseUrl } from "../../utils/base_url";

function CreateOrder() {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_type: "Normal",
    mobile_number: "",
    item_type: "Food",
    num_pics: "",
    order_date: "",
    pre: "",
    receiver_name: "",
    address: "",
    province: "Central",
    receiver_email: "",
    receiver_mobile: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate Sender Details
    if (!formData.sender_name) {
      newErrors.sender_name = "Sender name is required";
      isValid = false;
    }

    if (!formData.num_pics) {
      newErrors.num_pics = "Sender name is required";
      isValid = false;
    }

    if (!formData.mobile_number) {
      newErrors.mobile_number = "Mobile number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobile_number)) {
      newErrors.mobile_number = "Invalid mobile number";
      isValid = false;
    }

    if (!formData.order_date) {
      newErrors.order_date = "Order date is required";
      isValid = false;
    }

    if (!formData.pre) {
      newErrors.pre = "Predetermines Days is required";
      isValid = false;
    }

    // Validate Receiver Details
    if (!formData.receiver_name) {
      newErrors.receiver_name = "Receiver name is required";
      isValid = false;
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (!formData.receiver_email) {
      newErrors.receiver_email = "Receiver email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.receiver_email)
    ) {
      newErrors.receiver_email = "Invalid email";
      isValid = false;
    }

    if (!formData.receiver_mobile) {
      newErrors.receiver_mobile = "Receiver mobile number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.receiver_mobile)) {
      newErrors.receiver_mobile = "Invalid mobile number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      try {
        await axios.post(`${BaseUrl}/delivery`, formData);

        window.location.href = "/performancetracker";
      } catch (error) {
        console.error("Error creating order:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="main-body h-screen w-full bg-slate-100">
      <img
        src={bg}
        alt=""
        srcSet=""
        className="object-cover w-[100%] h-[100%] fixed"
      />
      <div className="main-body-container w-full flex flex-row absolute">
        <Sidepanel />
        <div className="w-5/6 side-panel p-5 md:ml-[300px] ml-16">
          <div className="flex flex-col items-center justify-center gap-5 p-5 common-body">
            <div className="form-body w-[60%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <h1 className="flex items-center justify-center p-5 font-semibold uppercase text-md">
                  Sender Details
                </h1>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="sendername"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Sender Name :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="sendername"
                    name="sender_name"
                    className={`mb-2 border border-gray-300 rounded-lg w-[60%] ${
                      errors.sender_name ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.sender_name}
                    required
                  />
                  {errors.sender_name && (
                    <span className="text-red-500">{errors.sender_name}</span>
                  )}
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="sendertype"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Sender Type :
                  </label>
                  <select
                    style={{ width: "100%" }}
                    id="sendertype"
                    name="sender_type"
                    className={`p-1 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]`}
                    onChange={handleChange}
                    value={formData.sender_type}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Business">Business</option>
                  </select>
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="sendermobile"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Mobile Number :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="sendermobile"
                    name="mobile_number"
                    className={`mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px] ${
                      errors.mobile_number ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.mobile_number}
                    required
                  />
                  {errors.mobile_number && (
                    <span className="text-red-500">{errors.mobile_number}</span>
                  )}
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="itemtype"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Item Type :
                  </label>
                  <select
                    style={{ width: "100%" }}
                    id="itemtype"
                    name="item_type"
                    className={`p-2 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]`}
                    onChange={handleChange}
                    value={formData.item_type}
                  >
                    <option value="Food">Food</option>
                    <option value="Electronic Item">Electronic Item</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Document">Document</option>
                  </select>
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="noofpieces"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    No of Pieces :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="noofpieces"
                    name="num_pics"
                    className={`mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px] ${
                      errors.num_pics ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.num_pics}
                    required
                  />
                  {errors.num_pics && (
                    <span className="text-red-500">{errors.num_pics}</span>
                  )}
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="date"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Date :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="date"
                    id="date"
                    name="order_date"
                    className={`p-2 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px] ${
                      errors.order_date ? "border-red-500" : ""
                    }`}
                    required
                    onChange={handleChange}
                    value={formData.order_date}
                  />
                  {errors.order_date && (
                    <span className="text-red-500">{errors.order_date}</span>
                  )}
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="predays"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Predetermined Days :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="predays"
                    name="pre"
                    className={`p-2 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px] ${
                      errors.pre ? "border-red-500" : ""
                    }`}
                    required
                    onChange={handleChange}
                    value={formData.pre}
                  />
                  {errors.pre && (
                    <span className="text-red-500">{errors.pre}</span>
                  )}
                </div>
              </form>
            </div>

            <div className="form-body w-[60%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <h1 className="flex items-center justify-center p-5 uppercase text-md font-semibold">
                  Receiver Details
                </h1>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="recievername"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Receiver name :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="recievername"
                    name="receiver_name"
                    className={`mb-2 border border-gray-300 rounded-lg w-[60%] ${
                      errors.receiver_name ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.receiver_name}
                    required
                  />
                  {errors.receiver_name && (
                    <span className="text-red-500">{errors.receiver_name}</span>
                  )}
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="address"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Address :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="address"
                    name="address"
                    className={`mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px] ${
                      errors.address ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.address}
                    required
                  />
                  {errors.address && (
                    <span className="text-red-500">{errors.address}</span>
                  )}
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="province"
                    className="mb-2 font-semibold text-gray-600"
                  >
                    Province :
                  </label>
                  <select
                    style={{ width: "100%" }}
                    id="province"
                    name="province"
                    className={`p-1 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px] ${
                      errors.province ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.province}
                  >
                    <option value="Central">Central</option>
                    <option value="Eastern">Eastern</option>
                    <option value="North Central">North Central</option>
                    <option value="Northern">Northern</option>
                    <option value="North Western">North Western</option>
                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                    <option value="Southern">Southern</option>
                    <option value="Uva">Uva</option>
                    <option value="Western">Western</option>
                  </select>
                  {errors.province && (
                    <span className="text-red-500">{errors.province}</span>
                  )}
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="email"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Email :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="email"
                    name="receiver_email"
                    className={`mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px] ${
                      errors.receiver_email ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.receiver_email}
                    required
                  />
                  {errors.receiver_email && (
                    <span className="text-red-500">
                      {errors.receiver_email}
                    </span>
                  )}
                </div>

                <div
                  className="flex justify-between"
                  style={{ display: "contents" }}
                >
                  <label
                    htmlFor="recievernumber"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Mobile Number :
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="recievernumber"
                    name="receiver_mobile"
                    className={`mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px] ${
                      errors.receiver_mobile ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.receiver_mobile}
                    required
                  />
                  {errors.receiver_mobile && (
                    <span className="text-red-500">
                      {errors.receiver_mobile}
                    </span>
                  )}
                </div>
              </form>

              <button
                type="submit"
                className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg w-52 ml-auto mt-8"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
