import Api from "./Api";

export default {
  all() {
    return Api.get(
      "?s=blue&apikey=18654f91&page=1&type=movie&Content-Type=application/json"
    );
  },
  details(id) {
    return Api.get(`?i=${id}&apikey=18654f91`);
  }
};
