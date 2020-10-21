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
     * Will pass in an instance of a file 
     * ==================================
     ***********************************************/
    constructor(file) {
        this.file = file;
    }

    /**********************************************
     * Writes the data onto the file; and will tell you if it's successful or not 
     * 
     * boolean write(data)
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

    /**********************************************
     * Reads the data - will tell you if it's successful or not 
     * 
     * boolean read() 
     * ==================================
     ***********************************************/
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