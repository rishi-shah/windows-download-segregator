export const configuration = {
  pathToWatch : "<download folder to watch>",
  segregation : {
    audio: {
      extensions: [".mp3",".wav",".m4a",".eps"],
      moveTo: "<path to audio>"
    },
    video: {
      extensions: [".mp4",".webm",".avi",".mov"],
      moveTo: "<path to video>"
    },
    image: {
      extensions: [".jpeg",".jpg",".gif",".tiff",".png",".heic",".bmp",".psd"],
      moveTo: "<path to image>"
    },
    document: {
      extensions: [".pdf",".doc",".docx",".xls",".xlsx",".csv",".json",".txt",".ppt",".pptx",".xlsm"],
      moveTo: "<path to document>"
    },
    compressed: {
      extensions: [".rar",".zip",".7z"],
      moveTo: "<path to compressed>"
    },
    executables: {
      extensions: [".exe",".msi"],
      moveTo: "<path to executables>"
    },
    books: {
      extensions: [".epub",".mobi"],
      moveTo: "<path to books>"
    }
  }
}