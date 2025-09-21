

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function deleteFolderAllureReport() {
  const folderPath = path.join(__dirname, '../../../allure-results');

  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log('Folder "allure-results" deleted');
  } else {
    console.log('Folder "allure-results" not exist');
  }
}
