import { cardProduct } from "../components/cardProduct.js"
import {cardUser} from "../components/cardUser.js"
import {getData} from "../store/fetchApi.js"
const renderArea = document.querySelector('#render-Area')
const userArea = document.querySelector('#user-area')

const products = await getData("products")
const users = await getData("users")
products.map((product)=>{
    renderArea.innerHTML += cardProduct(product);
})

users.map((user)=>{
    userArea.innerHTML += cardUser(user);
})
