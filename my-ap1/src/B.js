import React from "react";

function B(props) {
  function renderData(){
    const {list} = props
    console.log(list)
    if(list.length>0){
      return list.map((value,key)=>{
        return (
          <ul>
            <li key={key}>
              <p >id: {value.id}</p>
              <p >name: {value.name}</p>
              <p >username: {value.username}</p>
              <p >email: {value.email}</p>
              <p>address:</p>
              <p >street: {value.address.street}</p>
              <p >suite: {value.address.suite}</p>
              <p >phone: {value.phone}</p>
              <p >website: {value.website}</p>
              <p>company:</p>
              <p >company_name: {value.company.name}</p>
              <p >company_catchPhrase: {value.company.catchPhrase}</p>
            </li>
            </ul>
         
        )
      }
      )
    }

  }
  return (
    <ul>
    <p>data</p>
   {renderData()}
    </ul>
  )
}

export default B;
