export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      typesetting: 'article',
      toc: false
    }
  },
  docs: {
    type: 'page',
    title: 'jogar'
  },
  about: {
    type: 'menu',
    title: 'About',
    items: {
      contributors: {
        href: 'https://github.com/vercel/swr/graphs/contributors'
      },
      team: '',
      acknowledgement: '',
      'a-page': '',
      changelog: ''
    }
  },
  examples: {
    type: 'page',
    title: 'Examples',
    theme: {
      layout: 'full'
    }
  },
  blog: {
    type: 'page',
    title: 'Blog',
    theme: {
      sidebar: false,
      typesetting: 'article'
    }
  }
}
