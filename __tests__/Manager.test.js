const { Manager } = require("../lib");

test("Creates a Manager object and checks if constructor assigns arguments to the correct properties.", () => {
  const manager = new Manager(
    "Michael Rodriguez",
    0,
    "michaelrodriguez22.work@gmail.com",
    123
  );

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.name.length).toBeGreaterThan(0);

  expect(manager.id).toEqual(expect.any(Number));

  expect(manager.email).toEqual(expect.any(String));
  expect(manager.email.length).toBeGreaterThan(0);

  expect(manager.id).toEqual(expect.any(Number));
});

test("Checks that static methods return the correct values.", () => {
  const manager = new Manager("Michael Rodriguez", 0, "name@email.com");

  expect(manager.getName()).toEqual(manager.name);
  expect(manager.getId()).toEqual(manager.id);
  expect(manager.getRole()).toEqual(manager.role);
});
