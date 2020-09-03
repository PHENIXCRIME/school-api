'use strict'

const Subject = require("../../Models/Subject")
const Database = use('Database')
const Hash = use('Hash')
const Validator = use
const student = use("App/Models/Student")

function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}

class StudentController {

    async index() { 
       const {references = undefined} = request.qs
        const student = Student.query()
        if(references) {
            const extractedReferences =references.split(",")
            students.with(extractedReferences)
        }
        return { status:200 , error:undefined , data:students} 
    }

    async show({request}){
        const{id} = request.params
        const student = await Student.find(id)

        if (validatedValue.error)
        return { status: 500, error: validatedValue.error, data: undefined };

        return{ status :200 ,error:undefined,  data: students || {} }
    }      

    async store({request}){
        const { first_name , last_name , email ,password} = request.body
       
        const student = await Student.create({first_name , last_name , email ,password })

        return {status : 200 , error: undefined  , data : student }
    }

    async update ({ request }) {
        const{body ,params} = request 
        const { id } = params
        const {first_name , last_name , email } = body  
        const students = await Database
        .table('students')
        .where({ student_id : id})
        .update({first_name , last_name , email })

        const student = await Database
        .table('students')
        .where({student_id : student_id}) 
        .first()

        return {status :200 , error : undefined , data : students }   
    }

    async destroy({request}) {
        const {id} =request.params

         await Database
        .table('students')
        .where({student_id : id})
        .delete() 
        
        return {status : 200 , error : undefined , data : {message : 'success'}}
    }

}

module.exports = StudentController
