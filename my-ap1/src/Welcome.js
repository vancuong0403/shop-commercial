import React from 'react';

function Hel (props){
    return (
        <h1> Hello,{props.name}</h1>
       )
}
function Welcome (props){
    
    return (
        <>
         <Hel name = "Cuong 1" /> 
         <Hel name = "Cuong 1" /> 
         <Hel name = "Cuong 2" /> 
        </>
    )
   }
// class Welcome extends React.Component{
//     render (){
//         return <h1></h1>
//     }
// }
export default Welcome