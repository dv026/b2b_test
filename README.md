## Preface

Stack:
- next.js (app folder)
- tailwind
- SSR, Client Pages
- (API) JSON SERVER

At first I did the task using json server that supports "get", "insert" operations but then started adding Strapi integration and it looked almost the same.

Not to change whole project itself I decided leave it as it is.
I got experience with Prismic and Sanity as CMS.

There different way to handle with different sizes of images. We can use Next.js or some external tools. In the project I managed to implement 2 ways.
1) next.js - creates srcSet by itself
2) imaimagekit.io - tools with lots of features: one of them it getting an image of a certain size

I left comments in code somewhere just to share my thoughts on the certain topic - not because I do the same in production.

Not to make this file huge I'd with please discuss personally everything that is needed.

## Getting Started

```bash
yarn
```

```bash
npx json-server server/db.json
```

```bash
yarn dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.