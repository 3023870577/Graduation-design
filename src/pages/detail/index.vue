<template>
  <div>
    <banner
      :bannerImg="bannerImg"
      :imgList="imgList"
      >
    </banner>
    <detail-header></detail-header>
    <list :list="ticketList"></list>
    <comment :comment="userComment" :detailId="detailId"></comment>
    <download v-show="showDownload">download</download>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Banner from './banner'
  import Download from 'components/common/download/'
  import List from './list'
  import DetailHeader from './header'
  import Comment from './comment'
  import axios from 'axios'
  export default {
    name: 'detail',
    props: {
      detailId: [Number, String]
    },
    data () {
      return {
        bannerImg: '',
        imgList: [],
        ticketList: [],
        userComment: [],
        download: false
      }
    },
    computed: {
      ...mapState(['showDownload'])
    },
    components: {
      Banner,
      Download,
      List,
      DetailHeader,
      Comment
    },
    created () {
      console.log('详情页')
      this.getDetailInfo()
    },
    watch: {
      detailId () {
        if (this.detailId) {
          this.getDetailInfo()
        }
      }
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/position/getDetailInfo', {
          params: {
            id: this.detailId
          }
        })
        .then(this.handleGetDetailSucc.bind(this))
        .catch(this.handleGetDetailErr.bind(this))
      },

      handleGetDetailSucc (res) {
        console.log(res)
        res && (res = res.data.data[0])
        console.log(res)
        console.log(this.detailId)
        if (res && res.ret && res.data) {
          const resFilter = res.data && res.data.filter((item, index) => {
            return item.detailId === this.detailId
          })
          const resFilterd = resFilter[0]
          console.log(resFilterd)
          this.bannerImg = resFilterd.bannerImg
          this.imgList = resFilterd.imgList
          this.ticketList = resFilterd.ticketList
          this.userComment = resFilterd.commentList
        } else {
          this.handleGetDetailErr()
        }
      },

      handleGetDetailErr () {
        console.log('error')
      }
    }
  }
</script>

<style lang="stylus" scoped>    
</style>
