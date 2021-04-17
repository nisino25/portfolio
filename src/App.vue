<template>
  <div class="notion-navbar">
    <a class="notion-link notion-breadcrumb__item single" >
      <!-- <div class="notion-navbar__title">Nozomu Ando</div> -->
      <span class="notion-navbar__title">Nozomu Ando</span>
    </a>
  </div>

  <!-- <div style="backgroundColor:red; height: 10000px">jeuy</div> -->

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  html {
    font-size: 16px;
  }

  

  body {
    color: var(--color-text-default);
    background-color: var(--color-bg-default);
    fill: currentColor;
  }

  body {
    font-family: Quicksand, "Helvetica","Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji, "Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols, -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto", "Helvetica Neue","Noto Sans",sans-serif;
  }

  .notion-navbar {
    box-shadow: 7px 7px 10px rgb(0 0 0 / 10%), -7px -7px 10px rgb(0 0 0 / 10%);
  }

  .notion-navbar {
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
    background-color: var(--color-bg-default);
  }
</style>
