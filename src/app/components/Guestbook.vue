<template>
  <div id="guestbook">
    <h3>Guestbook</h3>
    <p>Sign in your visit!</p>
    <form id="form" @submit.prevent>
      <label for="name">Full name:</label>
      <input name="name" v-model="guest.name" type="text" placeholder="Antonio Djigo" required>
      <label for="type">I'm a...</label>
      <select name="type" id="type" v-model="guest.type">
        <option value="Human">Human</option>
        <option value="Bot">Bot</option>
      </select>
      <label for="age">Age:</label>
      <input type="number" min="0" placeholder="84" v-model="guest.age">
      <!-- <label for="logo">Photo / Company Logo:</label> -->
      <!-- <input type="file" @change="processFile($event)"> -->
      <label for="nationality">I'm from...</label>
      <select name="nationality" id="nationality" v-model="guest.nationality">
        <option value="None">Won't tell...</option>
        <option value="Spain">ESP</option>
        <option value="UK">UK</option>
      </select>
      <input type="submit" value="Submit" @click="addGuest()">
    </form>
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
  methods: {
    addGuest() {
      if (this.guest.name.length > 0)
        fetch("/api/users/", {
          method: "POST",
          body: JSON.stringify(this.guest),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          }
        }).then(res => this.$eventHub.$emit("sent"));
      this.clearForm();
    },
    // processFile(e) {
    //   this.guest.logo = e.target.files[0];
    // },
    clearForm() {
      this.guest.name = "";
      this.guest.age = "";
      this.guest.type = "";
      this.guest.logo = "";
      this.guest.nationality = "";
    }
  }
};
</script>

<style lang="scss" scoped>
#guestbook {
  overflow: hidden;
  #form {
    padding: 15px;
    display: flex;
    flex-flow: column;
    input,
    select {
      margin-bottom: 15px;
      margin-top: 5px;
      border: none;
      border-bottom: 1px solid gray;
      padding: 5px;

      font-family: "Roboto Mono", monospace;
    }
    input[type="submit"] {
      width: 200px;
      padding: 15px;
      border: 0px;
      background: transparent;
      border: 1px solid black;
      font-family: "Roboto Mono", monospace;
      align-self: center;
      margin-top: 30px;
      margin-bottom: 0px;
    }
  }
}
</style>

