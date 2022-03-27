import chokidar from 'chokidar';
import { configuration } from './config/config';
import * as path from 'path';
import mv from 'mv';

const startWatching = () => {
  console.log(configuration.pathToWatch);
  const watcher = chokidar.watch(configuration.pathToWatch, 
    {
      persistent: true, 
      awaitWriteFinish: true, 
    });
  watcher
    .on('add', (filePath) => { fileSegragation(filePath) })
    .on('unlink', (filePath) => {console.log(`File ${filePath} with extension ${path.extname(filePath)}, has been removed`)})
    .on('error', (err) => {console.error(err)});
}

const fileSegragation = (filePath: string) => {
  const fileExt = path.extname(filePath);
  if(configuration.segregation.audio.extensions.includes(fileExt.toLowerCase())) {
    moveTo(filePath, configuration.segregation.audio.moveTo);
  } else if (configuration.segregation.video.extensions.includes(fileExt.toLowerCase())) {
    moveTo(filePath, configuration.segregation.video.moveTo);
  } else if (configuration.segregation.image.extensions.includes(fileExt.toLowerCase())) {
    moveTo(filePath, configuration.segregation.image.moveTo);
  } else if (configuration.segregation.document.extensions.includes(fileExt.toLowerCase())) {
    moveTo(filePath, configuration.segregation.document.moveTo);
  } else if (configuration.segregation.compressed.extensions.includes(fileExt.toLowerCase())) {
    moveTo(filePath, configuration.segregation.compressed.moveTo);
  } else if (configuration.segregation.executables.extensions.includes(fileExt.toLowerCase())) {
    moveTo(filePath, configuration.segregation.executables.moveTo);
  } else if (configuration.segregation.books.extensions.includes(fileExt.toLowerCase())) {
    moveTo(filePath, configuration.segregation.books.moveTo);
  }
  
}

const moveTo = (filePath: string, moveTo: string) => {
  const fileName = path.basename(filePath);
  const newPath = `${moveTo}\\${fileName}`;
  mv(filePath, newPath, (err) => { if(err) console.log(err); console.log(`File Moved from ${filePath}, to ${newPath}`)});
}

startWatching();