const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'existing.txt');


const getStringSizeInBytesNode = (str) => {
  return Buffer.byteLength(str, "utf8") ;
};

function readFileWithErrorHandling(filename, callback) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      callback("File not found: " + filename);
      return;
    }
    let byteSize = getStringSizeInBytesNode(data);
    callback("File read successfully. Size: " + byteSize + " bytes");
  });
}
readFileWithErrorHandling(filePath,(result)=>{
    console.log(result)
})