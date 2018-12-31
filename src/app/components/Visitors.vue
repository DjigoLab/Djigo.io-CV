<template>
  <div class="wrapper">
    <h3 class="visitors-title">My guests</h3>

    <div class="visitors">
      <div class="visitor" v-for="guest in guests" :key="guest._id">
        <span>{{guest.name}}, {{guest.age}}</span>
        <span>{{guest.nationality}}</span>
        <span>{{guest.type}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guest: {
        name: "",
        age: "",
        type: "",
        // logo: "",
        nationality: ""
      },
      guests: []
    };
  },
  mounted() {
    this.getGuests();
    this.$eventHub.$on("sent", this.getGuests);
  },
  beforeDestroy() {
    this.$eventHub.$off("sent");
  },
  methods: {
    getGuests() {
      fetch("/api/users/")
        .then(res => res.json())
        .then(data => (this.guests = data));
    }
  }
};
</script>

<style lang="scss">
.visitors-title {
  text-align: center;
}
.visitors {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 15px;
  transition: 1s ease-in-out;
  overflow: auto;
  .visitor {
    border: 1px solid black;
    padding: 15px;
    text-align: center;
    overflow: auto;
    min-height: 80px;
  }
}
</style>
