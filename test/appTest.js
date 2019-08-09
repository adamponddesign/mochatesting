const assert = require('chai').assert
// const sayHello = require('../app').sayHello   // where to find the file containing the functions to test
// const addNumbers = require('../app').addNumbers   // where to find the file containing the functions to test
const app = require('../app')


//results

sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(5, 5)






// describe
// first arg - what you want to call the overall test... which will test multiple functions
// secong arg - anon function
describe('App', () => {

  describe('sayHello()', () => {
    // it
    // first arg - text to list under the name of the test... stipulating what the function being tested should do
    // also which function you are testing
    // second are - anon function
    it('funtion sayHello should return hello', () => {
      // assert.equal
      // first arg - the function or file you are testing
      // secong arg - what the function or file should return
      // let result = app.sayHello()
      assert.equal(sayHelloResult, 'hello')

    })
    //•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    it('funtion sayHello should return type string', () => {

      // let result = app.sayHello()
      assert.typeOf(sayHelloResult, 'string')

    })

  })


    describe('addNumbers()', () => {

    // ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    it('funtion addNumbers should be above 5', () => {

      // let result = app.addNumbers(5, 5)
      assert.isAbove(addNumbersResult, 5)

    })
    // ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    it('funtion addNumbers should return type number', () => {

      // let result = app.addNumbers(5, 5)
      assert.typeOf(addNumbersResult, 'number')

    })

  })

})
