import {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel from "./sidepanel";
import Gmap from "../../components/Gmap";
import bg2 from '../../images/bg2.jpg';


function RoutePlanning()
{




    const handleSubmit = (event) => {
        event.preventDefault();
        
      };


   

    return(

            <div className="main-body h-screen w-full bg-slate-100">
             <img src={bg2} alt="" srcset="" className="object-cover w-[100%] h-[100%]" />
                    <div className="main-body-container h-screen w-full flex flex-row absolute top-0 bg-black bg-opacity-50">
                        <Sidepanel/>
                        <div className="w-5/6 side-panel  p-5 sm:ml-[300px] ml-16">
                          <div className="common-body p-5 flex flex-col h-full items-center justify-center">

                            <div className="form-body w-[90%] flex md:flex-row flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
                                
                             <div className="map sm:w-[60%] w-full text-center p-2 h-full">
                              
                                <span>G-MAP will appear here</span>
                                <div className="p-2 h-[200px] sm:h-[400px] bg-slate-400">

                                </div>
                             </div>

                             <div className="order-details flex flex-col space-y-[20px]">
                                <span>Order Id : #TJH097</span>
                                <span>Pick Up</span>
                                <span>Two more Steps</span>
                                <span>Delivery</span>
                             </div>



                            </div>


                          </div>
                        </div>
                        
                    </div>
            </div>

    );
}


export default RoutePlanning;