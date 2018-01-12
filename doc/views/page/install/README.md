# 安装

## 关于

Yunser UI for Vue（简称 UI） 已经发布在 [npm](https://www.npmjs.com/package/yunser-ui-vue)</a>, 可以使用 `npm` 和 `yarn` 安装，
或者使用 `<script>` 直接在网页中引入。

### 引入图标和字体

UI 使用了 material design 的字体和图标，需要在网页中引入。

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

### npm / yarn 安装

```shell
npm install --save yunser-ui-vue
```

或者

```shell
yarn add yunser-ui-vue
```

## 注意

目前 UI 库为不稳定版本，不向下兼容升级。需要在 `package.json` 中写死版本号。

```json
"dependencies": {
    "yunser-ui-vue": "0.1.9"
}
```

而不是：

```json
"dependencies": {
    "yunser-ui-vue": "^0.1.9"
}
```

