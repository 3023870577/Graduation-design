<template>
  <div class="comment" ref="comment">
    <div class="comment-con border-bottom">
      <div class="comment-icon"></div>
      <div class="comment-title">用户评论</div>
    </div>
    <div class="comment-list-con border-bottom" 
         v-for="(list, index) in comment"
         :key="index">
      <div class="userInfo">
        <div class="star iconfont">&#xe61a;&#xe61a;&#xe61a;&#xe61a;&#xe61a;</div>
        <div>{{list.username}}</div>
      </div>
      <div class="comment-item" ref="text">{{list.comment}}</div>
      <div class="down iconfont" @click="handleDownClick(index, $event)" ref="down">&#xe62d;</div>
      <div class="up iconfont" @click="handleUpClick(index, $event)" ref="up">&#xe669;</div>
    </div>
    <router-link to="/comment" class="addCommentBtn">
      添加评论
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    props: {
      comment: Array
    },
    data () {
      return {
        showDown: true,
        showUp: false
      }
    },
    activated () {},
    deactivated () {},
    methods: {
      handleDownClick (index, e) {
        this.$refs.down[index].style.display = 'none'
        this.$refs.up[index].style.display = 'block'
        this.$refs.text[index].style.overflow = 'auto'
        this.$refs.text[index].style.height = 'auto'
      },
      handleUpClick (index, e) {
        this.$refs.down[index].style.display = 'block'
        this.$refs.up[index].style.display = 'none'
        this.$refs.text[index].style.overflow = 'hidden'
        this.$refs.text[index].style.height = 105 + 'px'
      }
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
    padding 0 .2rem
    .comment-icon
      width .075rem
      height .24rem
      background $bgColor
      margin-right .2rem
  .comment-list-con
    padding: .1rem .2rem .2rem .2rem;
    .userInfo
      display flex
      justify-content space-between
      align-items center
      margin-top .1rem
      line-height .6rem
      color #212121
      font-size .26rem
      .star
        color #ffb436
    .comment-item
      height 105px
      overflow hidden
      word-break break-all
      word-wrap break-word
      line-height .42rem
      font-size .26rem
      color #616161
    .down
      height .48rem
      line-height .48rem
      text-align center
      font-size .28rem
      color #9e9e9e
    .up
      display none 
      height .48rem
      line-height .48rem
      text-align center
      font-size .28rem
      color #9e9e9e
  .addCommentBtn
    display flex
    justify-content center
    align-items center
    height .7rem
    background $bgColor
    color #ffffff
</style>
