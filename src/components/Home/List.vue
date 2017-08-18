<template>
  <div>
    {{listdata}}
  </div>
</template>

<script>
//
import {bus} from '../../bus/bus'
//
export default {
  name: 'list',
  data() {
  	return {
  		listdata: []
  	}
  },
  created() {
  	const _this = this;
  	bus.$on('nav_list', function (value) {
  		//网络请求数据
  		_this.fetchdata(value);
  	})
  },
  methods: {
  	fetchdata: function (value) {
  		//axios
  		this.listdata = data.data.xxxx;
  	}
  }
}
</script>

<style>

</style>