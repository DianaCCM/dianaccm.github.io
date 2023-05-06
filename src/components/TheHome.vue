<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { heartHalfOutline, codeOutline } from "ionicons/icons";
export default {
  name: "Home",
  components: {
    IonButton,
    IonIcon,
  },
  setup() {
    return { heartHalfOutline, codeOutline };
  },
};
</script>

<template>
  <div class="max-auto max-w-7xl flex flex-col">
    <div class="relative px-4 pt-2">
      <div class="absolute top-0 right-0 pr-20 magic">
        <svg
          fill="#e9da27"
          height="93px"
          width="93px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="-48.91 -48.91 586.88 586.88"
          xml:space="preserve"
          stroke="#e9da27"
          stroke-width="0.00489059"
          transform="rotate(0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="6.846826000000002"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M481.211,443.368L224.809,186.946l55.817-17.364c3.88-1.196,6.736-4.509,7.38-8.528c0.642-4.018-1.058-8.051-4.383-10.385 l-56.798-40.165c-9.814-6.913-15.56-18.2-15.417-30.172l0.916-69.519c0.051-4.06-2.23-7.796-5.837-9.647 c-3.608-1.844-7.976-1.483-11.225,0.962l-55.73,41.584c-9.588,7.163-22.117,9.136-33.439,5.294L40.246,26.678 c-3.848-1.315-8.118-0.322-11.007,2.55c-2.868,2.872-3.847,7.138-2.563,10.987l22.376,65.862c3.8,11.343,1.828,23.837-5.325,33.438 L2.131,195.245c-2.418,3.272-2.819,7.628-0.977,11.236c1.859,3.633,5.599,5.887,9.688,5.84l69.502-0.898 c11.971-0.153,23.244,5.582,30.174,15.366l40.149,56.807c2.373,3.32,6.401,5.021,10.412,4.387c4.025-0.632,7.314-3.497,8.518-7.378 l17.375-55.805l256.389,256.422c5.243,5.221,12.094,7.836,18.908,7.836c6.885,0,13.73-2.615,18.943-7.836 C491.671,470.772,491.671,453.826,481.211,443.368z"
            ></path>
          </g>
        </svg>
      </div>
      <div
        class="font-princess-sofia inset-y-0 left-0 text-5xl md:text-9xl lg:text-giant"
      >
        <h3 class="animate-text p-16">
          Hi,<br />
          I'm Diana...
        </h3>
      </div>
    </div>
    <!--div class="grid grid-cols-2 pb-32">
      <div></div>
      <div class="flex justify-end">
        <ion-button fill="outline" size="large" color="pink">
          My profile&nbsp;<ion-icon :icon="heartHalfOutline"></ion-icon
        ></ion-button>
        <ion-button fill="outline" size="large" color="pink">
          My projects&nbsp;<ion-icon :icon="codeOutline"></ion-icon
        ></ion-button>
      </div>
    </div-->
  </div>
</template>

<style scoped>
ion-button {
  --background: rgb(192 38 211);
  --background-hover: rgb(192 38 211);
  --color: rgb(192 38 211);
}

.magic {
  filter: drop-shadow(0px 0px 50px #eebb21);
}

svg {
  height: 95%;
  width: 95%;
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
