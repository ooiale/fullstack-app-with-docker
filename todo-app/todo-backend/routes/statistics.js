const express = require('express');
const router = express.Router();
const {getAsync, setAsync} = require('../redis')

router.get('/', async (req, res) => {
  let count = await getAsync('TODO_COUNT_KEY')
  count = count ? parseInt(count) : 0

  res.status(200).json({
    added_todos: count
  });
})

module.exports = router;
