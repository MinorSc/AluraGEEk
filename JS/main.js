// Importar la función de api.js
import { getProductos } from './api.js';

// Función para renderizar los productos en el frontend
const renderizarProductos = async () => {
  const productos = await getProductos(); // Llama al método de la API
  const contenedor = document.querySelector('.product-list');

  // Limpiar el contenedor antes de renderizar
  contenedor.innerHTML = '';

  if (productos.length === 0) {
    contenedor.innerHTML = '<p class="no-products">No se han agregado productos</p>';
    return;
  }

  // Crear las tarjetas para cada producto
  productos.forEach((producto) => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio.toFixed(2)}</p>
      <button class="delete-btn" data-id="${producto.id}">🗑️</button>
    `;
    contenedor.appendChild(card);
  });
};

// Inicializar la aplicación
const inicializar = () => {
  renderizarProductos();
};

// Ejecutar la inicialización al cargar la página
window.addEventListener('DOMContentLoaded', inicializar);
