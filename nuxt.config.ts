const title = "Webmail UI";
const shortTitle = title;
const description = "A revamp of the webmail client. Built with Nuxt 3 & TailwindCSS.";
const image = "/cover.png";
const url = "https://webmail-ui.netlify.app/";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon",
    "@davestewart/nuxt-scrollbar",
    "@vueuse/nuxt",
    "@morev/vue-transitions/nuxt",
    "@kevinmarrec/nuxt-pwa",
  ],
  headlessui: { prefix: "H" },
  app: {
    head: {
      title: "Webmail UI",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },

        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: url },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },

  pwa: {
    meta: {
      name: shortTitle,
      author: "The Slient Coder",
      theme_color: "#0f172a",
      description: description,
    },
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      theme_color: "#0f172a",
      description: description,
    },
  },
});
