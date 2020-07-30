<template>
  <section>
    <form @submit.prevent="submitReview">
      <b-field label="rating" label-position="inside">
        <b-select v-model="rating" placeholder="Give a rating from 1-5" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </b-select>
      </b-field>
      <b-field label="variation" label-position="inside">
        <b-select v-model="variation" placeholder="Select device variation" required>
          <option value="Charcoal Fabric">Charcoal Fabric</option>
          <option value="Sandstone Fabric">Sandstone Fabric</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Walnut Finish">Walnut Finish</option>
          <option value="Heather Gray Fabric">Heather Gray Fabric</option>
          <option value="Oak Finish">Oak Finish</option>
        </b-select>
      </b-field>
      <b-field label="review" label-position="inside">
        <b-input
          v-model="review"
          type="textarea"
          minlength="10"
          maxlength="500"
          placeholder="Enter a review: (min 10 characters)"
          required
        ></b-input>
      </b-field>
      <b-button tag="input" native-type="submit" value="Submit Review!" />
    </form>
  </section>
</template>


<script>
import db from "@/fb";
export default {
  name: "AddReview",
  data() {
    return {
      //set b-select field default values to null, otherwise placeholder won't show up
      rating: null,
      variation: null,
      review: "",
      timestamp: "",
    };
  },
  methods: {
    submitReview() {
      const newReview = {
        rating: this.rating,
        variation: this.variation,
        review: this.review,
        timestamp: Date.now(),
      };
      this.rating = null;
      this.variation = null;
      this.review = "";
      db.collection("reviews")
        .add(newReview)
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },
  },
};
</script>

<style scoped>
form > * {
  margin: auto 20px;
}
b-input {
}
</style>
