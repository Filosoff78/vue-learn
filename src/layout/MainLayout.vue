<template>
  <div class="app-main-layout">
    <div v-if="shownav">
      <navbar/>
    </div>
    <main>
        <router-view />
    </main>

<!--    <div class="fixed-action-btn">-->
<!--      <a class="btn-floating btn-large blue" href="#">-->
<!--        <i class="large material-icons">add</i>-->
<!--      </a>-->
<!--    </div>-->
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'

export default {
  data() {
    return {
      shownav: true
    }
  },
  name: 'main-layout',
  components: {
    Navbar,
  },
  mounted() {
    this.eventBus.on('shownav', (e) => {
      this.shownav = e
    })
  }
}
</script>