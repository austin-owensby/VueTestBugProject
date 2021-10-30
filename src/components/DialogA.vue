<template>
  <div>
      <h2>Dialog A</h2>
      <h3>Admin Only</h3>
      <button @click="closeDialog">Close</button>
  </div>
</template>

<script>
export default {
    methods: {
        closeDialog(){
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
    div{
        border: solid 1px black;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 10rem;
        margin: 1rem;
    }
</style>
