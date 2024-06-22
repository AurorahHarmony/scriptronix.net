import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

import tailwindOptions from "./tailwind.config.js";

const site = lume({
  location: new URL("https://scriptronix.net"),
  src: "./src",
  server: {
    page404: "/404/",
  },
});

site.copy("static");
site.copy("static/img");
site.copy("src/static", "static");

site.use(favicon());
site.use(
  tailwindcss({
    extensions: [".vto"],
    options: tailwindOptions,
  })
);
site.use(postcss());

export default site;
