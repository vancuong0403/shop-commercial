function Erros (props){
    let {errors}= props
    function renderErro (){
        if ( Object.keys(errors).length > 0){
            return Object.keys(errors).map((key ,index)=>{
                return (
                    <li key={index}>{errors[key]}</li>
                )
            })
        }
    }
    return (
        <ul>
            {renderErro()}
        </ul>
    )
}
export default Erros