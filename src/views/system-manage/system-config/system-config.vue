<style lang="less">
    @import '../../../styles/common.less';
    @import 'system-config.less';
</style>

<template>
    <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="120">
        <FormItem label="站点名称" prop="siteName">
            <Input v-model="formData.siteName"></Input>
        </FormItem>
        <FormItem label="站点域名" prop="siteDomain">
            <Input v-model="formData.siteDomain"></Input>
        </FormItem>
        <FormItem label="站点描述" prop="siteDiscription">
            <Input v-model="formData.siteDiscription"></Input>
        </FormItem>
        <FormItem label="站点关键字" prop="siteKeywords">
            <Input v-model="formData.siteKeywords"></Input>
        </FormItem>
        <FormItem label="系统邮箱服务器" prop="siteEmailServer">
            <Select v-model="formData.emailSerice" placeholder="请选择服务器">
                <Option v-for="item in serverOptions" :key="item.value" :label="item.label" :value="item.value"></Option>
            </Select>
        </FormItem>
        <FormItem label="系统邮箱" prop="siteEmail">
            <Input v-model="formData.siteEmail"></Input>
        </FormItem>
        <FormItem label="邮箱密码" prop="siteEmailPwd">
            <Input type="password" v-model="formData.siteEmailPwd"></Input>
        </FormItem>
        <FormItem label="备案号" prop="registrationNo">
            <Input v-model="formData.registrationNo"></Input>
        </FormItem>
        <FormItem label="mongoDBPath" prop="mongodbInstallPath">
            <Input v-model="formData.mongodbInstallPath"></Input>
        </FormItem>
        <FormItem label="数据备份目录" prop="databackForderPath">
            <Input v-model="formData.databackForderPath"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formData')">保存</Button>
            <Button type="ghost" @click="handleReset('formData')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>

<script>

export default {
    name: 'system-config',
    data () {
        return {
            serverOptions: [
                {
                    value: "QQ",
                    label: "QQ"
                },
                {
                    value: "163",
                    label: "163"
                }
            ],
            formData: {
                siteName: '',
                siteDomain: '',
                siteDiscription: '',
                siteKeywords: '',
                siteEmailServer: '',
                siteEmail: '',
                siteEmailPwd: '',
                registrationNo: '',
                mongodbInstallPath: '',
                databackForderPath: ''
            },
            ruleValidate: {
                siteName: [
                    { required: true, message: '请输入站点名称', trigger: 'blur' }
                ],
                siteDomain: [
                    { required: true, message: '请填写系统域名', trigger: 'blur' }
                ],
                siteDiscription: [
                    { required: true, message: '请输入站点描述', trigger: 'blur' }
                ],
                siteKeywords: [
                    { required: true, message: '请输入站点关键字', trigger: 'blur' }
                ],
                siteEmailServer: [
                    { required: true, message: '请选择系统邮箱服务器', trigger: 'blur' }
                ],
                siteEmail: [
                    { required: true, message: '请填写系统邮箱', trigger: 'blur' }
                ],
                siteEmailPwd: [
                    { required: true, message: '请输入系统邮箱密码', trigger: 'blur' }
                ],
                registrationNo: [
                    { required: true, message: '请输入站点备案号', trigger: 'blur' }
                ],
                mongodbInstallPath: [
                    { required: true, message: '请输入mongodb的bin目录', trigger: 'blur' }
                ],
                databackForderPath: [
                    { required: true, message: '请输入数据备份路径', trigger: 'blur' },
                    { min: 5, max: 100, message: "请输入5-100个字符", trigger: "blur" }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>
