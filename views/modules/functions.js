
import * as firebase from "./BDFunctions.js";
import * as UI from "./UI.js";
const ui = new UI.UI;
export const ConsultaTotal = (id, user, divisa) => {
  document.getElementById(`${id}`).addEventListener("click", function (e) {
    let total = 0;
    for (let i = 0; i < firebase.datas.length; i++) {
      if (firebase.datas[i].currency === "Peso" && firebase.datas[i].traveler.includes(`${user}`)) {
        total += parseFloat(firebase.datas[i].price / firebase.datas[i].traveler.length);
      } else if (
        firebase.datas[i].currency === "Euro" &&
        firebase.datas[i].traveler.includes(`${user}`)
      ) {
        total += parseFloat((firebase.datas[i].price * 24.56) / firebase.datas[i].traveler.length);
      } else if (
        firebase.datas[i].currency === "Dolar" &&
        firebase.datas[i].traveler.includes(`${user}`)
      ) {
        total += parseFloat((firebase.datas[i].price * 20.59) / firebase.datas[i].traveler.length);
      }
    }
    total = UI.decimas(total, 2)
    switch (divisa) {
      case "pesos":
        ui.printResult(`${user}`, total, divisa);
        break;
      case "euros":
        total /= 24.56;
        total = UI.decimas(total, 2)
        ui.printResult(`${user}`, total, divisa);
        break;
      case "dólares":
        total /= 20.59;
        total = UI.decimas(total, 2)
        ui.printResult(`${user}`, total, divisa);
        break;
    }
    e.preventDefault();
  });
}
export const consultaTotalTodos = (id, divisa) => {
  document.getElementById(`${id}`).addEventListener("click", function (e) {
    let total = 0;
    for (let i = 0; i < firebase.datas.length; i++) {
      if (firebase.datas[i].currency === "Peso") {
        total += parseFloat(firebase.datas[i].price);
      } else if (firebase.datas[i].currency === "Euro") {
        total += parseFloat(firebase.datas[i].price * 24.56);
      } else if (firebase.datas[i].currency === "Dolar") {
        total += parseFloat(firebase.datas[i].price * 20.59);
      }
    }
    switch (divisa) {
      case "pesos":
        total = UI.decimas(total, 2)
        ui.printResult("Todos", total, divisa);
        break;
      case "euros":
        total /= 24.56;
        total = UI.decimas(total, 2)
        ui.printResult("Todos", total, divisa);
        break;
      case "dólares":
        total /= 20.59;
        total = UI.decimas(total, 2)
        ui.printResult("Todos", total, divisa);
        break;
    }
    e.preventDefault();
  });
}
export const capturaDeDatos = () => {
  document
    .getElementById("product-form")
    .addEventListener("submit", (e) => {
      let currency;
      const name = document.getElementById("name").value;
      const price = document.getElementById("price").value;
      const place = document.getElementById("place").value;
      const date_ = document.getElementById("date").value;
      if (document.getElementById("Peso").checked) {
        currency = "Peso";
      } else if (document.getElementById("Dolar").checked) {
        currency = "Dolar";
      } else if (document.getElementById("Euro").checked) {
        currency = "Euro";
      } else alert("Por favor selecciona una moneda");
      let traveler = [];
      if (document.getElementById("traveler1").checked) {
        traveler.push("Juan");
      }
      if (document.getElementById("traveler2").checked) {
        traveler.push("Pedro");
      }
      if (document.getElementById("traveler3").checked) {
        traveler.push("Carlos");
      }
      if (document.getElementById("traveler4").checked) {
        traveler.push("Ana");
      }
      if (document.getElementById("traveler5").checked) {
        traveler.push("Maria");
      }
      if (document.getElementById("traveler6").checked) {
        traveler.push("Alejandra");
      }
      setTimeout(() => firebase.cargarData(), 500)
      firebase.saveConcept(name, price, currency, traveler, place, date_);
      e.preventDefault();
    });
}

