<template>
  <div>
    <div v-for="(area, index) in ticketList" :key="index">
      <h3 class="title border-bottom">{{area.title}}</h3>
      <ul class="area-list">
        <li class="list-item border-bottom"
            v-for="(ticket, tIndex) in area.list"
            :key="tIndex"
            v-show="ticket.show">
          <div>
            <div v-for="(supplier) in ticket.suppliers"
                 v-show="supplier.show" :key="supplier.id"
                 class="list-text-con border-top">
              <div class="list-text">【{{ticket.title}}】{{supplier.name}}</div>
              <div class="list-price-con">
                <div class="list-price">¥{{supplier.price}}</div>
                <div class="buy-btn">预定</div>
              </div>
            </div>
            <div v-if="ticket.hasMore" class="more-store border-top"
                 @click="handleSuppplierClick(index, tIndex, $event)">
              更多供应商
            </div>
          </div>
        </li>
      </ul>
      <div class="more border-bottom" v-if="area.hasMore" @click="handleClick(index, $event)">
        点击查看更多
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail-list',
    props: {
      list: Array
    },
    data () {
      return {
        ticketList: []
      }
    },
    watch: {
      list () {
        this.ticketList = JSON.parse(JSON.stringify(this.list))
      }
    },
    methods: {
      handleClick (index, e) {
        e.target.style.display = 'none'

        this.ticketList[index].list = this.ticketList[index].list.map((value, index) => {
          value.show = true
          return value
        })
      },
      handleSuppplierClick (index, childIndex, e) {
        e.target.style.display = 'none'
        this.ticketList[index].list[childIndex].suppliers = this.ticketList[index].list[childIndex].suppliers.map((value) => {
          value.show = true
          return value
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    line-height: .75rem
    padding: 0 .4rem
  .area-list
    padding: 0 .2rem
    .list-item
      display flex
      flex-direction column
      justify-content center
      align-items space-between
      line-height: .7rem
      .list-text-con
        display flex
        justify-content space-between
        align-items center
        .list-price-con
          display flex
          justify-content space-around
          align-items center
          .buy-btn
            margin-left .2rem
            background #ffab1e
            padding .25rem .2rem
            border-radius .1rem
            color #ffffff
            line-height 0
      .more-store
        padding 0 .2rem
  .more
    line-height: .7rem
    text-align: center
</style>
