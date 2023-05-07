<script>
import particles_starter from "../assets/scripts/particles.js";
import AppHeader from "../components/shared/AppHeader.vue";
import AppFooter from "../components/shared/AppFooter.vue";

export default {
  data() {
    return {
      sparks: [],
      sparksIndex: 0,
      anime: null,
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    mouseMove(e) {
      this.anime.set(this.sparks[this.sparksIndex].els, {
        left: e.pageX,
        top: e.pageY,
      });
      this.sparks[this.sparksIndex].anime.restart();
      this.sparksIndex++;
      if (this.sparksIndex == this.sparks.length) this.sparksIndex = 0;
    },
  },

  mounted() {
    let particles = particles_starter(this.mouseMove);
    if (particles) {
      this.sparks = particles.sparks;
      this.anime = particles.anime;
    }
  },
};
</script>

<template>
  <div class="anime-container relative">
    <div class="mx-auto max-w-7xl px-2 flex flex-col">
      <AppHeader />

      <transition name="fade" mode="out-in">
        <router-view />
      </transition>

      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
