```shell
npm init -y
npx eslint --init
npm init @eslint/config
npm cache clean --force
npx install-peerdeps --dev eslint-config-airbnb
npm install react typescript @types/react --save-dev
npx tsc --init
npm token create

rm -f package-lock.json 
rm -rf node_modules
rm -rf .git

git branch -m main  // renamed git branch
git remote add origin https://github.com/olayinkaa/react-tw-component-lib.git  
git push --set-upstream origin master / git push -u origin master
gh repo create --public
gh auth login

```
## Rollup
```shell
npm install rollup -D
npm install @rollup/plugin-node-resolve rollup-plugin-postcss rollup-plugin-peer-deps-external --save-dev
npm install @rollup/plugin-typescript rollup-plugin-dts --save-dev
npm install @rollup/plugin-commonjs @rollup/plugin-babel --save-dev

```

## Babel configuration
```shell 
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev

tsconfig.json
{
    "types": ["node","jest"], 
}

```
## React testing library
```shell
npm install @testing-library/react @testing-library/jest-dom --save-dev      
npm install jest @types/jest jest-environment-jsdom --save-dev 

```