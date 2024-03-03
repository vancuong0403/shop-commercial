const numbers=[5,6,7,8];
{/* <Numberlist numbers={numbers} /> */}
console.log(Numberlist)

function Numberlist(props){
    const numbers =props.numbers


    function listItemt(){
        return numbers.map((numbers)=>{
            //nếu tính toán gì trong map thì thực hiện ở đây
            return (
                <li key={numbers.toString()}>
                    {numbers}
                </li>
            )
        })
    }
    return(
        <ul>
            {listItemt()}
        </ul>
    )
}
export default Numberlist