<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: { },
  data() {
    return {
      title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
      titleTemplate: title => {
        return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
      }
    }
  },
  mounted() {
   this.init()
  },
  methods: {
    init() {
      console.log('sad', this.$store)
    }
  }
}
</script>
<style scoped>
#app .theme-picker {
  display: none;
}
</style>
