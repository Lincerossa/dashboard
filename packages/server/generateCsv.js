var xlsx = require('node-xlsx');
var fs = require('fs');

var obj = xlsx.parse(fs.readFileSync(`${__dirname}/static/expense.xls`))

var rows = [];
var writeStr = "";

//looping through all sheets
for(var i = 0; i < obj.length; i++)
{
    console.log(i)
    var sheet = obj[i];
    //loop through all rows in the sheet
    for(var j = 0; j < sheet['data'].length; j++)
    {
            //add the row to the rows array
            rows.push(sheet['data'][j]);
    }
}

//creates the csv string to write it to a file
for(var i = 0; i < rows.length; i++)
{
    writeStr += rows[i].join(",") + "\n";
}

//writes to a file, but you will presumably send the csv as a      
//response instead
fs.writeFile(__dirname + "/static/expense.csv", writeStr, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("test.csv was saved in the current directory!");
});


