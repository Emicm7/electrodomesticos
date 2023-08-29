import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import IProveedor from '../Proveedores/proveedores.interfaces'; 

class Proveedor extends Model<IProveedor> {
  public nombre!: string;
  public telefono!: number;
  public email!: string;
  public detalles!: string;
  
}

Proveedor.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    detalles: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Proveedor',
    tableName: 'proveedores', 
  }
);

export default Proveedor;
