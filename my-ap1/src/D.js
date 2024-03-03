import React from "react";

function D(props) {
  const { data } = props; 
  function renderData() {
    
    return (
      <div>
      
        <p>id: {data.id}</p>
        <p>name: {data.name}</p>
        <p>username: {data.username}</p>
        <p>email: {data.email}</p>
        <p>address:</p>
        <p>street: {data.address.street}</p>
        <p>suite: {data.address.suite}</p>
        <p>phone: {data.phone}</p>
        <p>website: {data.website}</p>
        <p>company:</p>
        <p>name: {data.company.name}</p>
        <p>catchPhrase: {data.company.catchPhrase}</p>
        
      </div>
    );
  }

  return (
    <>
    <p>object 1 cấp</p>
      {renderData()}
    </>
  );
}

export default D;
