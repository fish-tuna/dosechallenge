<template>
  <div>
    <b-table :data="data" :columns="columns"></b-table>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  props: ["reviews"],
  data() {
    return {
      data: this.reviews,
      columns: [
        {
          field: "rating",
          label: "Rating",
          width: 60,
          numeric: true,
          centered: true,
        },
        {
          field: "variation",
          label: "Variation",
        },
        {
          field: "review",
          label: "Review",
        },
        {
          field: "timestamp",
          label: "Date",
          width: 300,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>