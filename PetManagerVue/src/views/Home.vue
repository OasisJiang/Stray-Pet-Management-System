<template>
  <div style="color: #666;font-size: 14px;">
    <div style="padding-bottom: 20px; display: flex; justify-content: space-between; align-items: center">
      <b>您好！{{ user.nickname }}</b>
      <div style="font-size: 16px; color: #409EFF">
        {{ currentDate }} {{ currentTime }} 星期{{ weekDay }}
      </div>
    </div>

    <div style="margin-bottom: 60px">
      <el-card>
        <div class="welcome"> <b> 欢迎使用流浪宠物管理系统后台</b></div>
        <el-divider />
        <div style="display: flex; justify-content: space-around; align-items: center">  <!-- 改为space-around -->
          <img src="@/assets/back-background.jpg"
            style="height: 350px; -webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; user-drag: none;" />
          <div style="width: 35%; display: flex; justify-content: center; margin-left: 30px">  <!-- 减小宽度和左边距 -->
            <el-card shadow="hover" style="width: 100%; max-width: 380px; text-align: center;">
              <div style="font-size: 18px; margin-bottom: 15px; font-weight: bold;">
                系统信息
              </div>
              <el-divider />
              <div style="font-size: 16px; line-height: 2.5; text-align: center;">
                <div>当前日期：{{ currentDate }}</div>
                <div>当前时间：{{ currentTime }}</div>
                <div>星期：{{ weekDay }}</div>
                <div>天气：晴</div>
              </div>
            </el-card>
          </div>
        </div>
        <el-divider />
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      currentDate: '',
      currentTime: '',
      weekDay: '',
      timer: null
    }
  },
  mounted() {
    this.updateDateTime();
    this.timer = setInterval(this.updateDateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      this.currentDate = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\//g, '年').replace(/\//g, '月') + '日';
      
      this.currentTime = now.toTimeString().substr(0, 8);
      
      const weeks = ['日', '一', '二', '三', '四', '五', '六'];
      this.weekDay = weeks[now.getDay()];
    }
  }
}
</script>

<style scoped>
.welcome {
  font-size: 32px;
  text-align: center;
}
</style>