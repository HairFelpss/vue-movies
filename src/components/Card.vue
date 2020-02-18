<template>
  <q-dialog v-model="card" @hide="closeDetails">
    <q-card class="my-card">
      <q-img :src="details.Poster" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="remove_red_eye"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          @click="addToWaitList()"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">{{details.Title}}</div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="hourglass_full" />
            {{details.Released}}
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" readonly />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{details.Plot}}</div>
        <div
          class="text-caption text-blue-1"
        >{{details.Director}} / {{details.Genre}} / {{details.Runtime}}</div>
      </q-card-section>

      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="blue-4" @click="addToWaitList()">Assistir depois</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Boolean,
    details: Object,
    stars: Number,
    closeDetails: Function
  },
  methods: {
    addToWaitList() {
      console.log("entro");
      this.$store.dispatch("addMovieToWaitList", {
        waitList: this.details
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-card {
  background-color: #4d648d;
  color: #fafafa;
}
</style>
