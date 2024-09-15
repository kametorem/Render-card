import { cardComponent } from "../components/Card.js";
import { data } from "../data/products.js";

let renderArea = document.querySelector("#render-area")
console.log(data)

data.map((product)=> {
    renderArea.innerHTML += cardComponent(product)
})