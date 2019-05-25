# auth

一、权限系统描述
       权限流程：
               user[用户] ->(1:1) user_group:role[角色] ->(1:n) module_groups[功能组] ->(n:n) resources_group[资源组] ->(n:n) resources资源
               注：user_group:role即可理解为角色概念

       资源resources
              页面、模块、按钮都是‘资源’；
              权限管理 == 资源管理；
              资源是用以描述页面信息或功能最小的单元；
              资源信息描述：
                      code ---------- 唯一标识
                      name ---------- 名称
                      category ------ 分类
                      desc ---------- 描述
                      roles --------- 分配角色
                      link ---------- 资源所在位置
            example：
                     [按钮] 添加 - 'add-btn'
                     [模块] 卡片 - 'card-module'
                     [页面] 标注 - 'label-page'
                     [功能] 请求用户列表 - 'http-userlist'

       资源组resources_group
              资源的集合描述，便于角色权限配置方便快捷；
              example：
                     资源列表 ['record-add-btn', 'record-update-btn', 'record-delete-btn']
                     '编辑' 按钮 由 '更新' & '删除'控制，则['record-update-btn', 'record-delete-btn']可配置为一个资源组
                     资源组信息描述：
                     code ---------- 标识
                     name ---------- 名称
                     resources ----- 资源项

        功能组module_groups
               资源组的集合的描述，单个功能模块包含多个资源组；
               如新闻资讯包含
                     资讯展示('news-display' -> ['news-display'])
                     资讯添加('news-add' -> ['news-add'])
                     资讯编辑('news-edit' -> ['news-delete', 'news-update'])

        user_group:role[角色]
               功能组的集合的描述，最终通过user_group:role[角色]落实至用户[user]

        user[用户]
               用户，配置角色

二、前端使用
       权限系统有了，前端怎么来使用呢？