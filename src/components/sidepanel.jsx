import {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke, faUser, faMapLocation, faChartLine, faHeadset, faChainBroken } from '@fortawesome/free-solid-svg-icons'

function Sidepanel()
{

   

    return(

            <div className="sm:w-[300px] w-[80px] side-panel sm:p-5 p-2 flex flex-col justify-center items-center bg-[#d7002a] fixed h-screen z-10">

                <div className="sidepalen-body h-2/3 p-3 w-full justify-center">
                    <div className="user-profile sm:flex flex-row items-center space-x-5 hidden">
                        <label className="text-[28px]">
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </label>
                        <span className="user-name text-[22px] text-white">User Name</span>
                    </div>


                    <div className="nav-body w-full flex-col justify-center space-y-3 mt-10">
                        <ul className="space-y-5">
                            <Link to="/Orders" className="mb-5"><li className="p-2 w-full bg-white rounded-md mb-5"><FontAwesomeIcon icon={faMapLocation} className="mr-5"/><span className="sm:inline-flex hidden">Delivery Routing</span></li></Link>
                            <Link to="/performancetrack" className="mb-5"><li className="p-2 w-full bg-white  rounded-md mb-5"><FontAwesomeIcon icon={faChartLine} className="mr-5"/><span className="sm:inline-flex hidden">Performance Track</span></li></Link>
                            <Link to="/tickets" className="mb-5"><li className="p-2 w-full bg-white  rounded-md mb-5"><FontAwesomeIcon icon={faHeadset} className="mr-5"/><span className="sm:inline-flex hidden">Customer Support</span></li></Link>
                            <Link to="/CustomerHome"><li className="p-2 w-full bg-white  rounded-md mb-5"><FontAwesomeIcon icon={faChainBroken} className="mr-5"/><span className="sm:inline-flex hidden">Damage Ditection USER</span></li></Link>
                            <Link to="/AdminHome"><li className="p-2 w-full bg-white  rounded-md mb-5"><FontAwesomeIcon icon={faChainBroken} className="mr-5"/><span className="sm:inline-flex hidden">Damage Ditection ADMIN</span></li></Link>   
                        </ul>
                    </div>


                </div>
               

            </div>
            

    );
}


export default Sidepanel;