# Neighborhood Save Box

동네 베이커리, 도시락, 반찬, 동네마트, 정육점, 과일가게, 카페의 마감임박 신선식품을 소비자에게 연결하는 픽업 기반 푸드세이빙 플랫폼입니다.

## Core Idea

판매자는 오늘 남는 상품을 `마감박스`로 30초 안에 등록하고, 소비자는 앱에서 선결제한 뒤 정해진 시간에 매장에 방문해 픽업합니다.

## Repository Structure

```text
.
├── apps
│   ├── api              # Backend API scaffold
│   ├── admin-web        # Admin dashboard scaffold
│   ├── consumer-app     # Consumer mobile app scaffold
│   └── seller-app       # Seller mobile app scaffold
├── docs                 # Product, business, operations, and architecture docs
├── packages
│   └── shared           # Shared TypeScript types/constants
├── database             # SQL schema drafts
└── 동네_마감박스_플랫폼_사업계획_정리본.md
```

## MVP Priorities

1. 한 동네에 입점 매장 20~30곳 확보
2. 소비자 앱 첫 화면에 `오늘 픽업 가능한 마감박스` 노출
3. 판매자 앱에서 `카테고리`, `수량`, `픽업시간`, `가격`만으로 등록
4. 앱 선결제, QR/주문번호 픽업, 주 1회 판매자 정산
5. 식품안전 안내, 알레르기 안내, 자동 품절, 자동 판매 종료

## Suggested Tech Stack

| Area | Stack |
|---|---|
| Consumer app | React Native + Expo |
| Seller app | React Native + Expo |
| Admin web | Next.js |
| API | NestJS or Fastify |
| Database | PostgreSQL |
| Auth | Supabase Auth or Firebase Auth |
| Payment | Toss Payments |
| Map | Kakao Map or Naver Map |
| Push | Firebase Cloud Messaging |
| Storage | S3 or Cloudflare R2 |

## Local Development

Dependencies are not installed yet. After GitHub connection and package installation:

```bash
npm install
npm run dev:consumer
npm run dev:seller
npm run dev:admin
npm run dev:api
```

## Documents

- [Product Requirements](docs/product-requirements.md)
- [User Flows](docs/user-flows.md)
- [Architecture](docs/architecture.md)
- [Go-to-Market](docs/go-to-market.md)
- [Data and Government Strategy](docs/data-and-government-strategy.md)
- [Operations Policy](docs/operations-policy.md)
- [MVP Roadmap](docs/mvp-roadmap.md)
- [GitHub Setup](docs/github-setup.md)

