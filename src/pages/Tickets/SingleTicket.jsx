import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Sidepanel from "../../components/sidepanel";

// IMAGES
import ai from '../../images/ai.gif';
import propic from "../../images/propic.jpg";
import { useParams } from "react-router-dom";

// CLASS: SingleTicket
export default function SingleTicket() {

  let { id } = useParams()

  const [ticket, setTicket] = useState({})
  const [loading, setLoading] = useState(true)
  const [ticketMessage, setTicketMessage] = useState("")

  useEffect(() => {

    /**
     * Fetch ticket information and update the local
     * state to reflect the information
     */
    fetch("https://api.dcsrp.xyz/v1.0/ticket/" + id)
    .then(Response => Response.json())
    .then(Response => {
      console.log(Response)
      if (Response.status === "success") {
        setTicket(Response.data.ticket)
        setLoading(false)
      }
    })

  }, [])

  // Handle assign to me
  const handleAssignToMe = (event) => {
    event.preventDefault();

    fetch("https://api.dcsrp.xyz/v1.0/ticket/" + id + "/assign", { method: "POST" })
    .then(Response => Response.json())
    .then(Response => {
      if (Response.status === "success") {
        alert("Assigned to me")
        window.location.reload()
      } else {
        alert("Failed to assign ticket")
        window.location.reload()
      }
    })

  };


  const OnClick_Message = (event) => {
    event.preventDefault();

    fetch("https://api.dcsrp.xyz/v1.0/ticket/" + id + "/message", {
      method: "POST",
      body: JSON.stringify({
        message: ticketMessage
      })
    })
    .then(Response => Response.json())
    .then(Response => {
      console.log(Response)
      if ( Response.status === "success" ) {
        alert("Message sent to customer")
        window.location.reload()
      } else {
        alert("Failed to sent message to customer")
        window.location.reload()
      }
    })

  }


  // Convert unixtime to date
  function convert_date(ts) { return new Date(ts * 1000).toLocaleDateString("en-US") }

  function convert_time(ts) {
    let date = new Date(ts * 1000)
    return date.getHours() + ":" + date.getMinutes()
  }

  // RENDER TIMELINE
  function TimelineItems() {
    if ( ticket.timeline != null ) {
      return ticket.timeline.map((item) => {
        return (
          <div className="flex items-center w-full my-6 -ml-1.5" key={ item.id }>
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div className="w-11/12">
              <p className="text-sm">{ item.description }</p>
              <p className="text-xs text-gray-500">{ convert_time(item.time.created)}</p>
            </div>
          </div>
        )
      })
    }
  }


  if (loading) {
    return "Loading ..."
  } else {
    return(
      <div className="main-body h-screen w-full">
        {/* <link href="https://cdn.jsdelivr.net/npm/daisyui@3.6.4/dist/full.css" rel="stylesheet" type="text/css" /> */}
        <div className="main-body-container w-full flex flex-row absolute">
          <Sidepanel />
          <div className="w-5/6 side-panel p-5 md:ml-[300px] ml-16">

            <div className="flex flex-row w-full overflow-y-auto"> 
              <div className="flex flex-col main-body-container w-4/6 p-5">

                {/* GLANCE */}
                <div className="w-[100%] p-8 shadow-lg border bg-white border-slate-100 rounded-lg">
                  <div className="justify-between sm:flex">
                    <div>
                      <h5 className="text-xl font-bold text-slate-900">Ticket ID - #{ticket.id}</h5>
                    </div>
                    <button className="group relative px-5 py-2 overflow-hidden rounded-2xl bg-green-500 text-sm font-bold text-white" onClick={handleAssignToMe}>Assign to me
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                  </div>
                  <div className="grid grid-cols-6 w-[80%] mt-2">
                    <div className="col-span-3 p-3"><p className="text-gray-700 ">Opened Date :<span className="font-semibold"> { convert_date(ticket.time.created) }</span></p></div>
                    <div className=" col-span-3 p-3"><p className="text-gray-700 ">Update Date :<span className="font-semibold"> { convert_date(ticket.time.updated) }</span></p></div>
                    <div className=" col-span-3 p-3"><p className="text-gray-700 ">Current Time :<span className="font-semibold"> { convert_time(ticket.time.created) }</span></p></div>
                    <div className=" col-span-3 p-3"><p className="text-gray-700">Status :<span className="font-semibold"> { ticket.status }</span></p></div>
                    <div className=" col-span-6 p-3"><p className="text-gray-700 ">Question : </p></div>
                  </div>
                  <div className="border shadow-md text-gray-700 border-gray-400 w-full h-auto bg-gray-100 p-2 rounded-lg">
                    <p>{ ticket.call.transcript }</p>
                  </div>
                </div>

                {/* TEXTAREA */}
                <div className="w-[100%] mt-5 p-8 overflow shadow-lg border bg-white border-slate-100 rounded-lg">
                  <div className="flex">
                    <div className="mx-auto w-full">
                      <form action="" method="POST">
                        <div className="mb-5">
                          <textarea rows="4" name="message" id="message" placeholder="Type your message" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={(e)=>setTicketMessage(e.target.value)} value={ ticketMessage } />
                        </div>
                        <div>
                          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" onClick={OnClick_Message}>Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* TIMELINE */}
                <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8 ">
                  <h4 className="text-xl text-gray-900 font-bold">Time Line</h4>
                  <div className="relative px-4">
                    <TimelineItems />
                  </div>
                </div>

              </div>

              <div className="flex flex-col main-body-container w-[30%] h-full p-4">

                {/* IMPORTANT */}
                <div className="w-full h-50 justify-center items-center mt-1 hidden">
                  <div className="flex flex-row w-[100%] h-40 border border-red-400 bg-red-100 rounded-lg">
                    <div className="w-[90%] p-5 md:text-xs lg:text-sm xl:text-base"><p>Important Information</p></div>
                  </div>
                </div>

                {/* STAFF */}
                <div className={"flex-col rounded-lg w-full h-80 mt-3 border " + (ticket.agent == "manual" ? "flex" : "hidden")}>
                  <div className="w-full overflow-x-hidden sm:text-xs md:text-xs lg:text-xs xl:text-base rounded-t-lg bg-gray-700 text-white h-10 text-center pt-1 border border-gray-900">Asigned Staff Member</div>
                  <div className="flex flex-row w-full h-auto border p-3 overflow-x-auto ">
                    <div className=""><img className="w-14 h-14 rounded-full border object-cover" src={propic} /></div>
                    <div className="w-3/5 p-5 md:text-xs lg:text-sm xl:text-sm flex flex-row">
                      <p>dilakshilamahewa@gmail.com</p><FontAwesomeIcon icon={faPen} className="ml-1"/>
                    </div>
                  </div>
                  <div className="p-5 md:text-xs lg:text-xs xl:text-sm grid grid-cols-3 overflow-x-auto text-gray-600">
                    <div className=" mt-2">Email - </div><div className="col-span-2 mt-2">dilakshilamahewa@gmail.com</div>
                    <div className=" mt-2">Post - </div><div className="col-span-2 mt-2">Support Engineer</div>
                    <div className=" mt-2">Phone - </div><div className="col-span-2 mt-2"> 0704003184</div>
                    <div className="col-span-3 flex justify-end pr-5"><button className="bg-blue-600 px-4 py-1 rounded-lg text-gray-100 mt-5">Primary</button></div>
                  </div>
                </div>

                {/* AI */}
                <div className={"flex-col rounded-lg w-full h-80 mt-3 border " + (ticket.agent == "auto" ? "flex" : "hidden")}>
                  <div className="w-[100%] md:text-xs lg:text-sm xl:text-base rounded-t-lg bg-gray-700 text-white h-10 text-center pt-1 border border-gray-900">Auto (AI)</div>
                  <div className=""><h1 className="text-xl font-bold text-center pt-3">Hello!</h1></div>
                  <div className=" flex  justify-center items-center mt-2"><img src={ai} className="w-1/2 h-auto "/></div>
                  <div className="md:text-xs lg:text-sm xl:text-base flex justify-center items-center mt-2"><p>How can I help you?</p></div>
                </div>
              
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

}
