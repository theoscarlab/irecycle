let elements = require('../config/elements')
let plansList = require('../config/planlist')
const db = require('../config/mongoose').connect();
const Plan = require('../modules/plans/plan.model')



/* elements.forEach((element, index) => {
  setTimeout(() => {
    Plan.create(element)
    console.log(index)
  }, 500 * index);
}); */

plansList.forEach((element, index) => {
  setTimeout(() => {
    Plan.updateOne({ id: element.id }, { minDescription: element.description, minReviews: element.reviews }).catch(console.error)
    console.log(index)
  }, 500 * index);
});

