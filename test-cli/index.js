const path = require('path')

module.exports = class TestCli {
  getTestSource(methodName, fileName, isClass = false) {
    return `
      test('${'TEST ' + methodName}生成', () => {
        const ${isClass ? '{' + methodName + '}' : methodName} = require(${
      '../' + fileName
    })
        const ret = ${methodName}()
        // expect(ret).toBe('return test')
      })
    `
  }

  getTestFileName(fileName) {
    const dirName = path.dirname(fileName)
    const baseName = path.basename(fileName)
    const extName = path.extname(fileName)
    console.log(dirName, baseName, extName)

    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root: dirName + '/__test__/',
      base: testName,
    })
  }
}
