'use strict'

const Subject = require("../../Models/Subject")

const Database = use('Database')
const Hash = use('Hash')
const Validator = use('Validator')
const Teacher = use('App/Models/Teacher')

function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}

class TeacherController {

    async index({ request }) {
        const {references = undefined} = request.qs
        const teachers = Teacher.query()
        if(references) {
            const extractedReferences =references.split(",")
            teachers.with(extractedReferences)
        }
        return {status:200 ,error:undefined,data:teachers} 
    }

    async show({request}){
        const{id} = request.params
        const teacher = await teacher.find(id)
        
        if (validatedValue.error)
        return { status : 500, error: validatedValue.error, data: undefined };
         
        return { status : 200 ,error: undefined,  data: teachers || {} }
    }

    async store({request}){
        const { first_name , last_name , email ,password} = request.body
        
        const teacher = await Teacher.create({first_name,last_name,email,password})

        return { status: 200, error: undefined, data: teacher }
    }

    async update ({ request }) {
        const{body ,params} = request 
        const { id } = params
        const {first_name , last_name , email } = body  
        const teachers = await Database
        .table('teachers')
        .where({ teacher_id : id})
        .update({first_name , last_name , email })

        const teacher = await Database
        .table('teachers')
        .where({teacher_id : teacher_id}) 
        .first()

        return {status :200 , error : undefined , data :teachers }   
    }

    async destroy({request}) {
        const {id} =request.params

         await Database
        .table('teachers')
        .where({teacher_id : id})
        .delete() 
        
        return {status : 200 , error : undefined , data : {message : 'success'}}
    }

}

module.exports = TeacherController
