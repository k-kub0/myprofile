<template>
<body>
<div class="box11">
<h1 class="heading">Profile</h1>
<div class='content1'>
<img src="@/assets/profileimagepng.png"/>
</div>

<div class='content1'>
<h2>久保健太(Kubo Kenta)</h2>

<p></p>
<p>テストテストテスト</p>
<p>テストテストテスト</p>
<p>テスト</p>
<div class="snsimage">
<a href="https://twitter.com/hatoo_kb"><img src="@/assets/Twitter_Social_Icon_Circle_Color.png" alt="twitter" width="40" height="40"></a>
</div>
</div>

<table class="tbl-r02">
  <tr>
    <th>生年月日</th>
    <td>1995年4月10日(27歳)</td>
  </tr>
  <tr>
    <th>居住地</th>
    <td>埼玉県さいたま市</td>
  </tr>
</table>

<!-- <div class="timeline">
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
</div> -->



<!-- <h1 class="heading">Hobby</h1>

<div class="contents-wrap">
	<div class="contents-img">
		<img src="@/assets/kintore_machine.png" alt="">
	</div>
	<div class="contents-text">
		<h2>スポーツジム</h2>
		<p>社会人になってから10kg弱増加した体重を見て流石にマズいと感じ、池袋の某ジムに通い始めました。</p>
    <p>目指せ現体重から-5kg!!</p>
    <p>痩せる痩せる痩せる痩せる痩せる痩せる痩せる痩せる痩せる</p>
    <p>現状報告：-2kg</p>
	</div>
</div>

<hr class="cp_hr08"/>

<div class="contents-wrap">
	<div class="contents-img">
		<img src="@/assets/fNG32T6SdVx1d2E1568475084_1568475103.png" alt="">
	</div>
	<div class="contents-text">
		<h2>動物</h2>
		<p>動物を見たり動物と触れ合ったりするのが好きです。</p>
    <p>最近はハムスターとかハリネズミが熱い。</p>
    <p>近いうちに飼いたい</p>
	</div>
</div> -->


   

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
          year: '2019',
          text: '現在に至る 現在社会人2年目'
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

/* .profile {
  background-color: snow;
} */

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

.heading {
	position: relative;
  /* margin-top: 1em; */
	margin: 3vm;
	text-align: center;
}
/* .heading:before {
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
} */

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
    /* background-color:snow; */
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
    /* /* padding: 0.5em 1em; */
    margin: 5vw;
    color: #5d627b;
    background: snow;
    border-top: solid 5px #5d627b;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}
.box11 p {
    margin: 0; 
    padding: 0;
}

h1 {
position: relative;
background-color: #39475D;
color: snow;
}

h1::before {
content: "";
position: absolute;
border: 12px solid transparent;
border-top: 12px solid #39475D;;
top: 100%;
left: 50%;
}

h1 p {
margin: 0;
padding: 0;
}

* {
  font-family: Quicksand, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

</style>