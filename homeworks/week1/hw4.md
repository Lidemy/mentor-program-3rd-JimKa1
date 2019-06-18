# 跟你朋友介紹 Git


#GIT

##流程

本地工作文件夾
~
Git索引區
~
Git庫(Repository)
 +local: 本地庫
 +remote: 遠程庫(伺服器端)


##初始設定


*git init
建立git本地庫

*git config -l
查看當前設置

*git config --global user.name ""
設置用戶名

*git config --global user.email ""
設置用戶信箱

*git config --help
了解config的其他功能
//git help config


##提交(commit)

*git status
當前文件夾下的狀態

*git add 檔案名稱
將檔案加到索引庫

*git add .
將當前文件夾下的檔案全部加入索引庫 

*git commit -m "版本名稱"
將索引庫內的檔案提交


##查看提交歷史(log)

*git log
-數字
顯示最近幾次的提交
--oneline
用一行顯示
//問題:如何恢復版本
-p
詳細顯示版本的更動
--stat
顯示每次提交詳細的統計


##更改git狀態(status reset)


*git checkout -- "檔名"
取消更改

*git reset HEAD "檔名"
將add的檔案退出索引區



##比較修改內容(diff)


*git diff
比較文件夾內檔案的修改

*git diff --cached
 比較索引區和文件夾內檔案的修改



##Git文件操作

*git rm 檔名
刪除檔案

*git  rm --cached 檔名
將索引區內檔案刪除


*git mv 
移動檔案
更改檔名


 
##Git忽略
設置Git忽略的檔案，讓其不參與Git的提交和管理

*.ignore
建立一個.ignore檔
在裡面輸入你所需要忽略的檔名  *.tmp



##更新最後的提交

*git commit --amend



##回到過去

*git reset --hard HEAD 
回到前一個最新的版本

*git reset --hard HEAD~數字
回到前一個版本

*git reset --hard ID 
回到輸入ID的版本

//要記住版本ID

*git reflog -數字
顯示之前版本變化紀錄
數字為要顯示多少個


##branch

*git branch
可以查看現有幾個分支
前有星號代表當前分支

*git branch 分支名稱
新增一個分支

*git checkout 分支名稱
切換到其分支

*git checkout -b 分支名稱
建立一個分支並切換到此分支

*git branch -v

##merge

*git merge 分支名稱
將分支合併

*git branch -d 分支名稱
合併完成後將分支刪除



##分支衝突
當開發分支合併前，主分支已經提交了一個新的版本


##版本標籤
更新的版本號


*git tag 
查看現有哪些版本號

*git tag 版本號
將當前的版本新增版本號

*git show 版本號
查詢版本號的詳細資訊



##設置指令縮寫

*git config --global alias.縮寫 原指令

*git config -l 
當前git設置狀態


##github


*git push

*git pull


