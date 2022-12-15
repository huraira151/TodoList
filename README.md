# Git Commands to commit, push and show app on gh-pages
```
git init (This command will make .git directory)
```
```
git add <"directory">
```
```
git config --global core.editor nano
```
```
git commit -m "First Commit"
```
```
npm run deploy
```
```
git remote add origin https://github.com/huraira151/TodoList.git
```
```
git push origin master
```
```
npm run deploy -- -m "Deploy React app to GitHub Pages"
```
# Error
```
fatal: Could not reset index file to revision 'origin/master'
```
### Solution Commands
```
git gc
git reset
git reset --hard origin/master
```
# Full Docs to host app on GitHub
```
https://create-react-app.dev/docs/deployment/
```
