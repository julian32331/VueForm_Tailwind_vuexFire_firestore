<template>
<div class="col-span-1 lg:col-span-6">
  <h4 class="text-3xl text-gray-700 mb-5">Employee Information</h4>
  <div class="p-10 rounded-md shadow-md bg-white">
     <div class="mb-6">
    <label class="block mb-3 text-gray-600" for="">Employee Name</label>
    <input type="text" v-bind:value="name" name="name"  v-on:change="signalChange" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"/>
   </div>
   <div class="mb-6">
    <label class="block mb-3 text-gray-600" for="">Employee Email</label>
    <input type="text" v-bind:value="email" name="email"  v-on:change="signalChange" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"/>
   </div>
    <div class="mb-6">
    <label class="block mb-3 text-gray-600" for="">Employee Phone</label>
    <input type="text" v-bind:value="phone" name="phone"  v-on:change="signalChange" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"/>
   </div>
    <div class="mb-6">
    <label class="block mb-3 text-gray-600" for="">Employee Address</label>
    <input type="text" v-bind:value="address" name="address"  v-on:change="signalChange" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"/>
   </div>
    <div class="mb-6">
    <label class="block mb-3 text-gray-600" for="">Employee Job</label>
    <input type="text" v-bind:value="job" name="job"  v-on:change="signalChange" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"/>
   </div>
   <div class="mb-6 text-right">
    <span class="text-right font-bold">{{percent}}%</span>
   </div>
  </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { db } from '../db'
export default {
  mounted () {
    var { dispatch } = this.$store
    dispatch('bindFields')
  },
  async updated () {
    const snapshot = await db.collection('fields').get()
    let count = 0
    snapshot.forEach(doc => {
      if (doc.data().value) count++
    })
    this.percent = 100 * count / 5
  },
  beforeDestroy () {
    var { dispatch } = this.$store
    dispatch('unbindFields')
  },
  computed: mapGetters({
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    job: 'job'
  }),
  name: 'employee-form',
  methods: {
    signalChange: (evt) => {
      db.collection('fields').doc(evt.srcElement.name).set({
        value: evt.srcElement.value
      })
    }
  },
  data () {
    return {
      percent: 0
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
