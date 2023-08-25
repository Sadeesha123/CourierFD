import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel2 from "./sidepanel2";
import BarChart from "../../components/Chart2";




function DeliveryRank() {




    const handleSubmit = (event) => {
        event.preventDefault();

    };




    return (

        <div className="w-full main-body bg-slate-100">
            <div className="flex flex-row w-full main-body-container">
                <Sidepanel2 />
                <div className="w-5/6 p-5 pt-10 side-panel bg-slate-100">
                    <h1 className="flex items-center justify-center pb-5 text-xl uppercase">
                        Delivery Rank
                    </h1>
                    <div className="flex flex-col items-center justify-center h-full p-5 common-body">

                        <div className="form-body w-[50%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">

                            <form onSubmit={handleSubmit} className="flex flex-col w-full">


                                <label htmlFor="province" className="mb-2 font-semibold text-gray-600">
                                    Province
                                </label>
                                <select id="province" name="province" className="p-2 mb-4 border border-gray-300 rounded-lg">
                                    <option value="car">Central</option>
                                    <option value="bike">Eastern</option>
                                    <option value="truck">North Central</option>
                                    <option value="car">Northern</option>
                                    <option value="bike">North Western</option>
                                    <option value="truck">Sabaragamuwa</option>
                                    <option value="car">Southern</option>
                                    <option value="bike">Uva</option>
                                    <option value="truck">Western</option>
                                </select>

                                <label htmlFor="customertype" className="mb-2 font-semibold text-gray-600">
                                    Item type
                                </label>
                                <select id="customertype" name="customertype" className="p-2 mb-4 border border-gray-300 rounded-lg">
                                    <option value="">Food</option>
                                    <option value="">Electronic Item</option>
                                    <option value="">Apparel </option>
                                    <option value="">Documents</option>
                                </select>

                                <label htmlFor="year" className="mb-2 font-semibold text-gray-600">
                                    Year
                                </label>
                                <input type="text" id="year" name="year" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                <label htmlFor="province" className="mb-2 font-semibold text-gray-600">
                                    Month
                                </label>
                                <select id="month" name="month" className="p-2 mb-4 border border-gray-300 rounded-lg">
                                    <option value="january">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>
                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                </select>

                                <div className="flex items-end justify-end ">
                                    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="pt-10">
                            <h1 className="pb-10"> Graph</h1>
                            <BarChart key={1000} />
                        </div>


                    </div>
                </div>

            </div>
        </div>

    );
}


export default DeliveryRank;