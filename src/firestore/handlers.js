import Firestore from "./firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"

const ref = collection(Firestore, 'pp-data');

const firestoreSubmit = async (data) => {
    try {
        const newDoc = await addDoc(ref, data);
        console.log(newDoc);
    } catch (err) {
        console.log(err);
    }
}

const firestoreRead = async () => {
    let objectArray = [];
    
    try {
        const snapshot = await getDocs(ref);
        snapshot.forEach(doc => {
            objectArray.push({id: doc.id, ...doc.data()})
            console.log(doc.id, ' => ', doc.data());
        });
    } catch (err) {
        console.log(err);
    }

    return objectArray;
}

const handlers = {
    firestoreSubmit,
    firestoreRead
}

export default handlers