const API = "https://raw.githubusercontent.com/DmitGab/project/main";

const app = new Vue({
  el: "#app",
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
  },
  mounted() {
    console.log(this);
  },
});
