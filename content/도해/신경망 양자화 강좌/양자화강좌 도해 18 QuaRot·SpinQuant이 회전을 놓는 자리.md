---
title: "도해 18 — QuaRot·SpinQuant이 회전을 놓는 자리"
type: "도해"
책: "[[신경망 양자화 강좌]]"
강: "15강"
description: "QuaRot·SpinQuant이 회전을 놓는 자리. 잔차 흐름을 $Q$로 돌리고 읽는 가중치에 ${Q}^{\\top }$, 쓰는 가중치에 $Q$를 미리 접으면 출력이 그대로입니다. RMSNorm이 노름만 보니 회전과 교환되기 때문이지요. 다만 그 전에 RMSNorm 계수 $\\alpha$를"
tags:
  - "도해"
  - "양자화"
cssclasses:
  - "panseo-quantcourse"
  - "figure-note"
publish: true
---
![[quantcourse-f18.svg]]

[[QuaRot]]·[[SpinQuant]]이 [[회전 (양자화)|회전]]을 놓는 자리. [[잔차 흐름]]을 $Q$로 돌리고 읽는 가중치에 ${Q}^{\top }$, 쓰는 가중치에 $Q$를 미리 접으면 출력이 그대로입니다. [[RMSNorm]]이 노름만 보니 회전과 교환되기 때문이지요. 다만 그 전에 RMSNorm 계수 $\alpha$를 가중치로 빼내야 하고(붉은 상자), 비선형 함수 뒤와 [[RoPE]] 뒤처럼 접을 수 없는 자리에는 실행 중 하다마드(점선)를 곱합니다.

> [!src] 나오는 곳 [[양자화강좌 15강 다리 계산 불변성, 그리고 「둘 다 뾰족할 수는 없다」를 다시 읽는 지도|15강 다리: 계산 불변성, 그리고 「둘 다 뾰족할 수는 없다」를 다시 읽는 지도]] · [[신경망 양자화 강좌]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/quantcourse.html)
