# taro-cli-test
搞起来。。。


# init
git 提交流程

##单人开发

git add .
git commit -m '名字 - 功能 - 描述'
git push

##多人开发

git stash  -- 隐藏当前开发中的代码
git pull  -- 拉取远程代码
git stash pop  -- 显示隐藏的代码
git add .
git commit -m '名字 - 功能 - 描述'
git push


# 项目启动

## 使用npm 或者 yarn

yarn install 

yarn run dev:h5
yarn run dev:weapp等 在package.json 中scripts查看对应的命令

更多查看 https://taro.aotu.io/  官网网站
