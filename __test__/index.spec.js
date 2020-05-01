test('测试newLocal输出hello word', () => {
  var newLocal = require('../index')
  // console.log('hello word=', newLocal)
  expect(newLocal).toBe('hello word')
})
