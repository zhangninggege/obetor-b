<template>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 580 }" bordered>
    <span slot="action" >
      <a slot="action"  >修改</a>
      <a-divider type="vertical" />
      <a slot="action"  >删除</a>
    </span>
  </a-table>
</template>
<script>
const columns = [
  { title: '商品名称', width: 150, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '商品编号', width: 150, dataIndex: 'iden', key: 'iden', fixed: 'left' },
  { title: '价格', dataIndex: 'price', key: '1', width: 100 },
  { title: '尺寸', dataIndex: 'size', key: '2', width: 100 },
  { title: '重量', dataIndex: 'weight', key: '3', width: 80 },
  { title: '颜色', dataIndex: 'color', key: '4', width: 100 },
  { title: '品牌', dataIndex: 'brand', key: '5', width: 150 },
  { title: '分类', dataIndex: 'category', key: '6', width: 150 },
  { title: '单位', dataIndex: 'unit', key: '7', width: 50 },
  { title: '描述', dataIndex: 'desc', key: '8' ,width: 200},
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 150,
    scopedSlots: { customRender: 'action' },
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `商品 ${i}`,
    iden: `1000${i}`,
    price: 10.00,
    size: '3*3',
    weight:5,
    color: 'red',
    brand:'jone',
    category:'sport',
    unit:'套',
desc:'质量好'
  });
}

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
