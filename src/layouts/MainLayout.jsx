import { Outlet } from "react-router-dom"
import Navbar from "../pages/Shared/Navbar"
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from "../pages/Shared/Footer";
const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer />
      
    </div>
  )
}

export default MainLayout
