<template>
  <div>
    <div class="list-container">
      <div class="list">
        <span class="list-tit">邮箱</span>
        <input type="text" class="list-item" placeholder="请输入你的邮箱" v-model="username">
      </div>
      <div class="list">
        <span class="list-tit">密码</span>
        <input type="password" class="list-item" placeholder="请输入密码" v-model="password">
      </div>
      <div class="list list-login-err" v-show="this.errinfo">账号密码不符合要求</div>
      <router-link to="/register" class="list list-login-active" v-show="this.activedInfo">用户未注册,请前往注册</router-link>
    </div>  
  </div>
</template>

<script>
  export default {
    name: 'register-list',
    data () {
      return {
        username: '',
        password: '',
        remember: false,
        autoLogin: false,
        errinfo: false,
        activedInfo: false
      }
    },
    computed: {
      isvalidUsername: function () {
        var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        return reg.test(this.username)
      },
      isvalidPassword: function () {
        var reg = /^.{6,18}$/
        return reg.test(this.password)
      }
    },
    methods: {
      getLoginInfo () {
        return {
          username: this.username,
          password: this.password,
          remember: this.remember,
          autoLogin: this.autoLogin,
          isvalidUsername: this.isvalidUsername,
          isvalidPassword: this.isvalidPassword
        }
      },
      setError (flag) {
        this.errinfo = flag
      },
      setActive (flag) {
        this.activedInfo = flag
      }
    },
    mounted () {}
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/common/varibles.styl"
  .list-container
    margin-top .3rem
    .list
      display flex
      height 1.06rem
      margin 0 .4rem
      border-bottom 1px solid #999999
      .list-tit
        display block
        font-size .36rem
        padding-right .2rem
        line-height 1.5rem
      .list-item
        display block
        flex 1
        padding-top .4rem
        font-size .24rem
        color #b6b6b6
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      .btn
        display block
        width 1.2rem
        height 0.48rem
        margin-top .5rem
        background #007ade
        color #ffffff
        border-radius .05rem
        text-align center
        line-height 0.48rem
    .list-login-err
      border-bottom none
      justify-content center
      align-items center
      font-size .36rem
      color red
    .list-login-active
      border-bottom none
      justify-content center
      align-items center
      font-size .36rem
    .checkbox
      display flex
      justify-content space-between
      border none
      .list-checkbox-content
        position relative
        .checkbox-text
          position relative
          line-height 1.06rem
          padding-left .35rem
          font-size .28rem
          color #b6b6b6
        .list-checkbox
          position absolute
          top 38%
          left 0
          display block
          width .25rem
          height .25rem
          z-index 1
    .forget-password
      border none
      .forget-tit
        height .40rem
        padding 0
        color #6faefb
        font-size .32rem
        border-bottom 1px solid #6faefb
        text-align top
</style>
