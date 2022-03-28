module.exports = {
    title: 'Blog',
    description: '学海无涯，回头是岸',
    port: 6600,
    base: '/blog/',
    theme: 'reco',
    themeConfig: {
        // logo: '',
        nav: [
            {
                text: 'Html & css',
                link: '/html5/'
            },
            {
                text: 'JavaScript',
                link: '/js/basic/jsbasic'
            },
            {
                text: '流行框架',
                items: [
                    { text: 'Vue', link: '/vuejs/use' },
                    { text: 'React', link: '/react/' }
                ]
            },
            {
                text: '更多',
                items: [
                    { text: 'WebPack', link: '/pack/' },
                    { text: '算法', link: '/algorithm/' },
                    { text: '手写', link: '/write/' },
                    { text: '设计模式', link: '/designmode/' },
                ]
            }
        ],
        sidebar: {
            '/html5/': [
                {
                    title: 'Html相关',
                    collapsable: false,
                    children: [
                    ]
                }
            ],
            '/js/': [
                {
                    title: '基础知识',
                    collapsable: true,
                    children: [
                        'basic/jsbasic',
                        'basic/es6'
                    ]
                },
                {
                    title: '深入知识',
                    collapsable: false,
                    children: [
                        'deep/deep',
                        'deep/function',
                        {
                            title: '模块化',
                            collapsable: true,
                            children: [
                                'deep/module/amd',
                                'deep/module/cmd',
                                'deep/module/commonjs',
                                'deep/module/early',
                                'deep/module/es6_module'
                            ]
                        }
                    ]
                },
                {
                    title: '内功修炼',
                    collapsable: true,
                    children: [
                        'intention/memory',
                        {
                            title: '你需要知道的JS异步执行机制',
                            path: 'intention/excuterule'
                        }

                    ]
                }
            ],
            '/vuejs/': [
                {
                    title: 'Vue2及其使用',
                    collapsable: true,
                    children: [
                        'use'
                    ]
                },
                'build-package-desc',
                {
                    title: 'Vue2源码学习',
                    collapsable: true,
                    children: [
                        'init',
                        'mount',
                        'reactive-function-desc',
                        'evalute',
                        'watcher-update'
                    ]
                }
            ],
            '/react/': [
                {
                    title: 'React',
                    collapsable: true,
                    children: [
                    ]
                }
            ],
            '/pack/': [
                {
                    title: 'WebPack相关',
                    collapsable: false,
                    children: [
                    ]
                }
            ],
            '/algorithm/': [
                {
                    title: '买卖股票问题',
                    collapsable: true,
                    children: [
                        'agiotage/1',
                        'agiotage/2',
                        'agiotage/3'
                    ]
                },
                {
                    title: '链表相关',
                    collapsable: true,
                    children: [
                        'linkedList/palindrome-linked-list',
                        'linkedList/reverse-linked-list',
                        'linkedList/merge-k-sorted-lists',
                        'linkedList/reverse-nodes-in-k-group',
                        'linkedList/linked-list-cycle',
                        'linkedList/intersect-linked-list',
                        'linkedList/sort-list',
                    ]
                },
                {
                    title: '字符串相关',
                    collapsable: true,
                    children: [
                        'string/longest-common-prefix',
                        'string/longest-palindromic-substring',
                        'string/longest-substring-without-repeating-characters',
                        'string/minimum-window-substring'
                    ]
                },
                {
                    title: '数组相关',
                    collapsable: true,
                    children: [
                        'array/container-with-most-water',
                        'array/longest-continuous-increasing-subsequence',
                        'array/longest-consecutive-sequence',
                        'array/median-of-two-sorted-arrays',
                        'array/remove-duplicates-from-sorted-array',
                        'array/subarray-sum-equals-k',
                        'array/two-sum',
                        'array/two-sum-ii-input-array-is-sorted',
                        'array/3sum',
                        'array/4sum',
                    ]
                },
                {
                    title: '其他',
                    collapsable: true,
                    children: []
                },
            ],
            '/write/': [
                {
                    title: '手写系列',
                    collapsable: true,
                    children: [
                        'call_apply',
                        'bind',
                        'new',
                        'promise',
                        'instanceof',
                        'objcreate'
                    ]
                }
            ],
            '/designmode/': [
                {
                    title: '设计模式',
                    collapsable: true,
                    children: [
                        'single',
                        'strategy'
                    ]
                }
            ]

        },
        lastUpdated: 'Last Updated', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://gitee.com/lvzhenglei/blog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'blog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs/.vuepress/dist',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: false,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },


}