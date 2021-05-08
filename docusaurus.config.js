/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Layer Zero',
  tagline: 'Gains without pains!',
  url: 'https://zero.masternode.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'masternodeh', // Usually your GitHub org/user name.
  projectName: 'zero-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Degen Reference Guide',
      logo: {
        alt: 'Degen Reference Guide Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/masternodeh/zero-docs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Ethereum (ETH) Guides',
              to: 'docs/eth/',
            },
            {
              label: 'Avalanche (AVAX) Guides',
              to: 'docs/avax/',
            },
            {
              label: 'Smart-Chain (BNB) Guides',
              to: 'docs/bsc/',
            },
			{
              label: 'Solana (SOL) Guides',
              to: 'docs/sol/',
            },
            {
              label: 'Mobile Guides',
              to: 'docs/mobile/',
            },
          ],
        },
		{
          title: 'Explainers',
          items: [
            {
              label: 'Impermanent Loss Explainer',
              to: 'docs/il/',
            },
            {
              label: 'Rugpull Explainer',
              to: 'docs/nft/',
            },
			{
              label: 'NFT Explainer',
              to: 'docs/nft/',
            },
			{
              label: 'Grow Playing Guides',
              to: 'docs/grow/',
            },
          ],
        },
        {
          title: 'News',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/masternodeh/zero-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}@masternodeh Built with Love!`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/masternodeh/zero-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/masternodeh/zero-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
