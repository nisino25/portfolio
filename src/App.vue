<template>

  <head>
    <link rel="apple-touch-icon" sizes="180x180" href="https://i.ibb.co/SJkgPg9/android-chrome-512x512.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://i.ibb.co/SJkgPg9/android-chrome-512x512.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://i.ibb.co/SJkgPg9/android-chrome-512x512.png">
  <link rel="manifest" href="https://i.ibb.co/SJkgPg9/android-chrome-512x512.png">
  </head>

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <div v-if="windowWidth <= '767'">
    メンテナンス中
  </div>
  <div v-else>



    <div class="notion-navbar w3-white">
      <a class="notion-link notion-breadcrumb__item single" >
        <span class="notion-navbar__title">Nozomu Ando</span>
      </a>

      <a class="notion-link notion-breadcrumb__item single" style="position:absolute; right:0; marginRight:10px" >
        <span class="notion-navbar__title">nisino25@gmail.com</span>
      </a>
      
    </div>

    <div class="landing">
      <section class="col-lg-6">
        <h3 style="color:#009688">安藤望のポートフォリオへようこそ！</h3>
        <span>
          ウェブサイトを見に来てくださり、ありがとうございます! <br>
          北海道の札幌出身、現在京都市に在住の２２才 WEBプログラマー（希望）です。
          高校２年生の時に高校を中退し、アメリカの高校に一年留学。帰国後１年後に再度アメリカのにコミニュティーカレッジの入学後、プログラミングを勉強し始めました。始めて学んだ言語はC++ とPythonで、それからプログラマーの兄の影響を受け、ウェブデザインの方にも興味を持ち始めて、HTML/CSS、Ruby on Railsも勉強し始めました。2020年の春からはVue.jsの勉強を本格的に始め、プログラマーの兄とのマンツーマン、それとUdemyなどを使って勉強をして、いくつかのウェブサイトを作りました。
        </span>
        <br>
        <!-- <button class="btn-primary">hey</button> -->
        

      </section>
      <div class="green-cover"></div>
    </div>




    <div class="main-contents">

    </div>

    
      
    <div class="portfolio">
        <h2 class="pre text-center" style="textAlign:center">Portfolio</h2>
        

      <hr>

      <div class="portfolio-section">

        <div class="left-div">
          <img src="https://i.ibb.co/THggt6k/IMG-2371.jpg" alt="" class="mockupPic">
        </div>


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">日記アプリ<span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2021</span></h3>

            <p class="showcase__description mb-4 color-gray">日々の記録をつけるために、日記のアプリを作ってみました。過去のカレンダーを一目みて、どんな１日だったのかを確認できるようにしました。
            </p>

            <a href="https://github.com/nisino25/nikki" target="_blank" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://nisino25-nikki.netlify.app/" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 
      <hr>

      <div class="portfolio-section">

        <div class="left-div">
          <img src="https://i.ibb.co/dGTLrPg/IMG-2367.jpg" alt="" class="mockupPic">
        </div>


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">リマインダー<span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2021</span></h3>

            <p class="showcase__description mb-4 color-gray">iOSの方のリマインダーアプリに不具合があったので、自ら作ってみました。このアプリではアニメーションに力を入れてみました。
            </p>

            <a href="https://github.com/nisino25/reminder" target="_blank" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://nisino25-reminder.netlify.app/" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 
      <hr>

      <div class="portfolio-section">

        <div class="left-div">
          <img src="https://i.ibb.co/qYRLJJh/IMG-2359.jpg" alt="" class="mockupPic">
        </div>


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">しりとり ゲーム<span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2020</span></h3>

            <p class="showcase__description mb-4 color-gray">アメリカ人の妻の日本語の練習のために、しりとりの対戦ができるウェブサイトを作りました。Firebaseを使い初めてリアルタイムでデータを送信、取得するアプリを作りました。しりとりの細かいルールを作るのに大変苦労しましたが、なんとか完成できました。
            </p>

            <a href="https://github.com/nisino25/shiritori" target="_blank" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://nisino25-shiritori.netlify.app/" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 

      <hr>

      <div class="portfolio-section">

        <div class="left-div">
          <img :src="noPic" alt="" class="mockupPic">
        </div>


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">Movie - TV List<span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2020</span></h3>

            <p class="showcase__description mb-4 color-gray">過去に見た映画やドラマの作品や、将来に見たい作品などを管理するアプリが欲しいと思いこちらのサイトを作りました。Googleアカウントによるログイン/サインアップの機能を初めて使いました。Firebaseでユーザーのデータ管理をしています。初めてAPIを使ってデータを取得したのも初めてでした。
            </p>

            <a href="https://github.com/nisino25/movie_list" target="_blank" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://movie-tv-lists.netlify.app/" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 

      <hr>

      <div class="portfolio-section">

        <div class="left-div">
          <img src="https://i.ibb.co/kgfqqjV/IMG-2354.jpg" alt="" class="mockupPic">
        </div>
        <!-- <p>News <span class="w3-badge w3-green">6</span></p> -->


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">Cube timer<span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2021</span></h3>

            <p class="showcase__description mb-4 color-gray">こちらは、スマホユーザー向けに作成した、僕の趣味であるルービックキューブのタイマーとそれに伴うデータを管理するアプリです。Local Storageやタイマーファンクション、データのビジュアル化を充填的にがんばりました。パズルに集中できるようにメイン画面で全てわかるようにしました。</p>

            <a href="https://github.com/nisino25/cube" target="_blank" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://nisino25-cube-timer.netlify.app/" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 



      <hr>

      <div class="portfolio-section">

        <div class="left-div">
          <img src="https://i.ibb.co/1snm3VP/IMG-2350.jpg" alt="" class="mockupPic">
        </div>
        <!-- <p>News <span class="w3-badge w3-green">6</span></p> -->


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">NBA Score board<span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2021</span></h3>

            <p class="showcase__description mb-4 color-gray">小学校の頃から大好きなNBA（アメリカのプロバスケットボールリーグ）の試合結果を生で伝えるアプリです。データ取得方法はAPIです。シーズン中は毎日１０試合程行われて、１試合を全て丸々見るとなると２時間以上かかってしまうので、面白い試合だけをピックアップするアルゴリズムを組みました</p>

            <a href="https://github.com/nisino25/nba-scoreboard-JPN" target="_blank" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://nisino25-nba-scoreboard.netlify.app/" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 


      <hr>



      
    </div>

    <div class="timeline-contents" style="backgroundColor: #F9F9F9">

    
      <!-- <hr style="margin-top: 3rem"> -->

      <div class="timeline-header">
        <div>
          <h2>これまでの人生のタイムライン</h2>
        </div>

        <nav class="menu-container">
          <ul>
            <li @click="showingList = 'life'" :class="[showingList === 'life' ? 'timeline-header-active' : 'timeline-header-deactive']" class="menu-left"><a href="#">私の人生</a></li>
            <li @click="showingList = 'both'" :class="[showingList === 'both' ? 'timeline-header-active' : 'timeline-header-deactive']" class="menu-center"><a href="#">全て</a></li>
            <li @click="showingList = 'programming'" :class="[showingList === 'programming' ? 'timeline-header-active' : 'timeline-header-deactive']" class="menu-right"><a href="#">プログラミング</a></li>
          </ul>

          <span class="line"></span>

        </nav>

      

        
      </div>
      

      <div class="timeline" v-if="showingList === 'both'">

        <div  v-for="(event, i) in EventList " :key="i">
          <div :class="[event.personal? 'left' : 'right']" class="container">
            <div class="date">{{event.year}}年{{event.month}}月（{{event.age}}才）</div>
            <i class="icon fa fa-home"></i>
            <div class="content" :class="[event.personal? 'content-left' : 'content-right']">
              <h2>{{event.description}}</h2>
              <p>
                <!-- Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium. -->
              </p>
            </div>
          </div>
        </div>

      </div>

      <div class="timeline" v-if="showingList === 'life'">

        <div  v-for="(event, i) in EventList " :key="i">
          <div :class="[event.personal? 'left' : 'right']" class="container" v-if="event.personal">
            <div class="date">{{event.year}}年{{event.month}}月（{{event.age}}才）</div>
            <i class="icon fa fa-home"></i>
            <div class="content" :class="[event.personal? 'content-left' : 'content-right']">
              <h2>{{event.description}}</h2>
              <p>
                <!-- Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium. -->
              </p>
            </div>
          </div>
        </div>

      </div>

      <div class="timeline" v-if="showingList === 'programming'">

        <div  v-for="(event, i) in EventList " :key="i">
          <div :class="[event.personal? 'left' : 'right']" class="container" v-if="!event.personal">
            <div class="date">{{event.year}}年{{event.month}}月（{{event.age}}才）</div>
            <i class="icon fa fa-home"></i>
            <div class="content" :class="[event.personal? 'content-left' : 'content-right']">
              <h2>{{event.description}}</h2>
              <p>
                <!-- Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium. -->
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class="contact-me">
      <div class="down-below">
      </div>

      <div class="contact-contents" style="text-align: center" >
        <span style="">CONTACT ME</span>
        <section >
          <a href="https://www.instagram.com/nisino25/?hl=en" target="_blank" class="fa fa-envelope"></a>
          <span>nisino25@gmail.com</span>
        </section>

        <section>
          <a href="https://www.instagram.com/nisino25/?hl=en" target="_blank" class="fa fa-phone"></a>
          <span>070-8985-6342</span>
        </section>

        <section style="text-align:center">
          <a href="https://www.instagram.com/nisino25/?hl=en" target="_blank" class="fa fa-instagram"></a>
          <a href="https://github.com/nisino25?tab=repositories" target="_blank" class="fa fa-github" aria-hidden="true"></a>

        </section>
        
        <p style="opacity: 0.5; text-align: center;">&copy;2021 Nozomu Ando</p>

        <!-- <button @click="topFunction()" style="margin-top:25px"> ↑ </button> -->
        <a class="fa fa-arrow-up" @click="topFunction()" style="margin-top:25px"></a>
        <!-- button to that will take us to top with smooth animation
        iG -->
      </div>
    </div>
      
    



  </div>
 
  
