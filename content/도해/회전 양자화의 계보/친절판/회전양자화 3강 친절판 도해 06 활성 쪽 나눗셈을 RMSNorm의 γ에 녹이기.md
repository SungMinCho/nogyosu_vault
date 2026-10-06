---
title: "도해 6 — 활성 쪽 나눗셈을 RMSNorm의 γ에 녹이기"
type: "도해"
책: "[[회전 양자화의 계보]]"
description: "활성 쪽 나눗셈을 RMSNorm의 γ에 녹이기. γ는 열마다 곱하는 배율이라 γ ⊘ s로 바꿔 두면 X ⊘ s가 공짜로 나온다. 앞 연산이 비선형 함수라면 이 요령이 통하지 않는다 — 그래서 대각 변환은 정규화 층 바로 뒤의 입력에만 건다."
tags:
  - "도해"
  - "회전양자화"
cssclasses:
  - "panseo-spin"
  - "figure-note"
publish: true
---
![[spin_k03-f06.svg]]

활성 쪽 나눗셈을 [[RMSNorm]]의 γ에 녹이기. γ는 열마다 곱하는 배율이라 γ ⊘ s로 바꿔 두면 X ⊘ s가 공짜로 나온다. 앞 연산이 비선형 함수라면 이 요령이 통하지 않는다 — 그래서 대각 변환은 정규화 층 바로 뒤의 입력에만 건다.

> [!src] 나오는 곳 [[회전양자화 03강 친절판 난도를 옮기다|3강 친절판]] · [[회전 양자화의 계보]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/spin_k03.html)
