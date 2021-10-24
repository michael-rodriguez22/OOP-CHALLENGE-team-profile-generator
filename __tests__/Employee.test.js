const { Employee } = require("../lib")

test("Creates an Employee object and checks if constructor assigns arguments to the correct properties.", () => {
  const employee = new Employee(
    "Michael Rodriguez",
    0,
    "michaelrodriguez22.work@gmail.com"
  )

  expect(employee.name).toEqual(expect.any(String))
  expect(employee.name.length).toBeGreaterThan(0)

  expect(employee.id).toEqual(expect.any(Number))

  expect(employee.email).toEqual(expect.any(String))
  expect(employee.email.length).toBeGreaterThan(0)
})

test("Checks that static methods return the correct values.", () => {
  const employee = new Employee("Michael Rodriguez", 0, "name@email.com")

  expect(employee.getName()).toEqual(employee.name)
  expect(employee.getId()).toEqual(employee.id)
  expect(employee.getRole()).toEqual(employee.role)
})
