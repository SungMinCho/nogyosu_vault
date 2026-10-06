---
title: "도해 6 — SpinQuant의 흐름"
type: "도해"
책: "[[회전 양자화의 계보]]"
description: "SpinQuant의 흐름. 왼쪽 고리에서 R1·R2만 배우고(활성만 양자화, 가중치는 16비트), 다 배운 뒤 오른쪽 차례로 병합 → GPTQ → 배포. 배포된 모델에는 R3·R4의 온라인 하다마드가 남는다."
tags:
  - "도해"
  - "회전양자화"
cssclasses:
  - "panseo-spin"
  - "figure-note"
publish: true
---
![[spin_k05-f06.svg]]

[[SpinQuant]]의 흐름. 왼쪽 고리에서 R1·R2만 배우고(활성만 [[양자화]], 가중치는 16비트), 다 배운 뒤 오른쪽 차례로 병합 → GPTQ → 배포. 배포된 모델에는 R3·R4의 [[온라인 회전|온라인 하다마드]]가 남는다.

> [!src] 나오는 곳 [[회전양자화 06강 친절판 회전인 채로 걷기|6강 친절판]] · [[회전 양자화의 계보]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/spin_k05.html)
