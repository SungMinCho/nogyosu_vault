---
title: "도해 1 — (a) SpinQuant가 본 흩어짐"
type: "도해"
책: "[[회전 양자화의 계보]]"
description: "(a) SpinQuant가 본 흩어짐. 막대의 폭(13점, 6점)만 논문 수치이고 가로 위치는 도식이다. (b) SpinQuant 표 5의 LLaMA-3-8B 숫자로 그린 점 그림. 가중치를 반올림으로 양자화하면 학습된 회전이 QuaRot보다 5.5점 앞서지만, 둘 다 GPTQ를 쓰면 "
tags:
  - "도해"
  - "회전양자화"
cssclasses:
  - "panseo-spin"
  - "figure-note"
publish: true
---
![[spin_k05-f01.svg]]

(a) [[SpinQuant]]가 본 흩어짐. 막대의 폭(13점, 6점)만 논문 수치이고 가로 위치는 도식이다. (b) SpinQuant 표 5의 LLaMA-3-8B 숫자로 그린 점 그림. 가중치를 반올림으로 [[양자화]]하면 학습된 [[회전 (양자화)|회전]]이 [[QuaRot]]보다 5.5점 앞서지만, 둘 다 GPTQ를 쓰면 2.2점으로 줄어든다. 학습이 해 주던 일의 상당 부분을 GPTQ가 대신한다.

> [!src] 나오는 곳 [[회전양자화 06강 친절판 회전인 채로 걷기|6강 친절판]] · [[회전 양자화의 계보]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/spin_k05.html)
