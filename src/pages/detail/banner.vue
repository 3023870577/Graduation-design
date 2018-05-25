<template>
  <div>
    <div class="banner" @click="showGallary">
      <img class="banner-image" :src="bannerImg" />
    </div>
    <div class="back-con" @click="handleDetailClick($event)"><div class="back iconfont">&#xe65a;</div></div>
    <gallary v-show="show"
             :imgList="imgList"
             @close="handleGallaryClose"></gallary>
  </div>
</template>

<script>
  import Gallary from 'components/common/gallary/'
  export default {
    name: 'detail',
    components: {
      Gallary
    },
    props: {
      bannerImg: String,
      imgList: Array
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      showGallary () {
        this.show = true
      },
      handleGallaryClose () {
        this.show = false
      },
      handleDetailClick (e) {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-image
      width: 100%
  .back-con
    position absolute 
    top .2rem
    left .2rem
    width .5rem
    height .5rem
    display flex
    justify-content center
    align-items center
    z-index 2
    border-radius .25rem
    background #ffffff
    .back
      width .4rem
      height .4rem
</style>
