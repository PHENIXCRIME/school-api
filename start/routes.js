'use strict'



/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.group(() => {
  
//api routes start here
Route.resource('/teachers' , 'TeacherController')

Route.resource('/students' , 'StudentController')

Route.resource('/subjects' , 'SubjectController')
Route.get('/subjects/:id/teacher' , 'SubjectController.showTeacher')

Route.resource('/groups' , 'GroupController')

Route.resource('/enrollments' , 'EnrollmentController')

}).prefix('api/v1')
