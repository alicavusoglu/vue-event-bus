<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="number"/>
    <p></p>
    <button v-on:click="getTarget">Start!</button>
  </div>
</template>

<script>
import EventBus from './event-bus'
export default {
  name: 'HelloWorld',
  data:function(){
    return {
    number:0
    };
  },
  props: {
    msg: String
  },
  methods:{
    getTarget:function(){
      debugger;
      this.getTargetNumber(this.number);
    }
  },
  mounted(){
    EventBus.$on('target_achieved', function(number){
      alert('Target Achieved: '+number.toString());
    });
  }
}
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
