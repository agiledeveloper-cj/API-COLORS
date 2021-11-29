const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const colors = require('../db.json');


router.get('/', (req, res) => {
    let result = colors.map(c => ({ id: c.id, name: c.name, color: c.color }));
    res.json(result);

    //*** Creando una paginación ***
    /*const page = req.query.page;
    const limit = req.query.limit;
    const starIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = colors.slice(starIndex, endIndex);
    let newColors = result.map(c => ({ id: c.id, name: c.name, color: c.color }));
    res.json(newColors);*/
    //

});


router.get('/:id', (req, res) => {
    const idCol = req.params.id;
    const result = colors.find(c => c.id == idCol);
     if (result) {
       res.json(result);
    } else {
       res.json({ message: `El id ${idCol} no existe.`})
    }
});


router.post('/', (req, res) => {
    const { name, year, color, pantone_value } = req.body;
    if (name && year && color && pantone_value) {
        const id = colors.length + 1;
        const newColors = {...req.body, id};
        colors.push(newColors);
        res.send(colors);
    }
    else {
        res.status(500).json({error: 'Error del servidor.'});
    }
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, year, color, pantone_value } = req.body;
    if (name && year && color && pantone_value) {
        _.each(colors, (color, i) => {
            if (color.id == id){
                color.name = name;
                color.year = year;
                //color.color = color;
                color.pantone_value = pantone_value;
            }
        });
        res.json(colors);
        //const myColors = JSON.stringify(colors); //convierte un valor javascript en cadena json
        //console.log(myColors);
    } else {
        res.status(500).json({error: 'Error del servidor.'});
    }
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(colors, (color, i) => {
        if (color.id == id){
            colors.splice(i, 1);
        }
    });
    res.send(colors);
});


module.exports = router;