<style lang="less">
    @import '../../../styles/common.less';
    @import 'user-manage.less';
</style>

<template>
    <Card>
        <Row>
            <Button type="ghost" shape="circle" icon="plus"></Button>
        </Row>
        <Row class="margin-top-10 searchable-table-con1">
            <Table :columns="columns" :data="data"></Table>
        </Row>
    </Card>
</template>

<script>
export default {
    name: 'user-manage',
    data () {
        return {
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
                                        this.show(params.index)
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
    }
};
</script>
