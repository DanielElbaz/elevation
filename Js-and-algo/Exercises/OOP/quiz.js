
// class Image {
//     constructor(url, width, height, db) {
//         this.url = url
//         this.width = width || 150
//         this.height = height || 150    
//         this.db = db
//     }

//     save() {
//         this.db.save(JSON.stringify(this))
//     }
// }

// class SQL_DB {
//     constructor() {}
//     save(str) {
//         // wicked code that saves to SQL database
//     }
// }

// class Mongo_DB {
//     constructor() {}
//     save(str) {
//         // wicked code that saves to Mongo database
//     }
// }

// const sqlDB = new SQL_DB()
// const mongoDB = new Mongo_DB()
// const pic = new Image("https://a3.amazon.com/93112/ist.png", null, null, sqlDB)

// pic.save()



// class APIManager {
//     constructor(route) {
//         this.route = route
//         this.data = {}
//     }

//     fetch() {
//         $.get(this.route, function(response) {
//             this.data = response
//         })
//     }
// }

// class Renderer {
//     construcor(scriptID, containerID, apiManager) {
//         this.scriptID = scriptID
//         this.containerID = containerID
//         this.apiManager = apiManager
//     }

//     render() {    
//         let source = $("#" + this.scriptID).html()
//         let template = Handlebars.compile(source)
//         $("#" + this.containerID).append(template(this.apiManager.data))
//     }
// }

// const foodApi = new APIManager("/foodRoute")
// const renderer = new Renderer("food-template", "container", foodApi)

// foodApi.fetch()
// renderer.render()


class Page{
    constructor(text){
        this.text = text
    }
}

class Notebook{
    constructor(pageNum){
        this.pageNum = pageNum
        this.pages = []
    }

    write(page){
        this.pages.push(page)
    }
}

class Diary extends Notebook{
    constructor(pageNum, owner){
        super(pageNum)
        this.owner = owner
    }
}

const myDiary = new Diary(50, "Shila")
const mathNotebook = new Notebook(200)
const p1 = new Page("Pythagoreas realized that the sum of the squares of the sides of a right triangle will equal the square of the hypotenuse")
myDiary.pages.push(new Page("I think I'm in love with a Greek man."))

console.log(myDiary.pages[0].text)



class Planet{
    constructor(name){
        this.name=name;
    }
}
 
let earth = new Planet
earth.name = "Earth 2.0"
console.log(earth.name)
