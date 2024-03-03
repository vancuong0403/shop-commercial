function ActionLink (){
    function handleClick(e){
        e.preventDefault()
        console.log("The Link was clicked")
    }
    return(
        <button onClick={handleClick}>
            Click Zô đi
        </button>
    )
}
export default ActionLink