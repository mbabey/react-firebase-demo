import Firestore from "./firestore";
import { addDoc, collection } from "@firebase/firestore"


const firestoreSubmit = async (data) => {
    console.log("made it collection.");
    const ref = collection(Firestore, 'pp-data');

    try {
        console.log("made it addDoc.");
        const newDoc = await addDoc(ref, data);
        console.log(newDoc);
    } catch (err) {
        console.log(err);
    }
}

const firestoreRead = async () => {

}

const handlers = {
    firestoreSubmit,
    firestoreRead
}

export default handlers