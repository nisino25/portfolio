<template>

  <div class="notion-navbar">
    <a class="notion-link notion-breadcrumb__item single" >
      <span class="notion-navbar__title">Nozomu Ando</span>
    </a>
  </div>



  <div class="main-contents">
    <hr style="margin-top: 3rem">

    <div class="timeline-header">
      <div>
        <h2>これまでの人生のタイムライン</h2>
      </div>

      <nav>
        <ul>
          <li @click="showingList = 'life'" :class="[showingList === 'life' ? 'timeline-header-active' : 'timeline-header-deactive']"><a href="#">私の人生</a></li>
          <li @click="showingList = 'both'" :class="[showingList === 'both' ? 'timeline-header-active' : 'timeline-header-deactive']"><a href="#">全て</a></li>
          <li @click="showingList = 'programming'" :class="[showingList === 'programming' ? 'timeline-header-active' : 'timeline-header-deactive']"><a href="#">プログラミング</a></li>
        </ul>
        <span class="line"></span>

      </nav>

    

      
    </div>

    <div class="timeline">
    <div class="container left">
      <div class="date">15 Dec</div>
      <i class="icon fa fa-home"></i>
      <div class="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
        </p>
      </div>
    </div>
    <div class="container right">
      <div class="date">22 Oct</div>
      <i class="icon fa fa-gift"></i>
      <div class="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
        </p>
      </div>
    </div>
    <div class="container left">
      <div class="date">10 Jul</div>
      <i class="icon fa fa-user"></i>
      <div class="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
        </p>
      </div>
    </div>
    <div class="container right">
      <div class="date">18 May</div>
      <i class="icon fa fa-running"></i>
      <div class="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
        </p>
      </div>
    </div>
    <div class="container left">
      <div class="date">10 Feb</div>
      <i class="icon fa fa-cog"></i>
      <div class="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
        </p>
      </div>
    </div>
    <div class="container right">
      <div class="date">01 Jan</div>
      <i class="icon fa fa-certificate"></i>
      <div class="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
        </p>
      </div>
    </div>


    </div>


  </div>

 
  
</template>

<script>

import { EventList } from './const/TimelineList.js'

export default {
  name: 'App',

  data(){
    return{
      EventList,
      showingList: 'both',

    }
    
  }, 
}
</script>

<style>
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
    background-color: white;
  }

  .notion-navbar {
    background-color: white;
    height: 45px;
    padding: 0 14px;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    background-color: #fff;
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

  /* time line header------------------------------------------------------------------------------- */

  .timeline-header{
    text-align: center;
    margin-bottom: 5rem;
  }


  .timeline-header nav{
    /* display: block; */
    padding-bottom: 12px;
    padding-top: 12px;
  }

  .timeline-header nav ul{
    text-align: center;
    display: block;
    margin: 0 auto;
    width: auto;
    margin: auto;
    margin-left: 39%; 
    margin-right: 39%; 
    padding: 0;
    list-style: none;
    display: flex;
  }

  .timeline-header-deactive{
    margin: 0 40px 0 0;
    opacity: .35;
    transition: all 0.5s ease;
  }

  .timeline-header-active{
    margin: 0 40px 0 0;
    transition: all 0.5s ease;
    opacity: 1;
  }


  .timeline-header ul li a{
    text-decoration: none;
    /* color: #fff; */
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
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #006E51;
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
  border: 2px solid #006E51;
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
  background: #006E51;
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
  color: #006E51;
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
  background: #F6D155;
  border: 2px solid #006E51;
  border-radius: 40px;
  text-align: center;
  font-size: 18px;
  color: #006E51;
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
  background: #F6D155;
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h2 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #006E51;
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
