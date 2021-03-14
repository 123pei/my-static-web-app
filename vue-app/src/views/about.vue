<!--<template>
  <div class="content-container">
    <div class="content-title-group not-found">
      <h2 class="title">Product Wish List</h2>
      <p>
        This project was created to help represent a fundamental app written
        with Vue. The shopping theme is used throughout the app.
      </p>
      <br />
      <h2 class="title">Resources</h2>
    </div>
  </div>
</template> -->

<template>
  <div class="MyAchievement">
    <div class="MyAchievement-echart">
      <div class="echart-title">Chart for Age</div>
      <div class="echart-content">
        <div id="myChart" :style="{ width: '1000px', height: '460px' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('myChart'));
      const option = {
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '6%',
          right: '6%',
          bottom: '6%',
          containLabel: true,
        },
        legend: {
          data: ['Male', 'Female'],
          left: '6%',
          top: 'top',
          itemWidth: 15,
          itemHeight: 15,
          textStyle: {
            color: '#3a6186',
            fontSize: 20,
          },
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { show: true, type: ['line', 'bar'] },
          },
          right: '6%',
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            name: 'Age',
            data: ['0-20', '21-40', '41-60', '61-80', '81-100'],
            splitLine: { show: false },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#3a6186',
                width: '2',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#3a6186',
              },
            },
            splitLine2: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Number',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: '#3a6186',
              },
            },
            splitLine: {
              lineStyle: {
                color: ['#e7e7e7'],
              },
            },
          },
        ],
        series: [
          {
            name: 'Male',
            type: 'bar',
            barWidth: 20,
            data: [20, 35, 55, 20, 10],
            itemStyle: {
              normal: {
                color: '#00abf7',
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#00abf7',
                    fontSize: 16,
                  },
                },
              },
            },
          },
          {
            name: 'Female',
            type: 'bar',
            barWidth: 20,
            data: [40, 50, 50, 40, 15],
            itemStyle: {
              normal: {
                color: '#ff4f76',
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#ff4f76',
                    fontSize: 16,
                  },
                },
              },
            },
          },
        ],
      };
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.MyAchievement {
  display: flex;
  flex-direction: column;
  padding: 0px 90px;
}
.MyAchievement .MyAchievement-echart {
  width: 100%;
  height: 570px;
  border-radius: 10px;
  border: 1px solid #d3d9e9;
  box-shadow: 4px 6px 10px -2px #d3d9e9;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.MyAchievement-echart .echart-title {
  width: 100%;
  height: 70px;
  background-color: #42b883;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 26px;
  color: #fff;
  text-align: center;
  line-height: 75px;
}
.MyAchievement-echart .echart-content {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
}
.echart-content #myChart {
  margin-top: 35px;
}
</style>
