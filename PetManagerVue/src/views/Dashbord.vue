<template>
  <div>
    <el-row :gutter="10" style="margin-bottom: 60px">
      <el-col :span="6">
        <el-card style="color: #409EFF">
          <div><i class="el-icon-user-solid" /> 用户总数</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">
            100
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #F56C6C">
          <div><i class="el-icon-money" /> 销售总量</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">
            ￥ 1000000
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #67C23A">
          <div><i class="el-icon-bank-card" /> 收益总额</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">
            ￥ 300000
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #E6A23C">
          <div><i class="el-icon-s-shop" /> 门店总数</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">
            20
          </div>
        </el-card>
      </el-col>
    </el-row>
    
    <!-- 只保留K线图 -->
    <el-row>
      <el-col :span="12">
        <div id="candlestick" style="width: 500px; height: 450px"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: "Home",
  data() {
    return {

    }
  },
  mounted() {  // 页面元素渲染之后再触发
    const candlestickOption = {
      title: {text: 'XX股票'},
      xAxis: {
        data: ['2022-1', '2022-2', '2022-3', '2022-4'],
      },
      yAxis: {
        scale: true,
        splitArea: {
          show: true
        }
      },
      legend: {
        bottom: 10,
        left: 'center',
        data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      dataZoom: {
        show: true,
        type: 'slider',
        startValue: 0,
        endValue: 100
      },
      series: [
        {
          type: 'candlestick',
          data: [
              [22, 23, 21, 19],
              [19, 21, 29, 31],
              [28, 18, 31, 20],
              [30, 27, 38, 18],
          ]
        }
      ]
    }

    var candlestickDom = document.getElementById('candlestick');
    var candlestickChart = echarts.init(candlestickDom);
    candlestickChart.setOption(candlestickOption)
  }
}
</script>

<style scoped>

</style>