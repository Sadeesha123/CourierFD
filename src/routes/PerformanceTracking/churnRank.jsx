import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Sidepanel from "../../components/sidepanel";
import BarChart from "../../components/Chart2";
import bg from "../../images/mainbg1.jpg";

function ChurnRank() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [m, setM] = useState(null);
  const [month, setMonth] = useState(null);

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
          <div className="flex flex-col items-center justify-center h-full p-5 common-body">
            <div className="form-body w-[1000px] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <h1 className="flex items-center justify-center pt-4 text-xl uppercase font-bold pb-4">
                  Churn Rank
                </h1>

                <label
                  htmlFor="province"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Province
                </label>
                <select
                  id="province"
                  name="province"
                  className="p-2 mb-4 border border-gray-300 rounded-lg"
                >
                  <option value="Central">Central</option>
                  <option value="Eastern">Eastern</option>
                  <option value="North Central">North Central</option>
                  <option value="Northern">Northern</option>
                  <option value="Northe Westrn">Northe Westrn</option>
                  <option value="Sabaragamuwa">Sabaragamuwa</option>
                  <option value="Southern">Southern</option>
                  <option value="Uva">Uva</option>
                  <option value="Western">Western</option>
                </select>

                <label
                  htmlFor="customertype"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Customer type
                </label>
                <select
                  id="customertype"
                  name="customertype"
                  className="p-2 mb-4 border border-gray-300 rounded-lg"
                >
                  <option value="Normal">Normal</option>
                  <option value="Business">Business</option>
                </select>

                <label
                  htmlFor="year"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Year
                </label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  className="p-2 mb-4 border border-gray-300 rounded-lg"
                />

                <label
                  htmlFor="province"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Month
                </label>
                <select
                  id="month"
                  name="month"
                  className="p-2 mb-4 border border-gray-300 rounded-lg"
                  onChange={(e) => setM(e.target.value)}
                >
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>

                <div className="flex items-end justify-end ">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setMonth(m);
                    }}
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400 mt-8"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            <div className="pt-10">
              <div className="form-body w-[1000px] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
                <h1 className="flex items-center justify-center pt-4 text-xl uppercase font-bold pb-4">
                  {" "}
                  Graph
                </h1>
                <BarChart key={1000} month={month} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChurnRank;
