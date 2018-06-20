<template>
  <div>
    <header class="header">
      <div class="header_logo-box">
        <img class="header_logo" src="img/logo-white.png" alt="Logo">
      </div>

      <div class="header_text-box">
        <h1 class="heading-primary">
          <span class="heading-primary__main">
            Outdoors
          </span>
          <span class="heading-primary__sub">
            Is where life happens
          </span>
        </h1>
        <a class="btn btn__white btn__animated" href="#">Discover our tours</a>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Natours | Exciting tours for adventurous people',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900' },
        { rel: 'shortcut icon', type: 'image/png', href: 'img/favicon.png' }
      ]
    }
  }
}
</script>
