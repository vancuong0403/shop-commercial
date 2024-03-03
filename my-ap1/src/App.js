import logo from './logo.svg';
import './App.css';
import Linh from './Linh';
function App(props) {
  console.log(props)
  // console.log(props.data1)
  function renderData(){
    const {objj}=props
    if(Object.keys(objj).length > 0){
      
      return Object.keys(objj).map((key,index)=> {
        return (
          // key : đánh dấu số thứ tự để các thẻ không trùng nhau
          <li key={key}>
            {objj["age"]}
          </li>
        )
      }
      )
    }
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //      Võ Văn Cường
    //     </a>
    //   </header>
    // </div>
      <>
      <p>Map theo obj</p>
      <ul>
        {renderData()}
        </ul>
      {/* <p>Truyền biến các compoment : {props.data3.phone} </p> 
      <Linh cuong = {props.data3}></Linh> */}
      </>

  );
}

export default App;