export const ConsultaPorFechas = (id, user, divisa) => {
  document.getElementById(`${id}`).addEventListener("click", async (e) => {
    const gastos_user = [];
    let url;
    url = urlSelector(url,user);
    for (let index = 0; index < firebase.datas.length; index++) {
      if (firebase.datas[index].traveler.includes(user)) {
        gastos_user.push(firebase.datas[index])
      }
    }
    gastos_user.forEach(gasto => {
      let total;
      switch (gasto.currency) {
        case "Dolar":
          total = gasto.price*20.59
          total = UI.decimas(total,2)
          break;
          case "Euro":
            total = gasto.price*24.56
            total = UI.decimas(total,2)
            
          break;
      
        default:
          total = gasto.price
          break;
      }
      const productList = document.getElementById("resultados");
      const element = document.createElement("div");
      element.innerHTML = `
      <div class="historial-container">
      ${url}
      <div class="historial"> 
      En ${gasto.date_}, ${user} gastó ${total/gasto.traveler.length} ${divisa}
      </div>
      </div>
      `;
      productList.appendChild(element);
    
    });
    
    e.preventDefault();
  });
}

export const ConsultaPorCiudad = (id, user, divisa) => {
  document.getElementById(`${id}`).addEventListener("click", async (e) => {
    const gastos_user = [];
    let url;
    url = urlSelector(url,user);
    for (let index = 0; index < firebase.datas.length; index++) {
      if (firebase.datas[index].traveler.includes(user)) {
        gastos_user.push(firebase.datas[index])
      }
    }
    gastos_user.forEach(gasto => {
      let total;
      switch (gasto.currency) {
        case "Dolar":
          total = gasto.price*20.59
          total = UI.decimas(total,2)
          break;
          case "Euro":
            total = gasto.price*24.56
            total = UI.decimas(total,2)
            
          break;
      
        default:
          total = gasto.price
          break;
      }
      const productList = document.getElementById("resultados");
      const element = document.createElement("div");
      element.innerHTML = `
      <div class="historial-container">
      ${url}
      <div class="historial"> 
      En ${gasto.place}, ${user} gastó ${total/gasto.traveler.length} ${divisa}
      </div>
      </div>
      `;
      productList.appendChild(element);
    
    });
    e.preventDefault();
  });
}

export const ConsultaRegistro = (id, user, divisa) => {
  document.getElementById(`${id}`).addEventListener("click", async (e) => {
    const gastos_user = [];
    let url;
    url = urlSelector(url,user);
    for (let index = 0; index < firebase.datas.length; index++) {
      if (firebase.datas[index].traveler.includes(user)) {
        gastos_user.push(firebase.datas[index])
      }
    }
    gastos_user.forEach(gasto => {
      let total;
      switch (gasto.currency) {
        case "Dolar":
          total = gasto.price*20.59
          total = UI.decimas(total,2)
          break;
          case "Euro":
            total = gasto.price*24.56
            total = UI.decimas(total,2)
            
          break;
      
        default:
          total = gasto.price
          break;
      }
      const productList = document.getElementById("resultados");
      const element = document.createElement("div");
      element.innerHTML = `
      <div class="historial-container">
      ${url}
      <div class="historial"> 
      A ${user} en la ciudad de :${gasto.place} con fecha ${gasto.date_}<br>
      Le corresponde el monto de ${total} ${divisa} <br>
      Por el concepto: ${gasto.name} <br>
      En el cual está(n) involucrado(s): ${gasto.traveler}
      </div>
      </div>
      `;
      productList.appendChild(element);
    
    });
    e.preventDefault();
  });
}

const urlSelector = (url, user)=> {
  switch (user) {
    case "Juan":
       return '<img src="/img/t1.png" alt="traveler" class="stickers2">';
      break;
    case "Pedro":
       return '<img src="/img/t2.png" alt="traveler" class="stickers2">';
      break;
    case "Carlos":
       return '<img src="/img/t3.png" alt="traveler" class="stickers2">';
      break;
    case "Ana":
       return '<img src="/img/t4.png" alt="traveler" class="stickers2">';
      break;
    case "Maria":
       return '<img src="/img/t5.png" alt="traveler" class="stickers2">';
      break;
    case "Alejandra":
       return '<img src="/img/t6.png" alt="traveler" class="stickers2">';
      break;
    case "Todos":
       return '<img src="/img/travelers.png" alt="traveler" class="stickers2">';
      break;
  }
}
