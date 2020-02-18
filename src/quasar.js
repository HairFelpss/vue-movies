import Vue from "vue";

import "./styles/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, QCard, QCardSection, QCardActions } from "quasar";
Vue.use(Quasar, {
  config: {},
  components: {
    QCard,
    QCardSection,
    QCardActions
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: {}
});
