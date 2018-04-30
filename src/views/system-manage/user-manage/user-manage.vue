<style lang="less">
    @import '../../../styles/common.less';
    @import 'user-manage.less';
</style>

<template>
    <Card>
        <Row>
            <Button type="ghost" shape="circle" icon="plus" @click="formDialogShow(1)"></Button>
        </Row>
        <Row class="margin-top-10 searchable-table-con1">
            <Table :columns="columns" :data="data"></Table>
        </Row>
        <Modal
                v-model="showDialogForm"
                :title="dialogFormTitle">
            <Form ref="validForm" :model="form" :rules="rules" :label-width="80">
                <FormItem label="用户名" prop="username">
                    <Input v-model="form.username"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input v-model="form.password" type="password"></Input>
                </FormItem>
                <FormItem label="确认密码" prop="confirmPassword">
                    <Input v-model="form.confirmPassword" type="password"></Input>
                </FormItem>
                <FormItem label="电话" prop="mobile">
                    <Input v-model="form.mobile" ></Input>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input v-model="form.email" ></Input>
                </FormItem>
                <FormItem label="有效">
                    <i-switch v-model="form.enable" size="large">
                        <span slot="open">启用</span>
                        <span slot="close">禁用</span>
                    </i-switch>
                </FormItem>
                <FormItem label="备注" prop="desc">
                    <Input v-model="form.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
                </FormItem>
                <div slot="footer">
                    <Button @click="formSubmit" type="info">提交</Button>
                </div>
            </Form>
        </Modal>
    </Card>
</template>

<script>
import api from '@/store/api'

export default {
    name: 'user-manage',
    data () {
        return {
            curAction: 0,
            showDialogForm: false,
            loading: true,
            dialogFormTitle: '',
            form: {},
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                confirmPassword: [
                    { required: true, message: '请确认密码', trigger: 'blur' }
                ],
                mobile: [
                    { required: true, message: '请输入手机号', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请填写邮箱', trigger: 'blur' }
                ],
                desc: [
                    {
                        message: "请填写备注",
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        max: 30,
                        message: "请输入5-30个字符",
                        trigger: "blur"
                    }
                ]
            },
            columns: [
                {
                    title: '用户名',
                    key: 'name'
                },
                {
                    title: '用户类型',
                    key: 'age'
                },
                {
                    title: '姓名',
                    key: 'address'
                },
                {
                    title: '联系方式',
                    key: 'address'
                },
                {
                    title: '邮箱',
                    key: 'address'
                },
                {
                    title: '是否有效',
                    key: 'address'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    icon: 'compose',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.formDialogShow(2)
                                    }
                                }
                            }),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    icon: 'trash-a',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            })
                        ]);
                    }
                }
            ],
            data: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    },
    methods: {
        //取消表单弹窗
        formCancel () {
            this.showDialogForm = false
        },

        //提交表单
        formSubmit () {
            const _this = this
            this.$refs.validForm.validate((valid) => {
                if (valid) {
                    if(this.curAction === 1){
                        _this.addUser(_this.form)
                    }
                }
            })
        },
        formDialogShow (type) {
            this.showDialogForm = true
            this.curAction = type
            if(this.curAction === 1){
                //添加用户
                this.dialogFormTitle = '添加用户'
            }else if(this.curAction === 2){
                //用户信息编辑
                this.dialogFormTitle = '用户信息编辑'
            }

        },
        //用户添加
        addUser () {

            api.AddUser(this.form).then(() => {
                this.queryUsers()
                this.loading = false;
                this.$nextTick(() => {
                    this.loading = true;
                });
            })
        },
        //用户删除
        delUser () {


        },
        //用户更新
        updateUser () {

            api.UpdateUser(this.form).then(() => {
                this.queryUsers()
            })
        },
        //用户列表查询
        queryUsers () {

        }
    }
};
</script>
