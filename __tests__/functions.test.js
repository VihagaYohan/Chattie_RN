
const functions = require('../app/demoFunctions/functions');

/*
    CHECK FOR TRUTHY & FALSY VALUES
    toBeNull matches only null
    toBeUndefined matches only undefined
    toBeDefined is the oppoersites of toBeUndefined
    toBeTruthy matches anything that an if statement treats as true
    toBeFalsy matches anything that an if statement treats as false
*/

test("Adds 2+2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
})

test("Adds 2+2 to not equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

test("Should be null", () => {
    expect(functions.isNull()).toBe(null)
})

test("Should be falsy", () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    })
})

// working async data
test("User fetched name should be Leanne Graham", () => {
    expect.assertions(1)
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

// async await
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})