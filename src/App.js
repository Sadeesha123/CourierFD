import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import Dashboard from "./routes/Admindash";
import CreateDelivery from "./routes/DeliveryRoutes/createDelivery";
import Orders from "./routes/DeliveryRoutes/orders";
import RoutePlanning from "./routes/DeliveryRoutes/RoutePlanning";
import CustomerHome from "./routes/DamageDetect/CustomerHome";
import Inquiry from "./routes/DamageDetect/inquiry";
import ScanQR from "./routes/DamageDetect/ScanQR";
import PackageStatus from "./routes/DamageDetect/PackageStatus";
import InquiryStatus from "./routes/DamageDetect/InquiryStatus";
import AdminHome from "./routes/DamageDetect/AdminHome";
import PackageDispatch from "./routes/DamageDetect/PackageDispatch";
import PerformanceTrack from "./routes/DeliveryRoutes/performancetrack";
import CreateOrder from "./routes/DeliveryRoutes/createOrder";
import ChurnRank from "./routes/DeliveryRoutes/churnRank";
import UpdateOrder from "./routes/DeliveryRoutes/updateOrder";
import MoreInfo from "./routes/DeliveryRoutes/moreInfo";
import Modal from "./routes/DeliveryRoutes/removePopup";
import DeliveryRank from "./routes/DeliveryRoutes/deliveryRank";
import SingleOrder from "./routes/DeliveryRoutes/singleOrder";
import SingleOrderUpdate from "./routes/DeliveryRoutes/singleOrderUpdate";

// Routes: Dilakshi
import Tickets from "./pages/Tickets/Tickets";
import SingleTicket from "./pages/Tickets/SingleTicket";
import ManualTickets from "./pages/Tickets/ManualTickets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/CreateDelivery" element={<CreateDelivery/>}/>
          <Route path="/Orders" element={<Orders/>}/>
          <Route path="/RoutePlanning" element={<RoutePlanning/>}/>
          <Route path="/CustomerHome" element={<CustomerHome/>}/>
          <Route path="/Inquiry" element={<Inquiry/>}/>
          <Route path="/ScanQR" element={<ScanQR/>}/>
          <Route path="/PackageStatus" element={<PackageStatus/>}/>
          <Route path="/InquiryStatus" element={<InquiryStatus/>}/>
          <Route path="/AdminHome" element={<AdminHome/>}/>
          <Route path="/PackageDispatch" element={<PackageDispatch/>}/>
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/SingleOrder/:id" element={<SingleOrder/>}/>
           <Route path="PerformanceTrack" element={<PerformanceTrack/>}/>
          <Route path="/SingleOrderUpdate/:id" element={<SingleOrderUpdate/>}/>
          <Route path="CreateOrder" element={<CreateOrder/>}/>
          <Route path="ChurnRank" element={<ChurnRank/>}/>
          <Route path="UpdateOrder/:slug" element={<UpdateOrder/>}/>
          <Route path="MoreInfo/:slug" element={<MoreInfo/>}/>
          <Route path="Modal" element={<Modal/>}/>
          <Route path="DeliveryRank" element={<DeliveryRank/>}/>

          {/* Routes: Dilakshi */}
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/manualTickets" element={<ManualTickets />} />
          <Route path="/ticket/:id" element={<SingleTicket />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;