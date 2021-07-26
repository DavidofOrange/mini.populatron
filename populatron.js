const fs = require("fs");
const csv = require("csvtojson");

module.exports = {
  totalPopulation(onFinished) {
    csv()
      .fromFile("cities.csv")
      .then((data) => {
        let result = 0;
        for (let i = 0; i < data.length; i++) {
          result += parseInt(data[i].population);
        }
        onFinished(result);
      });
  },
};
