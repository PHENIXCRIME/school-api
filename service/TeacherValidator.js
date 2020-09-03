
const Validator = use("Validator")

module.exports = async function teacherValidator (data) {
    if (typeof data !== 'object') throw new Error()

    const{ first_name  ,last_name , email , password } = data

    const rules = {
        first_name: 'required',
        last_name: 'required',
        password: 'required|email|unique:teachers',
        email: 'required|min:8'
    }

    const Validation = await Validator.validateAll({
        first_name, last_name, email, password
    }, rules)

    return {
        error: Validation.messages()
    }
}
