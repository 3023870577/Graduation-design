<template>
  <div class="main">
    <index-header></index-header>
    <slider :sliders="sliders"></slider>
    <icons :icons="icons"></icons>
    <scroller class="scroller" :sights="sights"></scroller>
    <download v-show="showDownload">下载条</download>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState, mapMutations } from 'vuex'

  import IndexHeader from './header'
  import Slider from './slider'
  import Icons from './icons'
  import Scroller from './scroller'
  import Download from './download'

  export default {
    name: 'index',
    data() {
      return {
        sliders: [],
        icons: [],
        sights: []
      }
    },
    components: {
      IndexHeader,
      Slider,
      Icons,
      Scroller,
      Download
    },
    watch: {
      city () {
        this.getIndexData()
      }
    },
    computed: {
      ...mapState(['city', 'showDownload'])
    },
    methods: {
      ...mapMutations(['changeCity']),
      getIndexData () {
        axios.get('/api/position/getIndexInfo?city=' + this.city)
          .then(this.handleDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },
      handleDataSucc (res) {
        res = res ? res.data.data[0] : null
        console.log(res)
        if (res && res.ret && res.data.length >= 0) {
          const resFilter = res.data && res.data.filter((item, index) => {
            return item.city === this.city
          })
          const resFilterd = resFilter[0]
          console.log(resFilter)
          resFilterd.slider && (this.sliders = resFilterd.slider)
          resFilterd.icons && (this.icons = resFilterd.icons)
          resFilterd.sights && (this.sights = resFilterd.sights)
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
        console.log("123")
      },
      getUserInfo () {
        console.log('获取用户信息')
        axios.post('/api/user/register', {
          username: '1234',
          password: '123456'
        })
          .then(this.handleRegisterSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },
      handleRegisterSucc (res) {
        console.log(res)
      }
    },
    created () {
      this.getUserInfo()
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">
  .main
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 0
    .scroller
      flex: 1
      overflow: hidden
</style>
