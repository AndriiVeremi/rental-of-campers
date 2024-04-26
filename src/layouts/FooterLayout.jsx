import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';


const FooterLayout = () => {
    return (
      <div>
      <Outlet />
      <Footer/>
      </div>
  
    );
  }
  
  export default FooterLayout;