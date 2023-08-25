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

        <div className="w-full h-screen main-body bg-slate-100">

            <div className="flex flex-row w-full main-body-container">

                <Sidepanel2 />
                <div className="w-5/6 p-5 side-panel bg-slate-100">
                    {isAlertVisible ? (
                        <div className="fixed inset-0 flex items-center pl-[1000px] bg-opacity-50 bg-black/10">
                            {/* Show the alert */}
                            <div className="p-4 rounded-lg shadow-md bg-blue-500/60">
                                Successfully Updated
                            </div>
                        </div>
                    ) : ""}
                    <div className="flex flex-col items-center justify-center h-full p-5 common-body">
                        <h1 className="flex items-center justify-center pb-5 text-xl uppercase">
                            Update Order
                        </h1>

                        <div className="form-body w-[50%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">

                            <h1>{slug}</h1>
                            <form onSubmit={handleSubmit} className="flex flex-col w-full">



                                <label htmlFor="customername" className="mb-2 font-semibold text-gray-600">
                                    Customer name
                                </label>
                                <input type="text" id="customername" name="customername" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                <label htmlFor="customertype" className="mb-2 font-semibold text-gray-600">
                                    Customer type
                                </label>
                                <select id="customertype" name="customertype" className="p-2 mb-4 border border-gray-300 rounded-lg">
                                    <option value="car">Normal</option>
                                    <option value="bike">Business</option>
                                </select>

                                <label htmlFor="adress" className="mb-2 font-semibold text-gray-600">
                                    Adress
                                </label>
                                <input type="text" id="adress" name="adress" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                <label htmlFor="email" className="mb-2 font-semibold text-gray-600">
                                    Email
                                </label>
                                <input type="text" id="email" name="email" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                <label htmlFor="province" className="mb-2 font-semibold text-gray-600">
                                    Province
                                </label>
                                <select id="province" name="province" className="p-2 mb-4 border border-gray-300 rounded-lg">
                                    <option value="">Central</option>
                                    <option value="">Eastern</option>
                                    <option value="">North Central</option>
                                    <option value="">Northern</option>
                                    <option value="">North Western</option>
                                    <option value="">Sabaragamuwa</option>
                                    <option value="">Southern</option>
                                    <option value="">Uva</option>
                                    <option value="">Western</option>
                                </select>

                                <label htmlFor="itemtype" className="mb-2 font-semibold text-gray-600">
                                    Item type
                                </label>
                                <select id="itemtype" name="itemtype" className="p-2 mb-4 border border-gray-300 rounded-lg">
                                    <option value="">Food</option>
                                    <option value="">Electronic Item</option>
                                    <option value="">Apparel</option>
                                    <option value="">Document</option>
                                </select>

                                <label htmlFor="pices" className="mb-2 font-semibold text-gray-600">
                                    No of Pices
                                </label>
                                <input type="text" id="pices" name="pices" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                <label htmlFor="date" className="mb-2 font-semibold text-gray-600">
                                    Date
                                </label>
                                <input type="date" id="date" name="date" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                <label htmlFor="predays" className="mb-2 font-semibold text-gray-600">
                                    Predetermines Days
                                </label>
                                <input type="text" id="predays" name="predays" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                <label htmlFor="phonenumber" className="mb-2 font-semibold text-gray-600">
                                    Phonenumber
                                </label>
                                <input type="text" id="phonenumber" name="phonenumber" className="p-2 mb-4 border border-gray-300 rounded-lg" />
                                <button
                                    onClick={openPopup}
                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    data-modal-target="popup-modal"
                                    data-modal-toggle="popup-modal"
                                    type="button"
                                >
                                    Update
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