import {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke, faUser, faMapLocation, faChartLine, faHeadset, faChainBroken } from '@fortawesome/free-solid-svg-icons'
import 'flowbite';
import logo from '../images/logo.png';


function Sidepanel()
{

   

    return(
<div>
            
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-[18rem] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-10 overflow-y-auto bg-[#d7002a] dark:bg-gray-800">
        <a href="/Dashbaord" class="flex items-center pl-7 mb-10">
         <img src={logo} class="h-6 mr-3 sm:h-16 " alt="Courier Logo" />
         {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">Flowbite</span> */}
        </a>
      <ul class="space-y-4 font-medium">
      <li>
            <a href="/Dashboard" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group ">
               <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ml-3">Dashboard</span>
            </a>
        </li>
      <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-black" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  <span class="flex-1 ml-3 text-left hover:text-gray-900 whitespace-nowrap">Delivery Routing</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="/Orders" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ">Orders</a>
                  </li>
                  <li>
                     <a href="/CreateDelivery" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ">Create Delivery</a>
                  </li>
                  <li>
                     <a href="/RoutePlanning" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ">Route Planning</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button2" class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-black" aria-controls="dropdown-example2" data-collapse-toggle="dropdown-example2">
                  <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  <span class="flex-1 ml-3 text-left hover:text-gray-900 whitespace-nowrap">Performance Tracker</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example2" class="hidden py-2 space-y-2">
                  <li>
                     <a href="/performancetrack" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Tracker</a>
                  </li>
                  <li>
                     <a href="/CreateOrder" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Create Order</a>
                  </li>
                  <li>
                     <a href="/CustomerCharn" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Customer Churn</a>
                  </li>
                  <li>
                     <a href="/ChurnRank" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Churn Rank</a>
                  </li>
                  <li>
                     <a href="/DeliveryRank" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Delivery Success Rank</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button3" class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-gray-900" aria-controls="dropdown-example3" data-collapse-toggle="dropdown-example3">
                  <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  <span class="flex-1 ml-3 text-left hover:text-gray-900 whitespace-nowrap">Customer Support</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example3" class="hidden py-2 space-y-2">
                  <li>
                     <a href="/tickets" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">All Tickets</a>
                  </li>
                  <li>
                     <a href="/ManualTickets" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Manual Tickets</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button4" class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-gray-900" aria-controls="dropdown-example4" data-collapse-toggle="dropdown-example4">
                  <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  <span class="flex-1 ml-3 text-left hover:text-gray-900 whitespace-nowrap">Damage Detection</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example4" class="hidden py-2 space-y-2">
                  <li>
                     <a href="/CustomerHome" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Customer Home</a>
                  </li>
                  <li>
                     <a href="/ScanQR" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Scan</a>
                  </li>
                  <li>
                     <a href="/Inquiry" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Inquiry</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button5" class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-gray-900" aria-controls="dropdown-example5" data-collapse-toggle="dropdown-example5">
                  <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  <span class="flex-1 ml-3 text-left hover:text-gray-900 whitespace-nowrap">Damage Detection Admin</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example5" class="hidden py-2 space-y-2">
                  <li>
                     <a href="/AdminHome" class="flex items-center w-full p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home</a>
                  </li>
            </ul>
         </li>
         
         

        
      </ul>
   </div>
</aside>



</div>

            

    );
}


export default Sidepanel;