<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <q-toolbar-title>{{ msg }}</q-toolbar-title>
      <q-toolbar-title>
        <Menu :movies="waitList" :deleteFromWaitList="deleteFromWaitList" />
      </q-toolbar-title>

      <div>{{ msg }} 1.0.0</div>
    </q-toolbar>
  </q-header>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Header",
  props: {
    msg: String
  },
  components: {
    Menu
  },
  data() {
    return {
      waitList: JSON.parse(localStorage.getItem("my-app"))
    };
  },
  methods: {
    deleteFromWaitList: movie => {
      this.$store.dispatch("removeMovieFromWaitList", { movie });
    }
  }
};
</script>

<style scoped>
.glossy {
  background-color: #4d648d;
}
</style>
