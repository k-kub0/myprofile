<template>
<body>
  <h1 class="font-italic main-heading"><p class="font-weight-bold">Profile</p></h1>
  <div class="profile">
   <h2 class="heading">Basic Information</h2>
 <div class='content1'>
<img src="@/assets/IMG_2722.jpg"/>
</div>

<div class='content1'>
<h2>くぼ(Kubo)</h2>

<p></p>
<p>東京都内でぼちぼち働いてます。だいたい池袋にいます。。</p>
<p>普段の業務ではあまり触れていないですが、フロントエンドの技術に興味があります。</p>
<p>動物が好き。。</p>
<div class="snsimage">
<a href="https://twitter.com/hatoo_kb"><img src="@/assets/Twitter_Social_Icon_Circle_Color.png" alt="twitter" width="40" height="40"></a>
<a href="https://kekekkusu.hatenablog.com/"><img src="@/assets/hatenablog.png" alt="hatenablog" width="40" height="40"></a>
</div>
</div>

<table class="tbl-r02">
  <tr>
    <th>生年月日</th>
    <td>1995年4月10日(25歳)</td>
  </tr>
  <tr>
    <th>居住地</th>
    <td>東京都板橋区</td>
  </tr>
</table>

<div class="timeline">
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      color="indigo lighten-1"
      small
    >
      <template v-slot:opposite>
        <span>{{year.year}}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-text>
          {{year.text}}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</div>



<h2 class="heading">Hobby</h2>

<div class="contents-wrap">
	<div class="contents-img">
		<img src="@/assets/fNG32T6SdVx1d2E1568475084_1568475103.png" alt="">
	</div>
	<div class="contents-text">
		<h2>動物</h2>
		<p>動物を見たり動物と触れ合ったりするのが好きです。</p>
    <p>最近はハムスターとかハリネズミが熱い。</p>
    <p>将来は飼いたいです。。。</p>
	</div>
</div>
</div>
</body>
</template>

<script>
export default {
    data: () => ({
      years: [
        {
          year: '1995',
          text: '新潟県に産まれる。'
        },
        {
          year: '2000',
          text: '京都府に引っ越す。学生時代はずっとテニスしてました。'
        },
        {
          year: '2014',
          text: '大学進学を機に神奈川県横浜市に引っ越す。'
        },
        {
          year: '2018',
          text: '東京都市大学を無事卒業後、ソフトウェア開発会社に就職。　就職を機に東京都板橋区に引っ越す。'
        },
        {
          year: '2020',
          text: '現在に至る 現在社会人3年目'
        },
      ],
    }),
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* * {
    display: inline-block;
} */

.snsimage{
  padding-right:15px;
}

.profile {
  background-color: snow;
}

div.content1 {
  float: center;
  width: 100%;
  background-color: snow;
}

div.content2 {
  background-color: #39475D;
  /* display: inline-block; */
  margin: 10px;
  width: 100%;
  padding: 200px;
}

.main-heading {
  background-color: #39475D;
  color: white;
}

.heading {
	position: relative;
  margin-top: 1em;
	margin-bottom: 1em;
	text-align: center;
}
.heading:before {
	content: '';
	position: absolute;
	bottom: -8px;
	display: inline-block;
	width: 15vw;
	height: 5px;
	left: 50%;
	transform: translateX(-50%);
	background-color: orange;
	border-radius: 2px;
}

table {
  margin: 20px auto;
  margin-bottom: 4vw;
}
.tbl-r02 th {
  padding: 1vw;
}
.tbl-r02 td {
　border: solid 1px #ccc;
  padding: 10px;
}
 
@media screen and (max-width: 640px) {
  .last td:last-child {
    border-bottom: solid 1px #ccc;
    width: 100%;
  }
  .tbl-r02 {
    width: 80%;
  }
  .tbl-r02 th,
  .tbl-r02 td {
　　border-bottom: none;
    display: block;
    width: 100%;
  }
}

.cp_hr08 {
	border-top: 1px dashed #39475D;
	border-bottom: 1px dashed #39475D;
}


ul, ol {
  padding: 0;
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

div.timeline {
  margin-right:5vw;
  margin-left:5vw;
  margin-bottom:8vw;
  margin-top:5vw
}

.contents-wrap {
	display: flex;
	justify-content: space-between;
  background-color:#39475D;
  color:white;
}
.contents-wrap:nth-child(odd) {
	flex-direction: row-reverse;
}

.contents-text {
	width: 60%; /*flex: 2;*/
  margin-bottom: 2rem;
  margin-top: 3.5em;
}


.contents-text h2 {
	margin-bottom: 2rem;
	font-size: 2.2rem;
}

.contents-img img {
	display: block;
	width: 350px;
	height: auto;
  padding:5%;
  margin: 0 auto;
  
}

@media screen and (max-width: 600px){
	.contents-wrap,
	.contents-wrap:nth-child(odd)  {
		flex-direction: column;
	}

	.contents-text,
	.contents-img {
		width: 100%; /*flex: 1;*/
	}

	.contents-text {
		padding: 3rem;
	}

	.contents-text h2 {
		text-align: center;
	}
}


p {
  width: 90%;
  display: inline-block;
}
* {
  font-family: Quicksand, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}


body {
    animation: fadeIn 3s ease 0s 1 normal;
    -webkit-animation: fadeIn 2s ease 0s 1 normal;
    background-color:snow;
}

@keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

@-webkit-keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

* {
  font-family: Quicksand, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

</style>