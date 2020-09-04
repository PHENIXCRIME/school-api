'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Teacher extends Model {
    

    static boot () { 
        super.boot()

        this.addHook('beforeSave' , async(teacherInstance) => { 
            if (teacherInstance.dirty.passoword) { 
                teacherInstance.passoword = await Hash.mmake(teacherInstance.dirty.passoword)
            }
        })
    }

    static get primaryKey() { 
        return 'teacher_id'
    }

    subjects() {
        return this.hasMany('App/Models/Subject')
    }

}

module.exports = Teacher
