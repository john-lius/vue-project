<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }
</style>
<template>
  <div id="home" class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            首页
          </template>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            统计查询
          </template>
          <MenuItem name="2-1" @click.native='toPage()'>部门工作量统计</MenuItem>
          <MenuItem name="2-2">月度销售统计</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            系统管理
          </template>
          <MenuItem name="3-1">人员管理</MenuItem>
          <MenuItem name="3-2">角色管理</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <div style="text-align: right">
          <router-link to="/about">关于我们</router-link>
        </div>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}"></Breadcrumb>
        <Card>
          <div style="height: 800px">
            <button class="btn btn-default" @click="showToast">show toast</button>
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        att: '退出'
      }
    },
    methods: {
      toPage: function () {
        console.log(this.$router);
        this.$router.push('/about');
      },
      showToast() {
        this.$toast({
          title: '消息提示', content: '您有一条新消息', type: 'error', onShow: () => {
            console.log('on toast show')
          }, onHide: () => {
            console.log('on toast hide')
          }
        })
      }

    }
  }
</script>
