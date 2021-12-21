const router=require('express').Router()

router.get('/getAllPeopleStartcharacter', async (req, res) => {
    try{
        let character = req.query.character;
        let listTav = await getAlllistTav(character);
        res.send(listTav);
    }
    catch (err){
        res.status(500).send(err.message);
    }
});

router.get('/getAlllistMinMax', async (req, res) => {
    try{
        let min = req.query.min;
        let max = req.query.max;
        let listTav = await getAlllistMinMax(min, max);
        res.status(200).send(listTav);
    }
    catch  (err) {
            res.status(500).send(err.message);
    }
    
});
router.post('/editPerson', async (req, res) => {
    try {
        let name = req.query.name;
        let age = req.query.age;
        edit = await addPerson(name, age);
        res.status(200).send(edit);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/getexactAge', async (req, res) => {
    try{
        let age = req.query.age;
        let sumAge = await getexactAge(age);
        res.status(200).send(sumAge);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

router.post('/addNewPersonName', async (req, res) => {
    try {
        let name =req.query.name;
        let age = req.query.age;
        contats = await addNewPersonName(name, age);
        res.status(200).send(contats);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports=router
