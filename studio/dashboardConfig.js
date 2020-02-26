export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e567c121c70624a2368e69a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio-kx79tprh',
                  apiId: '1a598465-179e-4882-9f56-468a197421f4'
                },
                {
                  buildHookId: '5e567c12fce82592cb5f1775',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2-web-nyf48i94',
                  apiId: '90345989-32d5-4287-abd0-65037c980a2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paolo545/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2-web-nyf48i94.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
