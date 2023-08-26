import Sidepanel from "./sidepanel";

function SingleTicket() {
   
return(

  <div className="main-body h-screen w-full bg-slate-100">
    <div className="main-body-container h-screen w-full flex flex-row" >
        <Sidepanel/>
        <div className="w-5/6 side-panel bg-slate-100 p-5">
        <div
            class="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6"
          >
            <span
              class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-slate-900">
                  #54 Ticket
                </h5>
                <p class="mt-1 text-xs font-medium text-slate-600">By Ana Doe</p>
              </div>

              <button class="group relative h-6 w-36 overflow-hidden rounded-2xl bg-green-500 text-sm font-bold text-white">
                Assign to me
                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </button>

            </div>

          </div>
          <br/>
          <div className="grid grid-cols-3">

            {/* TICKET INFO */}
            <div
              class="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6"
            >
              <span
                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

              <div class="justify-between sm:flex">
                <div>
                  <h5 class="text-md font-bold text-slate-900">
                    Ticket
                  </h5>
                </div>
              </div>

              <dl class="flex mt-6">
                
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-slate-600">31st June, 2022</dt>
                  <dd class="text-xs text-slate-500">Ticket Date</dd>
                </div>

                <div class="flex flex-col-reverse ml-8">
                  <dt class="text-sm font-medium text-slate-600">Open</dt>
                  <dd class="text-xs text-slate-500">Ticket Status</dd>
                </div>

                <div class="flex flex-col-reverse ml-8">
                  <dt class="text-sm font-medium text-slate-600">Ai</dt>
                  <dd class="text-xs text-slate-500">Ticket Mode</dd>
                </div>

              </dl>

            </div>
            
            {/* CALL INFO */}
            <div
              class="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6"
            >
              <span
                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

              <div class="justify-between sm:flex">
                <div>
                  <h6 class="text-md font-bold text-slate-900">
                    Call
                  </h6>
                </div>
              </div>

              <dl class="flex mt-6">
                
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-slate-600">12:40 AM</dt>
                  <dd class="text-xs text-slate-500">Call Time</dd>
                </div>

                <div class="flex flex-col-reverse ml-8">
                  <dt class="text-sm font-medium text-slate-600">763 256 000</dt>
                  <dd class="text-xs text-slate-500">Incoming Number</dd>
                </div>

                <div class="flex flex-col-reverse ml-8">
                  <dt class="text-sm font-medium text-slate-600">Sinhala</dt>
                  <dd class="text-xs text-slate-500">Language</dd>
                </div>

              </dl>

            </div>

            {/* CUSTOMER INFORMARION */}
            <div
              class="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6"
            >
              <span
                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

              <div class="justify-between sm:flex">
                <div>
                  <h5 class="text-md font-bold text-slate-900">
                    Customer
                  </h5>
                </div>
              </div>

              <dl class="flex mt-6">
                
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-slate-600">Srivin Prabhash</dt>
                  <dd class="text-xs text-slate-500">Customer Name</dd>
                </div>

                <div class="flex flex-col-reverse ml-8">
                  <dt class="text-sm font-medium text-slate-600">Business</dt>
                  <dd class="text-xs text-slate-500">Type</dd>
                </div>

                <div class="flex flex-col-reverse ml-8">
                  <dt class="text-sm font-medium text-slate-600">763 256 000</dt>
                  <dd class="text-xs text-slate-500">Mobile</dd>
                </div>

              </dl>

            </div>
          </div>
          

          {/* FORM STARTS */}
          <br />
          <div
            class="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6"
          >            
            <div>
              <div class="flex">
                <div class="mx-auto w-full">
                  <form action="" method="POST">
                    
                    <div class="mb-5">
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
          
          {/* FORM ENDS */}

          {/* ACTIVITY LOG */}
          <div className="p-6 grid grid-cols-1">
              <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 class="text-xl text-gray-900 font-bold">Activity log</h4>
                <div class="relative px-4">
                    <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                    <div class="flex items-center w-full my-6 -ml-1.5">
                        <div class="w-1/12 z-10">
                            <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                        </div>
                        <div class="w-11/12">
                            <p class="text-sm">Profile informations changed.</p>
                            <p class="text-xs text-gray-500">3 min ago</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center w-full my-6 -ml-1.5">
                        <div class="w-1/12 z-10">
                            <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                        </div>
                        <div class="w-11/12">
                            <p class="text-sm">
                                Connected with <a href="#" class="text-blue-600 font-bold">Colby Covington</a>.</p>
                            <p class="text-xs text-gray-500">15 min ago</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center w-full my-6 -ml-1.5">
                        <div class="w-1/12 z-10">
                            <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                        </div>
                        <div class="w-11/12">
                            <p class="text-sm">Invoice <a href="#" class="text-blue-600 font-bold">#4563</a> was created.</p>
                            <p class="text-xs text-gray-500">57 min ago</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center w-full my-6 -ml-1.5">
                        <div class="w-1/12 z-10">
                            <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                        </div>
                        <div class="w-11/12">
                            <p class="text-sm">
                                Message received from <a href="#" class="text-blue-600 font-bold">Cecilia Hendric</a>.</p>
                            <p class="text-xs text-gray-500">1 hour ago</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center w-full my-6 -ml-1.5">
                        <div class="w-1/12 z-10">
                            <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                        </div>
                        <div class="w-11/12">
                            <p class="text-sm">New order received <a href="#" class="text-blue-600 font-bold">#OR9653</a>.</p>
                            <p class="text-xs text-gray-500">2 hours ago</p>
                        </div>
                    </div>

                    <div class="flex items-center w-full my-6 -ml-1.5">
                        <div class="w-1/12 z-10">
                            <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                        </div>
                        <div class="w-11/12">
                            <p class="text-sm">
                                Message received from <a href="#" class="text-blue-600 font-bold">Jane Stillman</a>.</p>
                            <p class="text-xs text-gray-500">2 hours ago</p>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>

        </div>
    </div>
  </div>

  );
}


export default SingleTicket;