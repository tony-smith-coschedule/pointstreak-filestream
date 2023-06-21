import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';

// import all the .env file values
dotenv.config();
const apiKey = process.env.API_KEY;
const interval = process.env.REFETCH_MINUTES * 1000 * 60;
const apiBaseUrl = process.env.API_BASE_URL;
const endpoint = process.env.ENDPOINT;
const filetype = process.env.FILETYPE;
const directory = process.env.EXPORT_DIRECTORY;
const filename = process.env.FILENAME;

async function run() {
  // Builds the api call url
  const url = `${apiBaseUrl}/${endpoint}/${filetype}`;
  // Builds the absolute path for the file to export to
  const exportPath = `${directory}/${filename}.${filetype}`;
  while (true) {
    // Completes the api call, putting the info in the data variable
    let { data } = await axios.get(url, {
      headers: {
        apiKey,
      },
    });
    // if you are using the json filetype transform the data to json format
    if (filetype === 'json') {
      data = JSON.stringify(data);
    }
    // Write the file
    fs.writeFile(exportPath, data, (err) => {
      if (err) throw err;
      const updatedAt = new Date();
      // Output timestamp to console to confirm its working
      console.log(`File updated at ${updatedAt}`);
    });
    // Waits the number of minutes set in the .env file
    await sleep();
  }
}

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
}

run();
