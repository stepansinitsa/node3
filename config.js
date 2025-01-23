import { createRequire } from "module";
const require = createRequire(import.meta.url);

const myAPIkey = process.env.myAPIkey;

const readline = require("readline-sync");
let town = readline.question("What's your town? ");

export const http = require("http");
export const url = `http://api.weatherstack.com/current?access_key=${myAPIkey}&query=${town}`;
