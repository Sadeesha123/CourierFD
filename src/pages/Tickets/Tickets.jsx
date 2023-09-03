import React from "react";
import Sidepanel from "../../components/sidepanel";
import bg from '../../images/mainbg1.jpg';

export default class Tickets extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tickets: []
    }
  }

  componentDidMount = () => {
    console.log("Test")

    fetch("https://api.dcsrp.xyz/v1.0/tickets")
    .then(Response => Response.json())
    .then(Response => {
      if (Response.status === "success") {
        this.setState({...this.state, tickets: Response.data.tickets})
      }
    })

  }

  render() {
    return (
      <div className="main-body h-screen w-full bg-slate-100">
        <img src={bg} alt="" className="object-cover w-[100%] h-[100%] fixed" />
        <div className="main-body-container w-full flex flex-row absolute">
          <Sidepanel />
          <div className="w-5/6 side-panel p-5 md:ml-[300px] ml-16">

            <div className="common-body p-5 flex flex-col h-full bg-white rounded-lg">
              <h2 className="flex items-center justify-center pt-4 text-xl uppercase font-bold pb-4 mt-4">All Tickets</h2>

                  <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-6 py-4">#ID</th>
                          <th scope="col" class="px-6 py-4">Customer's Name</th>
                          <th scope="col" class="px-6 py-4">Customer's Mobile</th>
                          <th scope="col" class="px-6 py-4">Status</th>
                          <th scope="col" class="px-6 py-4">Mode</th>
                          <th scope="col" class="px-6 py-4">Date</th>
                          <th scope="col" class="px-6 py-4">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          this.state.tickets.map((ticket, idx) => {
                            return <tr key={idx} class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                              <td class="whitespace-nowrap px-6 py-4 font-medium">{ ticket.id }</td>
                              <td class="whitespace-nowrap px-6 py-4">{ ticket.customer.name }</td>
                              <td class="whitespace-nowrap px-6 py-4">{ ticket.customer.mobile }</td>
                              <td class="whitespace-nowrap px-6 py-4">{ ticket.status }</td>
                              <td class="whitespace-nowrap px-6 py-4">Ai</td>
                              <td class="whitespace-nowrap px-6 py-4">{ ticket.time.created }</td>
                              <td class="whitespace-nowrap px-6 py-4">
                                <a href={"/ticket/" + ticket.id }>
                                  <button class="group relative h-8 w-24 overflow-hidden rounded-2xl bg-blue-500 text-sm font-bold text-white">View Ticket
                                    <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                  </button>
                                </a>
                              </td>
                            </tr>
                          })
                        }

                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
