import { useState, useEffect } from "react";

import Sidepanel from "../../components/sidepanel";
import axios from "axios";
import { useParams } from "react-router-dom";
import bg from "../../images/mainbg1.jpg";
import { BaseUrl } from "../../utils/base_url";

function UpdateOrder() {
  const { slug } = useParams();
  const [data, setData] = useState({});

  const fetchData = async (data, i) => {
    const res = await axios.get(`${BaseUrl}/delivery/${slug}`);
    if (Array.isArray(res.data.data)) {
      setData(res.data.data[0]);
      console.log(res.data, "Incomming data");
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isPhoneNumberValid =
      data.mobile_number && data.mobile_number.length === 10;
    const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
      data.receiver_email
    );
    const isReceiverNumberValid =
      data.receiver_mobile && data.receiver_mobile.length === 10;
    if (isPhoneNumberValid && isEmailValid && isReceiverNumberValid) {
      const dataWithoutId = { ...data };
      delete dataWithoutId.id;
      delete dataWithoutId.order_date;
      delete dataWithoutId.preferred_date;
      await axios.put(
        `${BaseUrl}/delivery/${data.mobile_number}`,
        dataWithoutId
      );
      window.location.href = `/performancetracker`;
    } else {
      if (!isPhoneNumberValid || !isReceiverNumberValid) {
        alert("Please enter a 10-digit phone number");
      }
      if (!isEmailValid) {
        alert("Please enter a valid email address");
      }
    }
  };

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirmUpdate = () => {
    closePopup();
    setIsAlertVisible(true);

    console.log(isAlertVisible);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 2000);
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
          <div className="flex flex-col items-center justify-center gap-5 p-5 common-body">
            <div className="form-body w-[60%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <h1 className="flex items-center justify-center p-5 font-semibold uppercase text-md">
                  Sender Details
                </h1>

                <div className="flex justify-between">
                  <label
                    htmlFor="sendername"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Sender Name :
                  </label>
                  <input
                    type="text"
                    id="sendername"
                    name="sendername"
                    className="mb-2 border border-gray-300 rounded-lg w-[60%] "
                    onChange={(e) => {
                      const newSenderName = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        sender_name: newSenderName,
                      }));
                    }}
                    value={data?.sender_name}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <label
                    htmlFor="email"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Sender Email :
                  </label>
                  <input
                    type="email"
                    id="senderemail"
                    name="sender_email"
                    className="mb-2 border border-gray-300 rounded-lg w-[60%] "
                    onChange={(e) => {
                      const newSenderEmail = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        sender_email: newSenderEmail,
                      }));
                    }}
                    value={data?.sender_email}
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="sendertype"
                    className="p-1 mb-2 font-semibold text-gray-600 "
                  >
                    Sender Type :
                  </label>
                  <select
                    id="sendertype"
                    name="sendertype"
                    className="p-1 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        sender_type: newAtt,
                      }));
                    }}
                    value={data?.sender_type}
                  >
                    <option value="Personal">Personal</option>
                    <option value="Business">Business</option>
                  </select>
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="sendermobile"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Province :
                  </label>
                  <select
                    id="sender_province"
                    name="sender_province"
                    className="p-1 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newSender_province = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        sender_province: newSender_province,
                      }));
                    }}
                    value={data?.sender_province}
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
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="sendermobile"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Mobile Number :
                  </label>
                  <input
                    type="text"
                    id="sendermobile"
                    name="sendermobile"
                    className="mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        mobile_number: newAtt,
                      }));
                    }}
                    value={data?.mobile_number}
                    required
                    readOnly
                  />
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="itemtype"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Item Type :
                  </label>
                  <select
                    id="itemtype"
                    name="itemtype"
                    className="p-2 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        item_type: newAtt,
                      }));
                    }}
                    value={data?.item_type}
                  >
                    <option value="Food">Food</option>
                    <option value="Electronic Item">Electronic Item</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Document">Document</option>
                  </select>
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="noofpices"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    No of Pices :
                  </label>
                  <input
                    type="text"
                    id="noofpices"
                    name="noofpices"
                    className="mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        num_pics: newAtt,
                      }));
                    }}
                    value={data?.num_pics}
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="date"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Date :
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="p-2 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    required
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        order_date: newAtt,
                      }));
                    }}
                    value={data?.order_date?.substr(0, 10)}
                  />
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="predays"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Predetermines Days :
                  </label>
                  <input
                    type="text"
                    id="predays"
                    name="predays"
                    className="p-2 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    value={data?.pre_days}
                    required
                  />
                </div>
              </form>
            </div>

            <div className="form-body w-[60%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <h1 className="flex items-center justify-center p-5 uppercase text-md font-semibold">
                  Reciever Details
                </h1>

                <div className="flex justify-between">
                  <label
                    htmlFor="recievername"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Reciever name :
                  </label>
                  <input
                    type="text"
                    id="recievername"
                    name="recievername"
                    className="mb-2 border border-gray-300 rounded-lg w-[60%] "
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        receiver_name: newAtt, // Ensure property name consistency
                      }));
                    }}
                    value={data.receiver_name}
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="address"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Address :
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        address: newAtt, // Ensure property name consistency
                      }));
                    }}
                    value={data.address}
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="province"
                    className="mb-2 font-semibold text-gray-600"
                  >
                    Province :
                  </label>
                  <select
                    id="province"
                    name="province"
                    className="p-1 mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        province: newAtt, // Ensure property name consistency
                      }));
                    }}
                    value={data.province}
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
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="email"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        receiver_email: newAtt, // Ensure property name consistency
                      }));
                    }}
                    value={data.receiver_email}
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="recievernumber"
                    className="p-1 mb-2 font-semibold text-gray-600"
                  >
                    Mobile Number :
                  </label>
                  <input
                    type="text"
                    id="recievernumber"
                    name="recievernumber"
                    className="mb-2 border border-gray-300 rounded-lg w-[60%] h-[35px]"
                    onChange={(e) => {
                      const newAtt = e.target.value;
                      setData((prevData) => ({
                        ...prevData,
                        receiver_mobile: newAtt, // Ensure property name consistency
                      }));
                    }}
                    value={data.receiver_mobile}
                    required
                  />
                </div>
              </form>

              <button
                type="submit"
                className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg w-52 ml-auto mt-8"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>

            {/* {showAlert && (
           <div className="gap-4 fixed top-0 bottom-0 right-0 flex flex-col items-center justify-center bg-opacity-50 left-[270px] bg-black/10">
               <div className="p-4 rounded-lg shadow-md bg-blue-500/60">
                   <p className="text-white ">Successfully Added!</p>
               </div>
               <img className="w-24 h-24 opacity-50" src="/images/success_alert.png" alt=""></img>
           </div>
       )}
                */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateOrder;
