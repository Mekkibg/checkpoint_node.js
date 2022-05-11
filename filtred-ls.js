const fs=require('fs');
const path=require('path');
const { element } = require('prop-types');

const file = process.argv[2];
const extantion = `.${process.argv[3]}`;

fs.readdir(file, (err, list)=>{
    if (err) return console.error(err);
    list.forEach(element => {
        if (path.extname(element) === extantion){
            console.log(element)
        }
    });
})

