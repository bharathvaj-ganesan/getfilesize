let fs = require("fs");
function getFileSize(filePath) {
  var stats = fs.statSync(filePath);
  console.log('stats', stats);
  var size = stats["size"];
  // convert it to humanly readable format.
  var i = Math.floor( Math.log(size) / Math.log(1024) );
  return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
}
console.log(getFileSize('dummy.txt'));
module.exports = getFileSize;