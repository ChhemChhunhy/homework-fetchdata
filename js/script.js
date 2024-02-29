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

const productsPerPage = 12; // Change this value based on your preference
        const totalProducts = products.length;
        const totalPages = Math.ceil(totalProducts / productsPerPage);

        // Function to render products for a given page
        function renderProducts(page) {
            const startIndex = (page - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;
            const paginatedProducts = products.slice(startIndex, endIndex);
            const renderArea = document.getElementById('render-Area');
            renderArea.innerHTML = '';
            paginatedProducts.forEach(product => {
                renderArea.innerHTML += cardProduct(product);
            });
        }

        // Function to render pagination links
        function renderPagination() {
            const paginationContainer = document.getElementById('pagination');
            paginationContainer.innerHTML = '';
            for (let i = 1; i <= totalPages; i++) {
                const paginationLink = `
                    <button 
                        class="mx-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                        onclick="renderProducts(${i})"
                    >
                        ${i}
                    </button>
                `;
                paginationContainer.innerHTML += paginationLink;
            }
        }

        // Initialize page
        renderProducts(1);
        renderPagination();
