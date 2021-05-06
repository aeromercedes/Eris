module.exports = function(type, content) {
    if (!type || !content) {
        return;
    }

    const chalk = require('chalk')

    if (type == "err") {
        console.log(chalk.bgRed(chalk.black(`[Eris] | ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} | Error: ${content}`)))
    } else if (type == "info") {
        console.log(chalk.black(chalk.bgBlue(`[Eris] | ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} | ${content}`)))
    } else if (type == "success") {
        console.log(chalk.black(chalk.bgGreen(`[Eris] | ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} | ${content}`)))
    }
}