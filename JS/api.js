// Definir la URL base de tu servidor
const BASE_URL = 'http://localhost:3000';

// Método para obtener los productos del servidor
const getProductos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/productos`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const data = await response.json();
    return data; // Retorna los datos al momento de ser llamados
  } catch (error) {
    console.error('Error en getProductos:', error);
    return []; // Retorna un array vacío en caso de error
  }
};

// Exportar el método para usarlo en otros archivos
export { getProductos };
