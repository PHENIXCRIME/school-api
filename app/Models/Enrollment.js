'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Enrollment extends Model {

    static get primaryKey() {
         return 'enrollment_id'
    }

    static get createAtColumn(){
        return null ; 
    }

    static get updateAtColumn(){
        return null ; 
    }

    student() {
        return this.belongsTo('App/Models/Student')
    }
    
    subject() {
        return this.belongsTo('App/Models/Subject')
    }

    
  
    
}

module.exports = Enrollment
