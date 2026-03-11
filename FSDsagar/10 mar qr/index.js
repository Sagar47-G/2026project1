import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';
inquirer
  .prompt([
    {
        message: "Enter your url",
        name:"message"
    }
  ])
  .then((answers) => {
    const url=answers.message;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr.png'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });