const fs = require("fs");
// fs.writeFile("message.txt","Hello From NodeJS!",(err)=>{
//     if (err) throw err;
//     console.log("The File hass been Saved");
// })

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});