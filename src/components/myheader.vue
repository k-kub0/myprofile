<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
           <div class='button'>
            {{ item.title }}
           </div>
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'Top', path: '/' },
        { title: 'Profile', path: '/profile' },
        { title: 'Skills', path: '/skills' },
        { title: 'Outputs', path: '/outputs' }
      ]
    }
  }
}
</script>

<style scoped>

ol {
  margin-left: auto;
  margin-right: auto;
  /* width: 480px; */
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
 
}

li {
  margin-right:7vw;
  margin-left:7vw;
  width: 18vw;
  height: 50px;
  margin-bottom: 10px;
  /* margin-left:10px; */
  /* margin-right:10px; */
  font-size: 13px;
  border-radius: 8px;
  position: relative;
  letter-spacing: 0;
  display: inline-block;
	position: relative;
	color: white;
  
}


li:before{
	content: "";
	position: absolute;
	left: 0;
	bottom: -2px;
	width: 100%;
	height: 2px;
	background: white;
	transform: scale(0, 1);
	transition: 0.4s;
}

li:hover:before {
	transform: scale(1);
}
/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

* {
  z-index: 9999;
  font-family: Quicksand, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  margin: 0px;
  padding: 0px;
  position: sticky;
  top: 0;
  background-color:#39475D;
  width: 100%;
}


</style>
