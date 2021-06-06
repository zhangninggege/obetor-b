
<template>
  <div class="good-add">
    <h2>添加商品</h2>
    <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
  <a-form-model-item ref="iden" label="商品编码" prop="iden">
    <a-input
      v-model="form.iden"
      @blur="
        () => {
          $refs.name.onFieldBlur();
        }
      "
    />
  </a-form-model-item>
  <a-form-model-item ref="brand" label="品牌" prop="brand">
    <a-input
      v-model="form.brand"
      @blur="
        () => {
          $refs.name.onFieldBlur();
        }
      "
    />
  </a-form-model-item>
    <a-form-model-item ref="name" label="商品名称" prop="name">
      <a-input
        v-model="form.name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="商品分类" prop="category">
      <a-select v-model="form.category" placeholder="请选择商品分类">
        <a-select-option value="sport">
          运动系列
        </a-select-option>
        <a-select-option value="fitness">
          健身系列
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item ref="size" label="商品尺寸" prop="size">
      <a-input
        v-model="form.size"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item ref="color" label="商品颜色" prop="color">
      <a-input
        v-model="form.color"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item ref="weight" label="商品重量" prop="weight">
      <a-input
        v-model="form.weight"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />kg
    </a-form-model-item>
    <a-form-model-item label="商品价格" prop="price">
      <a-input
        v-model="form.price"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="单位" prop="resource">
      <a-radio-group v-model="form.resource">
        <a-radio value="1">
          套
        </a-radio>
        <a-radio value="2">
         个
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item ref="amount" label="添加数量" prop="amount">
      <a-input-number id="inputNumber" v-model="form.amount" :min="1"
    @blur="
    () => {
      $refs.name.onFieldBlur();
    }
  "
    />
    </a-form-model-item>

    <a-form-model-item label="上市日期" required prop="date1">
      <a-date-picker
        v-model="form.date1"
        show-time
        type="date"
        style="width: 100%;"
      />
    </a-form-model-item>
    
    <a-form-model-item label="商品描述" prop="desc">
      <a-input v-model="form.desc" type="textarea" />
    </a-form-model-item>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetForm">
        Reset
      </a-button>
    </a-form-model-item>
  </a-form-model>
  </div>

</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-4',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'error',
        },
      ],
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        amount: 1,
        size: '',
        color: '',
        weight: undefined,
        brand: '',
        iden: '',
        name: '',
        category: undefined,
        price: undefined,
        date1: undefined,
        resource: '',
        desc: '',
      },
      rules: {
        amount: [{ required: true, message: '请输入数量', trigger: 'blur' },
          { type: 'number', required: true },
        ],
        size: [{ required: true, message: '请输入尺寸', trigger: 'blur' }],
        color: [{ required: true, message: '请输入颜色', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入重量', trigger: 'blur' }],
        category: [{ required: true, message: '请选择分类', trigger: 'blur' }],
        brand: [
          { required: true, message: '请输入商品品牌', trigger: 'blur' },
        ],
        iden: [
          { required: true, message: '请输入商品编码', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
        price: [{ required: true, message: '请输入商品价格', trigger: 'blur' },
          {
            type: 'number', message: '请输入数字', trigger: 'blur', transform: (value) => Number(value),
          },
        ],
        date1: [{ required: true, message: '请选择上市日期', trigger: 'change' }],
        resource: [
          { required: true, message: '请选择单位', trigger: 'change' },
        ],
        desc: [{ required: true, message: '请输入描述', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert('submit!');
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>

<style lang='less' scoped>
.good-add{
  padding: 10px;
  h2{
    text-align: center;
  }
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
