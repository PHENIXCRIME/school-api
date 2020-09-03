'use strict'

const Database = use('Database')
const Validator = use
const enrollment = use('App/Models/Enrollment')


function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}


class EnrollmentController {
    async index() { 
        const {references = undefined} = request.qs
        const enrollments = Enrollment.query()
        if(references) {
            const extractedReferences =references.split(",")
            enrollments.with(extractedReferences)
        }
        return {status:200 ,error:undefined,data:teachers} 
    }

    async show({request}){
        const{id} = request.params
        const enrollment = await enrollment.find(id) 
        if (validatedValue.error)
        return { status: 500, error: validatedValue.error, data: undefined };

        return{ status :200 ,error:undefined,  data: enrollment || {} }
    }      

    async store({request}){
        const { mark , mark_date ,student_id , subject_id} = request.body
        
        const enrollment = await Enrollment.find(id)
        return {status : 200 , error: undefined  , data : enrollment }
    }

    async update ({ request }) {
        const{body ,params} = request 
        const { id } = params
        const { mark , mark_date ,student_id , subject_id} = body  
        const enrollments = await Database
        .table('enrollments')
        .where({ enrollment_id : id})
        .update({ mark , mark_date ,student_id , subject_id })

        const enrollments = await Database
        .table('enrollments')
        .where({enrollment_id : enrollment_id}) 
        .first()

        return {status :200 , error : undefined , data :teachers }   
    }

    async destroy({request}) {
        const {id} =request.params

         await Database
        .table('enrollments')
        .where({enrollment_id : id})
        .delete() 
        
        return {status : 200 , error : undefined , data : {message : 'success'}}
    }

}

module.exports = EnrollmentController
