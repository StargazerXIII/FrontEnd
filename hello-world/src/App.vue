<template>
  <div id="app">
    <div class="Polaris-Card">
      <ul role="tablist" class="Polaris-Tabs">
        <li role="presentation" class="Polaris-Tabs__TabContainer"><button id="all-customers" role="tab" type="button" tabindex="0" class="Polaris-Tabs__Tab Polaris-Tabs__Tab--selected" aria-selected="true" aria-controls="all-customers-content" aria-label="Tab1"><span class="Polaris-Tabs__Title">Tab1</span></button></li>
        <li>Tab2</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
