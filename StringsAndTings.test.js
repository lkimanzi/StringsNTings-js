const StringsAndTings = require('./StringsAndTings')


let methods = new StringsAndTings()

test('Cammel Case - Test', () => {
    const str = "hello world"
    expect(methods.camelCase(str)).toEqual("helloWorld")
})

test('Reverse String - Test', () => {
    const str = "hello world"
    expect(methods.reverseString(str)).toEqual("dlrow olleh")
})


test('Reverse Then Camel Case - Test', () => {
    const str = "hello world"
    expect(methods.reverseThenCamelCase(str)).toEqual('dlrowOlleh')
})

test('Remove First And Last Character - Test', () => {
    const str = "hello world"
    expect(methods.removeFirstAndLastCharacter(str)).toEqual('ello worl')
})

test('Invert Casing - Test', () => {
    const str = "Hi, My name is AbC."

    expect(methods.invertCasing(str)).toEqual("hI, mY NAME IS aBc.")


})