<template>
<body>
  <h1 class="font-italic main-heading"><p class="font-weight-bold">Skills</p></h1>
<v-container fluid grid-list-lg>
    <v-layout wrap justify-space-around>
      <v-flex d-flex xs9 md6 v-for="(item, index) in items" :key=index>
        <div class="container">
        <v-card weight="100%" height="100%">
          <h1 class="heading">{{ item.heading }}</h1>
          <v-card-title primary class="title">{{ item.title }}</v-card-title>
          
          <span class="under">{{ item.Usageexperience }}</span>
          <ol class="sample1">
          <li>{{ item.usedTechnology1 }}</li>
          <li>{{ item.usedTechnology2 }}</li>
          <li>{{ item.usedTechnology3 }}</li>
          <li>{{ item.usedTechnology4 }}</li>
          </ol>
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
        { 
          heading:'Language',
          usedTechnology1:'HTML',
          usedTechnology2:'CSS',
          usedTechnology3:'JavaScript',
          usedTechnology4:'PHP',
          Usageexperience:'使用経験有り'
          },

        {
          heading:'Framework',
          usedTechnology1:'Vue.js',
          usedTechnology2:'Laravel',
          usedTechnology3:'BootStrap',
          usedTechnology4:'×',
          Usageexperience:'使用経験有り'
          },

        { 
          heading:'Tool',
          usedTechnology1:'AWS',
          usedTechnology2:'VirtualBox',
          usedTechnology3:'Docker',
          usedTechnology4:'×',
          Usageexperience:'使用経験有り'
          },
        
        {
          heading:'OS',
          usedTechnology1:'Windows',
          usedTechnology2:'MacOS',
          usedTechnology3:'Linux',
          usedTechnology4:'×',
          Usageexperience:'使用経験有り'
          },

         {
          heading:'Qualification',
          usedTechnology1:'AWS クラウドプラクティショナー',
          usedTechnology2:'色彩検定 2級',
          usedTechnology3:'×',
          usedTechnology4:'×',
          Usageexperience:'保有資格'
          },
      ]
    }
  }
}
</script>

<style scoped>
content {
   list-style: none;
}

div.container {
 padding:3vw;
}

.under {
  background: linear-gradient(transparent 80%, #2d8fdd 80%);
  font-weight:bold;
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

.heading {
	position: relative;
  margin-top: 1em;
	margin-bottom: 1em;
	text-align: center;
}

li {
  padding-left: 20px;
	list-style-type: disc;
	list-style-position: outside;
  list-style: none;
}

img {
  margin-top:2vw;
  width: 36vw;
}

* {
  height: 100%;
}

body {
    animation: fadeIn 2s ease 0s 1 normal;
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

</style>