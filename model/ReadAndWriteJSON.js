/**********************************************
 * Services 
 * ==================================
 *  How we access data store 
 *  Related to your application's requirements, usually 
 * In this instance, we are reading from a file 
 ***********************************************/
const fs = require("fs");

class ReadAndWriteJSON {
    /**********************************************
     * #TODO: Create the file of data that will be passed in 
     * ==================================
     ***********************************************/
    constructor(file) {
        this.file = file;
    }

    /**********************************************
     * #TODO: Create a write and read method to process the data 
     * ==================================
     ***********************************************/
    write(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.file, data, "utf8", (err) => {
                if (err) {
                    reject(err);
                }
                resolve("Success");
            });
        });
    }

    read() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.file, "utf8", (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

module.exports = ReadAndWriteJSON;