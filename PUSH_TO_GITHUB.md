# 推送到 GitHub 仓库

当前 ChatGPT GitHub 连接写入仓库时返回：

```text
403 Resource not accessible by integration
```

这说明当前 GitHub App/连接缺少对仓库 Contents/Git Tree 的写入权限。可以在本地执行下面命令推送。

## 方式一：克隆空仓库后复制

```bash
git clone https://github.com/weshell92/hdnj.git
cd hdnj

# 将压缩包中的 hdnj/ 目录内容复制到当前仓库根目录
# 复制完成后执行：

git add .
git commit -m "feat: expand Huangdi Neijing classics meridians and quotes"
git push origin master
```

## 方式二：直接初始化并推送

```bash
cd hdnj
git init
git branch -M master
git remote add origin https://github.com/weshell92/hdnj.git
git add .
git commit -m "feat: expand Huangdi Neijing classics meridians and quotes"
git push -u origin master
```

如果你希望使用 `main` 作为默认分支，可以先在 GitHub 仓库设置中修改默认分支，或执行：

```bash
git branch -M main
git push -u origin main
```
