<template>
  <nav class="index-nav">
	<ul> 
      <li>
        <span @click="changetopic('share')">分享</span>
    </li>
    <li>
        <span @click="changetopic('job')">招聘</span>
    </li>
  </ul>
</nav>    
</template>

<script>
//
import {bus} from '../../bus/bus'
//
export default {
  name: 'nav',
  methods: {
  	changetopic: function(value) {
  		bus.$emit('nav_list', value);
  	}
  }
}
</script>

<style>


</style>