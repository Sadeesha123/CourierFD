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
                {/* Card UI */}
                 
                <div class=" w-full h-full grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                  
                  <div className="border ">
                    <div class="flex flex-col items-center justify-center px-8 py-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r   w-full h-full">
                        
                        <div className="max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <br/>

                            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Reciever Information</h1> <br/>
                            <br/><br/>

                            <label htmlFor="recieverId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; <input type="text" placeholder=" Backend DATA" readonly="readonly"/> 
                            <br/>  <br/> <br/>
                            <label htmlFor="email" className="mb-2 font-semibold text-gray-600">
                            Email
                            </label>
                            &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="text" placeholder="Backend DATA" readonly="readonly"/> 
                            <br/>  <br/> <br/>
                            <label htmlFor="mobileNumber" className="mb-2 font-semibold text-gray-600">
                            Mobile Number
                            </label>
                            &nbsp;  &nbsp;<input type="text" placeholder="Backend DATA" readonly="readonly"/> 
                            </div>
                            
                            
                        
                        
                        </div> 

                    </div>

                    <div className="border ">
                    <div class="flex flex-col items-center h-full justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg">
                    
                    <div className="max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <br/><br/>
                            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Traffic Details</h1> <br/>
                            <br/><br/>

                            <label htmlFor="trafficCondition" className="mb-2 font-semibold text-gray-600">
                            Traffic Condition 
                            </label>
                            &nbsp; <input type="text" placeholder=" Backend DATA" readonly="readonly"/> 
                        <br/>  <br/> <br/>
                            <label htmlFor="skill" className="mb-2 font-semibold text-gray-600">
                            Driver Skill
                            </label>
                            &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="text" placeholder=" Backend DATA" readonly="readonly"/> 
                            <br/>  <br/>
                        
    
                          </div> 
                    </div>

                    </div>
                    <div className="border ">
                    <div class="flex flex-col items-center h-full justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg ">
                    
                    <div className="max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <br/><br/>
                            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Prediction Details</h1> <br/>
                            <br/><br/>

                            <label htmlFor="deliverystat" className="mb-2 font-semibold text-gray-600">
                           Delivery Success
                            </label>
                            &nbsp;  &nbsp; &nbsp;<input type="text" placeholder=" Backend DATA" readonly="readonly"/> 
                        <br/>  <br/> <br/>
                             
                          </div> 
                    </div>

                    </div>

                    <div className="border  ">
                    <div class="flex flex-col items-center h-full justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg ">
                    
                    <div className="max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <br/><br/>
                            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Sender Details</h1> <br/>
                            <br/><br/>

                            <label htmlFor="senderMobile" className="mb-2 font-semibold text-gray-600">
                            Sender Mobile
                            </label>
                            &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;<input type="text" placeholder=" Backend DATA" readonly="readonly"/> 
                        <br/>  <br/> <br/>
                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Number of Pieces                            </label>
                            &nbsp; <input type="text" placeholder=" Backend DATA" readonly="readonly"/> 
                            <br/>  <br/>
                        
    
                          </div> 
                    </div>

                    </div>

                </div>
                
        </div>


    );
}


export default MoreInfo;


