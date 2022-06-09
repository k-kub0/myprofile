<template>
<body>
  <h1 class="font-italic main-heading"><p class="font-weight-bold">Outputs</p></h1>
  <v-container fluid grid-list-lg>
    <v-layout wrap justify-space-around>
      <v-flex d-flex xs9 md6 v-for="(item, index) in items" :key=index>
        <div class="container">
        <v-card weight="100%" height="100%">
          <img v-bind:src="item.img" alt="">
          <div class="title">
          <v-card-title class="title">{{ item.title }}</v-card-title>
          </div>
          <v-card-text class="pb-4">{{ item.description }}</v-card-text>
          <span class="under">使用したもの</span>
          <ol class="sample1">
          <li>{{ item.usedTechnology1 }}</li>
          <li>{{ item.usedTechnology2 }}</li>
          <li>{{ item.usedTechnology3 }}</li>
          <li>{{ item.usedTechnology4 }}</li>
          </ol>
          <v-card-actions>
          <div class="button">
          <v-btn flat color="orange" v-bind:href="item.url">詳しく見る</v-btn>
          </div>
        </v-card-actions>
        </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
  </body>
</template>




<script>

export default {
  name: 'Output',
  data () {
    return {
      items: [
        { title: 'プロフィールサイト', 
          img: require('../assets/myprofile.png'),
          description: '当プロフィールサイトです。GithubPagesで公開してます。', 
          url: 'https://k-kub0.github.io/myprofile',
          usedTechnology1:'HTML',
          usedTechnology2:'CSS',
          usedTechnology3:'Javascript(Vue.js)',
          usedTechnology4:'Vuetify',
          },

        { title: 'Kubos Note', 
          img: require('../assets/kubosnote.png'),
          description: '私が個人的にメモとして残しておきたい内容を投稿しています。初めてDjangoを使用しました。デプロイにはpythonanywhereを使用しています。', 
          url: 'https://kkubo.pythonanywhere.com/',
          usedTechnology1:'HTML',
          usedTechnology2:'CSS',
          usedTechnology3:'Python(Django)',
          usedTechnology4:'pythonanywhere',
          },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

content {
   list-style: none;
}


div.container {
 padding:3vw;
 text-align: center;
}

.under {
  background: linear-gradient(transparent 80%, #2d8fdd 80%);
  font-weight:bold;
}

.main-heading {
  background-color: #39475D;
  color: white;
}

ul, ol {
  padding-right: 5vw;
  padding-left: 5vw;
  padding-bottom: 5vw;
  padding-top: 1vw;
  position: relative;
}

ul li, ol li {
  color: #2d8fdd;
  border-left: solid 6px #2d8fdd;/*左側の線*/
  background: #f1f8ff;/*背景色*/
  margin-bottom: 3px;/*下のバーとの余白*/
   line-height: 1.5;
  padding: 0.5em;
  list-style-type: none!important;/*ポチ消す*/
}

li {
  padding-left: 20px;
	list-style-type: disc;
	list-style-position: outside;
  list-style: none;
}

img {
  margin-top:2vw;
  width: 40vw;
  height: 22vw;
}

* {
  height: 100%;
}

body {
    animation: fadeIn 2s ease 0s 1 normal;
    -webkit-animation: fadeIn 2s ease 0s 1 normal;
    background-color:snow;
}

.title {
  text-align: center;
}

@keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

@-webkit-keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

</style>