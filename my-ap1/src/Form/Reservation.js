import { useState } from "react"

function Reservation (props){
    const [isGoing,setisGoing]= useState(true)
    const [guest ,setGuest]= useState(2)
    function renderList (e){
        const target = e.target


        if(target.type==='checkbok'){
            setisGoing(target.checkbok)
        } else {
            setGuest(target.value)
        }
    }
    return (
        <form>
            <label>
                <input
                name = "isGoing"
                type ="checkbox"
                checked = {isGoing}
                onChange={renderList}
                />
            </label>
            <p></p>
            <label>
                <input
                name= "guest"
                type = "number"
                value={guest}
                onChange={renderList}
                />
            </label>
        </form>
    )
}
export default Reservation