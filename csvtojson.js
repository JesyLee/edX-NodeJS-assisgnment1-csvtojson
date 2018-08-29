const csvtojson = require('csvtojson')
const fs = require('fs')

csvtojson()
.fromFile('./customer-data.csv')
.then((jsonObj) => {
        fs.writeFile('customer-data.json', JSON.stringify(jsonObj,null,2), (err) => {
        if (err) {
            return console.log(err);
        }
    })
})

