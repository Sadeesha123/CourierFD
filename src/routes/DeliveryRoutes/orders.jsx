import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel from "./sidepanel";
import { post } from "../../Api";
import bg from '../../images/mainbg.jpg';


function Orders()
{
    const [stopL, setStopL] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [rows, setRows] = useState([]);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };
   
    const getData = async () =>{
        try {
            const response = await post('/api/order/table', {}, {});
                if(response){
                    console.log(response)
                    setRows(response.table)
                }
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(stopL){
            getData();
            setStopL(false)
        }
        
      }, []);

    const deleteData = async (id) =>{
        try {
            const response = await post('/api/order/delete', {id:id}, {});
                if(response){
                    console.log(response)
                    getData();
                    //setRows(response.table)
                }
            
        } catch (error) {
             console.error(id);
        }
    }

    return(

            <div className="main-body h-screen w-full bg-slate-100">
              <img src={bg} alt="" srcset="" className="object-cover w-[100%] h-[100%]" />
                    <div className="main-body-container h-screen w-full flex flex-row absolute top-0 bg-black bg-opacity-50">
                        <Sidepanel/>
                        <div className="w-5/6 side-panel  p-5 sm:ml-[300px] ml-12 lg:ml-[300px]">
                          <div className="common-body p-5 flex flex-col h-full">

                            <div className="table-container sm:w-[90%] flex flex-row h-full  mx-auto justify-between">
                                
                               
                                <div className="table-body w-full backdrop-blur-md ">
                                        <table className="w-full text-center">
                                            <th className="font-medium p-2 text-white bg-[#d7002a] text-[10px] md:text-[1rem]">Destination</th>
                                            <th className="font-medium p-2 text-white bg-[#d7002a] text-[10px] md:text-[1rem]">Order ID</th>
                                            <th className="font-medium p-2 text-white bg-[#d7002a] text-[10px] md:text-[1rem]">Vehicle</th>
                                            <th className="font-medium p-2 text-white bg-[#d7002a] text-[10px] md:text-[1rem]">Status</th>
                                            <th className="font-medium p-2 text-white bg-[#d7002a] text-[10px] md:text-[1rem]">Departure Date</th>
                                            <th className="font-medium p-2 text-white  bg-[#d7002a] text-[10px] md:text-[1rem]">Estimated Date</th>
                                            <th className="font-medium p-2 text-white  bg-[#d7002a] text-[10px] md:text-[1rem]">Action</th>
                                        

                                            <tbody className="">

                                                { rows.map( (row) => { return(
                                                    <tr className="leading-[25px] mt-[20px] border-b " key={row.order_id}>
                                                        <td className="Destination p-2" >
                                                            {row.destination}
                                                        </td>
                                                        <td className="Order-ID p-2" >
                                                            #{row.order_id}
                                                        </td>
                                                        <td className="Vehicle p-2" >
                                                            {row.vehicle}
                                                        </td>
                                                        <td className="Status p-2 text-red-600" >
                                                            {row.status}
                                                        </td>
                                                        <td className="Departure-Date p-2" >
                                                            {row.departure_date}
                                                        </td>
                                                        <td className="Estimated-Date p-2" >
                                                            {row.date}
                                                        </td>

                                                        <td className="Estimated-Date p-2" >
                                                            <div className="flex flex-row justify-center space-x-5">
                                                                    <Link to={"/SingleOrderUpdate/"+row.id}><button className="px-3 py-2 bg-sky-500 rounded-md">UPDATE</button></Link>
                                                                    <button onClick={()=>deleteData(row.id)} className="px-3 py-2 bg-red-500 rounded-md">REMOVE</button>
                                                                    <Link to={"/SingleOrder/"+row.id}><button className="px-3 py-2 bg-green-500 rounded-md">INFO</button></Link>
                                                            </div>
                                                        </td>


                                                    </tr>
                                                )}
                                            )}

                                               
                                                
                                            </tbody>



                                        </table>
                                </div>

                                


                            </div>


                          </div>
                        </div>
                        
                    </div>
            </div>

    );
}


export default Orders;