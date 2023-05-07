<script>
import social_media from "../../data/social";
import feather from "feather-icons";
export default {
  data() {
    return { social_media };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto max-w-7xl inset-x-0 bottom-0">
    <div class="border-pink pt-20 sm:pt-30 pb-8 border-t-2">
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark mb-5"
        ></p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in social_media"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="text-gray-400 hover:text-fuchsia-600 cursor-pointer rounded-lg bg-gray-700 shadow-sm p-4 duration-500"
          >
            <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-pink {
  border-color: rgba(192, 38, 211, 0.35);
}
</style>
