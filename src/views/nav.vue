<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.menu-link{
  color:#fff;
  display: block;width: 100%;
}
.menu-link.on{
  color: #2d8cf0;
}
.layout-content {
  min-height: 760px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.layout-hide-text .layout-text {
  display: none;
}

.ivu-col {
  transition: width .2s ease-in-out;
}
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1" theme="dark" width="auto">
          <div class="layout-logo-left"></div>
          <Menu-item name="1">
            <a class="menu-link" :class="{on:ison==1}" href="javascript:;"  @click="linkClick(1)">
            <Icon type="ios-navigate" :size="iconSize"></Icon>
            <span class="layout-text">网站内容</span></a>
          </Menu-item>
          <Menu-item name="2">
              <a class="menu-link" :class="{on:ison==2}" href="javascript:;" @click="linkClick(2)">
            <Icon type="ios-keypad" :size="iconSize"></Icon>
            <span class="layout-text">广告配置</span></a>
          </Menu-item>
          <Menu-item name="3">
              <a class="menu-link" :class="{on:ison==3}" href="javascript:;"  @click="linkClick(3)">
            <Icon type="ios-analytics" :size="iconSize"></Icon>
            <span class="layout-text">后台管理</span></a>
          </Menu-item>
          <Menu-item name="4">
              <a class="menu-link" :class="{on:ison==4}" href="javascript:;"  @click="linkClick(4)">
            <Icon type="ios-analytics" :size="iconSize"></Icon>
            <span class="layout-text">ivew官网</span></a>
          </Menu-item>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
          
        </div>
        <!--<div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="/">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>-->
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; TalkingData
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      spanLeft: 5,
      spanRight: 19,
      ison:1
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    }
  },
  methods: {
    linkClick(val) {
      this.ison=val;
      this.$router.push('temp'+val);
    },
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    }
  }
}
</script>
