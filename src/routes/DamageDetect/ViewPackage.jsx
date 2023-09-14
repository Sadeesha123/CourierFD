import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Sidepanel from "../../components/sidepanel";
import bg from "../../images/mainbg1.jpg";
import axios from "axios";
function ViewPack() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/getData");

        const responseData = response.data;
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const renderImages = (base64Data) => {
    return (
      <img
        src={base64Data}
        alt="Image"
        style={{ width: "100%", height: "100px" }}
      />
    );
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
          <div className="common-body p-5 flex flex-col h-full items-center justify-center">
            <div className="form-body w-[80%] p-5 mx-auto bg-white rounded-lg shadow-md shadow-slate-300">
              <h2>Package Data Table</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <table
                    style={{
                      border: "1px solid #ddd",
                      borderCollapse: "collapse",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          Sender Name
                        </th>
                        <th
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          Sender Contact
                        </th>
                        <th
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          Image 1
                        </th>
                        <th
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          Image 2
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item._id}>
                          <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                          >
                            {item.senderName}
                          </td>
                          <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                          >
                            {item.senderContact}
                          </td>
                          <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                          >
                            {item.img1 && renderImages(item.img1)}
                          </td>
                          <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                          >
                            {item.img2 && renderImages(item.img2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPack;
