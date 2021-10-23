const { Intern } = require("../lib");

test("Creates an Intern object and checks if constructor assigns arguments to the correct properties.", () => {
  const intern = new Intern(
    "Michael Rodriguez",
    0,
    "michaelrodriguez22.work@gmail.com",
    "UT Austin"
  );

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.name.length).toBeGreaterThan(0);

  expect(intern.id).toEqual(expect.any(Number));

  expect(intern.email).toEqual(expect.any(String));
  expect(intern.email.length).toBeGreaterThan(0);

  expect(intern.school).toEqual(expect.any(String));
  expect(intern.school.length).toBeGreaterThan(0);
});

test("Checks that static methods return the correct values.", () => {
  const intern = new Intern("Michael Rodriguez", 0, "name@email.com");

  expect(intern.getName()).toEqual(intern.name);
  expect(intern.getId()).toEqual(intern.id);
  expect(intern.getRole()).toEqual(intern.role);
  expect(intern.getSchool()).toEqual(intern.school);
});
