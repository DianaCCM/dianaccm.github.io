<script setup>
import { Disclosure } from "@headlessui/vue";
</script>
<template>
  <Disclosure as="nav" class="bg-primary-dark pt-4">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-12 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/">
              <img
                class="block h-6 w-auto lg:hidden"
                src="../../../public/favicon.ico"
                alt="Heart"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="../../../public/favicon.ico"
                alt="Heart"
              />
            </router-link>
          </div>
          <router-link to="/about">
            <div class="sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <span
                  class="hover:text-amber-200 active:text-amber-200 text-white px-3 py-2 text-base lg:text-xl font-medium"
                >
                  About Me
                </span>
              </div>
            </div>
          </router-link>
          <router-link to="/projects">
            <div class="sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <span
                  class="hover:text-amber-200 active:text-amber-200 text-white px-3 py-2 text-base lg:text-xl font-medium"
                >
                  Projects
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </Disclosure>
</template>
<style scoped></style>
