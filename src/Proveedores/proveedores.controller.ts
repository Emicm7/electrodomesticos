import { Request, Response, NextFunction } from 'express';
import Proveedor from '../Proveedores/proveedores.model';

// Crear un nuevo proveedor
export const post = async (req: Request, res: Response) => {
  try {
    const { nombre, telefono, email, detalles, direccion } = req.body;

    // Crea un nuevo proveedor en la base de datos
    const proveedor = await Proveedor.create({
      nombre,
      telefono,
      email,
      detalles,
      direccion,
    });
    

    res.status(201).json(proveedor);
  } catch (error) {
    res.status(400).json({ error  });
  }
};

// Obtener todos los proveedores
export const index = async (req: Request, res: Response) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un proveedor por su ID
export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const proveedor = await Proveedor.findByPk(id);

    if (!proveedor) {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    } else {
      res.status(200).json(proveedor);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un proveedor por su ID
export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, telefono, email, detalles } = req.body;
    const proveedor = await Proveedor.findByPk(id);

    if (!proveedor) {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    } else {
      await proveedor.update({
        nombre,
        telefono,
        email,
        detalles,
      });
      res.status(200).json(proveedor);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar un proveedor por su ID
export const destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const proveedor = await Proveedor.findByPk(id);

    if (!proveedor) {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    } else {
      await proveedor.destroy();
      res.status(200).json(proveedor); 
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


