var fs = require("fs");

function getFileSize(filePath) {

       if (fs.existsSync(filePath)) {

            // convert it to humanly readable format.
            var stats = fs.statSync(filePath),                
                size = stats["size"],
                i = 0;
                if (String(size)==='0') {
                    return "Empty File";
                }
                i = Math.floor( Math.log(size) / Math.log(1024) );
            return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
        } else {
            return "File Not Found";
        }    
}
module.exports = getFileSize;