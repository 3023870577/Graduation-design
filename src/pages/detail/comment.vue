<template>
  <div class="comment" ref="comment">
    <div class="comment-con border-bottom">
      <div class="comment-icon"></div>
      <div class="comment-title">用户评论</div>
    </div>
    <div class="comment-list-con" 
         v-for="(list, index) in comment"
         :key="index">
      {{list.comment}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    props: {
      comment: Array
    },
    activated () {
      // this.bindScroll()
    },
    deactivated () {
      // this.unbindScroll()
    },
    methods: {
      // bindScroll () {
      //   this.proxyFn = this.handleScroll.bind(this)
      //   window.addEventListener('scroll', this.proxyFn)
      // },
      // unbindScroll () {
      //   window.removeEventListener('scroll', this.proxyFn)
      // },
      // handleScroll (e) {
      //   let opacity = document.documentElement.scrollTop / 220
      //   opacity = opacity > 1 ? 1 : opacity
      //   this.$refs.header.style.opacity = opacity
      // }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .comment-con
    display flex
    align-items center
    height .75rem
    line-height .75rem
    .comment-icon
      width .1rem
      height .375rem
      background $bgColor
      margin-right .2rem

</style>
