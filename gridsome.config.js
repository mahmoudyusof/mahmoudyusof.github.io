// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Mahmoud Youssef portfolio",
  siteUrl: "https://mahmoudyusof.github.io/semasource",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-167481228-1",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./articles/**/*.md",
        typeName: "Article",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
  ],
  templates: {
    Article: "/:project/:slug",
  },
  transformers: {
    remark: {
      plugins: [["@gridsome/remark-prismjs", { transformInlineCode: false }]],
    },
  },
  titleTemplate: "%s",
};
