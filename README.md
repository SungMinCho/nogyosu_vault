# 노교수의 서가 · nogyosu_vault

**사이트 → https://sungmincho.github.io/nogyosu_vault/**

노교수가 책 한 권을 원서 순서 그대로 여러 강에 걸쳐 읽은 **강의록**, 그 강의를 손으로 그린 도해와 계산 쪽지로 옮긴 **판서**, 강의에 나오는 개념·인물·저작·명제·사실을 하나씩 떼어 서로 이은 **원자 노트**를 Obsidian 볼트로 엮어 웹에 낸 것.

- 첫 책: 브뤼노 라투르, 『존재양식의 탐구 — 근대인의 인류학』 — 20강, 도해 22점, 계산 쪽지 60장, 원자 노트 754개
- 원본 판서(디자인된 HTML 한 장): https://sungmincho.github.io/nogyosu_vault/static/panseo/aime.html

## 구조
| 경로 | 무엇 |
|---|---|
| `content/` | 볼트(Dropbox의 `nogyosu_vault`)에서 웹에 낼 부분 — 책·강 노트, 원자 노트, 도해 |
| `quartz/static/panseo/` | 원본 HTML 판서 |
| `quartz/styles/custom.scss` | 판서 콜아웃(절 표지·계산 쪽지·도해 캡션…)과 지도 종이 팔레트 |
| `vault-fixes.ts` | Obsidian 폴더 노트 링크, SVG 임베드를 Quartz가 바로 읽게 고치는 작은 변환기 |
| `.github/workflows/publish.yml` | `_upload/site.zip`을 풀어 `content/`를 갈아끼우고 빌드·배포 |

## 발행
원본은 Dropbox의 Obsidian 볼트다. 볼트에서 만든 `site.zip`(Dropbox `nogyosu_vault/_system/발행/site.zip`)의 공유 링크가 저장소 변수 `SITE_ZIP_URL`에 있고, `publish.yml`이 매시간 그 파일을 확인해서 바뀌었으면 풀고, 커밋하고, 빌드해서 Pages에 배포한다. 바로 내보내려면 Actions → Publish → Run workflow. 저장소에 `_upload/site.zip`을 직접 올려도 된다.

## 크레디트
사이트 엔진은 [Quartz v5](https://github.com/jackyzha0/quartz) (MIT, `LICENSE.txt`). 강의 속 라투르 인용은 영어판을 우리말로 뜻 옮김한 것이며 쪽수는 영어판(Harvard, 2013) 기준이다.
