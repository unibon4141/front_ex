# Nuxt 3 Minimal Starter
[Nuxt 3 公式サイト](https://nuxt.com/docs/getting-started/introduction)

## ディレクトリ構成
```
FRONTEND_EXERCISE_2023
├ docker: Dockerfile nuxt3のnode環境に必要なファイル
├ front: nux3 フロントエンドファイル群
│   ├ assets: スタイルシート、フォント、画像のような種類のアセットを処理するディレクトリ
│   ├ components: 再利用可能なVueコンポーネントを配置するディレクトリ
│   ├ pages: アプリケーションのビューとなるVueコンポーネントを配置するディレクトリ、ルーティングはファイルシステムベース。
│   ├ public: 静的なアセットを配置するディレクトリ
│   └ server: APIルートを置くディレクトリ
└ docker-compose.yaml
```

## Nuxt3アプリを起動

Make sure to install the dependencies:

```bash
docker-compose up -d
docker-compose exec app bash

pnpm install
pnpm run dev
pnpm run build
```

## dockerローカル環境
`http://localhost:5555`
