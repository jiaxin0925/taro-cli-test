# taro-cli-test
搞起来。。。


# init
git 提交流程

##单人开发

git add .
git commit -m '名字 - 功能 - 描述'
git push

##多人开发
git status - 查看状态 -- ；
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

## e.stopPropagation() 方法
定义和用法
不再派发事件。

终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。

说明
该方法将停止事件的传播，阻止它被分派到其他 Document 节点。在事件传播的任何阶段都可以调用它。注意，虽然该方法不能阻止同一个 Document 节点上的其他事件句柄被调用，但是它可以阻止把事件分派到其他节点。
## constructor(props) {super(props); this.state = {}; }
super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

## 问题
1： vscode为什么会自动换行一个单词没写完有时候就换行了（主要是一个新的文件要写代码的时候）
2：taro-ui中 AtCheckBox没有全选和反选， 只能一个一个选择（可以多选）
3：文件name.config.ts中的：export default {
  navigationBarTitleText: '购物车'
}不生效
