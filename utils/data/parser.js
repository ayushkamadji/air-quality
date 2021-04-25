const parse = (jsonData) => {
  const keyValueMap = toKeyValueMap(jsonData)
  const dataMap = toDataMap(keyValueMap)
  const article = toArticle(dataMap)
  return article
}

const toKeyValueMap = (jsonData) => {
  return Object.keys(jsonData)
    .map( k => {
      let rgx = /category\_url/
      let key = rgx.test(k) ?
        k.replace(rgx, "category-url") : k
      return { key, value: jsonData[k] }
    })
}

const toDataMap = (entries) => {
  result = {}

  entries.forEach( (entry) => {
    let keys = entry.key.split("_")
    let value = entry.value
    ref = result
    keys.forEach( (keyLevel, index) => {
      ref[keyLevel] =
        (typeof ref[keyLevel] === "undefined") ?
          {} :
          ref[keyLevel]
      if (index === (keys.length - 1)) {
        ref[keyLevel] = value
      }
      ref = ref[keyLevel]
    })
  })
  
  return result
}

const toArticle = (dataMap) => {
  return {
    title: dataMap.hero["1"].title,
    image: dataMap.hero["1"].image,
    author: dataMap["article-info"]["1"].byline,
    date: dataMap["article-info"]["1"].date,
    category: {
      name: dataMap["article-info"]["1"].category,
      url: dataMap["article-info"]["1"]["category-url"]
    },
    paragraphs: extractParagraphs(dataMap),
    data: extractCityAQIData(dataMap)
  }
}

const extractCityAQIData = (dataMap) => {
  let city = dataMap["compare-tabs"]["1"].city
  return Object.keys(city)
    .map( i => {
      return {
        name: city[i].name.trim(),
        aqi: parseInt(city[i].aqi.split(" ")[0]),
        aqi_unit: city[i].aqi.split(" ")[1],
        cigg: parseInt(city[i].cigg)
      }
    })
}

const extractParagraphs = (dataMap) => {
  let p = dataMap.p
  return Object.keys(p)
    .map( i => p[i]["value"] )
}

module.exports = {
  parse,
  toKeyValueMap,
  toDataMap,
  toArticle
}