'use strict'

const Subject = require("../../Models/Subject");

const Database = use('Database')
const subject = use('App/Models/Subject')



function numberTypeParamValidater(number) {
    if (Number.isNaN(parseInt(number) )) 

    return{error : 'param : ${number} is not support , please use number type param instead' }

    return {} ; 
}

class SubjectController {
    
    async index({request}) { 
        const { references = undefined } = request.qs
        
        const subjects = Subject.query() 

        if(references ) {
            const extractedReferences = references.split(",")
            subjects.with(extractedReferences)
        }
        return { status:200 , error:undefined , data : await subjects.fetch() } 
    }

    async show({request}){
        const{id} = request.params
        const subject = await Subject.find(id)
        
        const validatedValue = numberTypeParamValidator(id)

        if (validatedValue.error)
        return { status: 500, error: validatedValue.error, data: undefined };
        
        return{ status :200 ,error:undefined,  data: subject || {} }
    }      

    async store({request}){
        const { title , teacher_id } = request.body
        const rules = {
            title: 'required',
            teacher_id: 'required',
        }

        const Validation = await Validator.validateAll(request.body, rules)

        if (Validation.fails())
            return { status: 422, error: Validation.message(), data: undefined }

        const subject = new Subject()
        subject.title = title
        subject.teacher_id = teacher_id

        await subject.save()
        
        return { status : 200 , error : undefined , data : subject }
    }

    async update ({ request }) {
        const{body ,params} = request 
        const { id } = params
        const { title , teacher_id } = body  
        const subject = await Database
        .table('subjects')
        .where({ subject_id : id})
        .update({title , teacher_id})

        const subject = await Database
        .table('subject')
        .where({subject_id : subject_id}) 
        .first()

        return {status :200 , error : undefined , data : subjects }   
    }

    async destroy({request}) {
        const {id} =request.params

         await Database
        .table('subjects')
        .where({subject_id : id})
        .delete() 
        
        return {status : 200 , error : undefined , data : {message : 'success'}}
    }
    
}

module.exports = SubjectController
