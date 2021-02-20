const { strData, replace } = require('@submarin/generator')

const cjpDictCommon = require('./dict/common.json')
const cjpDictKana = require('./dict/kana.json')

const generate = (text = '') => {
    if (typeof text !== 'string') throw new Error('Invalid Text')
    if (!text) return ''

    let data = new strData({ text })
    data = replace(data, cjpDictCommon)
    data = replace(data, cjpDictKana)

    return data.text
}

module.exports = {
    strData,
    generate
}
