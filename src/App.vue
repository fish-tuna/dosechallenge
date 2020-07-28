<template>
  <div id="app">
    <h1>Submit reviews for your Alexa device. See the most recent reviews that people have written.</h1>
    <h1>App constructed using Vue.js and Firestore.</h1>
    <AddReview />
    <Reviews v-bind:reviews="reviews" :key="key" />
  </div>
</template>

<script>
import AddReview from "./components/AddReview.vue";
import Reviews from "./components/Reviews.vue";
import db from "@/fb";
export default {
  name: "App",
  components: {
    AddReview,
    Reviews,
  },
  data() {
    return {
      reviews: [],
      key: 0,
    };
  },
  created() {
    db.collection("reviews")
      .orderBy("timestamp", "desc")
      .limit(3)
      .onSnapshot((querySnapshot) => {
        let updatedReviews = [];
        querySnapshot.forEach((doc) => {
          const addReview = {
            rating: doc.data().rating,
            variation: doc.data().variation,
            review: doc.data().review,
            timestamp: doc.data().timestamp,
          };
          updatedReviews.push(addReview);
        });
        this.reviews = updatedReviews;
        //table in Reviews component doesn't update on props change, force Reviews to rerender to solve issue
        this.forceRerender();
      });
  },
  methods: {
    forceRerender() {
      this.key += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 55px;
  color: black;
  font-size: 30px;
}
</style>
