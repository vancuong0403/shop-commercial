function B2 (props){
    const {listData}=props
    function renderData(){
       return (
        <div>
            <p>id: {listData.id}</p>
            <p>name: {listData.name} </p>
            <p>username: {listData.username}</p>
            <p>email: {listData.email}</p>
            <p>address:</p>

            {listData && listData.address && (
            <div>
                <p>street: {listData.address.street}</p>
                <p>suite: {listData.address.suite}</p>
            </div>
            )}

            <p>phone: {listData.phone}</p>
            <p>website: {listData.website}</p>
            <p>company:</p>
            {listData && listData.company && (
            <div>
                <p>name: {listData.company.name}</p>
                <p>catchPhrase: {listData.company.catchPhrase}</p>
            </div>
)}

    </div>
       )
    }
    return (
        <div>
            {renderData()}
        </div>
    )
}
export default B2