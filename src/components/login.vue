<template>
    <Form :model="form" :rules="rules" ref="form" class="from-auth">
        <h3>AIMS手术麻醉系统</h3>
        <FormItem prop="userName">
            <i class="icon iconfont icon-username"></i>
            <Input class='no-border underline' v-model="form.userName"></Input>
        </FormItem>
        <FormItem prop="userPwd">
            <i class="icon iconfont icon-password"></i>
            <Input type="password" class='no-border underline' v-model="form.userPwd"></Input>
        </FormItem>
        <Button flex layout layout-align='center center' type="primary" @click="validForm('form')">登&nbsp;&nbsp;录</Button>
    </Form>
</template>
<script type="text/javascript">
// import md5 from 'js-md5'
export default {
    data() {
        return {
            form: {
                userName: 'mzkzr',
                userPwd: '1234'
            },
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
                ],
                userPwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 4, max: 40, message: '长度在 4 到 40 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        validForm: function(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    // this.form.userPwd = md5(this.form.userPwd)
                    this.$emit('user', this.form)
                }
            })
        }
    }
}
</script>
<style type="text/css" scoped>
.from-auth {
    background-color: #fff;
    width: 350px;
    margin-bottom: 0;
    margin-right: 180px;
    padding: 30px;
    opacity: 0.9;
}

.from-auth h3 {
    padding-left: 10px;
    font-weight: 700;
    color: #0b8be1;
    margin-bottom: 24px;
    border-bottom: 2px solid #0b8be1;
    padding-bottom: 5px;
}

.from-auth i.icon {
    position: absolute;
    font-size: 20px;
    top: 0;
    left: 7px;
    z-index: 2;
}

.from-auth .ivu-btn {
    width: 100%;
}

/deep/ input {
    text-indent: 27px!important;
}

/deep/ .ivu-form-item-content:hover {
    color: #0b8be1;
}

/deep/ .ivu-form-item-error .ivu-input {
    border: none;
    border-bottom: 1px solid #ed3f14;
    outline: none;
    box-shadow: none;
}
</style>
