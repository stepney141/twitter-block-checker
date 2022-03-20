const fs = require("fs");
const jsondata = require("./data.json");

(async () => {
    const result_filename = "./result.txt";
    fs.writeFileSync(result_filename, "");
    for (const array of jsondata["blockedUsers"]) {
        // fs.appendFileSync(result_filename, `@${array[1]["sn"]}\n`);
        fs.appendFileSync(result_filename, `${array[1]["name"]}: https://twitter.com/${array[1]["sn"]}\n`);
    }
})()
