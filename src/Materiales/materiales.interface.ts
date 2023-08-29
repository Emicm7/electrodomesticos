import Proveedor from '../Proveedores/proveedores.interfaces';

interface Material {
    nombre: string;
    descripcion: string;
    stock: number;
    costo: number;
    proveedorId: number; // Agrega este atributo para la relación
    proveedor?: Proveedor; // Agrega este atributo opcional para almacenar los datos del proveedor asociado
  }
  
  export default Material;