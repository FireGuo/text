<template>
    <div>
      <router-link to="/I18nDemo">
        <el-button>i18n</el-button>

      </router-link>
      <router-link to="/MokeDemo">
        <el-button>MokeDemo</el-button>

      </router-link>
      <router-view />
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
