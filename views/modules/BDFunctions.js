
export let datas=[] //recolector de datos JS
const db = firebase.firestore();
export const saveConcept = (name,price,currency, traveler,place,date_) => {
  db.collection("conceptos").doc().set({
    name,
    price,
    currency,
    traveler,
    place,
    date_,
  });
};
export const cargarData = ()=>{  db.collection("conceptos").get()
.then((snapshot) => {
  const data =  snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  datas = data;
});}
export const getConcept = () => db.collection("conceptos").get();
export const onGetConcept = (callback) => db.collection("conceptos").onSnapshot(callback);
export const deleteConcept = (id) => db.collection("conceptos").doc(id).delete();