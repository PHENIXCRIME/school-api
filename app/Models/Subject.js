'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subject extends Model {
    
    static get primaryKey() { 
        return 'subject_id'
    }


    static get createAtColumn(){
        return null ; 
    }

    static get updateAtColumn(){
        return null ; 
    }

    teacher() { 
        return this.belongsTo('App/Models/Teacher')
    }

    enrollment() {
        return this.hasMany('App/Models/Enrollment')
    }

    student()  {
        return this
        .belongsToMany('App/Models/Student')
        .pivotModel('App/Models/Enrollment')
    }
}

module.exports = Subject
