import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Sidepanel from "../../components/sidepanel";
import bg from '../../images/mainbg1.jpg';

function AdminHome() {
  const [formData, setFormData] = useState({
    senderName: "",
    receiverName: "",
    packageId: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="main-body h-screen w-full bg-slate-100">
      <img src={bg} alt="" srcset="" className="object-cover w-[100%] h-[100%] fixed" />
      <div className="main-body-container w-full flex flex-row absolute">
        <Sidepanel />
        <div className="w-5/6 side-panel p-5 md:ml-[300px] ml-16">
          <div className="common-body p-5 flex flex-col h-full items-center justify-center">
            <div className="form-body w-[80%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <label
                  htmlFor="sendername"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Sender Name
                </label>
                <input
                  type="text"
                  id="sendername"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleInputChange}
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                />

                <label
                  htmlFor="recievername"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Receiver Name
                </label>
                <input
                  type="text"
                  id="recievername"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleInputChange}
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                />

                <label
                  htmlFor="pid"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Package ID
                </label>
                <input
                  type="text"
                  id="pid"
                  name="packageId"
                  value={formData.packageId}
                  onChange={handleInputChange}
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                />

                <label
                  htmlFor="dd"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Driver Details
                </label>
                <input
                  type="text"
                  id="dd"
                  name="driverDetails"
                  value={formData.driverDetails}
                  onChange={handleInputChange}
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                />

                <label htmlFor="date" className="mb-2 font-semibold text-gray-600">
                  Date
                </label>
                <input type="date" id="date" name="date" className="mb-4 p-2 rounded-lg border border-gray-300" />


                <label htmlFor="time" className="mb-2 font-semibold text-gray-600">
                  Time
                </label>
                <input type="time" id="time" name="time" className="mb-4 p-2 rounded-lg border border-gray-300" />

                <label
                  htmlFor="pd"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Package Description
                </label>
                <input
                  type="textarea"
                  id="pd"
                  name="packageDescription"
                  value={formData.packageDescription}
                  onChange={handleInputChange}
                  className="mb-4 p-2 rounded-lg border border-gray-300 h-24"
                />

                <div className="flex flex-row space-x-3 w-full">
                  <Link
                    to={{
                      pathname: "/PackageDispatch",
                      state: { formData }
                    }}
                    className="w-full"
                  >
                    <button
                      type="submit"
                      className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg w-52 ml-auto mt-8"
                    >
                      Generate QR
                    </button>

                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
