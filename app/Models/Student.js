'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {

static get primaryKey() { 
    return 'student_id'
}


static get createAtColumn(){
    return null ; 
}

static get updateAtColumn(){
    return null ; 
}

group() { 
    return this.belongsTo('App/Models/Group')
}
 
enrollment( ){ 
    return this.hasMany('App/Models/Enrollment')
}

subject() { 
    return this.hasMany('App/Models/Subject')
}

}

module.exports = Student
