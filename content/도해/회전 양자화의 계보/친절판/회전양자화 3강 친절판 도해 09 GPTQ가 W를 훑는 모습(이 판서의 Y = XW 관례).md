---
title: "도해 9 — GPTQ가 W를 훑는 모습(이 판서의 Y = XW 관례)"
type: "도해"
책: "[[회전 양자화의 계보]]"
description: "GPTQ가 W를 훑는 모습(이 판서의 Y = XW 관례). 위에서부터 입력 채널 하나 — W의 한 행, 출력 채널 전부 — 씩 반올림한다. 그 오차는 아직 안 한 행들이 메우는데, 같은 블록 안은 즉시, 블록 밖은 모아 뒀다가 행렬 곱 한 번으로 고친다. GPTQ 논문의 관례로는 이 \""
tags:
  - "도해"
  - "회전양자화"
cssclasses:
  - "panseo-spin"
  - "figure-note"
publish: true
---
![[spin_k03-f09.svg]]

GPTQ가 W를 훑는 모습(이 판서의 Y = XW 관례). 위에서부터 입력 채널 하나 — W의 한 행, 출력 채널 전부 — 씩 반올림한다. 그 오차는 아직 안 한 행들이 메우는데, 같은 블록 안은 즉시, 블록 밖은 모아 뒀다가 행렬 곱 한 번으로 고친다. [[GPTQ|GPTQ 논문]]의 관례로는 이 "행"이 "열"이다.

> [!src] 나오는 곳 [[회전양자화 03강 친절판 난도를 옮기다|3강 친절판]] · [[회전 양자화의 계보]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/spin_k03.html)
