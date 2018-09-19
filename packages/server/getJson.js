const csvFilePath='./static/expense.csv'
const csv = require('csvtojson')

const getJson = async () => {

  const jsonObj = await csv()
    .fromFile(csvFilePath)
  
  return jsonObj

}


module.exports = getJson