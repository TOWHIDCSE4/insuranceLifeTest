export const HTTP_200 = 200
export const HTTP_400 = 400
export const TYPE_LIST_NORMAL = "NORMAL"
export const TYPE_LIST_CUSTOMERS = "CUSTOMERS"
export const DEFAULT_SIZE = 10
export const PAGE_SIZE_OPTIONS = ['10', '20', '30']
export const FORMAT_DATE = 'DD/MM/YYYY'
export const LOADING_STATUS = {
  idle: "idle",
  pending: "pending",
  succeeded: "succeeded",
  failed: "failed"
}
export const VALIDATE_MESSAGES = {
  required: '${label} không được để trống',
  types: {
    email: 'Định dang này không phải là email',
    number: '${label} không phải là số',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
export const GIFT = "GIFT"

export const CUSTOMER_CARE_INFO = [
  { label: 'Thu nhập', value: "INCOME" },
  { label: 'Lịch hẹn', value: "APPOINTMENT_SCHEDULE" },
  { label: 'Quà', value: "GIFT" },
  { label: 'Ký hợp đồng', value: "CONTRACT" },
  { label: 'Tư vấn', value: "ADVISE" },
  { label: 'Khảo sát', value: "SURVEY" },
  { label: 'Sở thích', value: "INTERESTS" },
  { label: 'Gia đình', value: "FAMILY" },
  { label: 'Giải pháp', value: "SOLUTION" },
  { label: 'Khác', value: "OTHER" }
]

export const ARR_INFO_REDIRECT = ['SURVEY', 'ADVISE', 'SOLUTION']

export const INFO_PATH = {
  SURVEY: '/advise/survey',
  ADVISE: '/advise/finance-consultant',
  SOLUTION: '/advise/financial-solutions',
}


