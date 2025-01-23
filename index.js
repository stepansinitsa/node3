import { http, url } from "./config.js";

http.get(url, (res) => {
  const { statusCode } = res;
  if (statusCode !== 200) {
    console.log(`statusCode: ${statusCode}`);
    return;
    }

  res.setEncoding("utf8");
  let rowData = "";
  res.on("data", (chunk) => (rowData += chunk));
  res.on("end", () => {
    let parseData = JSON.parse(rowData);
    console.log(parseData);
  });
}).on("error", (err) => {
    console.error(err);
});
