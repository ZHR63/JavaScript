# GItHub知识总结

我们一直用GitHub作为免费的远程仓库，如果是个人的开源项目，放到GitHub上是完全没有问题的。其实GitHub还是一个开源协作社区，通过GitHub，既可以让别人参与你的开源项目，也可以参与别人的开源项目。

***


## 目录
* [在Windows上安装Git](#在Windows上安装Git)
* [git首次配置](#git首次配置)
* [本地与远程仓库的连接](#本地与远程仓库的连接)
* [文件修改后再次提交到远程仓库](#文件修改后再次提交到远程仓库)
* [分支管理](#分支管理)
* [拉取远程分支到本地](#拉取远程分支到本地)
* [内容修改完成后，提交到远程仓库](#内容修改完成后，提交到远程仓库)
* [远程分支合并](#远程分支合并)
* [GitHub上的README.md应该怎么写](#github上的readmemd应该怎么写)


### 在Windows上安装Git

从Git官网直接[下载安装程序](https://git-scm.com/downloads)

### git首次配置
    git config --global user.name 'ZHR63'
    git config --global user.email '634480610@qq.com'


### 本地与远程仓库的连接
    ssh-keygen -t rsa -C "634480610@qq.com"
    一直回车


### 文件修改后再次提交到远程仓库
    git add .
	git commit -m "内容"
	git push origin master


### 分支管理
    1.创建分支
        git branch 名称

    2.查看各个分支当前指向的对象
        git log --oneline --decorate

    3.切换分支
	    git checkout 名称
		
	4.推送分支
	    git push origin 名称
	
	5.查看远程分支
	    git branch -r
	
	6.查看所有分支
	    git branch -a
	
	7.删除本地分支
	    git branch -D 名称
    

### 拉取远程分支到本地
    1.git init
		
	2.git remote add origin 远程仓库链接
		
	3.git fetch origin 远程仓库分支名称
		
	4.把分支内容拉取到本地
	    git pull origin 远程分支名称

    
### 内容修改完成后，提交到远程仓库
    1.切换到分支
	    git checkout 分支名称
			
	2.git add .
		
	3.git commit -m '修改内容'
		
	4.提交到远程仓库
	    git push origin 分支名称

### 远程分支合并
(假设你本地在使用的分支为a(master也是一样的)，需要合并的远程分支为b)
    1.git clone 远程项目链接

    2.在本地新建一个与远程的分支b相同(被合并的版本)的分支b
        git checkout -b b origin/b
    
    3.将远程代码pull到本地
        git pull origin b

    4.返回到你的分支a
        git checkout a

    5.合并分支a与分支b
        git merge b
    
    6.把本地的分支a同步到远程
        git push origin a


### GitHub上的README.md应该怎么写

> 先告诉大家一下基本概念**github上的README.md文件就是使用的Markdown语言编写的**

1. 给出两个README.md在线编辑软件

    http://mahua.jser.me/ 个人开发的，免费使用，非常赞！

    http://maxiang.info/  已经发布的产品，可以免费在线编辑