<template>
  <div id="wrapper">
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
          <li>Express</li>
          <li>Node.js</li>
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
        <p>Also I:</p>
        <ul>
          <li>do presentations & meetups</li>
          <li>am a HDD Fanatic</li>
          <li>love travelling</li>
        </ul>
      </div>
    </div>
    <p class="contact">
      You can contact me via:
      <a href>E-mail</a>,
      <a href>Linkedn</a> or
      <a href>Twitter</a> and also
      <a href="https://ko-fi.com/djigoio" target="_blank">gift me some caffeine</a> ☕
    </p>
    <Guestbook/>
    <Visitors/>
  </div>
</template>

<script>
import Guestbook from "./Guestbook.vue";
import Visitors from "./Visitors.vue";
export default {
  components: {
    Guestbook,
    Visitors
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  font-family: monospace;
  display: flex;
  flex-flow: column;
  padding: 15px;

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
    border: 2px solid rgb(201, 201, 201);
    padding: 15px;
    // border-radius: 5px;
  }
}
</style>
