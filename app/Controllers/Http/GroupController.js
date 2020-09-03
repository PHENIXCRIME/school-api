'use strict'

const { group } = require("@adonisjs/framework/src/Route/Manager");
const Database = use('Database')
const Validator = use
const group = use("App/Models/Group")

function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}

class GroupController {

    async index() { 
        const {references = undefined} = request.qs
        const groups = Group.query()
        if(references) {
            const extractedReferences =references.split(",")
            groups.with(extractedReferences)
        }
        return {status:200 ,error:undefined,data:teachers} 
    }

    async show({request}){
        const{id} = request.params
        const group = await group.find(id)

        if (validatedValue.error)
        return { status: 500, error: validatedValue.error, data: undefined };

        return{ status :200 ,error:undefined,  data: groups || {} }
    }      

    async store({request}){
        const {name} = request.body

        const group = await Group.create({name})
        return {status : 200 , error: undefined  , data : group }
    }

    async update ({ request }) {
        const{body ,params} = request 
        const { id } = params
        const {name} = body  
        const groups = await Database
        .table('groups')
        .where({ group_id : id})
        .update({name})

        const groups = await Database
        .table('teachers')
        .where({group_id : group_id}) 
        .first()

        return {status :200 , error : undefined , data :teachers }   
    }

    async destroy({request}) {
        const {id} =request.params

         await Database
        .table('groups')
        .where({group_id : id})
        .delete() 
        
        return {status : 200 , error : undefined , data : {message : 'success'}}
    }

}


module.exports = GroupController
