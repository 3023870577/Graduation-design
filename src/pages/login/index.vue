<template>
  <div id="login">
    <div class="header">
      <div class="back iconfont" @click="handleBackClick">&#xe65a;</div>
      <div class="title">用户登录</div>
    </div>
    <list ref="list"></list>
    <div class="button">
      <button class="login-btn" @click="handleLogin">
        <span class="login-text">立即登录</span>
      </button>
    </div>
  </div>
</template>

<script>
  import List from './list.vue'
  import axios from 'axios'
  export default {
    name: 'login-index',
    data () {
      return {
        userInfo: ""
      }
    },
    components: {
      List
    },
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      handleLogin () {
        const listInfo = this.$refs.list.getLoginInfo()
        this.userInfo = listInfo
        if (!(listInfo.isvalidUsername && listInfo.isvalidPassword)) {
          this.$refs.list.setError(true)
        } else {
          this.$refs.list.setError(false)
          axios.post('/api/user/login', {
            email: listInfo.username,
            password: listInfo.password
          })
            .then(this.handleLoginSucc.bind(this))
            .catch(this.handleLoginFail.bind(this))
        }
      },
      handleLoginSucc (res) {
        res && (res = res.data)
        if (res.data.login) {
          this.$refs.list.setActive(false)
          console.log('登陆成功')
          window.localStorage.setItem('userInfo', JSON.stringify({
            email: this.userInfo.username,
            password: this.userInfo.password
          }))
          this.$router.push('/')
        } else {
          this.$refs.list.setActive(true)
        }
      },
      handleLoginFail () {
        alert('fail')
      }
    }
  }
</script>

<style scoped lang="stylus">
  #login
    z-index: 10
    position: absolute
    top:0
    right:0
    bottom:0
    left:0
    background: #fff
    .header
      display: flex
      padding 0 .2rem
      height: .88rem
      .back
        font-size .6rem
        line-height .88rem
        color #03c399
      .title
        flex 1
        font-size .36rem
        color #333333
        text-align center
        line-height .88rem
    .button
      display flex
      box-sizing border-box
      justify-content center
      padding 0 .2rem
      margin-top .5rem
      .login-btn
        display block
        width 4.3rem
        height 1.2rem
        background #3288ff
        color #ffffff
        border-radius .1rem
        font-size .40rem       
</style>
