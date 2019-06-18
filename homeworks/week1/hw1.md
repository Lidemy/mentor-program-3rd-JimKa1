## 交作業流程

1.開一個新的branch(分支)。

2.寫作業。

3.作業完成後add, commit, push origin 分支名。 

4.按branch右方的New pull request，確定 base 為 master,
 compare 為 分支名，提交後複製網址。

5.進入https://github.com/Lidemy/homeworks-3rd ，至 Issues 新增 Issue ，標題格式:[WeekX] X為交作業的週數。

6.網頁重新整理確定自己的作業繳交成功。

7.老師看完作業後，會接受merge pull request ,將同學的分支刪除並將issue關閉。

8.老師將branch整合到master後，是在遠端整合，所以要自己將最新的
master 拉到本地，在master分支中，
git pull origin master更新為最新版本。

9.刪除作業分支, git branch -d 分支名