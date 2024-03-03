
function B1(props){
    const {listdata}=props
    console.log(listdata)
    function renderData(){
        if(listdata.length>0){
            return listdata.map((value,key)=>{
                return (
                    <ul>
                        <li key={key}>
                            <p>id: {value.id}</p>
                            <p>name: {value.name}</p>
                            <p>username: {value.username}</p>
                            <p>email: {value.email}</p>
                            <p>address: </p>
                            <p>street: {value.street}</p>
                            <p>suite: {value.suite}</p>
                            <p>phone: {value.phone}</p>
                            <p>website {value.website}</p>
                            <p>company:</p>
                            <p>name: {value.name}</p>
                            <p>catchPhrase: {value.catchPhrase}</p>
                        </li>
                    </ul>
                )
            })
        }
    }
 return(
<ul>
{renderData()}
</ul>
 )   
}
export default B1

