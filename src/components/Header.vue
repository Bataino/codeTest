<template>
  <div class="row px-5 px-lg-0 text-start">
          <div class="col-lg-3">
            <h2>
              <b class="mont text-white">
                VIDEO GAMES
              </b>
              
            </h2>
          </div>
          <div class="col-lg-9">
            <h2 class="mt-sm-5 mt-lg-0">
              <b class="mont text-white">
                CONTACT
              </b>
            </h2>
          </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  components:{
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
