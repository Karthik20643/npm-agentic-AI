require('dotenv').config()

import express from 'express';
import { agent } from './agent';
import { HumanMessage } from '@langchain/core/messages';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/agent', async (req, res) => {
  try {
    const result = await agent.invoke({
      messages: [
        new HumanMessage(req.body.message)
      ]
    })

    console.log(result.messages[result.messages.length - 1].content);
    res.send(result.messages[result.messages.length - 1].content);
  } catch (error) {
    console.error('Error: ', error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});