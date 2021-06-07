<template>
  <div>
    <a-menu mode="inline" :open-keys="openKeys"
    :style="{ position: 'fixed', zIndex: 1, width:'25%',height:'689px',top:'64px',left:0,
borderRight:'1px solid #000'}"
    @openChange="onOpenChange">
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="shopping" /><span>商品管理</span></span>
        <a-menu-item key="1">
          <router-link to="/goods/add">
            添加商品
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/goods/list">
            商品列表
          </router-link>

        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="ordered-list" /><span>订单管理</span></span>
        <a-menu-item key="5">
          <router-link to="/order/create">
            创建订单
          </router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <router-link to="/order/change">
            订单管理
          </router-link>
        </a-menu-item>
        <a-menu-item key="11">
          <router-link to="/order/return">
            退单管理
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title">
          <a-icon type="edit" /><span>广告位</span></span>
        <a-menu-item key="7">
          <router-link to="/show/baner">
            修改轮播图
          </router-link>
        </a-menu-item>
        <a-menu-item key="8">
          <router-link to="/show/carousel">
            修改广告位
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <a-icon type="area-chart" /><span>数据分析</span></span>
        <a-menu-item key="9">
          <router-link to="/data/sale">
            销售数据
          </router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <router-link to="/data/conver">
            转化率数据
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3'],
      openKeys: ['sub1'],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find((key) => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};

</script>
