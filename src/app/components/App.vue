<template>
  <div id="wrapper">
    <p class="clickable" v-if="showGuestbook" @click="showGuestbook = false">Go back</p>
    <div class="cv" v-if="!showGuestbook">
      <p>
        <strong>Hello!</strong>
      </p>

      <p>
        My name is
        <strong>
          Antonio
          Djigo
        </strong>
      </p>
      <p>
        I'm a
        <strong>Full Stack Developer</strong> from the Canary Islands (pretty hot in here ☀️🌴)
      </p>
      <p>Welcome to my little place on the internet!</p>

      <p>I have worked with many tools!</p>
      <div class="grid-tools">
        <div class="tool">
          <p>Front-end:</p>
          <ul>
            <li>Vue</li>
            <li>Jquery</li>
            <li>SCSS</li>
            <li>React</li>
          </ul>
        </div>
        <div class="tool">
          <p>Back-end:</p>
          <ul>
            <li>Laravel</li>
            <li>Express.js</li>
            <li>ASP.NET MVC</li>
          </ul>
        </div>
        <div class="tool">
          <p>CMS:</p>
          <ul>
            <li>Wordpress</li>
            <li>Drupal</li>
          </ul>
        </div>
        <div class="tool">
          <p>Mobile:</p>
          <ul>
            <li>Android</li>
            <li>Ionic</li>
            <li>React Native</li>
            <li>Flutter</li>
          </ul>
        </div>
        <div class="tool">
          <p>Tools:</p>
          <ul>
            <li>AWS</li>
            <li>MongoDB</li>
            <li>Git</li>
          </ul>
        </div>
        <div class="tool">
          <p>Also I:</p>
          <ul>
            <li>do presentations & meetups</li>
            <li>am a HDD Fanatic</li>
            <li>love travelling</li>
          </ul>
        </div>
      </div>

      <P class="contact">
        I've got a
        <a target="_blank" href="https://github.com/DjigoLab">Github account</a> 🐙
      </P>
      <p class="contact">
        Why don't you also sign the
        <button
          class="toGuestbook"
          @click="showGuestbook = true"
        >Guestbook?</button>
      </p>
      <p class="contact">
        You can contact me via:
        <a href>E-mail</a>,
        <a href>Linkedn</a> or
        <a href>Twitter</a> and also
        <a href="https://ko-fi.com/djigoio" target="_blank">gift me some caffeine</a> ☕
      </p>
    </div>
    <guestbook v-if="showGuestbook"/>
    <visitors v-if="showGuestbook"/>
  </div>
</template>

<script>
import Guestbook from "./Guestbook.vue";
import Visitors from "./Visitors.vue";
export default {
  data() {
    return {
      showGuestbook: false
    };
  },
  components: {
    Guestbook,
    Visitors
  },
  methods: {
    swapToGuestbook() {
      console.log(1);
    }
  }
};
</script>

<style lang="scss" >
html {
  background-image: url("https://i.imgur.com/5V76jwv.jpg");
}
.clickable {
  text-decoration: underline;
  padding: 0px 15px;
  margin-bottom: 0;
}
#wrapper {
  background-image: url("http://api.thumbr.it/whitenoise-361x370.png?background=ffffffff&noise=626262&density=10&opacity=10 ");
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-flow: column;
  margin: 25px;
  padding: 15px;
  border: 1px solid gray;
  background-color: white;
  -webkit-box-shadow: -5px 0.5px 20px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: -5px 0.5px 20px 0px rgba(0, 0, 0, 0.45);
  box-shadow: -5px 0.5px 20px 0px rgba(0, 0, 0, 0.45);

  @media (min-width: 768px) {
    padding: 30px;
    margin: 50px;
  }
  .grid-tools {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    grid-gap: 15px;
    .tool {
      border: none;
      p {
        font-weight: bold;
      }
    }
  }
  .contact {
    text-align: center;
  }
  div {
    padding: 15px;
    // border-radius: 5px;
  }
  button {
    border: 0px;
    background: transparent;
    border: 1px solid black;
    font-family: "Roboto Mono", monospace;
  }
  a {
    color: black;
    font-weight: bold;
  }
}
</style>
