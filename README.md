# 项目说明
## 项目架构
这是一个`monorepo`架构的`uni-app`项目
## 技术架构
[pnpm](https://pnpm.io/installation) 包管理工具节省磁盘空间，可以链接自己特定的库
[nx](https://nx.dev/) 快速打包构建构建缓存替换cd dir 命令
[uniapp](https://zh.uniapp.dcloud.io/resource.html) 小程序技术选型
[changesets](https://changesets-docs.vercel.app/zh-CN)
## 创建初衷

多项目公用组件库，共用风格 ，通过pnpm软连接统一维护公共组件库，与工具类库，避免后期项目增多维护成本升高

## pnpm无法直接软链两个目录，必须要有node_modules
以原生命令实现两个目录软链
### windows 
`mklink /d '要创建的软链目录' '要软链链到的目录' //需要注意尽量使用绝对路径`
如将 a目录链接到b目录
`mklink /d 'D:\a' 'D:\b'`
### mac/linux
`ln -s '要创建的软链目录' '要软链链到的目录' //需要注意尽量使用绝对路径`
如将 a目录链接到b目录
`ln -s '/USER/a' '/USER/b'`


