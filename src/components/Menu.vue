<template>
  <q-btn label="Assistir Depois">
    <q-menu fit>
      <q-list dense style="min-width: 100px">
        <q-separator />
        <q-item clickable v-for="movie in movies.waitList" :key="movie.id">
          <q-item-section>{{ movie.waitList.Title }}</q-item-section>
          <q-item-section side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>

          <q-menu anchor="top right" self="top left">
            <q-list>
              <q-item clickable>
                <q-item-section>Watched</q-item-section>
                <q-item-section side style="color: green">
                  <q-icon name="watch_later" />
                </q-item-section>
              </q-item>
              <q-item clickable @click="deleteFromWaitList(movie.waitList)">
                <q-item-section>Delete</q-item-section>
                <q-item-section side style="color: red">
                  <q-icon name="delete" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Quit</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  name: "Menu",
  props: {
    movies: {},
    deleteFromWaitList: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.watched {
  background-color: "red";
}
</style>
