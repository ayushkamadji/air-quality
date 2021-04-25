const parser = require("./parser")
const dataJson = require("../../public/data/en.json")

test("toKeyValueMap returns key value map", () => {
  let data = { testKey0: "testValue0", testKey1: "testValue1" }
  let result = parser.toKeyValueMap(data)
  expect(result[0].key).toBe("testKey0")
  expect(result[0].value).toBe("testValue0")
  expect(result[1].key).toBe("testKey1")
  expect(result[1].value).toBe("testValue1")
})

test("toDataMap returns merged nested key map", () => {
  let kvMap = [
    {key: "foo_bar", value: "baz"},
    {key: "foo_bang", value: "bong"},
    {key: "hello", value: "world"}
  ]
  let result = parser.toDataMap(kvMap)
  expect(result["foo"]["bar"]).toBe("baz")
  expect(result["hello"]).toBe("world")
  expect(result["foo"]["bang"]).toBe("bong")
})

test("toArticle returns article object", () => {
  let kvm = parser.toKeyValueMap(dataJson)
  let dataMap = parser.toDataMap(kvm)
  let article = parser.toArticle(dataMap)
  expect(article.title).toMatch(/Delhi smog/)
  expect(article.image).toMatch(/https\:/)
  expect(article.author).toMatch(/By me!/)
  expect(article.date).toMatch(/November/)
  expect(article.category.name).toMatch(/India/)
  expect(article.category.url).toMatch(/bbc\.co/)
  expect(article.data[5].aqi).toBe(220)
  expect(article.paragraphs[0]).toMatch(/you are smoking/)
}) 

test("parse takes object from json and returns article", () => {
  let article = parser.parse(dataJson)
  expect(article.title).toMatch(/Delhi smog/)
})