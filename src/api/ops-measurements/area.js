const cagMeasurements = require('../../core/utils/cagMeasurements')
const csgMeasurements = require('../../core/utils/csgMeasurements')

const {isCAG} = require('../../core/utils')

const area = input => {
  return isCAG(input) ? cagMeasurements.area(input) : csgMeasurements.area(input)
}

module.exports = area