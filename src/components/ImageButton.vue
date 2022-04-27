<script>
  export default {
    data() {
      return {
        imageIsPressed: false
      };
    },
    watch: {
      imageIsPressed(after) {
        console.log("The new value of imageIsPressed is " + after + ".");
      }
    },
    methods: {
      toggle() {
        this.imageIsPressed = !this.imageIsPressed;
      }
    },
    computed: {
      source: {
        get() {
          return this.$store.state.imageSource;
        },
        set(value) {
          this.$store.commit("updateSource", value);
        }
      },
      borderColor() {
        return this.imageIsPressed === true ? "#f00" : "transparent";
      }
    }
  };
</script>

<style>
  img {
    border: 3px double transparent;
    margin: 1rem;
  }

  input {
    width: 48rem;
  }
</style>

<template>
  <div>
    <p>
      https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a
    </p>
    <p>
      https://github.githubassets.com/images/modules/profile/badge--acv-64.png
    </p>
    <input v-model="source" type="text" />
    <br />
    <img alt="" :src="source" @click="toggle()" :style="{ borderColor }" />
    <p v-if="imageIsPressed === true">
      The image is pressed. I swear it's {{ imageIsPressed }}!
    </p>
  </div>
</template>
