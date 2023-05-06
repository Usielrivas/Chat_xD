// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAIApi } from "openai";
import * as readline from "readline";
import 'dotenv/config'
// import * as cliMd from "cli-markdown"
let cliMd;

import("cli-markdown/index.js").then(module => {
  cliMd = module.default;
}).catch(err => {
  // Maneja errores aquí
  console.error("Error de cli-markdown")
  console.log(err)
});

const configuration = new Configuration({
  apiKey: process.env.API_KEY, // Pon aquí tu API key
});
const openai = new OpenAIApi(configuration);

let conversation = [{"role": "system", "content": ""}] // Mensaje vacío para empezar
  // {"role": "user", "content": "que es javascript"},
  // {"role": "assistant", "content": "si"},
  // {"role": "user", "content": "que precio"},
// ];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askUser() {
  rl.question('GPT 3.5 xD: ', (answer) => {
    conversation.push({"role": "user", "content": answer});
    generateResponse();
    // rl.close();
  });
}

async function generateResponse() {
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: conversation,
  });
  const response = chatCompletion.data.choices[0].message;
  conversation.push(response);
  console.warn("\u001b[33m-->\u001b[0m" + " " + response.role)
  const text = cliMd(response.content)
  console.log(text);
  askUser();
}

askUser();

