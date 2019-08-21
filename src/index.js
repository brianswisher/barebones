const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/api', (req, res) => {
  // raw
  const payload = ['hello', 'world'];

  // prep
  const message = payload.map(word => word.charAt(0).toUpperCase() + word.substr(1)).join('')

  res.json({message});
});

app.listen(port, () => console.log(`app running at http://localhost:${port}`));
