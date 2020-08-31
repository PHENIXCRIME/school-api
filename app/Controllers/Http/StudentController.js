'use strict'

const Database = use('Database')
const Hash = use('Hash')

function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}


class StudentController {
    async index() { 
        const students = await Database.table('students')

        return {status:200 ,error:undefined,data:students} 

    }

    async show({request}){
        const{id} = request.params

        const validatedValue =  numberTypeParamValidater(id)
        
        if (validatedValue.error) return {status : 500 ,error: validatedValue.error , data : undefined} 
        const students = await Database
        .select('*')
        .from('students')
        .where("student_id" , id)
        .first()

        return{ status :200 ,error:undefined,  data: students || {} }

        // 0 ,"" , false , undefined , null 
        // return teacher || 

    }      

    async store({request}){
        const { first_name , last_name , email ,password} = request.body

        const missingKeys = []

        if(!first_name) missingKey.push('first_name')
        if(!last_name) missingKey.push('last_name')
        if(!email) missingKey.push('email')
        if(!password) missingKey.push('password')


        if(missingKey.lenght)
        return { status : 422 , error : `{missingKeys} is missing ` ,data : undefined}

        const hashedPassword  = await Hash.make(password)
        const students = 
        await Database
        .table('students')
        .insert({first_name,last_name,email,password:hashedPassword })

        return {status : 200 , error: undefined  , data : {first_name , last_name , email } }
    }
}

module.exports = StudentController
