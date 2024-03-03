import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Footer from './Footer';
function App(props) {
  return (
   
   <div>
        <Head />
          {props.children}
        <Footer/>
      </div>
  );
}

export default App;
