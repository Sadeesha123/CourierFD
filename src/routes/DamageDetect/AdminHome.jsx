import { useState } from "react";
import Sidepanel from "../../components/sidepanel";
import bg from "../../images/mainbg1.jpg";
import axios from "axios";

function AdminHome() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderContact: "",
    images: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;

    const selectedImages = Array.from(files).slice(0, 2);
    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedImages,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("senderName", formData.senderName);
      formDataToSend.append("senderContact", formData.senderContact);

      for (let i = 0; i < formData.images.length; i++) {
        formDataToSend.append("images", formData.images[i]);
      }

      await axios.post(
        "http://localhost:3001/api/saveFormData",
        formDataToSend
      );

      setFormData({
        senderName: "",
        senderContact: "",
        images: [],
      });

      alert("Data saved successfully");
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving data");
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
                  required
                  value={formData.senderName}
                  onChange={handleInputChange}
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                />

                <label
                  htmlFor="senderContact"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Sender Contact
                </label>
                <input
                  type="number"
                  maxLength="10"
                  id="senderContact"
                  name="senderContact"
                  required
                  value={formData.senderContact}
                  onChange={handleInputChange}
                  className="mb-4 p-2 rounded-lg border border-gray-300"
                />

                <label
                  htmlFor="images"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  className="mb-4 py-2 pl-5 file:rounded-lg rounded-lg border border-gray-300"
                  accept="image/*"
                  multiple
                  required
                  onChange={handleFileChange}
                />

                <div className="flex flex-row space-x-3 w-full">
                  <div className="flex items-center justify-between z-10">
                    <button
                      className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-gradient-to-r from-red-500 to-red-700 z-10"
                      type="submit"
                    >
                      Generate QR
                    </button>
                  </div>
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
