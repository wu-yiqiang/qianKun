
const mustInput = { required: true, message: '必填', trigger: ['blur', 'change'] }

export const listenerFormRules = {
  class: [mustInput],
  listenerType: [mustInput],
  expression: [mustInput],
  delegateExpression: [mustInput],
  event: [mustInput],
  scriptFormat: [{ required: true, message: '请填写脚本格式', trigger: ['blur', 'change'] }],
  scriptType: [{ required: true, message: '请选择脚本类型', trigger: ['blur', 'change'] }],
  value: [{ required: true, message: '请填写脚本内容', trigger: ['blur', 'change'] }],
  resource: [{ required: true, message: '请填写资源地址', trigger: ['blur', 'change'] }],
}

export const listenerFieldFormRules = {
  name: [mustInput],
  fieldType: [mustInput],
  string: [mustInput],
  expression: [mustInput],
}