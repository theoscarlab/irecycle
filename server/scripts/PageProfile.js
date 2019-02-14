const DEBUG = true

module.exports = {
    image: function ($) {
        let src = ""
        $("img.gig__image").each((index, e) => {
            src = e.attribs.src
        })
        return src;
    },
    title: function ($) {
        return $("h1.gig__title").text()
    },
    reviews: function ($) {
        return $("span.gig__reviews").text()
    },
    description: function ($) {
        return $("p.gig__description").text()
    },
    expect: function ($) {
        let ulList = $(".gig__detail ul")
        let expectList = ulList[1]
        let list = []

        for (var i = 0; i < expectList.children.length; i++) {
            if (expectList.children[i].name === 'li') {
                list.push(expectList.children[i].children[0].data)
            }
        }
        return list
    },
    need: function ($) {
        let ulList = $(".gig__detail ul")
        let needList = ulList[2]
        let list = []
        for (var i = 0; i < needList.children.length; i++) {
            if (needList.children[i].name === 'li') {
                list.push(needList.children[i].children[0].data)
            }
        }
        return list
    },
    faq: function ($) {
        let ulList = $(".gig__detail ul")
        let needList = ulList[3]
        let list = []
        for (var i = 0; i < needList.children.length; i++) {
            if (needList.children[i].name === 'li') {
                list.push(needList.children[i].children[0].data)
            }
        }
        return list
    },
    comment: function ($) {
        let commentList = $(".reviews .review")
        let list = []

        //console.log(commentList[0].children[3].children[1])
        for (let index = 0; index < commentList.length; index++) {
            try {
                list.push({
                    name: commentList[index].children[1].children[1].data,
                    comment: commentList[index].children[3].children[1].children[0].data
                })
            } catch (error) {
                //ignore
            }
        }
        return list
    },

}