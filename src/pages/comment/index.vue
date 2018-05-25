<template>
	<div class="main">
		<div class="header" ref="header">
    	<div class="back iconfont" @click="handleBackClick">&#xe65a;</div>
			<div class="header-title">分享游玩体验</div>
			<div class="share" @click="handleShareClick">发布</div>
  	</div>
		<div class="mp-comment-text border-bottom">
        <textarea mp-role="commentValue" class="mp-comment-textarea"
                 placeholder="亲，玩的如何？" ref="text"></textarea>
    </div>
	</div> 
</template>

<script>
  // import { mapState } from 'vuex'
  // import axios from 'axios'
  export default {
    name: 'addcomment',
    props: {},
    data () {
      return {}
    },
    created () {},
    watch: {},
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      handleShareClick () {
        let commentValue = this.$refs.text.value
        console.log(commentValue)
      }
    }
  }
</script>

<style lang="stylus" scoped>
	@import '../../assets/styles/common/varibles.styl'
	.main
		display flex
		flex-direction column
		position absolute
		left 0
		right 0
		bottom 0
		top 0
		.header
			display: flex
			justify-content center
			align-items center
			height: .88rem
			background: $bgColor
			.back
				position: absolute;
				font-size: .36rem;
				color: #fff;
				text-align: center;
				left: 0;
				top: 0;
				width: .8rem;
				height: .88rem;
				line-height: .88rem;
			.header-title
				overflow: hidden;
				margin: 0 1rem;
				line-height: .88rem;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: .32rem;
				text-align: center;
				color: #fff;
			.share
				position: absolute;
				top: 0;
				right: 0;
				width: .8rem;
				height: .88rem;
				padding-right: .2rem;
				line-height: .88rem;
				text-align: center;
				font-size: .32rem;
				color: #fff;
		.mp-comment-text
			overflow: hidden;
			margin-left: .3rem;
			font-size: .26rem;
			.mp-comment-textarea
				width: 100%;
				height: 2.3rem;
				padding: .2rem .3rem .2rem 0;
				resize: none;
				border: 0;
				color: #212121;
				font-size: .28rem;
				box-sizing: border-box;
</style>
