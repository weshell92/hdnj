# 推送到 GitHub 仓库

由于当前 ChatGPT GitHub 连接写入仓库时返回：

```text
403 Resource not accessible by integration
```

可以在本地执行下面命令推送：

```bash
git clone https://github.com/weshell92/hdnj.git
cd hdnj

# 将压缩包中的 hdnj/ 目录内容复制到当前仓库根目录
# 复制完成后执行：

git add .
git commit -m "feat: implement Huangdi Neijing knowledge system site"
git push origin main
```

如果仓库仍是空仓库，也可以：

```bash
cd hdnj
git init
git branch -M main
git remote add origin https://github.com/weshell92/hdnj.git
git add .
git commit -m "feat: implement Huangdi Neijing knowledge system site"
git push -u origin main
```
