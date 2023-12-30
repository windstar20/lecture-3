module.exports = {
  defaultExtractor: (content) => {
    //해당 정규식에 포함될 문자열 -> 제거할 class name 패턴
    return content.match(/[\w\:\-]+/g) || [] // \w [0-9a-zA-Z_]
  }
}