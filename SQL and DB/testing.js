
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:1234@127.0.0.1/recipes')



// sequelize
//   .query("SELECT * FROM company")
//   .then(function ([results, metadata]) {
//     results.forEach(c => console.log(c.name))
//   });

//   sequelize
//     .query("INSERT INTO company VALUES(null, 'Google', 'Tech', 10000)")
//     .then(function ([result]) {
//         console.log(result)
//     }) 
async function addStudent(s_name, is_brillant) {
    let query = (`INSERT INTO student VALUES(s_id,'${s_name}','${is_brillant}')`)
    let result = await sequelize.query(query)
    return result[0];
}

async function addTeacher(t_name,is_tenured){
    let query=(`INSERT INTO teacher VALUES(t_id,'${t_name}','${is_tenured}')`)
    let result = await sequelize.query(query)
    return result[0];
}

const enrollStudent = async function (studentName, teacherName) {
    let studentData = await sequelize.query(`SELECT s_id FROM student WHERE s_name = '${studentName}'`)
    let teacherData = await sequelize.query(`SELECT t_id FROM teacher WHERE t_name = '${teacherName}'`)

    let studentId = studentData[0].s_id //assuming names are unique
    let teacherId = teacherData[0].t_id //remember tha we receive both an array of results and our metadata, hence the [0][0]

    //validating both student and teacher exist
    if (!(studentId && teacherId)) { return }
    
    sequelize.query(`
       INSERT INTO student_teacher
        VALUES (${studentId}, ${teacherId})`).then()
}

// addStudent("Leonidis", 1)
// addTeacher("Yoda", 0)
enrollStudent("Leonidis", "Yoda")
