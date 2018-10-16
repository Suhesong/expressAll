const faker = require('faker');

const generateEmployees = () => {
  let employees = [];

  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    var phone = faker.phone.phoneNumber();

    employees.push({
      "id": id,
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "phone": phone
    })
  }

  return {
    'employees': employees
  }
}
module.exports = generateEmployees