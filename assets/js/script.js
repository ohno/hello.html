// ロード時に自動で実行されるスクリプト
window.onload = function() {
  // ポップアップが出て表示される（手軽だがダサいのであまり使わない）
  alert('Hello World!');
  // 開発者ツールでしか表示されないのでデバッグでよく使う（本番環境では消すこと）
  console.log('Hello World!');
  console.log(2);
  console.log(add1(2));
}

// 数字に1を足して返す関数の例
function add1(x) {
  return x+1;
}
