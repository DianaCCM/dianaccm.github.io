<script>
export default {
  data() {},
  components: {},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <div
    class="max-w-7xl px-2 flex flex-col justify-center items-center sm:mb-14"
  >
    <div class="flex flex-col justify-center items-center pb-8">
      <div class="justify-center items-center font-press-start">
        <p
          class="text-fuchsia-600 text-xs md:text-xl lg:text-3xl typingEffect pb-4"
        >
          console.log("About me...");
        </p>
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-center text-white text-xs md:text-sm lg:text-xl text-center"
    >
      <span class="my-text-up pb-2 font-press-start">
        I <span class="text-red">&#10084;</span> create things for the web.<br
      /></span>
      <span class="my-text-up">
        I'm passionate about embracing new technologies and challenges.
      </span>
    </div>
  </div>
</template>

<style scoped>
.typingEffect {
  overflow: hidden;
  border-right: 0.15em solid;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 1.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

.my-text-up {
  display: block;
  animation-name: slideUp;
  animation-duration: 3s;
  animation-timing-function: ease-in;
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
