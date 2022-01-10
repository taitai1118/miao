git commit进入vim的命令行页面，输入提交信息，如：添加/修改了xx。输入":wq"保存退出。
命令行提交一般使用使用git commit -m "添加/修改了xx。"，日常则使用vscode提交。
创建仓库建立连接到提交步骤：
1：创建文件夹，git init初始化仓库，将会在当前文件夹创建.git文件夹用来存放历史记录。
git config --global user.name 'your name' 设置全局用户名。
git config --global user.email 'youuuuu@xxx.com' 设置全局用户的电子邮箱。
git status 查看状态，可以看到哪些文件修改了，哪些是新增的，哪些文件被add了。
git log 查看提交日志。
git add . 添加当前文件夹（下所有的文件）。
git add filename 添加特定文件。
git commit -m "提交信息" 将已添加文件提交（即存到仓库成为一个快照）。
git commit 将已添加文件提交（即存到仓库成为一个快照），将会打开vi编辑器以输入提交信息。
git diff 查看当前文件夹里的内容跟最后一次提交的差别（只能看文本文件，无法查看二进制文件的变化）。

首次创建仓库显示：
echo "# helloworld" >> README.md
git init 初始化。
git add README.md 增加REAME.md。
git commit -m "first commit" 体检信息。
git branch -M main 更新分支名称。
git help branch 查看branch相关命令。
git remote add origin https://github.com/Majula1999/helloworld.git
git push -u origin main

获取公私钥，ssh-keygen
已经存在的话，会询问是否覆盖overwrite

git diff 查看工作区与暂存的差异。
git diff --cached 查看暂存区与最后提交的差异。
git remote add github git@github.com:xieranmaya/learn-git10.git 添加远程创建并起名字。
git remote 查看添加过哪些远程仓库。
git remote remove name 删除远程仓库。
git remote --verbose 查看添加过哪些远程仓库及其地址。
git push repo_name branch_name 将分支推送到远程同名分支，远程如果没有会创建。
git push -u repo_name branch_name 将分支推送到远程同名分支并建立绑定关系。
git push 远程仓库名称 分支名称 将当前分支推送到其绑定的远程分支上去。
git clone 远程地址。
将远程仓库克隆到本地，并自动设置远程地址为origin且关联分支。
