const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

// Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }

  res.send({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});