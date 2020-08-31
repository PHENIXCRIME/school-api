'use strict'

const Database = use('Database')

function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}


class EnrollmentController {
    async index() { 
        const enrollments = await Database.table('enrollments')

        return {status:200 ,error:undefined,data:enrollments} 

    }

    async show({request}){
        const{id} = request.params

        const validatedValue =  numberTypeParamValidater(id)
        
        if (validatedValue.error) return {status : 500 ,error: validatedValue.error , data : undefined} 
        const enrollments = await Database
        .select('*')
        .from('enrollments')
        .where("enrollment_id" , id)
        .first()

        return{ status :200 ,error:undefined,  data: enrollments || {} }

        // 0 ,"" , false , undefined , null 
        // return teacher || 

    }      

    async store({request}){
        const { mark , mark_date ,student_id , subject_id} = request.body

        const missingKeys = []

        if(!mark) missingKey.push('mark')
        if(!mark_date) missingKey.push('mark_date')
        if(!student_id) missingKey.push('student_id')
        if(!subject_id) missingKey.push('subject_id')


        if(missingKey.lenght)
        return { status : 422 , error : `{missingKeys} is missing ` ,data : undefined}

        const enrollments = 
        await Database
        .table('enrollments')
        .insert({mark,mark_date,student_id,subject_id })

        return {status : 200 , error: undefined  , data : {mark, mark_date ,student_id , subject_id } }
}
}

module.exports = EnrollmentController
