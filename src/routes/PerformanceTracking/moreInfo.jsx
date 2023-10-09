import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Sidepanel from "../../components/sidepanel";
import { MessageDialog } from "../../components/MessageDialog";
import axios from "axios";
import { BaseUrl } from "../../utils/base_url";

function MoreInfo() {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [trafficCondition, setTrafficCondition] = useState("high");
  const [driverSkill, setDriverSkill] = useState("Good");

  const fetchData = async () => {
    const res = await axios.get(`${BaseUrl}/delivery/${slug}`);
    if (Array.isArray(res.data.data)) {
      setData(res.data.data);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  const handleTrafficConditionChange = (event) => {
    setTrafficCondition(event.target.value);
  };

  const handleDriverSkillChange = (event) => {
    setDriverSkill(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://CorierAdmin.pythonanywhere.com/predict",
        {
          driver_skill: driverSkill,
          traffic_condition: trafficCondition,
        }
      );

      if (response.data && response.data.probability) {
        const probability = response.data.probability;
        const successInput = document.getElementById("successInput");
        successInput.value = probability + "%";
      } else {
        console.error("Invalid response format");
      }
    } catch (error) {
      console.error("Error making the request:", error);
    }
  };

  const savePredicts = async () => {
    const successInput = document.getElementById("successInput");
    const predictionResult = successInput.value.split("%")[0];

    try {
      if (!trafficCondition || !driverSkill || !predictionResult) {
        alert("Please fill in all fields before saving.");
      } else {
        const response = await axios.post(`${BaseUrl}/delivery/savePred`, {
          id: data[0].id,
          driver_skill: driverSkill,
          traffic_condition: trafficCondition,
          success: predictionResult,
        });

        if (response.data && response.data.message) {
          alert(response.data.message);
          window.location.href = "/performancetracker";
        } else {
          console.error("Invalid response format");
        }
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="main-body h-screen w-full bg-slate-100">
      <div className="main-body-container w-full flex flex-row absolute">
        <Sidepanel />
      </div>
      <div className="w-5/6 side-panel p-5 md:ml-[300px] ml-16">
        <div className="w-full h-full grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <div className="border ">
            <div className="flex flex-col items-center justify-center px-8 py-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r w-full h-full">
              <div className="max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow bg-[#E5E4E2] dark:border-gray-700">
                <br />
                <h1 className="text-lg font-semibold text-gray-900 first-line:text-black">
                  Receiver Information
                </h1>{" "}
                <br />
                <br />
                <br />
                <label
                  htmlFor="receiverId"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Receiver ID
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input
                  className="rounded-sm border border-gray-300"
                  type="text"
                  placeholder="Backend DATA"
                  readOnly="readonly"
                  value={data[0]?.id}
                />
                <br /> <br /> <br />
                <label
                  htmlFor="email"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Email
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;
                <input
                  type="text"
                  className="rounded-sm border border-gray-300"
                  placeholder="Backend DATA"
                  value={data[0]?.receiver_email}
                  readOnly="readonly"
                />
                <br /> <br /> <br />
                <label
                  htmlFor="mobileNumber"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Mobile Number
                </label>
                &nbsp; &nbsp;
                <input
                  type="text"
                  className="rounded-sm border border-gray-300"
                  placeholder="Backend DATA"
                  value={data[0]?.receiver_mobile}
                  readOnly="readonly"
                />
              </div>
            </div>
          </div>

          <div className="border ">
            <div className="flex flex-col items-center h-full justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg">
              <div className="max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow bg-[#E5E4E2] dark:border-gray-700">
                <br />
                <br />
                <h1 className="text-lg font-semibold text-gray-900 text-dark">
                  Traffic Details
                </h1>{" "}
                <br />
                <br />
                <br />
                <label
                  htmlFor="predeterminedDays"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Predetermined Days
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input
                  type="text"
                  className="rounded-sm border border-gray-300"
                  value={`${data[0]?.pre_days}`}
                  placeholder="Backend DATA"
                  readOnly="readonly"
                />
                <br /> <br />
                <label
                  htmlFor="trafficCondition"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Traffic Condition
                </label>
                &nbsp; &nbsp; &nbsp;
                <select
                  className="rounded-sm border border-gray-300"
                  id="trafficCondition"
                  readOnly
                  value={trafficCondition}
                  onChange={handleTrafficConditionChange}
                >
                  <option value="high">High</option>
                  <option value="middle">Mid</option>
                  <option value="low">Low</option>
                </select>
                <br /> <br /> <br />
                <label
                  htmlFor="driverSkill"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Driver Skill
                </label>
                &nbsp; &nbsp; &nbsp;
                <select
                  className="rounded-sm border border-gray-300"
                  id="driverSkill"
                  readOnly
                  value={driverSkill}
                  onChange={handleDriverSkillChange}
                >
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Bad">Bad</option>
                </select>
                <br /> <br />
                <button
                  type="submit"
                  className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg w-52 ml-auto mt-8"
                  onClick={handleSubmit}
                >
                  Predict
                </button>
              </div>
            </div>
          </div>
          <div className="border ">
            <div className="flex flex-col items-center h-full justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg ">
              <div className="max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow bg-[#E5E4E2] dark:border-gray-700">
                <br />
                <br />
                <h1 className="text-lg font-semibold text-gray-900 text-dark">
                  Prediction Details
                </h1>{" "}
                <br />
                <br></br>
                <label
                  htmlFor="deliveryStat"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Delivery success prediction according to the order created
                  date:
                </label>
                &nbsp; &nbsp; &nbsp;
                <input
                  type="text"
                  className="rounded-sm border border-gray-300"
                  placeholder="Backend DATA"
                  value={`${data[0]?.success}%`}
                  readOnly="readonly"
                />
                <br />
                <br></br>
                <label
                  htmlFor="successInput"
                  className="mb-2 font-semibold text-gray-600"
                >
                  New Prediction Result On Time &nbsp; &nbsp; &nbsp;
                </label>
                <input
                  id="successInput"
                  type="text"
                  className="rounded-sm border border-gray-300"
                  placeholder="Backend DATA"
                  readOnly
                />
                <br />
                <button
                  type="submit"
                  className="py-2 px-4 bg-gradient-to-r from-red-500 to-blue-700 text-white rounded-lg w-52 ml-auto mt-8"
                  onClick={savePredicts}
                >
                  Save Predicted data
                </button>
                <br /> <br />
              </div>
              <br />
            </div>
          </div>

          <div className="border  ">
            <div className="flex flex-col items-center h-full justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg ">
              <div className="max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow bg-[#E5E4E2] dark:border-gray-700">
                <br />
                <br />
                <h1 className="text-lg font-semibold text-gray-900 text-dark">
                  Sender Details
                </h1>{" "}
                <br />
                <br />
                <br />
                <label
                  htmlFor="senderMobile"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Sender Mobile
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input
                  type="text"
                  className="rounded-sm border border-gray-300"
                  value={data[0]?.receiver_mobile}
                  placeholder="Backend DATA"
                  readOnly="readonly"
                />
                <br /> <br /> <br />
                <label
                  htmlFor="orderId"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Number of Pieces{" "}
                </label>
                &nbsp;{" "}
                <input
                  type="text"
                  placeholder="Backend DATA"
                  className="rounded-sm border border-gray-300"
                  value={data[0]?.num_pics}
                  readOnly="readonly"
                />
                <br /> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
