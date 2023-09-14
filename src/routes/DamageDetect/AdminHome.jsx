import { useState } from "react";
import Sidepanel from "../../components/sidepanel";
import bg from "../../images/mainbg1.jpg";
import axios from "axios";
import QRCode from "qrcode.react";

function AdminHome() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderContact: "",
    img1: null,
    img2: null,
    img1Base64: "",
    img2Base64: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = async (event) => {
    const { name, files } = event.target;
    const selectedFile = files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result;
        setFormData({
          ...formData,
          [name]: selectedFile,
          [`${name}Base64`]: base64Data,
        });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const requestData = {
        senderName: formData.senderName,
        senderContact: formData.senderContact,
        img1: formData.img1Base64,
        img2: formData.img2Base64,
      };

      console.log("Final Dataset:", requestData);
      await axios.post("http://localhost:3001/api/saveFormData", requestData);

      // setFormData({
      //   senderName: "",
      //   senderContact: "",
      //   img1: "",
      //   img2: "",
      //   img1Base64: "",
      //   img2Base64: "",
      // });
      setIsLoading(false);
      setShowQRCode(true);
      alert("Data saved successfully");
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving data");
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    console.log("Print QR");
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
                  htmlFor="image01"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Upload Image 01
                </label>
                <input
                  type="file"
                  id="image01"
                  name="img1"
                  className="mb-4 py-2 pl-5 file:rounded-lg rounded-lg border border-gray-300"
                  accept="image/*"
                  required
                  onChange={handleFileChange}
                />
                {formData.img1Base64 && (
                  <img
                    width={200}
                    style={{ height: "250px" }}
                    src={formData.img1Base64}
                    alt="Image 01"
                    className="mb-4 max-w-[300px]"
                  />
                )}

                <label
                  htmlFor="image02"
                  className="mb-2 font-semibold text-gray-600"
                >
                  Upload Image 02
                </label>
                <input
                  type="file"
                  id="image02"
                  name="img2"
                  className="mb-4 py-2 pl-5 file:rounded-lg rounded-lg border border-gray-300"
                  accept="image/*"
                  required
                  onChange={handleFileChange}
                />
                {formData.img2Base64 && (
                  <img
                    width={200}
                    style={{ height: "250px" }}
                    src={formData.img2Base64}
                    alt="Image 02"
                    className="mb-4 max-w-[300px]"
                  />
                )}

                <div className="flex flex-row space-x-3 w-full">
                  <div className="flex items-center justify-between z-10">
                    <button
                      className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-gradient-to-r from-red-500 to-red-700 z-10"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Saving..." : "Save"}{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {showQRCode && (
              <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
                <QRCode value={formData.senderContact} />
                <button
                  onClick={handlePrint}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Print QR Code
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
