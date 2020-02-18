<template>
  <div class="q-pa-md row flex-inline justify-center items-start q-gutter-md">
    <Movie
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      :card="card"
      :showDetails="showDetails"
    />
    <Card
      :details="details"
      :card="card"
      :stars="stars"
      :closeDetails="closeDetails"
    />
  </div>
</template>

<script>
import Api from "@/api/Movies";

import Movie from "@/components/Movie.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",

  components: {
    Movie,
    Card
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  data() {
    return {
      details: {},
      watched: false,
      openDetails: false,
      card: false,
      stars: 0
    };
  },
  async mounted() {
    this.$store.dispatch("getMovies");
  },
  methods: {
    showDetails: async function(id) {
      try {
        const response = await Api.details(id);
        this.details = response.data;
        this.stars = parseInt(response.data.Ratings[0].Value.split("/")[0]) / 2;
        this.card = !this.card;
      } catch (err) {
        console.log(err);
      }
    },
    closeDetails: function() {
      this.card = !this.card;
    }
  }
};
</script>
