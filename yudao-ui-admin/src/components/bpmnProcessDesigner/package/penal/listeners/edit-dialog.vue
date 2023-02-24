<template>
  <!-- 注入西段 编辑/创建 部分 -->
  <el-dialog title="字段配置" :visible.sync="listenerFieldFormModelVisible" width="50%" append-to-body destroy-on-close>
      <el-form :model="listenerFieldForm" size="mini" label-width="96px" ref="listenerFieldFormRef" :rules="listenerFieldFormRules" style="height: 136px" @submit.native.prevent>
        <el-form-item label="字段名称：" prop="name">
          <el-input v-model="listenerFieldForm.name" clearable />
        </el-form-item>
        <el-form-item label="字段类型：" prop="fieldType">
          <el-select v-model="listenerFieldForm.fieldType">
            <el-option v-for="i in Object.keys(fieldTypeObject)" :key="i" :label="fieldTypeObject[i]" :value="i" />
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="listenerFieldForm.fieldType === 'string'"
          label="字段值："
          prop="string"
          key="field-string">
          <el-input v-model="listenerFieldForm.string" clearable />
        </el-form-item>
        <el-form-item
          v-if="listenerFieldForm.fieldType === 'expression'"
          label="表达式："
          prop="expression"
          key="field-expression"
        >
          <el-input v-model="listenerFieldForm.expression" clearable />
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button size="mini" @click="listenerFieldFormModelVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="saveListenerFiled">确 定</el-button>
      </template>
    </el-dialog>
</template>
<script>
export default {
  name: "Editdialog",
  props: {
    id: String,
    type: String
  },
  data() {
    return {
      elementListenersList: [], // 监听器列表
      listenerForm: {}, // 监听器详情表单
      listenerFormModelVisible: false, // 监听器 编辑 侧边栏显示状态
      fieldsListOfListener: [],
      listenerFieldForm: {}, // 监听器 注入字段 详情表单
      listenerFieldFormModelVisible: false, // 监听器 注入字段表单弹窗 显示状态
      editingListenerIndex: -1, // 监听器所在下标，-1 为新增
      editingListenerFieldIndex: -1, // 字段所在下标，-1 为新增
      listenerTypeObject: listenerType,
      fieldTypeObject: fieldType,
      listenerFormRules: listenerFormRules,
      listenerFieldFormRules: listenerFieldFormRules
    };
  },
}
  
</script>