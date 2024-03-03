import { useState } from "react";

// function Toongle (){
//     const [isToongle, setIsToongle]=useState(false)
//     function thaydoi(){
//         setIsToongle(!isToongle)
//     }
//     return(
//         <div>
//             {/* //thuật toán 3 ngôi  */}
//             <button onClick={thaydoi}>
//                 {isToongle ?"ON":"OFF"}
//             </button>
//         </div>
//     )
// }

function Toongle (){
    const[isToongle,setIsToongle]=useState(123)
    function thaydoi(){
        setIsToongle(666)
    }
    return (
        <>
        {isToongle}
    <button onClick={thaydoi}>Chạm vào</button>
        </>
    )
}
export default Toongle