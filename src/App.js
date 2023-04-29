import React from 'react';
import handlers from './firestore/handlers';
import { useRef } from 'react';

function App() {
  const dataRef = useRef();
  
  const doSubmit = async (e) => {
    e.preventDefault();
    console.log(dataRef.current);
    console.log(dataRef.current.value);
    await handlers.firestoreSubmit({
      data: dataRef.current.value
    });
  }
 
  const printDataref = () => {
    console.log(dataRef);
    console.log(dataRef.current.value);
  }

  return (
   <div>
    <form onSubmit={doSubmit}>
      <input type="text" ref={dataRef} />
      <button type="submit" >Submit</button>
    </form>
    <button onClick={printDataref}>Print dataRef</button>
   </div>   
  )
}

export default App