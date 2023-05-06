<script>
import tech from "../data/tech";
export default {
  data() {
    return { tech };
  },
  components: {},
  methods: {
    wordsCloud() {
      let tagCloud = TagCloud(".content-cloud", this.tech, {
        radius: 250,
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      });

      let colors = ["#0F4", "#F7FF00", "#00DBFF", "#FF0048"];
      let random_color = colors[Math.floor(Math.random() * colors.length)];
      document.querySelector(".content-cloud").style.color = random_color;
      let divTagCloud = document.querySelector(".tagcloud");
      divTagCloud.style.height = "470px";
      divTagCloud.style.width = "400px";
    },
    cloudScript(url) {
      return new Promise((resolve, reject) => {
        const existing = document.querySelector("script#skillsTags");
        const existingDiv = document.querySelector("script#skillsTags");
        if (existing) existing.remove();
        if (existingDiv) existingDiv.remove();
        const script = document.createElement("script");
        script.onload = () => {
          resolve();
        };
        script.onerror = (e) => {
          reject(e);
        };
        script.id = "skillsTags";
        script.async = true;
        script.src = url;
        document.head.appendChild(script);
      });
    },
  },

  mounted() {
    this.cloudScript(
      "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"
    ).then(
      () => {
        this.wordsCloud();
      },
      (error) => {
        console.error("Failed to load script", error);
      }
    );
  },
};
</script>

<template>
  <div class="sm:pl-14">
    <span
      class="content-cloud text-xxs md:text-sm lg:text-xl font-press-start"
    ></span>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 640px) {
}
</style>
