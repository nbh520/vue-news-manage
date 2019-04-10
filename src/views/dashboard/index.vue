<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div> -->
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart v-if="lineChartData.expectedData" :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 8}" :xl="{span: 6}" style="margin-bottom:30px;">
        <pie-chart v-if="userAddress.length" :user-address="userAddress" />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 8}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 8}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import PieChart from './components/PieChart'
import { getNewsDayLength } from '@/api/article'
import { getCommentDayLength } from '@/api/comment'
import { getUserDayLength, queryUserAddress } from '@/api/user'
import { getVideoDayLength } from '@/api/video'
import { arrayEleRandom } from '@/utils'
// const lineChartData = {
//   newVisitis: {
//     expectedData: [100, 120, 161, 134, 105, 160, 165],
//     actualData: [120, 82, 91, 154, 162, 140, 145]
//   },
//   messages: {
//     expectedData: [200, 192, 120, 144, 160, 130, 140],
//     actualData: [180, 160, 151, 106, 145, 150, 130]
//   },
//   purchases: {
//     expectedData: [80, 100, 121, 104, 105, 90, 100],
//     actualData: [120, 90, 100, 138, 142, 130, 130]
//   },
//   shoppings: {
//     expectedData: [130, 140, 141, 142, 145, 150, 160],
//     actualData: [120, 82, 91, 154, 162, 140, 130]
//   }
// }

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    LineChart,
    TodoList,
    BoxCard,
    PieChart
  },
  data() {
    return {
      allLineChartData: {},
      lineChartData: {},
      userAddress: [] // 用户分布地区
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  created() {
    // 获取折线图数据
    getNewsDayLength(7).then(res => {
      this.lineChartData = this.allLineChartData.news = {
        expectedData: arrayEleRandom(res.data),
        actualData: res.data.reverse()
      }
    })
    getCommentDayLength(7).then(res => {
      this.allLineChartData.comment = {
        expectedData: arrayEleRandom(res.data),
        actualData: res.data.reverse()
      }
    })
    getUserDayLength(7).then(res => {
      this.allLineChartData.user = {
        expectedData: arrayEleRandom(res.data),
        actualData: res.data.reverse()
      }
      console.log(res)
    })
    getVideoDayLength(7).then(res => {
      this.allLineChartData.video = {
        expectedData: arrayEleRandom(res.data),
        actualData: res.data.reverse()
      }
    })
    // 获取用户分布数据
    queryUserAddress().then(res => {
      for (const i in res.data) {
        this.userAddress.push({
          value: res.data[i],
          name: i
        })
      }
    })
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = this.allLineChartData[type]
      console.log(this.lineChartData)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
