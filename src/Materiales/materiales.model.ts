import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import IMaterial from '../Materiales/materiales.interface';
import Proveedor from '../Proveedores/proveedores.model'; 

class Material extends Model<IMaterial> {
  public nombre!: string;
  public descripcion!: string;
  public stock!: number;
  public costo!: number;
  public proveedorId!: number; 
  public proveedor?: Proveedor; 
}

Material.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    proveedorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['solido', 'liquido', 'gaseoso']],
      },
    },
  },
  {
    sequelize,
    modelName: 'Material',
    tableName: 'materiales', 
  }
);

Material.belongsTo(Proveedor, { foreignKey: 'proveedorId', as: 'proveedor' }); 

export default Material;
