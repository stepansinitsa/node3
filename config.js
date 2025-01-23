import { createRequire } from "module";
const require = createRequire(import.meta.url);

export const myAPIkey = process.env.myAPIkey;

export const http = require("http");
export const readline = require("readline-sync");

export let town = readline.question("What's your town? ");
export const url = `http://api.weatherstack.com/current?access_key=${myAPIkey}&query=${town}`;
