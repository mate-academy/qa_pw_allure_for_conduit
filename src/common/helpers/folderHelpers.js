import fs from 'node:fs/promises';
import path from 'node:path';

export async function removeFolder(folderName, logger) {
  const folderPath = path.join(process.cwd(), folderName);

  try {
    await fs.access(folderPath);

    await fs.rm(folderPath, { recursive: true });
  } catch (err) {
    if (err.code !== 'ENOENT') {
      logger.error('Error occurred:', err);
    }
  }
}
