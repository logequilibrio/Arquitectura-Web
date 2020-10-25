const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const alimentos = require('../models/alimento');
console.log(alimentos);

router.get('/', (req, res) => {    
    res.json(ListaActualizada());
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        let alimento = _.find(alimentos, (ali) => {
            return ali.id == id;
        });
        res.status(200).json(alimento);
    } catch (e) {
        res.status(400).send({ error: 'not found' });
    }
    res.json(alimentos);
});

router.post('/', (req, res) => {
    const { Nombre, Calorias, Hidratos, Proteinas, Grasas, Fibras } = req.body;    
    if (Nombre, Calorias, Hidratos, Proteinas, Grasas, Fibras) {
        let mayorId = 0;
        _.each(alimentos, (alimento, i) => {
            if (alimento.Nombre == Nombre) {
                res.status(409).send({error:'Alimento existente en la base de datos.'})
            } else if (parseInt(alimento.id) > mayorId) {
                mayorId = parseInt(alimento.id);
            }            
        });
        mayorId = mayorId + 1;
        var id = mayorId.toString();
        var Activo = '1';
        const nuevoAlimento = { ...req.body, id, Activo };
        alimentos.push(nuevoAlimento);
        console.log(nuevoAlimento);
        res.status(201).json(alimentos);        
    }    
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    try {
        let alimento = _.find(alimentos, (ali) => {
            return ali.id == id;
        });
        const { Nombre, Calorias, Hidratos, Proteinas, Grasas, Fibras } = req.body;
        if (Nombre, Calorias, Hidratos, Proteinas, Grasas, Fibras) {
            alimento.Nombre = Nombre;
            alimento.Calorias = Calorias;
            alimento.Hidratos = Hidratos;
            alimento.Proteinas = Proteinas;
            alimento.Grasas = Grasas;
            alimento.Fibras = Fibras;
            res.status(200).json(alimentos);
        }
    } catch (e) {
        res.status(400).send({ error: 'not found' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    try {
        let alimento = _.find(alimentos, (ali) => {
            return ali.id == id;
        });
        alimento.Activo = '0';
        console.log(alimento);
        res.status(200).json(ListaActualizada());
    } catch (e) {
        res.status(400).send({ error: 'not found' });
    }    
});

function ListaActualizada() {
    return _.where(alimentos, { Activo: '1' });    
}

module.exports = router;