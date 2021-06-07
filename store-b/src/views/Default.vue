<template>
  <div class="home ">
    <a-layout>
      <a-layout-header class="my-header" :style="{ position: 'fixed', zIndex: 100, width: '100%' }">
        <a-col :span='3'>
          <div class="header__logo">
            logo
          </div>
        </a-col>
        <a-col :span='18'>
          <div class="header__title">
            OBETOR后台管理系统
          </div>
        </a-col>
        <a-col :span='3'>
          <div class="header__user">
            你好，张宁
          </div>
        </a-col>
      </a-layout-header>
      <a-layout-content class="my-content" :style="{position:'relative', width:'100%',top:'64px',}">
        <a-col :span='6'>
          <menu-nav></menu-nav>
        </a-col>
        <a-col :span='18'>
          <router-view></router-view>
        </a-col>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import MenuNav from '@/components/Menu.vue';

export default {
  components: {
    MenuNav,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
  .home .my-header {
    padding: 0;
    background-color: #fff;
    border: 1px solid #000;
    border-right: transparent;
    border-top: transparent;
    border-left: transparent;
    text-align: center;
  }

</style>
