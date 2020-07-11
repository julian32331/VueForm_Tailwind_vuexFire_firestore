<template>
  <div class="container mx-auto p-6 grid grid-cols-1 row-gap-12 lg:grid-cols-10 lg:col-gap-10 lg:pt-12">
    <img alt="Vue logo" src="../assets/logo.png">
    <employee-form />
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeeForm from '@/components/EmployeeForm.vue'
export default {
  name: 'Home',
  components: {
    EmployeeForm
  }
}
</script>
