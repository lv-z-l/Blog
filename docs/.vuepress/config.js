module.exports = {
    title: 'docs',
    description: '啊！朕学不动了',
    port: 6600,
    base: '/docs/',
    theme: 'reco',
    themeConfig: {
        nav: [
            {
                text: 'JavaScript',
                link: '/js/basic/'
            },
            {
                text: '手写',
                link: '/write/'
            },
            {
                text: 'Vue',
                link: '/vue/'
            },
            {
                text: 'react',
                link: '/react/'
            },
            {
                text: '算法',
                link: '/algorithm/'
            },
            {
                text: 'WebPack',
                link: '/webpack/index/'
            },
            {
                text: 'More',
                link: '/more/'
            }
        ],
        sidebar: {
            '/js/': [
                {
                    title: '基础知识',
                    collapsable: false,
                    children: [
                        'basic/jsbasic',
                    ]
                },
                {
                    title: '深入知识',
                    collapsable: false,
                    children: [
                    ]
                },
                {
                    title: '模块化',
                    collapsable: false,
                    children: [
                        'module/amd',
                        'module/cmd',
                        'module/commonjs',
                        'module/early',
                        'module/es6_module'
                    ]
                }
            ],
            '/vue/': [
                {
                    title: 'Vue',
                    collapsable: false,
                    children: [
                    ]
                }
            ],
            '/react/': [
                {
                    title: 'React',
                    collapsable: false,
                    children: [
                    ]
                }
            ],
            '/webpack/': [
                {
                    title: 'WebPack',
                    collapsable: false,
                    children: [
                        ['index/', 'webpack Introduction']
                    ]
                }
            ],
            '/algorithm/': [
                {
                    title: '算法',
                    collapsable: false,
                    children: [
                        {
                            title: '买卖股票问题',
                            collapsable: false,
                            children: [
                                'agiotage/1',
                                'agiotage/2',
                                'agiotage/3'
                            ]
                        }
                    ]
                }
            ],
            '/write': [
            ]

        },
        lastUpdated: 'Last Updated', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'docs',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'docs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },


}