// import logo from './logo.svg';
import './App.css';
import Head from './compoment/Layout/Head';
import Footer from './compoment/Layout/Footer';
import Menuleft from './compoment/Layout/Menuleft';
import { useLocation } from 'react-router-dom';
import Menuacc from './compoment/Account/Menuacc';

function App(props) {
  let params1=useLocation()
  // console.log(params1)
  let params2=useLocation()
  return (
   <>
   <Head/>
   <section>
        <div className='container'>
          <div className='row'>
          {params1['pathname']||params2['pathname'].includes("account"|| "addproduct")?<Menuacc/> : <Menuleft/>} 
            {props.children}
          </div>
          </div>
      </section>
   <Footer/>
   </>
  );
}

export default App;
