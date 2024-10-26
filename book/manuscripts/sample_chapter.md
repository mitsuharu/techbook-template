---
class: content
---

<div class="doc-header">
  <h1>サンプルチャプターのタイトル</h1>
  <div class="doc-author">サンプルチャプターの著者</div>
</div>

# サンプルチャプターのタイトル

次の文章は、でたらめ文章ジェネレーター [^BullshitGenerator-Japanese] で生成しました。textlint の警告が出ていますが、`textlint-disable` で無視しています。

[^BullshitGenerator-Japanese]: でたらめ文章ジェネレーター https://garily.github.io/BullshitGenerator-Japanese/

<!-- textlint-disable -->

昔トーマス・エジソンは不意にこう言いました、「すべては、待っている間に頑張った人のもの。」それによって私は啓発されました、 消費税 100% 増税は一体どんな存在なのかをきっちりわかるのが全ての問題の解くキーとなります。 昔Ａ・シリトーはこう言ったことがある、「「運」ってやつは、たえず変わる。いま後頭部にがんと一撃くらわせたかと思うと、次の瞬間には砂糖をほおばらせてくれたりする。問題はただひとつ、へこたれてしまわないことだ。」諸君にもこの言葉の意味をちゃんと味わわせようと思います。 消費税100%増税は、発生したら何が起こるのか、発生しなければ結果はどうなるのか。 誰もご存知の通り、意義さえあれば、消費税100%増税を慎重に考えざるを得ない。

<!-- textlint-enable -->

<!-- 強制改ページ -->
<hr class="page-break"/>

## コードブロック

サンプルソースです。

```c
/* C言語 */
#include <stdio.h>

int main(int argc, char* argv[]){
    printf("Hello, world!\n");
    return 0;
}
```

## テーブル

テーブルはもちろん書けます。表名や番号はないです。

| 番号 | 料理名 | カテゴリー | 調理時間 | 主な材料 |
| :-: | :-- | :-- | :-: | :-- |
| 1 | カレーライス | メイン料理 | 30分 | カレー粉、野菜、肉 |
| 2 | みそ汁 | 汁物 | 10分 | みそ、豆腐、わかめ |
| 3 | 天ぷら | 揚げ物 | 40分 | 海老、野菜、小麦粉 |
| 4 | サラダ | 前菜 | 15分 | レタス、トマト、きゅうり |
| 5 | オムライス | ご飯料理 | 20分 | 卵、ご飯、ケチャップ |

<!-- 強制改ページ -->
<hr class="page-break"/>

## 画像

画像の方法です。

### そのまま表示する

サンプル画像をそのまま表示します。

```md
![サンプル画像](./images_sample_chapter/sample_image.jpg)
```

![サンプル画像](./images_sample_chapter/sample_image.jpg)

### 幅を指定する

マークダウン記法で画像幅を指定します。

```md
![幅を 100 にした](./images_sample_chapter/sample_image.jpg){width=100}
```

![幅を 100 にした](./images_sample_chapter/sample_image.jpg){width=100}

<!-- 強制改ページ -->
<hr class="page-break"/>

### HTML タグ

HTML タグでも設定できます。ただし、図名は表示されません。alt タグを設定しても表示されません。

```html
<img src="./images_sample_chapter/sample_image.jpg" width="100%" alt="altを設定しても、図名は表示されません" />
```

<img src="./images_sample_chapter/sample_image.jpg" width="100%" alt="altを設定しても、図名は表示されません" />
