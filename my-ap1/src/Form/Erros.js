function Erros(props){
    function renderErro(){
        // obj
        let {getErros}=props
        if(Object.keys(getErros).length>0){
            return Object.keys(getErros).map((key, index) =>{
                return(
                    <li key={index}>{getErros[key]}</li>
                )
            }
            )
        }


        // arr
        // let {getErros}=props
        // if(getErros.length > 0){
        //     return getErros.map((value ,key)=> {
        //         return (
        //             <li key={key}>{value}</li>
        //         )
        //     }
        //     )
        // }

    }
    return(
        <ul>{renderErro()}</ul>
    )
}
export default Erros;