'use strict'

const { test } = use('Test/Suite')('Teacher Validater')
const teacherValidator = require('../../service/TeacherValidator')

test(' should return errror when pass incorrect data ' , async ({ assert }) => { 
  const validatedData = await teacherValidator(" John " , " Winyu " , "wrong mail" , "12345") 
assert.array(typeof validatedData.error , "string")

})

test(' should return more than one error if mmutiple incorrect data is passes ', async ({ assert }) => { 
  const validatedData = await teacherValidator(" John " , " Winyu " , "wrong mail" , "12345") 
assert.array(typeof validatedData.error.length , 1 )

})


test('should return errror when pass correct data ' , async ({ assert }) => { 
  const validatedData = await teacherValidator(" John " , " Winyu " , "john@mail.com" , "12345678") 
assert.array(validatedData.error , undefined )

}) 