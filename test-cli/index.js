const path = require('path')

module.exports = class TestCli {
  getTestFileName(fileName) {
    const dirName = path.dirname(fileName)
    const baseName = path.basename(fileName)
    const extName = path.extname(fileName)
    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root: dirName + '/__test__/',
      base: testName,
    })
  }
}
