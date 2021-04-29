## Chat app

[ローカルURL](http://localhost:3000/)  
[本番URL](https://chat-app-hokagocreate.web.app/)  

### 開発に際して

Nodeのダウンロード（下記リンクを参考にしてください）  
[Node.jsをインストールする](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)  
Nodeの公式からインストール、Macであればnodebrewとかでも問題ないと思います  

yarnのインストール  
```
# npm経由でyarnをインストール
$ npm instatll -g yarn

# yarnのバージョン確認
$ yarn -v
```
[yarnをインストールする](https://qiita.com/suisui654/items/1b89446e03991c7c2c3d)  

dependenciesのインストール
```
yarn install
```

### 簡単なGithub運用について

基本的にmainブランチは本番環境としてデプロイされているので、完成できていない状態でのmainへのpushはやめましょう！（本番で稼働しているアプリがバグります）  
基本的にはmainブランチから開発するブランチを切って実装/修正をしてpush、pull requestを作ってmainへのマージをしましょう  
以下は簡単な開発ブランチ作成手順です  
```
# 自分の今いるブランチを確認
$ git branch

# mainブランチの横に*がついていることを確認したらqを押下する

# 開発ブランチの作成
$ git checkout -b <作成したいブランチ名>
```
Pull requestの作り方については下のリンクを参考にしてください（不安だったら教えるので連絡ください！）  
[初心者向けGithubへのPullRequest方法](https://qiita.com/samurai_runner/items/7442521bce2d6ac9330b)  
Pull requestについては実装でわからないことや、ここってこういう感じでいいの？みたいな質問をしたいときにやってもらうのでもOKです！  

### 起動（アプリを動かしたいとき）
```
yarn start
```
localhost:3000で起動します

### ビルド
```
yarn build
```