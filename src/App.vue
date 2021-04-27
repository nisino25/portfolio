<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

  <div class="notion-navbar w3-teal">
    <a class="notion-link notion-breadcrumb__item single" >
      <span class="notion-navbar__title">Nozomu Ando</span>
    </a>
  </div>




  <div class="main-contents">
    <hr>

    
    <div class="portfolio">
       <h2 class="pre text-center" style="textAlign:center">Portfolio</h2>

      <div class="portfolio-section">

        <div class="left-div">
          <img src="https://i.ibb.co/GtjfPqn/ea3f95d826372dacbde23ad25e78675b.jpg" alt="" class="mockupPic">
        </div>
        <!-- <p>News <span class="w3-badge w3-green">6</span></p> -->


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">Agyle Intelligence <span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2019</span></h3>

            <p class="showcase__description mb-4 color-gray">A platform for automating data collection and reporting throughout teams, operations and supply chains.</p>

            <a href="https://www.agyleintelligence.com" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://agyleintelligence.com" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 

      <hr>

      <div class="portfolio-section">

        <div class="left-div">
          <img src="https://i.ibb.co/GtjfPqn/ea3f95d826372dacbde23ad25e78675b.jpg" alt="" class="mockupPic">
        </div>
        <!-- <p>News <span class="w3-badge w3-green">6</span></p> -->


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">Agyle Intelligence <span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2019</span></h3>

            <p class="showcase__description mb-4 color-gray">A platform for automating data collection and reporting throughout teams, operations and supply chains.</p>

            <a href="https://www.agyleintelligence.com" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://agyleintelligence.com" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 

      <hr>


      <div class="portfolio-section">

        <div class="left-div">
          <img src="https://i.ibb.co/GtjfPqn/ea3f95d826372dacbde23ad25e78675b.jpg" alt="" class="mockupPic">
        </div>
        <!-- <p>News <span class="w3-badge w3-green">6</span></p> -->


        <div class="right-div"> 
          <div class="col-lg-5 mx-auto py-3">

            <h3 class="h3">Agyle Intelligence <span class="w3-tag w3-round-large w3-small w3-padding w3-teal"  >2019</span></h3>

            <p class="showcase__description mb-4 color-gray">A platform for automating data collection and reporting throughout teams, operations and supply chains.</p>

            <a href="https://www.agyleintelligence.com" class="w3-button w3-teal w3-border w3-round-large">Github</a>

            <a href="https://agyleintelligence.com" class="w3-button w3-white w3-border w3-border-teal w3-round-large" target="_blank" style="margin-left:20px">サイトを訪れる</a></div>
        </div>

      </div> 

     
    </div>

    <div class="timeline-contents">

    
      <hr style="margin-top: 3rem">

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

        <div  v-for="(event, i) in EventList.Everything " :key="i">
          <div :class="[event.personal? 'left' : 'right']" class="container">
            <div class="date">{{event.year}}年{{event.month}}月（{{event.age}}才）</div>
            <i class="icon fa fa-home"></i>
            <div class="content" :class="[event.personal? 'content-left' : 'content-right']">
              <h2>{{event.description}}</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div class="timeline" v-if="showingList === 'life'">

        <div  v-for="(event, i) in EventList.Everything " :key="i">
          <div :class="[event.personal? 'left' : 'right']" class="container" v-if="event.personal">
            <div class="date">{{event.year}}年{{event.month}}月（{{event.age}}才）</div>
            <i class="icon fa fa-home"></i>
            <div class="content" :class="[event.personal? 'content-left' : 'content-right']">
              <h2>{{event.description}}</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div class="timeline" v-if="showingList === 'programming'">

        <div  v-for="(event, i) in EventList.Everything " :key="i">
          <div :class="[event.personal? 'left' : 'right']" class="container" v-if="!event.personal">
            <div class="date">{{event.year}}年{{event.month}}月（{{event.age}}才）</div>
            <i class="icon fa fa-home"></i>
            <div class="content" :class="[event.personal? 'content-left' : 'content-right']">
              <h2>{{event.description}}</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
    
   


  </div>


  <!-- </div> -->

 
  
</template>

<script>

import { EventList } from './const/TimelineList.js'
// import mockup1 from "/Users/nozomuando/HTML/portfolio/src/assets/mockup1.jpeg"

export default {
  name: 'App',
  

  data(){
    return{
      // mockup1,
      EventList,
      showingList: 'both',


    }
    
  }, 
}
</script>

<style>

/* #4fc08d */
/* #009688!important; */
/* #006E51; */
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

  /* divider --------------------------------- */
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

  /* main content ------------------------------------------------------------------------------- */
  .main-contents{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  /* portfolio------------------------------------------------------------------------------- */

  .mockupPic{
    height: 200px;
    width: 275px;
    
  }

  .portfolio-section{
    

    width: 100%;
    overflow: hidden;
  }

  .left-div{
    width: 30%;
    float: left;
    margin-left: 20px;
    /* background-color: blue; */
  }

  .right-div{
    margin-left: 620px;
    margin-right: 20px;
    /* background-color: red; */
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

  /* .line{
    height: 2px;
    position: absolute;
    bottom: 0;
    margin: 10px 0 0 0;
    background: #FF1847;

  } */
    
        
        
/* ----------------------------------------------------------------------------------------------- */



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
  right: -75px;
}

.container.right .date {
  left: -75px;
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

</style>
