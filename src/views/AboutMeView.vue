<script>
import TheAboutMe from "../components/TheAboutMe.vue";
import TheSkills from "../components/TheSkills.vue";
export default {
  components: {
    TheAboutMe,
    TheSkills,
  },
};
</script>

<template>
  <div class="max-w-7xl px-2 pt-16 flex flex-col">
    <TheAboutMe />

    <div class="grid grid-cols-2 gap-2 lg:mt-8">
      <div class="relative">
        <div class="content-up"><TheSkills /></div>
      </div>
      <div class="relative">
        <div
          class="grid justify-items-end content-up absolute lg:relative bottom-0"
        >
          <img
            class="block my-pic"
            src="../assets/images/DCM.png"
            alt="Diana"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-pic {
  width: 73%;
}
.content-up {
  animation-name: slideUp;
  animation-timing-function: ease-out;
  animation-duration: 4s;
  animation-iteration-count: 1;
}

@keyframes slideUp {
  0%,
  50% {
    transform: translateY(100%);
    opacity: 0;
  }

  60%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
