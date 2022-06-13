<template>
<body>
<div class="main">

<!-- ↑ 追加 ↑ -->
  <v-container fluid grid-list-lg>
    <v-layout wrap justify-space-around>
      <v-flex d-flex xs9 md6 v-for="(item, index) in filterByCategory" :key=index>
        <div class="container">
        <v-card weight="100%" height="100%">
        <div class="box11">
        <p>{{ item.category}}</p>
        </div>
          <img v-bind:src="item.img" alt="">
          <div class="title">
          <h1>
          <v-card-title class="title">{{ item.title }}</v-card-title>
          </h1>
          </div>
          <v-card-text class="pb-4">{{ item.description }}</v-card-text>
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
  </div>
  </body>
</template>




<script>
export default {
  name: 'Output',
  data () {
    return {
      category: '', // 初期表示時は全てのカテゴリーを表示する
      items: [
        { index: 1,
          title: 'プロフィールサイト', 
          img: '../../static/myprofile.png',
          description: '当プロフィールサイトです。GithubPagesで公開してます。', 
          url: 'https://k-kub0.github.io/myprofile',
          category: 'プログラミング'
          },

        { index: 2,
          title: '「椅子に座りすぎ」を検知し、LINEで警告してくれるシステム', 
          img: '../../static/KAZUHIRO171013022_TP_V.jpg',
          description: 'obnizを利用した開発です。', 
          url: 'https://k-kub0.github.io/myprofile',
          category: 'プログラミング'
          },
      ]
    }
  },

  //カテゴリー選択時のフィルタリング
  computed: {
    filterByCategory: function () {
      return this.items.filter(
        (item) => !item.category.indexOf(this.category)
      );
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
  /* background-color:snow; */
  border-top: solid 3px;
  margin:5vw

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

.box11{
    padding: 0.5em 1em;
    margin: 2em 0;
    color: #5d627b;
    background: white;
    border-top: solid 5px #5d627b;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}
.box11 p {
    margin: 0; 
    padding: 0;
}

.sample input{
    display: none;
}
.sample label{
    display: block;
    float: left;
    cursor: pointer;
    width: 80px;
    margin: 0;
    padding: 12px 5px;
    border-right: 1px solid #abb2b7;
    background: #bdc3c7;
    color: #555e64;
    font-size: 14px;
    text-align: center;
    line-height: 1;
    transition: .2s;
}
.sample label:first-of-type{
    border-radius: 3px 0 0 3px;
}
.sample label:last-of-type{
    border-right: 0px;
    border-radius: 0 3px 3px 0;
}
.sample input[type="radio"]:checked + label {
    background-color: #a1b91d;
    color: #fff;
}

/* .main{
    padding: 0.5em 1em;
    margin: 5vw;
    color: #5d627b;
    background-color: snow;
    border-top: solid 5px #5d627b;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
} */

.main{
    /* /* padding: 0.5em 1em; */
    margin: 5vw;
    color: #5d627b;
    background: snow;
    border-top: solid 5px #5d627b;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}
.main p {
    margin: 0; 
    padding: 0;
}

h1 {
margin: 0;
position: relative;
text-align: center;
padding: 20px 0 15px;
border-top: solid 2px;
border-bottom: solid 2px;
width: 90%;
margin: 0 auto 35px;
}


</style>