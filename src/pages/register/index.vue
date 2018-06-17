<template>
  <div id="register">
    <div class="header">
      <div class="back iconfont" @click="handleBackClick">&#xe65a;</div>
      <div class="title">用户注册</div>
    </div>
    <list ref="list"></list>
    <div class="button">
      <button class="phone-btn" @click="handleRegisterClick">立即注册</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import List from './list.vue'
  export default {
    name: 'register-index',
    data () {
      return {
        registerFlag: false,
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

      handleRegisterClick () {
        const Info = this.$refs.list.getRegisterInfo()
        this.userInfo = Info
        console.log(Info.isValidEmail)
        if (Info.isValidEmail) {
          this.postRegisterInfo(Info)
          this.$refs.list.setError(false)
        } else {
          this.$refs.list.setError(true)
        }
      },
      postRegisterInfo (Info) {
        console.log(Info)
        axios.post('/api/user/register', Info)
             .then(this.handleRegisterSucc.bind(this))
      },
      handleRegisterSucc (res) {
        this.$router.push('/login')
        console.log('注册成功')
      },
      handleRegisterError () {
        console.log('注册失败')
      }
    }
  }
</script>

<style scoped lang="stylus">
  #register
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
      margin-top .6rem
      .phone-btn
        display block
        width 4.3rem
        height 1.2rem
        background #019877
        color #ffffff
        border-radius .1rem
        font-size .40rem  
</style>
