import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import DataTable from "../../components/DataTable";
import Sidepanel2 from "./sidepanel2";
import Modal from "./removePopup";





function PerformanceTrack() {
  const [showPopup, setShowPopup] = useState(false);

  const handleRemoveButtonClick = () => {
    setShowPopup(true);
  };


  const data = [
    {
      id: 1,
      sendname: 'John Doe',
      receivename: 'Peter',
      receiveaddress: "test",
      province: "test",
      item: "test",
      days: "test",
      // other: "<a href='/UpdateOrder/1'><button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded'>Update</button ></a>  <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded' onclick=\"setShowPopup(true)\">Remove</button>  <a href='/MoreInfo/1'><button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded'>More_Info</button></a>"
    },
    {
      id: 2,
      sendname: 'Jane Smith',
      receivename: 'Leonal',
      receiveaddress: "test2",
      address: "test2",
      province: "test2",
      item: "test2",
      days: "test2",
      // other: "<a href='/UpdateOrder/2'><button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded'>Update</button ></a>  <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded' onclick=\"setShowPopup(true)\">Remove</button>  <a href='/MoreInfo/2'><button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded'>More_Info</button></a>"
    },
    // Add more data as needed)
  ];

  return (
<div>


    <div className="flex h-screen w-screen main-body">
      <div className="flex flex-row w-auto h-screen main-body-container">
        <Sidepanel2 />

      </div>
      <div className="w-full">
        
        <div className="flex items-center justify-center pt-10 pb-5 text-xl uppercase">
          <h1 className="pb-5 text-xl uppercase">
            Orders
          </h1>

        </div>

        <div className="max-w-[90%] ml-[5%]">
          <DataTable data={data} className="w-[90%]"/> 
        {showPopup && <Modal />} Render the Modal component when showPopup state is true
        </div>
        

      </div>



    </div>
</div>

  );
}


export default PerformanceTrack;