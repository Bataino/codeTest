<template>
  <!-- <div clas="d-flex justify-content-center p-5"> -->
    <div class="p-4" >
      <h4 class="mont ps-3 ps-lg-0 text-head-contact text-white">
        CONTACT
      </h4>
      <div class="start-position w-100">
        <Header></Header>
        <div class="d-flex pt-5 bg-text justify-content-center align-items-center ">
          <div class="p-3 mx-4" style="max-width:700px">
            <div class="text-start mb-5">
              <div class="h5 mont">
                GET IN TOUCH
              </div>
              <div class="muli">
                Form doesn't have to function when submitted. It is assumed that the applicant will be able to take this design and create an appropriate mobile layout.               </div>
            </div>

            <div class="p-4 text-start bg-card bg-text">
              <div class="h5 mont bg-card muli">
                Contact Form
              </div>
              <form class="text-start my-4 form-group">
                <br>

                <div class="row">

                  <div class="col-sm-12 col-lg-6">
                    <div class="">
                      <label for="name" class="text-white muli">
                         <b>Name</b>
                      </label>
                      <input class="form-control my-1 text-white rounded-0 muli bg-input border-0 py-2">
                    </div>
                  </div>

                  <div class="col-sm-12 col-lg-6">
                    <div class="mt-3 mt-lg-0">
                      <label for="select" class="text-white muli"> 
                        <b>Email Address</b>
                        <sup>*</sup>
                      </label>
                      <input class="form-control my-1 text-white rounded-0 muli bg-input border-0 py-2">
                    </div>
                  </div>

                </div>

                <div class="muli mt-4">
                  <label for="name" class="text-white">
                    <b>Message</b>
                  </label>
                  <textarea class="form-control text-white rounded-0 muli bg-input border-0 my-2 py-2"></textarea>
                </div>

                <div class="py-2 text-md-end">
                    <button class="btn rounded-0 bg-button w-sm-100 float-lg-end form-control form-control-sm text-white mt-4 muli px-lg-4 my-lg-2 border-0">
                      <font class="small">
                        Submit
                      </font>
                    </button>
                  </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '../components/Header.vue';

export default defineComponent({
  name: "About",
  components:{
    Header
  }
});

</script>

<style>

</style>