</template>

<script>


import { EventList } from './const/TimelineList.js'
// import mockup1 from "/Users/nozomuando/HTML/portfolio/src/assets/mockup1.jpeg"

export default {
  name: 'App',
  

  data(){
    return{
      // mockup1,
      windowWidth: window.innerWidth,
      EventList,
      showingList: 'both',
      noPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png',


    }
    
  }, 
  methods:{
    topFunction(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  }
  
}
</script>

<style>

/* https://ibb.co/wYnqRqx */

/* #4fc08d */

/* #009688!important; */
/* #006E51; */
 
/* #F9F9F9 grey */

  html {
    font-size: 16px;
    margin:0;
    padding:0;
  }

  body {
    color: var(--color-text-default);
    /* background-color: var(--color-bg-default); */
    background-color: #a9a9a9 ;
    fill: currentColor;
  }

  body {
    font-family: Quicksand, "Helvetica","Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji, "Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols, -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto", "Helvetica Neue","Noto Sans",sans-serif;
  }
  
  /* header --------------------------------- */
 
  .notion-navbar {
    box-shadow: 7px 7px 10px rgb(0 0 0 / 10%), -7px -7px 10px rgb(0 0 0 / 10%);
    /* background-color: #4fc08d; */
    /* background-color: teal; */
  }

  .notion-navbar {
    /* background-color: white; */
    height: 45px;
    padding: 0 14px;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    /* background-color: #fff; */
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 999;

    /* background-color: var(--color-bg-default); */
  }

  /* divider -------------------------------------------- */
  .divider
  {
    position: relative;
    margin-top: 90px;
    height: 1px;
  }

  .div-transparent:before
  {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, rgb(48,49,51), transparent);
  }

  .div-dot:after
  {
    content: "";
    position: absolute;
    z-index: 1;
    top: -9px;
    left: calc(50% - 9px);
    width: 18px;
    height: 18px;
    background-color: goldenrod;
    border: 1px solid rgb(48,49,51);
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px white,
            0 0 0 4px white;
  }


  /* landing------------------------------------------------------------------------------- */

  .landing{
    background-color: #F9F9F9;
    height: 100vh;
    margin-top: 0;
    top: 0;
    /* position: abos; */

  }

  .green-cover{
    position: absolute;
    content: '';
    width: 1000%;
    height: 100%;
    background-color: #009688;
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    top: 0;
    left: 50%;
  }

  .landing section{
    background-color: #F9F9F9;
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    width: 40%;
    margin-left: 5%;
    /* margin-top: 10%; */

    /* z-index:3; */
    /* color: red; */
  }


  /* main content ------------------------------------------------------------------------------- */
  
  /* .main-contents{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  } */

  /* portfolio------------------------------------------------------------------------------- */

  .mockupPic{
    height: 90%; 
    margin-left: auto;
    margin-right: auto;
    width: 450px;
    /* height: 450px; */
      text-align: center;
      margin-left: auto;
      margin-right: 0;

    border:2px solid #fff;
  /* background: url(img/tiger.png) no-repeat; */
  -moz-box-shadow: 10px 10px 5px #ccc;
  -webkit-box-shadow: 10px 10px 5px #ccc;
  box-shadow: 10px 10px 5px #ccc;
  -moz-border-radius:25px;
  -webkit-border-radius:25px;
  border-radius:25px;

    /* flex-shrink: 0; */
    
  }

  .left-div{
  float:left; 
  width:50%;
  /* overflow:hidden; */
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .right-div{
  float:right;
  width:50%;
  overflow:hidden;
  /* background-color: red; */
  } 

  .right-div span{
    margin-left: 10px;
  }

  .right-div p{
     max-width:400px;
    word-wrap:break-word;
  }



  .portfolio-section{
    display: flex;  
    width: 100%;
    overflow: hidden;
    
  }

  .left-div{
    /* width: 30%; */
    /* margin-left: 15%; */
  }

  .right-div{
    margin-left: 25%;
    padding-top: 75px;
    padding-bottom: 75px;
  }

  

  /* time line header------------------------------------------------------------------------------- */

  .timeline-header{
    text-align: center;
    margin-bottom: 5rem;
  }


  .timeline-header nav{
    padding-bottom: 8px;
    padding-top: 8px;
  }

  .menu-container{
    width:35%;
    /* background-color: red; */
    margin: 0 auto;
    font-size: 120%;

  }

  .menu-left{
    float: left;
    width: 100px;
  }

  .menu-right{
    float: right;
    width: 100px;
  }

  .menu-center{
    margin: 0 auto;
    width: 100px;
  }

  .timeline-header nav ul{
    
    display: block;
    width: auto;
    margin: auto;
    padding: 0;
    list-style: none;
    display: flex;
  }

  .timeline-header-deactive{
    opacity: .35;
    transition: all 0.5s ease;
  }

  .timeline-header-active{
    transition: all 0.5s ease;
    opacity: 1;
  }

  .timeline-header ul li a{
    /* margin: 0 -10px 0 -10px; */
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    letter-spacing: .2em;
    font-size: 10px;
  }
    
        
        
/* timeline -------------------------------------------------------------------------------- */



  *,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
}

