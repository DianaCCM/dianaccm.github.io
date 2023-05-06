<script></script>
<template>
  <div
    class="mx-auto max-w-7xl px-2 flex flex-col justify-center items-center lg:h-screen py-20 font-press-start"
  >
    <p class="text-white text-2xl">Oops!</p>
    <p
      class="text-fuchsia-600 pt-12 text-xs md:text-xl lg:text-3xl text-center"
    >
      This page it's under construction
    </p>
    <div class="bar-container">
      <div class="progress2 progress-moved">
        <div class="progress-bar2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bar-container {
  margin: 100px auto;
  width: 50%;
  text-align: center;
  position: relative;
}

.progress2 {
  border-radius: 30px;
  background-color: #fff;
}

.progress-bar2 {
  height: 18px;
  border-radius: 30px;
  transition: 0.4s linear;
  transition-property: width, background-color;
}

.progress-moved .progress-bar2 {
  background-color: rgb(192 38 211);
  animation: progress 7s infinite;
}

@keyframes progress {
  0% {
    width: 0%;
    background: #f9bcca;
  }

  100% {
    width: 100%;
    background: rgb(192 38 211);
    box-shadow: 0 0 40px rgb(192 38 211);
  }
}

@keyframes icon {
  0% {
    opacity: 0.2;
    text-shadow: 0 0 0 rgb(192 38 211);
  }

  100% {
    opacity: 1;
    text-shadow: 0 0 10px rgb(192 38 211);
  }
}

.loader {
  --p: 0;
  animation: p 7s steps(100) infinite;
  counter-reset: p var(--p);
  font-size: 2.1em;
  position: absolute;
  bottom: 45px;
  left: 325px;
  color: rgb(192 38 211);
}

.loader:after {
  content: counter(p) "%";
}

@keyframes p {
  90%,
  100% {
    --p: 100;
  }
}
</style>
