<template>
  <q-card class="my-card" flat bordered>
    <q-img class="poster" :src="movie.Poster" />
    <q-card-section>
      <q-btn
        fab
        color="primary"
        icon="more_horiz"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
        @click="showDetails(movie.imdbID)"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h5 ellipsis">{{ movie.Title }}</div>
        <div
          class="col-auto text-white-9 text-caption q-pt-md row no-wrap items-center"
        >
          <q-icon name="hourglass_full" />
          {{ movie.Year }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: Object,
    card: Boolean,
    showDetails: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-card {
  width: 100%;
  max-width: 400px;
  background-color: #4d648d;
  color: #fafafa;
}
.poster {
  max-height: 550px;
}
</style>