.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
  transition: all 0.5s ease;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #009688;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
}

.container.left {
  left: 0;
}

.container.right {
  left: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: #ffffff;
  border: 2px solid #009688;
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  background: #009688;
  z-index: 1;
}

.container.right::before {
  left: 8px;
}

.container .date {
  position: absolute;
  display: inline-block;
  top: calc(50% - 8px);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #009688;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.container.left .date {
  right: -200px;
}

.container.right .date {
  left: -200px;
}

.container .icon {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 9px 0;
  top: calc(50% - 20px);
  /* background: #F6D155; */
  border: 2px solid #009688;
  border-radius: 40px;
  text-align: center;
  font-size: 18px;
  color: #009688;
  z-index: 1;
}

.container.left .icon {
  right: 56px;
}

.container.right .icon {
  left: 56px;
}

.container .content {
  padding: 30px 90px 30px 30px;
  
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container .content-left{
  background: #F6D155;
}

.container .content-right{
  background: lightblue;
}

.container.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h2 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #009688
}

.container .content p {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 90px;
  }

  .container {
    width: 100%;
    padding-left: 120px;
    padding-right: 30px;
  }

  .container.right {
    left: 0%;
  }

  .container.left::after, 
  .container.right::after {
    left: 82px;
  }

  .container.left::before,
  .container.right::before {
    left: 100px;
    border-color: transparent #006E51 transparent transparent;
  }

  .container.left .date,
  .container.right .date {
    right: auto;
    left: 15px;
  }

  .container.left .icon,
  .container.right .icon {
    right: auto;
    left: 146px;
  }

  .container.left .content,
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
  }
}

/* contat-me -------------------------------------------------------------------------------- */

.contact-me{
  position: relative;
  bottom: 0;
  left: 50%; 
  height: 50rem;
  margin-top: 100px;
  transform: translateX(-50%);

  overflow: hidden;  
}

.down-below{
  position: absolute;
  bottom: 0;
  left: -10; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  background-color: #009688;

  width: 150%;
  height: 150%;
  border-radius: 100%;
  top: 50%;
  left: -25%;
  right: 0;
  position: relative;

}
/* .contact-me
  margin-left: auto; 
  margin-right: auto; 
  position: absolute;
} */

.contact-contents{
  color: black;
  position: absolute;

  
  position: absolute;
  bottom: -10%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}

.contact-contents section{
  margin-bottom: 10px;
}

.contact-me a{
  /* display: block; */
  width: 1.5em;
  height: 1.5em;
  color: #222733;
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: center;
  background-color: #DBE8D4;
  border-radius: 50%;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  text-decoration: none;
  cursor: pointer;
  margin-right: 10px
}





</style>
 