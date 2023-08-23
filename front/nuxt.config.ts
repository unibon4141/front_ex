// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/scss/style.scss"],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "vue3-carousel-nuxt", "@vueuse/motion/nuxt", "nuxt-icon"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "fontend_exercise_2023",
      meta: [
        { name: "description", content: "fontend_exercise_2023" },
      ]
    }
  }
})
