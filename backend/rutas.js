const router = require ('express').Router()
const conexion = require('./config/conexion')

//---- Agregamos las rutas---
// Get (Listar) equipos
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM tb_equipo';
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            console.log('Error al listar equipos:', err);
            return res.status(500).json({ error: 'Error al listar equipos' });
        }

        console.log('Equipos encontrados:', rows);

        const numEquipos = rows.length;
        if (numEquipos === 0) {
            console.log('No se encontraron equipos');
            return res.status(404).json({ message: 'No se encontraron equipos' });
        }

        res.json({ message: 'Equipos encontrados:', numEquipos, equipos: rows });
    });
});



// Get (Obtener) un equipo
router.get('/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'SELECT * FROM tb_equipo WHERE id_equipo = ?';
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) {
            console.log('Error al obtener el equipo:', err);
            return res.status(500).json({ error: 'Error al obtener el equipo' });
        }

        if (rows.length === 0) {
            console.log('No se encontró el equipo con el ID especificado');
            return res.status(404).json({ message: 'No se encontró el equipo con el ID especificado' });
        }

        res.json(rows);
    });
});


// Agregar un equipo

router.post('/', (req, res)=>{
    const{nombre, logo} =  req.body

    let sql = `insert into tb_equipo(nombre, logo) values ('${nombre}', '${logo}')`
    conexion.query(sql, (err, rows, fields)=>{
        if (err) throw err 
        else {
            res.json({status: 'Equipo Agregado: ' })
        }
    })
})

// Eliminar un Equipo

router.delete('/:id', (req, res)=> {
    const{id}=req.params
    let sql = `delete from tb_equipo where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if (err) throw err 
        else {
            res.json({status: 'Equipo Eliminado' })
        }
    })
})

// Modificar  un Equipo

router.put('/:id', (req, res)=>{
    const{id}= req.params
    const{nombre, logo}= req.body

    let sql = `update tb_equipo set 
            nombre = '${nombre}', 
            logo = '${logo}'
            where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
                if (err) throw err 
                else {
                    res.json({status: 'Equipo Modificado' })
                }
    })
})
//---------------------------
 
module.exports = router;