<template>
  <div>
    <header class="header">
      <div class="logo-box">
        <img class="logo" src="img/logo-white.png" alt="Logo">
      </div>

      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">
            Outdoors
          </span>
          <span class="heading-primary-sub">
            Is where life happens
          </span>
        </h1>
        <a class="btn btn-white btn-animated" href="#">Discover our tours</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Natours | Exciting tours for adventurous people',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900' },
        { rel: 'stylesheet', href: 'css/style.css' },
        { rel: 'shortcut icon', type: 'image/png', href: 'img/favicon.png' }
      ]
    }
  }
}
</script>

