<template>
  <div class="header">
    <router-link to="/login">
      <div class="back" ref="down">登录</div>
    </router-link>
      <div class="user" ref="up">{{user}}</div>
    <div class="search">
      <div class="search-content">
        <span class="iconfont search-icon">&#xe632;</span>
        请输入城市/景点/游玩主题
      </div>
    </div>
    <router-link to="/city">
      <div class="city">
        {{city}}
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'index-header',
    data () {
      return {
        user:""
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      
    },
    mounted () {
      const userInfo = JSON.parse(localStorage.userInfo).email
      if (userInfo) {
        this.user = userInfo
        this.$refs.down.style.display = 'none'
        this.$refs.up.style.display = 'block'
      } else {
        alert("登录失败")
        this.user = "登录"
        this.$refs.up.style.display = 'none'
        this.$refs.down.style.display = 'block'
      }
    },
    beforeDestroy () {
      localStorage.clear()
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .header
    display: flex
    height: .88rem
    background: $bgColor
    .back
      max-width: 2rem
      line-height: .88rem
      text-align: center
      font-size: .35rem
      color: #fff
      padding 0 .1rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .user 
      display none
      max-width: 2rem
      line-height: .88rem
      text-align: center
      font-size: .35rem
      color: #fff
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .search
      flex: 1
      .search-icon
        position: relative
        top: .02rem
      .search-content
        width: 100%
        line-height: .6rem
        margin-top: .14rem
        background: #fff
        border-radius: .1rem
        text-indent: .2rem
        color: #ccc
    .city
      overflow: hidden
      position: relative
      float: right
      max-width: 1.6rem
      line-height: .88rem
      padding: 0 .46rem 0 .22rem
      font-size: .28rem
      white-space: nowrap
      text-overflow: ellipsis
      color: #fff
      &::before
        position: absolute
        right: .16rem
        top: .38rem
        content: '\0020'
        width: 0;
        height: 0;
        border-left: .12rem solid transparent;
        border-right: .12rem solid transparent;
        border-top: .12rem solid #fff;
</style>
