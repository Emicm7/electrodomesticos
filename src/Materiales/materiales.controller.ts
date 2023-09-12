import { Request, Response } from 'express';
import Material from '../Materiales/materiales.model';

// Crear un nuevo material
export const post = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, stock, costo, proveedorId, tipo } = req.body;

    // Crea un nuevo material en la base de datos
    const material = await Material.create({
      nombre,
      descripcion,
      stock,
      costo,
      proveedorId,
      tipo,
    });

    res.status(201).json(material);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Obtener todos los materiales
export const index = async (req: Request, res: Response) => {
  try {
    const materiales = await Material.findAll();
    res.status(200).json(materiales);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un material por su ID
export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const material = await Material.findByPk(id);

    if (!material) {
      res.status(404).json({ error: 'Material no encontrado' });
    } else {
      res.status(200).json(material);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un material por su ID
export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, stock, costo, proveedorId } = req.body;
    const material = await Material.findByPk(id);

    if (!material) {
      res.status(404).json({ error: 'Material no encontrado' });
    } else {
      await material.update({
        nombre,
        descripcion,
        stock,
        costo,
        proveedorId,
      });
      res.status(200).json(material);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar un material por su ID
export const destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const material = await Material.findByPk(id);

    if (!material) {
      res.status(404).json({ error: 'Material no encontrado' });
    } else {
      await material.destroy();
      res.status(200).json(material); 
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
