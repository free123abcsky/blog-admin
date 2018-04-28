<style lang="less">
    @import '../../../styles/common.less';
    @import 'role-manage.less';
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
    name: 'role-manage',
    data () {
        return {
            columns: [
                {
                    title: '角色名',
                    key: 'name'
                },
                {
                    title: '角色类型',
                    key: 'age'
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
                                    type: 'primary',
                                    icon: 'arrow-graph-up-right',
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
