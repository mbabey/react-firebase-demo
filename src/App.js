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
 
  const printDataRef = () => {
    console.log(dataRef);
    console.log(dataRef.current.value);
  }

  const printFirestoreDocs = async () => {
    const objectArray = await handlers.firestoreRead();
    console.log(objectArray);
  }

  return (
   <div>
    <form onSubmit={doSubmit}>
      <input type="text" ref={dataRef} />
      <button type="submit" >Submit</button>
    </form>
    <button onClick={printDataRef}>Print dataRef</button>
    <button onClick={printFirestoreDocs}>print Firestore Entries</button>
   </div>   
  )
}

export default App