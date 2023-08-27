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
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Reciever Information</h1> <br/>
                        

                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                        <br/>  <br/>
                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                            <br/>  <br/>
                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                            <br/>  <br/>
                    


                        </blockquote>
                        <figcaption class="flex items-center justify-center space-x-3">
                            
                        
                        </figcaption>    
                    </figure>
                    <figure class="flex flex-col items-center h-full justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    
                        <figcaption class="flex items-center justify-center space-x-3">
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Traffic Details</h1> <br/>
                        

                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                        <br/>  <br/>
                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                            <br/>  <br/>
                        
                    


                        </blockquote>
                        </figcaption>    
                    </figure>
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <figcaption class="flex items-center justify-center space-x-3">
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Prediction Details</h1> <br/>
                        
                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                        <br/>  <br/>
                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                            <br/>  <br/>
                        
                    


                        </blockquote>
                        </figcaption>       
                    </figure>

                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <figcaption class="flex items-center justify-center space-x-3">
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Sender Details</h1> <br/>
                        
                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                        <br/>  <br/>
                            <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                            Reciever ID 
                            </label>
                            &nbsp; <input type="text" placeholder=" text"/> 
                            <br/>  <br/>
                        
                    


                        </blockquote>
                        </figcaption>       
                    </figure>

                </div>
                
        </div>


    );
}


export default MoreInfo;


