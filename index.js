import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([{
      message: 'Type your URL',
      name: 'URL',
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_svg.png'));
    // console.log('QR code saved as qr_svg.png');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Handle TTY Error
    } else {
      // Handle other errors
    }
  });
