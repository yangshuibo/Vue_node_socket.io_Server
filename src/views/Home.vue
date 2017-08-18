<template>
  <div id="home">
    <Home-nav></Home-nav>
    <Home-list></Home-list>
    <Home-footer></Home-footer>
  </div>
</template>

<script>
//
import HomeNav from '../components/Home/Nav.vue'
import HomeList from '../components/Home/List.vue'
import HomeFooter from '../components/Home/Footer.vue'
import {bus} from '../bus/bus'
//
 var socket = io.connect('http://192.168.0.126:443');


export default {
  name: 'home',
  components: {HomeNav, HomeList, HomeFooter},
  data() {
      return {
        aaa :"",
      }
    },
    created() {
      const _this = this;
      _this.ioConcatenon(socket);
      _this.getMedio();
    },
    methods: {
      ioConcatenon:function (socket) {
        const _this = this;
        var fff = 100;
        console.log(socket,fff);
      },
      getMedio:function () {
        const _this = this;
          _this.aaa = 10;
        console.log(_this.aaa);
      }
    }
}
</script>

<style>

</style>
