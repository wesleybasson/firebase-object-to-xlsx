const data = require('./jsondata/data.json')
const _ = require('lodash')
const chalk = require('chalk');
const XLSX = require('xlsx');

const log = console.log;

log(`${chalk.blue('Reconfiguring data...')}`);
try {
  // Make the uid part of the output object:
  const reconfigureddata = _.map(data, (obj, uid) => {
    return {
      ...obj,
      uid
    };
  });
  log(`${chalk.green('Data reconfigured.')}`);

  // Create new workbook and save the data into a sheet:
  log(`${chalk.blue('Creating new workbook...')}`);
  let outbook = XLSX.utils.book_new();
  const newsheet = XLSX.utils.json_to_sheet(reconfigureddata);
  XLSX.utils.book_append_sheet(outbook, newsheet, 'Data');
  XLSX.writeFile(outbook, 'outputdata.xlsx');
  log(`${chalk.green('Workbook saved!')}`);
  log(`${chalk.green('Program complete!')}`);
} catch (error) {
  log(`${chalk.red('An error occurred!')}`);
}
