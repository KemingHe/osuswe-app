# Changelog

## [0.9.4](https://github.com/KemingHe/osuswe-app/compare/v0.9.3...v0.9.4) (2025-01-06)

### Bug Fixes

* **mainhero.tsx:** replaced main action link with to sign-in instead of to-dashboard, updated aria ([c59ac61](https://github.com/KemingHe/osuswe-app/commit/c59ac61c5d470726af89391d76c9f7eb3b7bd105))

## [0.9.3](https://github.com/KemingHe/osuswe-app/compare/v0.9.2...v0.9.3) (2025-01-04)

### Bug Fixes

* **.github/workflows:** pinned pnpm/action-setup to v4.0.0 commit hash for security ([f0fce26](https://github.com/KemingHe/osuswe-app/commit/f0fce26a71118272abc5b23e4af17d8acb2831f7))

## [0.9.2](https://github.com/KemingHe/osuswe-app/compare/v0.9.1...v0.9.2) (2025-01-04)

### Bug Fixes

* **package.json:** added webkit to playwright install command ([82f83ec](https://github.com/KemingHe/osuswe-app/commit/82f83ec893ecc1b6b9270adfc3acfedd3c10eccf)), closes [#43](https://github.com/KemingHe/osuswe-app/issues/43)

## [0.9.1](https://github.com/KemingHe/osuswe-app/compare/v0.9.0...v0.9.1) (2025-01-04)

## [0.9.0](https://github.com/KemingHe/osuswe-app/compare/v0.8.1...v0.9.0) (2025-01-04)

### Features

* **(stack-client-context)/actions.ts:** adopted client ro metadata for role management ([6320431](https://github.com/KemingHe/osuswe-app/commit/6320431733c81c40742311092324d0b0caa4c3e5)), closes [#36](https://github.com/KemingHe/osuswe-app/issues/36)

## [0.8.1](https://github.com/KemingHe/osuswe-app/compare/v0.8.0...v0.8.1) (2025-01-04)

## [0.8.0](https://github.com/KemingHe/osuswe-app/compare/v0.7.0...v0.8.0) (2025-01-02)

### Features

* **usefirebaseauthintegration.ts:** added firebase auto-signin with custom claims as hook in layout ([5f4d407](https://github.com/KemingHe/osuswe-app/commit/5f4d407a052494e55dd83272611539986d13f67b)), closes [#23](https://github.com/KemingHe/osuswe-app/issues/23)

## [0.7.0](https://github.com/KemingHe/osuswe-app/compare/v0.6.0...v0.7.0) (2025-01-02)

### Features

* **(firebase-context)/action.ts:** securely added user role firestore accessor server action ([f6c8b1b](https://github.com/KemingHe/osuswe-app/commit/f6c8b1bbe73cd4c487442fe67db716167cda0c97))

## [0.6.0](https://github.com/KemingHe/osuswe-app/compare/v0.5.8...v0.6.0) (2024-12-31)

### Features

* **components/verifyemail/:** added AlreadySignedInPrompt.tsx option to fixed verify email page ([2f40476](https://github.com/KemingHe/osuswe-app/commit/2f404760528b7f784707947154b7cece4e7c5808))

## [0.5.8](https://github.com/KemingHe/osuswe-app/compare/v0.5.7...v0.5.8) (2024-12-31)

### Bug Fixes

* **auth/verify-email/layout.tsx:** removed auto-redir guard because interfere w/ stack redir ([1a48bbb](https://github.com/KemingHe/osuswe-app/commit/1a48bbb4e568c023f7c0d99ac57a31f081e8136b)), closes [#28](https://github.com/KemingHe/osuswe-app/issues/28)

## [0.5.7](https://github.com/KemingHe/osuswe-app/compare/v0.5.6...v0.5.7) (2024-12-31)

## [0.5.6](https://github.com/KemingHe/osuswe-app/compare/v0.5.5...v0.5.6) (2024-12-30)

## [0.5.5](https://github.com/KemingHe/osuswe-app/compare/v0.5.4...v0.5.5) (2024-12-29)

## [0.5.4](https://github.com/KemingHe/osuswe-app/compare/v0.5.3...v0.5.4) (2024-12-29)

## [0.5.3](https://github.com/KemingHe/osuswe-app/compare/v0.5.2...v0.5.3) (2024-12-28)

## [0.5.2](https://github.com/KemingHe/osuswe-app/compare/v0.5.1...v0.5.2) (2024-12-28)

## [0.5.1](https://github.com/KemingHe/osuswe-app/compare/v0.5.0...v0.5.1) (2024-12-28)

## [0.5.0](https://github.com/KemingHe/osuswe-app/compare/v0.4.2...v0.5.0) (2024-12-27)

### Features

* **components/bottomnav:** added dynamic bottom nav for client pages ([4d83adc](https://github.com/KemingHe/osuswe-app/commit/4d83adc7905657282e347e1b05e9da7e012fb103)), closes [#6](https://github.com/KemingHe/osuswe-app/issues/6)

## [0.4.2](https://github.com/KemingHe/osuswe-app/compare/v0.4.1...v0.4.2) (2024-12-27)

### Bug Fixes

* **signoutwireframe.tsx:** updated sign-out prompts with OSUSWE App info, added goback handler ([1cc206f](https://github.com/KemingHe/osuswe-app/commit/1cc206fb9a207408543a37234ee9c167b055512a)), closes [#9](https://github.com/KemingHe/osuswe-app/issues/9)

## [0.4.1](https://github.com/KemingHe/osuswe-app/compare/v0.4.0...v0.4.1) (2024-12-27)

### Bug Fixes

* **input and link elements:** fixed input auto-caps, fixed osuswe slack link to be external ([7f2ff98](https://github.com/KemingHe/osuswe-app/commit/7f2ff98befc9d841b7d2e7ac08dcbbe8b145c4e8)), closes [#8](https://github.com/KemingHe/osuswe-app/issues/8) [#3](https://github.com/KemingHe/osuswe-app/issues/3)

## [0.4.0](https://github.com/KemingHe/osuswe-app/compare/v0.3.2...v0.4.0) (2024-12-27)

### Features

* **app/page.tsx:** added ssr homepage with header/footer, hero, and dev timeline ([76db464](https://github.com/KemingHe/osuswe-app/commit/76db464f46cf9fa6c492ecbc2c2ce1f5cb8e74ad))

## [0.3.2](https://github.com/KemingHe/osuswe-app/compare/v0.3.1...v0.3.2) (2024-12-25)

## [0.3.1](https://github.com/KemingHe/osuswe-app/compare/v0.3.0...v0.3.1) (2024-12-25)

### Bug Fixes

* **unit-test.yaml:** updated CI to include necessary envs for passing tests ([8057a53](https://github.com/KemingHe/osuswe-app/commit/8057a536061713635a8ba97af1d64644c0cefde0))

## [0.3.0](https://github.com/KemingHe/osuswe-app/compare/v0.2.0...v0.3.0) (2024-12-25)

### Features

* **lib/stack-auth:** completed (and tested working) stack auth for osuswe app ([e6cfb7f](https://github.com/KemingHe/osuswe-app/commit/e6cfb7f1ead0f09f022a6725fb651f47eed1bda8))

## [0.2.0](https://github.com/KemingHe/osuswe-app/compare/v0.1.7...v0.2.0) (2024-12-25)

### Features

* **tailwind.config.ts:** added custom osuswe style and implemented max mobile viewport ([f13525e](https://github.com/KemingHe/osuswe-app/commit/f13525e7582ba1fe29e4d0af7c5a57fa396d856d))

## [0.1.7](https://github.com/KemingHe/osuswe-app/compare/v0.1.6...v0.1.7) (2024-12-17)

## [0.1.6](https://github.com/KemingHe/osuswe-app/compare/v0.1.5...v0.1.6) (2024-12-17)

### Bug Fixes

* **biome.json:** removed packaged.json from biome ignore, found root cause of inconsistency ([6ddbb20](https://github.com/KemingHe/osuswe-app/commit/6ddbb20a637557c0e139f0865626fce7b5a341cc))

## [0.1.5](https://github.com/KemingHe/osuswe-app/compare/v0.1.4...v0.1.5) (2024-12-17)

### Bug Fixes

* **unit-test.yml:** fixed typo in workflow file env declaration that fails unit tests in ci ([96058cf](https://github.com/KemingHe/osuswe-app/commit/96058cf95c570d7041ce889376159ada1428a024))

## [0.1.4](https://github.com/KemingHe/osuswe-app/compare/v0.1.3...v0.1.4) (2024-12-17)

### Bug Fixes

* **biome.json:** added package.json to biome's ignored files due to diff behavior ci and local ([8abe492](https://github.com/KemingHe/osuswe-app/commit/8abe4925ead36e2543bc06671dba8911aeda2126))

## [0.1.3](https://github.com/KemingHe/osuswe-app/compare/v0.1.2...v0.1.3) (2024-12-17)

## [0.1.2](https://github.com/KemingHe/osuswe-app/compare/v0.1.1...v0.1.2) (2024-12-17)

### Bug Fixes

* commitizen now triggering properly by husky, followed by release-it ([9f8efc8](https://github.com/KemingHe/osuswe-app/commit/9f8efc8645750d05ecb2a1874e80b016c09cc35e))

## 0.1.1 (2024-12-17)
