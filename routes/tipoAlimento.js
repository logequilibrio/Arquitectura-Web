const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const tipos = require('../models/tipoAlimento');
console.log(tipos);

router.get('/', (req, res) => {
    res.json(ListaActualizada());
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        let tipo = _.find(tipos, (t) => {
            return t.id == id;
        });
        res.status(200).json(tipo);
    } catch (e) {
        res.status(400).send({ error: 'not found' });
    }    
});

router.post('/', (req, res) => {
    const { Nombre } = req.body;
    if (Nombre) {
        let mayorId = 0;
        _.each(tipos, (tipo, i) => {
            if (parseInt(tipo.id) > mayorId) {
                mayorId = parseInt(tipo.id);
            }
        });
        try {
            let tipo = _.find(tipos, (t) => {
                return t.Nombre.toUpperCase() == Nombre.toUpperCase();
            });
            if (tipo.Activo == '1') {
                res.status(409).send({ error: 'Tipo de alimento existente en la base de datos.' });
            } else {
                tipo.Nombre = Nombre;                
                alimento.Activo = '1';
                res.status(201).json(ListaActualizada());
            }
        } catch (e) {
            mayorId = mayorId + 1;
            var id = mayorId.toString();
            var Activo = '1';
            const nuevoTipoAlimento = { ...req.body, id, Activo };
            tipos.push(nuevoTipoAlimento);
            console.log(nuevoTipoAlimento);
            res.status(201).json(ListaActualizada());
        }
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    try {
        let tipo = _.find(tipos, (t) => {
            return t.id == id;
        });
        const { Nombre } = req.body;
        if (Nombre) {
            tipo.Nombre = Nombre;            
            res.status(200).json(ListaActualizada());
        }
    } catch (e) {
        res.status(400).send({ error: 'not found' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    try {
        let tipo = _.find(tipos, (t) => {
            return t.id == id;
        });
        tipo.Activo = '0';
        console.log(tipo);
        res.status(200).json(ListaActualizada());
    } catch (e) {
        res.status(400).send({ error: 'not found' });
    }
    console.log(tipos);
});

function ListaActualizada() {
    return _.where(tipos, { Activo: '1' });
}

module.exports = router;