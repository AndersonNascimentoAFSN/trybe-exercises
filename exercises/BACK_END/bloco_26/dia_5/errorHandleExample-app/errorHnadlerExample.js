const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

// app.get('/:fileName', async (req, res, next) => {
//   try {
//     const file = await fs.readFile(`./${req.params.fileName}`);
//     res.send(file.toString('utf-8'));
//   }
//   catch(e) {
//     next(e);
//   }
// });

// usando rescue

app.get(
  '/:fileName', rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: `${err.message}` });
});

app.listen(3002, () => {
  console.log('Iniciando app na porta 3002');
});
