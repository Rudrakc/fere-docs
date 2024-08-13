import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'intro'
      },
      items: ['intro'],
      collapsible: false,
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Product',
      link: {
        type: 'generated-index',
        title: 'Product Documentation',
        description: 'Learn about our product features and capabilities',
        slug: '/category/product',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'product'
        }
      ],
      collapsible: false,
      collapsed: false,
    }
  ],
  developers: [
    {
      type: 'autogenerated',
      'dirName': 'api'
    }
  ],
  legal:[
    {
      type: 'autogenerated',
      'dirName': 'legal'
    }
  ]

};

export default sidebars;
