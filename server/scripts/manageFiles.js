let elements = require('../config/elements')
let planList = require('../config/planlist')
let meta = require('../config/meta')
const fs = require('fs');


planList.forEach((element,index) => {
  planList[index].price =  elements[index].price
});


/* meta.forEach((e1, index) => {
  element = elements.filter(e2 => e2.id === e1.id)[0]
  element.metaTitle = meta[index].title
  element.metaDescription = meta[index].meta
});
 */
/* for (let index = 0; index < elements.length; index++) {
  for (let index2 = 0; index2 < elements[index].faq.length; index2 += 2) {
    if (!elements[index].faqObj) elements[index].faqObj = []
    if (elements[index].faq[index2]) {
      elements[index].faqObj.push({
        ask: elements[index].faq[index2],
        response: elements[index].faq[index2 + 1]
      })
    }

  }
} */

/* elements.forEach(element => {
  console.log(element.metaTitle);
  console.log(element.title);
}); */

//fs.writeFileSync("server/config/elements.json", JSON.stringify(elements), "utf-8")
fs.writeFileSync("server/config/planlist.json", JSON.stringify(planList), "utf-8")