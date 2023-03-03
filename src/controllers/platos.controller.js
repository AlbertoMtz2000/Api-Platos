import { pool } from '../db.js'

export const getPlatos = async (req,res)=>{
    try{
    const [rows] = await pool.query('SELECT * FROM platos')
    res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
    
}
export const getPlato = async(req,res)=>{
    const [rows] = await pool.query('SELECT * FROM platos WHERE id = ?',[req.params.id])
    if (rows.length <= 0)return res.status(404).json({
        message: 'Employee not found'
    })
    res.json(rows[0])
}
// crear
export const createPlatos = async (req,res)=>{
    const {nombre, descripción, nova} = req.body
    const [rows]=await pool.query('INSERT INTO platos (nombre, descripción, nova) VALUE (?,?,?)',[nombre, descripción, nova])
    res.send({
        id: rows.insertId,
        nombre,
        descripción,
        nova,
    })
}

// modificar
export const updatePlatos = async (req,res)=>{
    const { id } = req.params
    const { nombre, descripción, nova } = req.body

    const result = await pool.query('UPDATE platos SET nombre = IFNULL(?,nombre), descripción = IFNULL(?,descripción), nova = IFNULL(?,nova) WHERE id = ?',
    [nombre,descripción,nova,id])

    console.log(result)

    if (result.affectedRows === 0)return res.status(404).json({ 
        message: "Plato no encontrado" 
    })

    const [rows]=await pool.query('SELECT * FROM platos WHERE id = ?', [id])

    res.json(rows[0])
}

// eliminar
export const deletePlatos = async (req, res) => {
    const [result] = await pool.query('DELETE FROM platos WHERE id = ?', [req.params.id])
    if(result.affectedRows <= 0) return res.status(404).json({ 
        message: 'dish not found' 
    })

    res.sendStatus(204)
}

