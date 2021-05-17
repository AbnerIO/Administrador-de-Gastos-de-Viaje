// UI Constructor

//Firebase modules
import * as firebase from "./modules/BDFunctions.js";
import * as f from "./modules/functions.js";


//DOM Universal Activities---------------------------------------------------------------------------------------

firebase.cargarData();


//Impresion de datos
window.addEventListener("DOMContentLoaded", async (e) => { 
  firebase.onGetConcept((querySanpshot) => {
    document.getElementById("App").innerHTML=" "
    querySanpshot.forEach((doc) => {
      const CONCEPT=doc.data();
      CONCEPT.id = doc.id;
      let element = document.createElement("div");
      element.innerHTML = `
    <div class="gastos">  
    <strong>Fecha:</strong>${doc.data().date_}
    <strong>Concepto:</strong>${doc.data().name}
    <strong>Monto:</strong>${doc.data().price} ${doc.data().currency}s
    <strong>Lugar:</strong>${doc.data().place}
    <strong>Viajeros:</strong>${doc.data().traveler.join("-")}
    <a href="#" class="deletebtn" data-id="${CONCEPT.id}">Borrar</a>
    </div>
    `;
      document.getElementById("App").appendChild(element);
      document.getElementById("product-form").reset();
      const deletebtn = document.querySelectorAll(".deletebtn").forEach(btn=>{
      btn.addEventListener("click", async e=> {
        setTimeout(() => firebase.cargarData(), 500)
        await firebase.deleteConcept(e.target.dataset.id)
        


      })
      })
    });
  });
});


f.capturaDeDatos();

