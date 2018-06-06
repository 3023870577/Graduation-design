<template>
  <div>
    <div class="list-container">
      <div class="list">
        <span class="list-tit">邮箱</span>
        <input v-model="email" type="text" class="list-item" placeholder="请输入你的邮箱">
      </div>
      <div class="list">
        <span class="list-tit">昵称</span>
        <input v-model="username" type="text" class="list-item" placeholder="可设置6-18个字符,不能以数字开头">
      </div>
      <div class="list">
        <span class="list-tit">密码</span>
        <input v-model="password" type="password" class="list-item" placeholder="可设置6-18个字符,可包含字母 数字 特殊符号">
      </div>
      <div class="list checkbox">
        <input v-model="remember" type="checkbox" class="list-checkbox">
        <div class="checkbox-text">记住我的密码</div>
      </div>
      <div class="list test" v-show="this.errinfo">账号密码不符合要求</div>
    </div>  
  </div>
</template>

<script>
  export default {
    name: 'register-list',
    data () {
      return {
        email: '',
        username: '',
        password: '',
        remember: false,
        errinfo: false
      }
    },
    computed: {
      isValidEmail: function () {
        var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        return reg.test(this.email)
      }
    },
    methods: {
      getRegisterInfo () {
        return {
          email: this.email,
          username: this.username,
          password: this.password,
          action: 'register',
          remember: this.remember,
          isValidEmail: this.isValidEmail
        }
      },
      setError (flag) {
        this.errinfo = flag
      }
    }
  }
</script>

<style scoped lang="stylus">
  .list-container
    margin-top .3rem
    .list
      display flex
      position relative
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
    .checkbox
      border none
      .list-checkbox
        position absolute
        top 38%
        display block
        width .25rem
        height .25rem
      .checkbox-text
        line-height 1.06rem
        padding-left .35rem
        font-size .28rem
        color #b6b6b6
    .test
      height 1rem
      line-height 1rem
      border none
      justify-content center
      align-items center
      font-size .36rem
      color red
</style>
