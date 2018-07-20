<template>
  <Layout>
    <Header layout layout-align="start center" class="header">
      <span class="head-logo"></span>
    </Header>
    <Content layout layout-align='end center' class='form-banner'>
      <log-in @user="submitForm"></log-in>
    </Content>
    <Footer layout-col layout-align="center center">
      <strong>深圳迪聚海思科技有限公司</strong>
      <span>Shenzhen DigiHealth Technology Co.Ltd</span>
    </Footer>
  </Layout>
</template>
<script type="text/javascript">
import logIn from './../../components/login.vue'
export default {
  components: {
    logIn
  },
  mounted() {
    this.$store.commit('clear')
  },
  methods: {
    submitForm(user) {
      this.$login('sys/login?username=' + user.userName + '&password=' + user.userPwd + '&logionBeid=102&module=ctrlcent').then(rs => {
        if(rs.resultCode != 1) return;
        // this.$store.commit('loginInfo', rs)
        this.$router.push('home')
      })
    }
  }
}
</script>
<style type="text/css" scoped>
  .header,
  .footer {
    height: 80px;
    background: transparent;
    line-height: normal;
  }

  .head-logo {
    display: inline-block;
    background: url('../../img/logo.png') no-repeat;
    width: 299px;
    height: 28px;
  }

  .footer strong {
    color: #666;
    letter-spacing: 3px;
  }

  .footer span {
    color: #999;
    font-size: 12px;
  }

  .form-banner {
    background: url('../../img/banner.png') no-repeat;
    background-size: cover;
    background-color: #116CC9;
  }
</style>
