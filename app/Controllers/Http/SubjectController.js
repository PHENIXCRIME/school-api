'use strict'

const Database = use('Database')


function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}

class SubjectController {
    async index() { 
        const subjects = await Database.table('subjects')

        return {status:200 ,error:undefined,data:subjects} 

    }

    async show({request}){
        const{id} = request.params

        const validatedValue =  numberTypeParamValidater(id)
        
        if (validatedValue.error) return {status : 500 ,error: validatedValue.error , data : undefined} 
        const subject = await Database
        .select('*')
        .from('subjects')
        .where("subject_id" , id)
        .first()

        return{ status :200 ,error:undefined,  data: subjects || {} }

        // 0 ,"" , false , undefined , null 
        // return teacher || 

    }      

    async store({request}){
        const { title , teacher_id } = request.body

        const missingKeys = []

        if(!title) missingKey.push('title  ')
        if(!teacher_id) missingKey.push('teacher_id')



        if(missingKey.lenght)
        return { status : 422 , error : `{missingKeys} is missing ` ,data : undefined}


        const subjects = 
        await Database
        .table('subjects')
        .insert({title,teacher_id })

        return {status : 200 , error: undefined  , data : {title     ,teacher_id } }
    }
}

module.exports = SubjectController
