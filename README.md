## Chat app

### 開発に際して

Nodeのダウンロード（下記リンクを参考にしてください）  
[Node.jsをインストールする](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)  
Nodeの公式からインストール、Macであればnodebrewとかでも問題ないと思います  

yarnのインストール  
```
# npm経由でyarnをインストール
$ npm instatlll -g yarn
# yarnのバージョン確認
$ yarn -v
```
[yarnをインストールする](https://qiita.com/suisui654/items/1b89446e03991c7c2c3d)  

dependenciesのインストール
```
yarn install
```

### 起動
```
yarn start
```
localhost:3000で起動します

### ビルド
```
yarn build
```