#### 运行 node 两种方法

- node 文件名
- nodemon 文件名 `npm install nodemon -g`

### debug 调试

使用 vscode 工具进行调试

### 单元测试 jest

[官方文档](https://jestjs.io/docs/zh-Hans/getting-started)

#### 安装方法

`npm instal jest -g`

#### 运行

`npm run test`

### 测试用例

```
test('测试newLocal输出hello word', () => {
  var newLocal = require('../index')
  expect(newLocal).toBe('hello word')
})
```

#### 测试结果

```
PASS  __test__/index.spec.js
  ✓ 测试newLocal输出hello word (215ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.556s
Ran all test suites.
```
