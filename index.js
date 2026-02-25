//create file
const fs = require("fs");

fs.writeFile("myfile.text", "Hello Nitin", (err) => {

    if (err) throw err;
    console.log("File created Successfully");

});

//read file

fs.readFile("myfile.text", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

//update file

fs.appendFile("myfile.textnitin", " Welcome to NodeJS", (err) => {
    if (err) throw err;
    console.log("File Updated Successfully");
});

//delete file
fs.unlink("myfile.text", (err) => {
    if (err) throw err;
    console.log("File Deleted Successfully");
});