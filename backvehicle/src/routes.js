const router = require('express').Router();
const Car = require('./model');
const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
    const items = await Car.find({});
    return res.status(200).json(items);
})


router.get('/:id' , async (req, res) => {
  try {
    const id = req.params.id;
    
    const item = await Car.findOne({_id: id});
    if (!item) return res.status(404).json({ error: 'Item not found' });
    return res.status(200).json(item);
  }catch (error) {
    res.status(400).json({message: error.message})
  }
});

router.post('/', async (req, res) => {
  const {placa, numero_economico, vim, asientos, seguro, numero_deseguro, 
        marca,modelo,anio,color,longitud, latitud} = req.body || {};
  
  if(placa && numero_economico &&  vim && asientos &&  seguro && numero_deseguro 
      && marca && modelo && anio && color  && longitud && latitud) {
      let data={
        placa,
        numero_economico,
        vim,
        asientos,
        seguro,
        numero_deseguro,
        marca,
        modelo,
        anio,
        color,
        latitud,
        longitud
      }
      try {
          const dataToSave = await Car.create(data);
          res.status(200).json(dataToSave);
      }catch (error) {
          res.status(400).json({message: error.message})
      }
  }else{
      res.status(422).json({message: "Invalid parameters"})
  }
})

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const options = { new: true }

  const {placa, numero_economico, vim, asientos, seguro, numero_deseguro,
     marca,modelo,anio,color,longitud, latitud} = req.body || {};
  
  if(placa && numero_economico &&  vim && asientos &&  seguro && numero_deseguro 
    && marca && modelo && anio && color && longitud && latitud) {
      let data={
        placa,
        numero_economico,
        vim,
        asientos,
        seguro,
        numero_deseguro,
        marca,
        modelo,
        anio,
        color,
        latitud,
        longitud,
        /*ubicacion:{
          type: "Point",
          coordinates: [longitud,latitud]
        }*/
      }
      try {
        const item = await Car.findByIdAndUpdate(id,data,options);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        return res.status(200).json(item);
      }catch (error) {
        res.status(400).json({message: error.message})
      }
  }else{
      res.status(422).json({message: "Invalid parameters"})
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const id = req.params.id;
    var tipoid= ObjectId.isValid(id);
    if (!tipoid) {
      return res.status(404).json({ error: 'Invalid Object id' });
    }
    const item = await Car.findByIdAndDelete({_id: id});
    if (!item) return res.status(404).json({ error: 'Item not found' });
    return res.status(200).json(item);
  }catch (error) {
    res.status(400).json({message: error.message})
  
  }


});


module.exports = router;