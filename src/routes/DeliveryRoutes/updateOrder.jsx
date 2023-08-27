import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel2 from "./sidepanel2";
import { useParams } from 'react-router-dom';




function UpdateOrder() {


    const { slug } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
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
        // Hide the alert after 2 seconds (2000 milliseconds)
        console.log(isAlertVisible);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 2000);
    };



    return (

        <div className="main-body h-screen w-full bg-slate-100">

            <div className="main-body-container w-full flex flex-row absolute">

                <Sidepanel2 />
                <div className="w-5/6 p-5 side-panel bg-slate-100">
                    {isAlertVisible ? (
                        <div className="fixed inset-0 flex items-center pl-[1000px] bg-opacity-50 bg-black/10">
                            {/* Show the alert */}
                            <div className="p-4 rounded-lg shadow-md bg-red-500/60">
                                Successfully Updated
                            </div>
                        </div>
                    ) : ""}
                    <div className="flex flex-col items-center justify-center h-full p-5 common-body">
                        <div className="form-body md:w-[80%] w-full flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg ">

                            <h1 className="flex items-center justify-center pb-5 text-xl uppercase">Customer ID :  {slug}</h1> <br/>
                            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                                <label htmlFor="customerName" className="mb-2 font-semibold text-gray-600">
                                    Customer Name
                                    </label>
                                    <input type="text" id="customerName" name="customerName" className="mb-4 p-2 rounded-lg border border-gray-300" placeholder="Backend_Data" />


                                    <label htmlFor="customerType" className="mb-2 font-semibold text-gray-600">
                                    Customer Type
                                    </label>
                                    <select id="customerType" name="customerType" className="mb-4 p-2 rounded-lg border border-gray-300">
                                    <option value="Backend Data">Backend_Data</option>
                                      <option value="Normal">Normal</option>
                                      <option value="Business">Business</option>
                                     
                                    </select>
                                    <label htmlFor="address" className="mb-2 font-semibold text-gray-600">
                                    Address
                                    </label>
                                    <input type="text" id="address" name="address" className="mb-4 p-2 rounded-lg border border-gray-300" placeholder="Backend_Data" />

                                    <label htmlFor="email" className="mb-2 font-semibold text-gray-600">
                                    Email
                                    </label>
                                    <input type="email" id="email" name="email" className="mb-4 p-2 rounded-lg border border-gray-300" placeholder="Backend_Data" />

                                    <label htmlFor="province" className="mb-2 font-semibold text-gray-600">
                                    Province
                                    </label>
                                    <select id="province" name="province" className="mb-4 p-2 rounded-lg border border-gray-300">
                                    <option value="Backend Data">Backend_Data</option>
                                      <option value="Central">Central</option>
                                      <option value="North Central">North Central</option>
                                      <option value="Northern">Northern</option>
                                      <option value="Eatern">Eastern</option>
                                      <option value="North Western">North Western</option>
                                      <option value="Southern">Southern</option>
                                      <option value="Uva">Uva</option>
                                      <option value="Sabaragamuwa">Sabaragamuwa</option>
                                      <option value="Western">Western</option>
                                      
                                    </select>

                                    <label htmlFor="itemType" className="mb-2 font-semibold text-gray-600">
                                    Item Type
                                    </label>
                                    <select id="itemType" name="itemType" className="mb-4 p-2 rounded-lg border border-gray-300">
                                    <option value="Backend Data">Backend_Data</option>
                                      <option value="Food">Food</option>
                                      <option value="Electronic Item">Electronic Item</option>
                                      <option value="Apparel">Apparel</option>
                                      <option value="Document">Document</option>
                                    </select>

                                    <label htmlFor="quantity" className="mb-2 font-semibold text-gray-600">
                                    Quantity 
                                    </label>
                                    <input type="text" id="quantity" name="quantity" className="mb-4 p-2 rounded-lg border border-gray-300" placeholder="Backend_Data"/>
                                    <label htmlFor="Date" className="mb-2 font-semibold text-gray-600">
                                    Date
                                    </label>
                                    <input type="date" id="date" name="date" className="mb-4 p-2 rounded-lg border border-gray-300" placeholder="Backend_Data"/>


                                    <label htmlFor="preDays" className="mb-2 font-semibold text-gray-600">
                                    Predetermined Days
                                    </label>
                                    <input type="text" id="preDays" name="email" className="mb-4 p-2 rounded-lg border border-gray-300" placeholder="Backend_Data" />


                                    <label htmlFor="tp" className="mb-2 font-semibold text-gray-600">
                                    Telephone number
                                    </label>
                                    <input type="tel" id="tp" name="tp" className="mb-4 p-2 rounded-lg border border-gray-300"  placeholder="backend_data" />

                                    <button type="submit" className="py-2 px-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg w-52 ml-auto mt-8">
                                    Create Delivery
                                    </button>
                                </form>
                            {isPopupOpen &&

                                <div>

                                    <div
                                        id="popup-modal"
                                        tabIndex="-1"
                                        className={`fixed inset-0 flex items-center pl-[870px] overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                                    >
                                        <div className="relative w-full max-w-md max-h-full">
                                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                <button
                                                    onClick={closePopup}
                                                    type="button"
                                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    data-modal-hide="popup-modal"
                                                >
                                                    <svg
                                                        className="w-3 h-3"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 14 14"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                        />
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>

                                                <div className="p-6 text-center">

                                                    <svg
                                                        className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-200"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                        />
                                                    </svg>
                                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                        Are you sure you want to update this?
                                                    </h3>
                                                    <button
                                                        onClick={handleConfirmUpdate}
                                                        type="button"
                                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                                        data-modal-hide="popup-modal"
                                                    >
                                                        Yes, I'm sure
                                                    </button>
                                                    <button
                                                        onClick={closePopup}
                                                        type="button"
                                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                        data-modal-hide="popup-modal"
                                                    >
                                                        No, cancel
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>}

                        </div>


                    </div>
                </div>

            </div>
        </div>

    );
}


export default UpdateOrder;