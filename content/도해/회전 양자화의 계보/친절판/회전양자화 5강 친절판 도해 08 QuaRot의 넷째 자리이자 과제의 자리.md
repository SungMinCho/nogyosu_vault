---
title: "도해 8 — QuaRot의 넷째 자리이자 과제의 자리"
type: "도해"
책: "[[회전 양자화의 계보]]"
description: "QuaRot의 넷째 자리이자 과제의 자리. 쿼리와 키 모두 RoPE 뒤에서 헤드별 하다마드를 추론 중에 곱한다. 둘 다 돌리니 점수는 그대로이고, 키는 돌린 채 4비트로 캐시된다. 초록 점선이 과제가 하려는 일 — 그 하다마드를 RoPE 앞으로 옮겨 Wq, Wk에 병합하기. 그 사이의 "
tags:
  - "도해"
  - "회전양자화"
cssclasses:
  - "panseo-spin"
  - "figure-note"
publish: true
---
![[spin_k06-f08.svg]]

[[QuaRot]]의 넷째 자리이자 과제의 자리. 쿼리와 키 모두 [[RoPE]] 뒤에서 헤드별 [[하다마드 행렬|하다마드]]를 추론 중에 곱한다. 둘 다 돌리니 점수는 그대로이고, 키는 돌린 채 4비트로 캐시된다. 초록 점선이 과제가 하려는 일 — 그 하다마드를 RoPE 앞으로 옮겨 W<sub>q</sub>, W<sub>k</sub>에 병합하기. 그 사이의 RoPE가 문제다(8강).

> [!src] 나오는 곳 [[회전양자화 05강 친절판 돌린 채로 산다|5강 친절판]] · [[회전 양자화의 계보]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/spin_k06.html)
