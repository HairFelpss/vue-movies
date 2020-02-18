<template>
  <q-layout view="lHh Lpr lFf">
    <Header msg="Blue Movies" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "LayoutDefault",

  components: {
    Header
  },
  data() {
    return {
      waitList: JSON.parse(localStorage.getItem("my-app"))
    };
  }
};
</script>

<style>
html {
  background-color: #d0e1f9;
}
</style>
