---
title: "도해 10 — NVIDIA 처방의 회전 자리"
type: "도해"
책: "[[회전 양자화의 계보]]"
description: "NVIDIA 처방의 회전 자리. 세 행렬 곱 중 Wgrad 하나에만 RHT. 순전파의 회전은 NVFP4에서 손해였고, Wgrad의 회전은 큰 모델에서 손실을 낮췄다."
tags:
  - "도해"
  - "회전양자화"
cssclasses:
  - "panseo-spin"
  - "figure-note"
publish: true
---
![[spin_k09-f10.svg]]

NVIDIA 처방의 [[회전 (양자화)|회전]] 자리. 세 행렬 곱 중 Wgrad 하나에만 RHT. 순전파의 회전은 [[NVFP4]]에서 손해였고, Wgrad의 회전은 큰 모델에서 손실을 낮췄다.

> [!src] 나오는 곳 [[회전양자화 09강 친절판 블록마다 자 하나|9강 친절판]] · [[회전 양자화의 계보]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/spin_k09.html)
