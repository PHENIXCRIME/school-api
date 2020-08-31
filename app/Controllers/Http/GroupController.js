'use strict'

const { group } = require("@adonisjs/framework/src/Route/Manager");

const Database = use('Database')


function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}



class GroupController {

    async index() { 
        const groups = await Database.table('groups')

        return {status:200 ,error:undefined,data:groups} 

    }

    async show({request}){
        const{id} = request.params

        const validatedValue =  numberTypeParamValidater(id)
        
        if (validatedValue.error) return {status : 500 ,error: validatedValue.error , data : undefined} 
        const groups = await Database
        .select('*')
        .from('groups')
        .where("group_id" , id)
        .first()

        return{ status :200 ,error:undefined,  data: groups || {} }

        // 0 ,"" , false , undefined , null 
        // return teacher || 

    }      

    async store({request}){
        const { name} = request.body

        const missingKeys = []

        if(!name) missingKey.push('name')



        if(missingKey.lenght)
        return { status : 422 , error : `{missingKeys} is missing ` ,data : undefined}


        const groups= 
        await Database
        .table('groups')
        .insert({name})

        return {status : 200 , error: undefined  , data : {name } }
    }
}

module.exports = GroupController
