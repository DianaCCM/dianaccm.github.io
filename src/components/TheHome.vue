<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { heartHalfOutline, codeOutline } from "ionicons/icons";
export default {
  name: "Home",
  components: {
    IonButton,
    IonIcon,
  },
  methods: {
    /*scrollToTop() {
      window.scrollTo(0, 0);
    },*/
  },
  setup() {
    return { heartHalfOutline, codeOutline };
  },
};
</script>

<template>
  <div class="max-auto max-w-7xl flex flex-col">
    <div class="relative px-4 pt-20 sm:pt-2">
      <div class="absolute right-0 flex justify-end pr-8">
        <img
          class="block sparks_dec"
          src="../assets/images/sparks_gif.gif"
          alt="sparks"
        />
      </div>
      <div
        class="font-princess-sofia inset-y-0 left-0 text-5xl md:text-9xl lg:text-giant"
      >
        <h3 class="animate-text px-14 pt-8 pb-4 sm:py-14">
          Hi,<br />
          I'm Diana
        </h3>
      </div>
      <div
        class="font-press-start inset-y-0 left-0 text-xs md:text-lg lg:text-xl"
      >
        <h6 class="grandient-text pl-14 sm:pl-20">Web Developer</h6>
      </div>
    </div>
    <div class="pb-24 lg:pt-0 pt-16">
      <div
        class="flex flex-col sm:flex-row lg:justify-end justify-center gap-4"
      >
        <div class="grid justify-center py-4 md:py-0">
          <router-link to="/about">
            <ion-button
              fill="outline"
              class="md:[font-size:20px] md:[height:2.8em;]"
              color="pink"
              shape="round"
            >
              My profile&nbsp;<ion-icon
                :icon="heartHalfOutline"
              ></ion-icon></ion-button
          ></router-link>
        </div>
        <div class="grid justify-center">
          <router-link to="/projects">
            <ion-button
              fill="outline"
              class="md:[font-size:20px] md:[height:2.8em;]"
              color="pink"
              shape="round"
            >
              My projects&nbsp;<ion-icon :icon="codeOutline"></ion-icon
            ></ion-button>
          </router-link>
        </div>
      </div>
    </div>
    <!--router-link @click="$scrollToTop"-->
  </div>
</template>

<style scoped>
ion-button {
  --background: rgb(192 38 211);
  --background-hover: rgb(192 38 211);
  --color: rgb(192 38 211);
}

.grandient-text {
  background: #bd31bd;
  background: linear-gradient(to right, #bd31bd 0%, #fff 20%, #dae813 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sparks_dec {
  width: 30%;
}

.animate-text {
  background-image: linear-gradient(
    -225deg,
    #305715 0%,
    #7334b6 29%,
    #ec3270 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 150% auto;
  color: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2.5s ease infinite;
}

@keyframes textclip {
  to {
    background-position: 100% center;
  }
}
</style>
