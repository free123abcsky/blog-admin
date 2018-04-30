<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-box">
            <div class="user-avatar">
                <img src="../images/avatar.png">
            </div>
            <Form ref="loginForm" :model="form" :rules="rules">
                <FormItem prop="username">
                    <Input v-model="form.username" placeholder="请输入用户名">
                    <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="form.password" placeholder="请输入密码">
                    <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button @click="handleSubmit" type="primary" long>登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import api from '@/store/api'
export default {
    data () {
        return {
            form: {
                username: 'freesky',
                password: '123456abc'
            },
            rules: {
                username: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        ...mapMutations([
            'setAvator'
        ]),
        handleSubmit () {

            const _this = this
            this.$refs.loginForm.validate((valid) => {
                if (valid) {

                    api.Login(_this.form).then((result) => {

                        result.data.time = new Date().getTime()
                        _this.$localStorage.$set('user', result.data)
                        _this.setAvator('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253')
                        _this.$router.push({
                            name: 'home_index'
                         })
                    })
                }
            })
        }
    }
};
</script>

<style>

</style>
