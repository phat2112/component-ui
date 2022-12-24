const path = require("path");
const fs = require("fs");

const CUSTOM_HOOK_PATH = path.join(__dirname, "../Components/hooks");
const HOOK_TEXT_PATH = path.join(__dirname, "../Constants");

(() => {
  fs.readdir(CUSTOM_HOOK_PATH, (err, files) => {
    if (err) {
      console.log("err", err);
      return;
    }
    let filesContent = [];

    files.forEach((file) => {
      const buffer = fs.readFileSync(`${CUSTOM_HOOK_PATH}/${file}`);

      filesContent.push({
        content: buffer.toString("utf-8"),
        name: file.split(".")[0],
      });
    });

    filesContent = filesContent.reduce((acc, cur) => {
      acc = `${acc} \n export const ${cur.name} = \` ${cur.content} \` `;

      return acc;
    }, "");

    fs.writeFileSync(`${HOOK_TEXT_PATH}/hookText.ts`, filesContent);
  });
})();
