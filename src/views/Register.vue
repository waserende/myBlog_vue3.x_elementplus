<template>
  <el-row type="flex"
          justify="center">
    <el-col :span="12">
      <div>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>注册</span>
              <el-button class="button"
                         type="text">操作按钮</el-button>
            </div>
          </template>
          <div>
            <el-form ref="ruleForm"
                     :model="ruleForm"
                     label-width="80px"
                     label-position="left"
                     :rules="rules">
              <el-form-item label="昵称"
                            prop="name">
                <el-input placeholder="请输入昵称"
                          clearable
                          v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input placeholder="请输入手机号"
                          clearable
                          v-model="ruleForm.telephone"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input placeholder="请输入密码"
                          show-password
                          clearable
                          v-model="ruleForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           @click="register">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>

</template>

<script>
// import { ref } from 'vue';

import { ElMessage } from 'element-plus';
import storageService from '@/service/storageService';
import userService from '@/service/userService';

export default ({
  // setup() {
  //   return {
  //     // name: ref(''),
  //     // telephone: ref(''),
  //     password: ref(''),
  //   };
  // },

  data() {
    return {
      ruleForm: {
        name: '',
        telephone: '',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          {
            min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur',
          },
        ],
        telephone: [
          {
            required: true, message: '请输入手机号', trigger: 'blur',
          },
          {
            min: 11, max: 11, message: '手机号格式错误', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {

    register() {
      console.log(this.ruleForm);
      // 请求
      userService.register(this.ruleForm).then((res) => {
        // 保存token
        console.log(res.data);
        storageService.set(storageService.USER_TOKEN, res.data.data.token);

        // 跳转主页
        this.$router.replace({ name: 'Home' });
      }).catch((err) => {
        console.log('err', err.response.data.msg);
        ElMessage.error(String(err.response.data.msg));
      });
      console.log('register');
    },
  },
});
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

/* .box-card {
  width: 480px;
} */
</style>
