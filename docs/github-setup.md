# GitHub Setup

## Current Status

로컬 Git 저장소는 생성되어 있습니다. 현재 GitHub CLI의 토큰이 만료되어 원격 저장소 생성과 푸시는 사용자의 재로그인이 필요합니다.

## Re-authenticate GitHub CLI

```bash
gh auth login -h github.com
gh auth status
```

## Create Remote Repository

추천 저장소 이름:

```text
neighborhood-save-box
```

GitHub CLI 인증 후:

```bash
gh repo create neighborhood-save-box --private --source=. --remote=origin --push
```

공개 저장소로 만들려면 `--private` 대신 `--public`을 사용합니다.

## Push Existing Local Repository

이미 GitHub에서 빈 저장소를 만들었다면:

```bash
git remote add origin https://github.com/<username>/neighborhood-save-box.git
git push -u origin main
```

