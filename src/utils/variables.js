import { getDataType } from '@/utils/currency'
let globle = {
  url: 'http://wlkjgc.xiuzhou.gov.cn:8086/jxFtc'
}

for (let item in globle) {
  if (getDataType(globle[item]) === 'object' || getDataType(globle[item]) === 'array') {
    window[item] = JSON.parse(JSON.stringify(globle[item]))
  } else {
    window[item] = globle[item]
  }
}
