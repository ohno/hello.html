# HTML-example

## 動かし方

1. [ダウンロード](https://github.com/ohno/HTML-example/archive/refs/heads/main.zip)して[解凍](https://zenn.dev/ohno/articles/b99a783890171c)しましょう. 
2. index.htmlをブラウザにドラッグ&ドロップすれば表示できます. 特別なソフトは一切必要ありません. Java Scriptも動きます.
3. CSSのファイル, Java Scriptのコード, 画像ファイルはassets内に全て置いてありますので, 後は察してください.

## CSSについて

ブラウザごとにCSSのデフォルト値が異なることがあり, よくトラブルを起こします. そういった環境依存性を打ち消すために, [index.html](https://github.com/ohno/HTML-example/blob/main/index.html)に

```css
<link rel="stylesheet" href="./assets/css/reset.css">
```

という記述があります. この[reset.css](https://github.com/ohno/HTML-example/blob/main/assets/css/reset.css)は[こちら](http://meyerweb.com/eric/tools/css/reset/)を参考にして, 47行目以降は大野が書き足したものです. 気に入らなければオリジナルを参考にしてください. 
