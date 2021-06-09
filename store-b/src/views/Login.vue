<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名!' },
          {type:'email',message:'请输入正确的邮箱地址',required: true,}
          ] },
        ]"
        placeholder="用户名"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码！' },
          {pattern: /.*(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?])\w{6,}/,
          required:true,message:'密码必须是包含大小写字母、特殊字符、数字的6到16位密码'},
          
          ] },
        ]"
        type="password"
        placeholder="密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        记住密码
      </a-checkbox>
      <a class="login-form-forgot" href="">
        忘记密码
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        登录
      </a-button>
      <a href="">
        注册
      </a>
    </a-form-item>
  </a-form>
</template>

<script>
import{ login }from '@/http.js';
import{setUserLocal} from '@/utils/localStorage.js'
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const userInfo = {email:values.userName,password:values.password}
         login(userInfo).then(res=>{
           setUserLocal(res.data)
           this.$store.dispatch('asyncSetUser',res.data);
            this.$router.push('/')
         }).catch(err=>{
           this.$message.error(err)
         })
        }
      });
    },
  },
};
</script>
<style  lang= 'less' scoped>
#components-form-demo-normal-login.login-form {
  max-width: 500px;
  margin:100px auto
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>