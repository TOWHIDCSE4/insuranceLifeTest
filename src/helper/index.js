import moment from 'moment'
import {FORMAT_DATE, CUSTOMER_CARE_INFO} from '../ultis/constant'
import _ from 'lodash'

export const formatDataNumber = (number) => {
  if (number) {
    if (Number.isInteger(number)) {
      return new Intl.NumberFormat('ja-JP').format(number)
    } else {
      return number.toFixed(2).replace(/./g, function (c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
      });
    }
  } else return 0
}

export const pad = (num, size) => {
  num = num.toString()
  while (num.length < size) num = "0" + num
  return num
}

export const getTimeByTZ = (date, format = FORMAT_DATE) => {
  return moment(date).utc().format(format)
}

export const getCustomerCareLabel = (customerValue) => {
  const info =  _.find(CUSTOMER_CARE_INFO, function (value) {
    return value.value === customerValue;
  })

  return info.label
}
