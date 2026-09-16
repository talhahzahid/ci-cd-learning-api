import Router from 'express';

const router = Router ();

let items = [];
let nextId = 1;

router.get ('/', (req, res) => {
  res.status (200).json (items);
});

router.post ('/', (req, res) => {
  const {name} = req.body;

  if (!name || typeof name !== 'string') {
    return res
      .status (400)
      .json ({error: 'name is required and must be a string'});
  }

  const newItem = {id: nextId++, name};
  items.push (newItem);
  return res.status (201).json (newItem);
});

router.get ('/:id', (req, res) => {
  const item = items.find (i => i.id === Number (req.params.id));
  if (!item) {
    return res.status (404).json ({error: 'Item not found'});
  }
  return res.status (200).json (item);
});


export default router;