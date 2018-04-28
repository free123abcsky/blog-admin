<style lang="less">
    @import '../../../styles/common.less';
    @import 'system-log.less';
</style>

<template>
    <Card>
        <Row>
            <Button type="ghost" shape="circle" icon="ios-cloud-download-outline"></Button>
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
                    title: '行为',
                    key: 'logs',
                    render: (h, params) => {
                        return h('div', [
                            h('strong', params.row.logs)
                        ]);
                    }
                },
                {
                    title: '类别',
                    key: 'type'
                },
                {
                    title: '发生时间',
                    key: 'date'
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
                                    type: 'info',
                                    icon: 'eye',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
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
                    logs: 'doramart 登录，IP:::1',
                    type: '系统登录',
                    date: '2018-04-27 22:55:32'
                }
            ]
        }
    }
};
</script>
