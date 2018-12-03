<template>
  <div id="app">
    <siteHeader />
    <section class="site-content">
      <div class="container">
        <router-view/>
      </div>
    </section>
    <siteFooter />
  </div>
</template>

<script>
  import siteHeader from '@/components/template/header.vue'
  import siteFooter from '@/components/template/footer.vue'
  export default {
    components: { siteHeader, siteFooter }
  }
</script>

<style lang="scss" src="@/assets/scss/common.scss"></style>