<template>
<body>
<div>
<div class='content1'>
<div class='top-summary'>
<div class='top1'>
Welcome
</div>
<div class='top2'>
to
</div>
<div class='top3'>
MyPage!
</div>
</div>

<div class='top3'>
<div class='name'>
by Kenta Kubo
</div>
</div>
</div>
<div class="menu">
    <div class="content3">
      <ol>
   <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
           <div class="container">
           <div class='button'>
            {{ item.title }}
            </div>
           </div>
         </router-link>
      </li>
      </ol>
      </div>
</div> 
</div>
</body>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'Profile', path: '/profile' },
        { title: 'Skills', path: '/skills' },
        { title: 'Outputs', path: '/outputs' }
      ]
    }
  }
}
</script>

<style scoped>
div.top1{
  /* アニメーション設定 */
  animation-name:fade-in1;
  animation-duration:1s; /*アニメーション時間*/
  animation-timing-function: ease-out; /*アニメーションさせるイージング*/
  animation-delay:0s; /*アニメーション開始させる時間*/
  animation-iteration-count:1; /*繰り返し回数*/
  animation-direction:normal; /*往復処理をするかどうか*/
  animation-fill-mode: forwards; /*アニメーション後のスタイルをどうするか*/
}

/* // アニメーション */
@keyframes fade-in1 {
  0% {opacity: 0; transform: translate3d(0,20px,0);}
  100% {opacity: 1; transform: translate3d(0,0,0);}
}

div.top2{
  /* アニメーション設定 */
  animation-name:fade-in2;
  animation-duration:2s; /*アニメーション時間*/
  animation-timing-function: ease-out; /*アニメーションさせるイージング*/
  animation-delay:0s; /*アニメーション開始させる時間*/
  animation-iteration-count:1; /*繰り返し回数*/
  animation-direction:normal; /*往復処理をするかどうか*/
  animation-fill-mode: forwards; /*アニメーション後のスタイルをどうするか*/
}

/* // アニメーション */
@keyframes fade-in2 {
  0% {opacity: 0; transform: translate3d(0,20px,0);}
  100% {opacity: 1; transform: translate3d(0,0,0);}
}

div.top3{
  /* アニメーション設定 */
  animation-name:fade-in3;
  animation-duration:3s; /*アニメーション時間*/
  animation-timing-function: ease-out; /*アニメーションさせるイージング*/
  animation-delay:0s; /*アニメーション開始させる時間*/
  animation-iteration-count:1; /*繰り返し回数*/
  animation-direction:normal; /*往復処理をするかどうか*/
  animation-fill-mode: forwards; /*アニメーション後のスタイルをどうするか*/
}
/* // アニメーション */
@keyframes fade-in3 {
  0% {opacity: 0; transform: translate3d(0,20px,0);}
  100% {opacity: 1; transform: translate3d(0,0,0);}
}

div.name {
  font-size:20px;
}

div.top-summary {
  /* font-size:65px; */
  font-size:6em;
  font-weight:bold;
  letter-spacing: 4px;
}

div.content1 {
  padding-top:3vw;
  float: center;
  width: 100%;
  color:#39475D;
}

div.content3 {
  display: flex;
  justify-content: center;
}

.button {
  width: 150px;
  height: 50px;
  text-decoration: none;
  /* line-height: 10vw; */
  outline: none;
  position: relative;
  z-index: 2;
  border: 1px solid #39475D;
  overflow: hidden;
  text-align: center;
}
.button:hover {
  color: snow;
}

.button::before,
.button::after {
  position: absolute;
  z-index: -1;
  display: block;
  content: '';
  top: -100%;
  width: 100%;
  height: 100%;
}
.button,
.button::before,
.button::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.button:hover::after {
  top: 0;
  background-color: #39475D;
  color: #fffafa;
}


li {
  margin-bottom:100px;
  font-size:20px;
  border-radius: 4vw;
  margin-right: 200px;
  position: relative;
  letter-spacing: 0;
	/* color:white; */
 	text-decoration: none;
  text-align: center;
  justify-content: center;
  /* アニメーション設定 */
  animation-name:fade-in4;
  animation-duration:1s; /*アニメーション時間*/
  animation-timing-function: ease-out; /*アニメーションさせるイージング*/
  animation-delay:0s; /*アニメーション開始させる時間*/
  animation-iteration-count:1; /*繰り返し回数*/
  animation-direction:normal; /*往復処理をするかどうか*/
  animation-fill-mode: forwards; /*アニメーション後のスタイルをどうするか*/
}

@media ( min-width : 700px ){
  li {
     justify-content: center;
     flex-direction: row;
     margin-right: 200px;
     /* padding-top: 10px; */
     /* justify-content: center; */
     text-align: center;
  }
}


@keyframes fade-in4 {
  0% {opacity: 0; transform: translate3d(0,20px,0);}
  100% {opacity: 1; transform: translate3d(0,0,0);}
}

ol {
  display:flex;
  /* padding: 10vw; */
  list-style: none;
  margin: 10vw;
  /* align-items: center;
   justify-content: space-around; */
  flex-direction: column;
  text-align : center ;
  justify-content: center;
}

@media ( min-width : 700px ){
  ol {
     flex-direction: row; 
     text-align : center ;
     justify-content: center;
  }
}

a {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #39475D;
  text-decoration: none;
  line-height: 50px;
}

body {
background-color: #fffafa;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(90,522,360)'%3E%3Cstop offset='0' stop-color='%23fffafa'/%3E%3Cstop offset='1' stop-color='%23ffffff'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='640' height='533.3' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.09'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}

</style>
