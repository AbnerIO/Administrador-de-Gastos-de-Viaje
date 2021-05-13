
export let data = [];
export class UI {
  addProduct(product) {
    const productList = document.getElementById("App");
    const element = document.createElement("div");
    element.innerHTML = `
      ${i + 1}<div class="gastos">  
      <strong>Fecha:</strong>${product.date_}
          <strong>Concepto:</strong>${product.name}
          <strong>Monto:</strong>${product.price} ${product.currency}s
          <strong>Lugar:</strong>${product.place}
          <strong>Viajeros:</strong>${product.traveler.join("-")}
          <a href="#" class="deletebtn" name="delete">Borrar</a>
        </div>
      `;
    data.push(product);
    productList.appendChild(element);
    this.deleteProduct();
    console.log(data);

  }
  printResult(traveler, total, divisa) {
    let url;
    switch (traveler) {
      case "Juan":
        url = '<img src="/img/t1.png" alt="traveler" class="stickers2">';
        break;
      case "Pedro":
        url = '<img src="/img/t2.png" alt="traveler" class="stickers2">';
        break;
      case "Carlos":
        url = '<img src="/img/t3.png" alt="traveler" class="stickers2">';
        break;
      case "Ana":
        url = '<img src="/img/t4.png" alt="traveler" class="stickers2">';
        break;
      case "Maria":
        url = '<img src="/img/t5.png" alt="traveler" class="stickers2">';
        break;
      case "Alejandra":
        url = '<img src="/img/t6.png" alt="traveler" class="stickers2">';
        break;
      case "Todos":
        url = '<img src="/img/travelers.png" alt="traveler" class="stickers2">';
        break;
    }
    const productList = document.getElementById("resultados");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="historial-container">
      ${url}
      <div class="historial"> 
      El total de ${traveler} es de ${total} ${divisa}
        </div>
      </div>
      `;
    productList.appendChild(element);
    this.deleteProduct();

  }
  deleteProduct() {
    document.getElementById("product-form").reset();
  }
  resetLog() {
    document.querySelector("#resultados").innerHTML = ` `;

  }
}

export const decimas = (num, decimales = 2) => {
  let signo = num >= 0 ? 1 : -1;
  num = num * signo;
  if (decimales === 0) return signo * Math.round(num);
  num = num.toString().split("e");
  num = Math.round(
    +(num[0] + "e" + (num[1] ? +num[1] + decimales : decimales))
  );
  num = num.toString().split("e");
  return signo * (num[0] + "e" + (num[1] ? +num[1] - decimales : -decimales));
};
