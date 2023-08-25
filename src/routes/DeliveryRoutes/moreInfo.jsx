import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel2 from "./sidepanel2";





function MoreInfo() {




    const handleSubmit = (event) => {
        event.preventDefault();

    };




    return (

        <div className="flex w-full h-screen main-body bg-slate-100">
            <div className="flex h-screen main-body-container">
                <Sidepanel2 />
            </div>
            <div className="flex items-center justify-center">


                <div className="flex items-center justify-center pt-20 pl-20">
                    <div className="relative py-3 pl-16 sm:max-w-xl sm:mx-auto">
                        <div className="relative px-4 w-[400px] py-10 mx-8 bg-white shadow md:mx-0 rounded-3xl sm:p-10">
                            <div className="max-w-md mx-auto">
                                <div className="flex items-center space-x-5">
                                    <div className="self-start block pl-2 text-xl font-semibold text-gray-700">
                                        <h2 className="leading-relaxed">Customer ID</h2>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Trafic Condition :</span>
                                            <span>Test</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="font-semibold">Diliver Skill:</span>
                                            <span>Test</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Reciever Name:</span>
                                            <span>Test</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Email:</span>
                                            <span>Test</span>
                                        </div>
                                        <div className="flex justify-between pb-2">
                                            <span className="font-semibold">Mobile No:</span>
                                            <span>Test</span>
                                        </div>
                                        {/* Add more invoice details as needed */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center ">
                        <h1 className="absolute pl-16 text-xl font-bold top-20">More information</h1>
                        <div className="relative py-3 pl-16 sm:max-w-xl sm:mx-auto">
                            <div className="relative px-4 w-[400px] py-10 mx-8 bg-white shadow md:mx-0 rounded-3xl sm:p-10">

                                <div className="max-w-md mx-auto">
                                    <div className="flex items-center space-x-5">
                                        <div className="self-start block pl-2 text-xl font-semibold text-gray-700">
                                            <h2 className="leading-relaxed">Last Courier Info</h2>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="flex justify-between">
                                                <span className="font-semibold">Item Type:</span>
                                                <span>Test</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-semibold">Item Status:</span>
                                                <span>Test</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-semibold">Ontime Delivered:</span>
                                                <span>Test</span>
                                            </div>
                                            <div className="flex justify-between pb-2">
                                                <span className="font-semibold">Last Delivery Status:</span>
                                                <span>Test</span>
                                            </div>
                                            <div className="flex justify-between pb-2">
                                                <span className="font-semibold">Final Feedback:</span>
                                                <span>Test</span>
                                            </div>
                                            {/* Add more invoice details as needed */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="relative flex flex-col gap-5 py-3 pl-16 sm:max-w-xl sm:mx-auto">
                        <div className="relative px-4 w-[400px] py-10 mx-8 bg-white shadow md:mx-0 rounded-3xl sm:p-10">

                            <div className="max-w-md mx-auto">
                                <div className="flex items-center space-x-5">
                                    <div className="self-start block pl-2 text-xl font-semibold text-gray-700">
                                        <h2 className="leading-relaxed">Prediction</h2>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Delivery Success :</span>
                                            <span>Test</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Customer Churn:</span>
                                            <span>Test</span>
                                        </div>

                                        {/* Add more invoice details as needed */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-end pt-20 ">
                            <a href="/PerformanceTrack" > <button type="submit" className="px-8 py-2 font-bold text-white bg-red-700 rounded-2xl hover:bg-red-500">
                                Exit
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}


export default MoreInfo;


