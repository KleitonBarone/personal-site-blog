const themeDir = __dirname + "/../../";
/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require("postcss-import")({
      path: [themeDir],
    }),
    require("tailwindcss")(themeDir + "assets/css/tailwind.config.js"),
    require("autoprefixer")({
      path: [themeDir],
    }),
  ],
};
