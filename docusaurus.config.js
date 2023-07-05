const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: "Bazinga",
  titleDelimiter: "-",
  tagline: '每天进步一点点',
  favicon: 'img/favicon.ico',
  url: 'https://bazinga-blog.vercel.app/',
  baseUrl: '/',
  organizationName: 'BazingaOrg',
  projectName: 'my-blog',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: 'https://github.com/BazingaOrg/my-blog/blob/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          editUrl: 'https://github.com/BazingaOrg/my-blog/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      }),
    ],
  ],
  themeConfig:
    ({
      announcementBar: {
        id: 'support_me',
        content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者😀  <a target="_blank" rel="noopener noreferrer" href="https://github.com/BazingaOrg/my-blog">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: "Bazinga的博客",
        hideOnScroll: false,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            label: '学习',
            position: 'right',
            items: [
              {
                label: "HTML",
                to: "docs/html/",
              },
              {
                label: "CSS",
                to: "docs/css/",
              },
              {
                label: "JavaScript",
                to: "docs/javascript/",
              },
              {
                label: "Vue",
                to: "docs/vue/",
              },
              {
                label: "React",
                to: "docs/react/",
              },
            ],
          },
          { to: 'docs/life/', label: '生活', position: 'right' },
          { to: '/blog', label: '博客', position: 'right' },
          {
            href: 'https://github.com/BazingaOrg',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
      },
      algolia: {
        appId: 'EWQ8G6JEII',
        apiKey: '143d49a996df477012e1ce2b43c84d47',
        indexName: 'Bazinga',
      }
    }),
};

module.exports = config;
