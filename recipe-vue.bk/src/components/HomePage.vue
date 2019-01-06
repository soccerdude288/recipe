<template>
  <div class="home">
    <div class="recentRecipes">
        <div v-for="(data, index) in recipes" :key='index'>
          {{data.recipe}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      recipes: [
        {
          "recipe": "Alfredo",
          "time" : "Fast",
          "cost" : "$10"
        },
        {
          "recipe": "Steak",
          "time" : "Fast",
          "cost" : "$20"
        },
        {
          "recipe": "Tacos",
          "time" : "Fast",
          "cost" : "$15"
        },
        {
          "recipe": "Stew",
          "time" : "Slow",
          "cost" : "$20"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
</style>
