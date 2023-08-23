<template>
    <div>
      <!-- <Header /> -->
    <!-- page配下のファイルを表示する -->
      <!-- <Footer /> -->

      <Header />
      <main>
        <slot />
      </main>
      <client-only>
        <Footer />
      </client-only>
    </div>
  </template>