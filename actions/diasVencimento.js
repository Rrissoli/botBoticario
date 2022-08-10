const { invalid } = require('moment')
var moment = require('moment')
/**
 * Small description of your action
 * @title The title displayed in the flow editor
 * @category Custom
 * @author Your_Name
 * @param {string} name - An example string variable
 * @param {any} value - Another Example value
 */
const myAction = async () => {

  arrDtVcto = []
  for (let i = 0; i < 9; i++) {
    dayWeek = moment().add(i, 'days')
    let day = new Date(dayWeek)
    day = day.getDay(dayWeek)
    if (day == 1) {
      let dia = moment().add(i, 'days').format('DD-MM-YYYY')
      arrDtVcto.push(dia)
    }
    if (day == 2) {
      let dia = moment().add(i, 'days').format('DD-MM-YYYY')
      arrDtVcto.push(dia)
    }
    if (day == 3) {
      let dia = moment().add(i, 'days').format('DD-MM-YYYY')
      arrDtVcto.push(dia)
    }
    if (day == 4) {
      let dia = moment().add(i, 'days').format('DD-MM-YYYY')
      arrDtVcto.push(dia)
    }
    if (day == 5) {
      let dia = moment().add(i, 'days').format('DD-MM-YYYY')
      arrDtVcto.push(dia)
    }
  }
  console.log(arrDtVcto)

}

return myAction()