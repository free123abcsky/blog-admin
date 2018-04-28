<style lang="less">
    @import '../../../styles/common.less';
    @import 'data-backup.less';
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
    name: 'data-backup',
    data () {
        return {
            columns: [
                {
                    title: '文件名',
                    key: 'fileName',
                    render: (h, params) => {
                        return h('div', [
                            h('Icon', {
                                style: {
                                  padding: '0px 5px'
                                },
                                props: {
                                    type: 'soup-can'
                                }
                            }),
                            h('strong', params.row.fileName)
                        ]);
                    }
                },
                {
                    title: '行为',
                    key: 'logs'
                },
                {
                    title: '备份时间',
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
                    fileName: '20180427225531.zip',
                    logs: '数据备份',
                    date: '2018-04-27 22:55:32'
                }
            ]
        }
    }
};
</script>
