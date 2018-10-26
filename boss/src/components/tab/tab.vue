<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to='/position'>
    <span class="tab-link">职位</span>
    </router-link>
    <router-link tag="div" class="tab-item" to='/company'>
    <span class="tab-link">公司</span>
    </router-link>
    <router-link tag="div" class="tab-item" to='/message'>
    <span class="tab-link">消息</span>
    </router-link>
    <router-link tag="div" class="tab-item" to='/my'>
    <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
 .tab
   display flex
   .tab-item
     flex 1
</style>
