import Vue from 'vue'
import App from './App.vue'
import EventBus from './components/event-bus'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    getTargetNumber: function(target) {
      setTimeout(function() { 
        debugger;
        EventBus.$emit("target_achieved",target)
     }, target);
    } 
  }
});


new Vue({
  render: h => h(App)
}).$mount('#app')
