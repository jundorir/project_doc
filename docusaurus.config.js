module.exports = {
  title: 'New Bee Swarm Client',
  tagline: 'Welcome to the FBZZ',
  url: 'https://www.newswarm.info',
  // note! we use SED to change this during automated builds, see ./.github/workflows/gh-pages.yml
  baseUrl: '/',
  plugins: [require.resolve('docusaurus-lunr-search')],
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  onDuplicateRoutes: 'error',
  favicon: 'img/wami.png',
  organizationName: 'New-Swarm', // Usually your GitHub org/user name.
  projectName: 'bee', // Usually your repo name.
  themeConfig: {
    colourMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title:'New Bee Swarm',
      logo: {
        alt: 'new-swarm Logo',
        src: 'img/nbs.png',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'NEW BEE SWAM',
        //   position: 'left'
        // },
        {
          to: 'docs/api-reference/api-reference',
          activeBasePath: 'docs',
          label: 'API Reference',
          position: 'left'
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/ethersphere/bee',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'New-Swarm',
          items: [
            {
              label: 'New-Swarm',
              to: '/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/DDxSr4sd'
            },
            // {
            //   label: 'Mattermost',
            //   href: 'https://beehive.ethswarm.org/'
            // },
            // {
            //   label: 'Reddit',
            //   href: 'https://www.reddit.com/r/ethswarm'
            // },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nbswarm'
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@newbeeswarm'
            }
          ]
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   href: 'https://medium.com/ethereum-swarm'
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/newswarm-lab/new-bee'
            }
          ]
        }
      ],
      // copyright: `NEW BEE SWAM © ${new Date().getFullYear()}.`
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": " ",
        "darkIconStyle": {},
        "lightIcon": " ",
        "lightIconStyle": {}
      }
    },
    // announcementBar: {
    //   id: 'bee_announcements',
    //   content:
    //     '🐝 v0.5.0 is released feat. New-Swarm Feeds! Update your Bees now! 🐝',
    //   backgroundColor: '#dd7200', // Defaults to `#fff`.
    //   textColor: '#242424', // Defaults to `#000`.
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/ethersphere/docs.github.io/blob/master'
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // editUrl: 'https://github.com/ethersphere/docs.github.io'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
