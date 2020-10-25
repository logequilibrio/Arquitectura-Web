const { Router } = require('express');
const router = Router();

router.get('/objeto', (req, res) => {
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.send('<h1>Hola mundo</h1>');
    const data = {
        "id": "1",
        "Name": "Luis",
        "Last name": "Gonzalez",
    }
    res.json(data);
    //res.json({ 'Title': 'Hola mundo' });
});

module.exports = router;