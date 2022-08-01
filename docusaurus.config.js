module.exports = {
  title: "PAG/RTA Website Documentation",
  tagline:
    "Improving the region's mobility, sustainability and livability through collaborative leadership and planning",
  url: "https://pagwebdocs.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Pima Association of Governments", // Usually your GitHub org/user name.
  projectName: "PAGwebdocs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Home",
      logo: {
        alt: "My Site Logo",
        src: "img/PAG_Logo_200px.png"
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Markdown Examples",
              to: "docs/doc1"
            }
            //           {
            //             label: 'Second Doc',
            //             to: 'docs/doc2/',
            //           },
          ]
        },
        {
          title: "Docusaurus",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/pagjhildebrand/PAGwebdocs"
            }
          ]
        }
      ],
      copyright: `©${new Date().getFullYear()} All rights reserved. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://codesandbox.io/s/pagwebdocs-6pv2u?file=/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
