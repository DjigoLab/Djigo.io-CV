<template>
  <div class="wrapper">
    <h3 class="visitors-title">My guests</h3>
    <div class="visitors">
      <div
        class="visitor animated fadeIn"
        v-for="guest in guests.slice().reverse()"
        :key="guest.id"
      >
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
      guests: [],
      socket: io(process.env.PORT)
    };
  },
  methods: {
    getGuests() {
      fetch("/api/users/")
        .then(res => res.json())
        .catch(err => console.error(err))
        .then(data => (this.guests = data))
        .catch(err => console.error(err));
    }
  },
  mounted() {
    this.getGuests();
    this.socket.on(
      "ENTRY_ADDED",
      function() {
        this.getGuests();
      }.bind(this)
    );
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
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-gap: 15px;
  .visitor {
    border: 1px solid black;
    padding: 15px;
    text-align: center;
    overflow: auto;
    min-height: 80px;
  }
}
</style>
