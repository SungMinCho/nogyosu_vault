---
title: "도해 9 — QuaRot의 자리"
type: "도해"
책: "[[회전 양자화의 계보]]"
description: "QuaRot의 자리. Llama-2-7B를 가중치·활성·KV 캐시 모두 4비트로 했을 때의 WikiText2 ppl. 같은 회전이라도 가중치를 GPTQ가 아니라 반올림으로 하면 8.37로 나빠진다. 숫자는 QuaRot 논문 표(OmniQuant, SmoothQuant는 OmniQuant"
tags:
  - "도해"
  - "회전양자화"
cssclasses:
  - "panseo-spin"
  - "figure-note"
publish: true
---
![[spin_k06-f09.svg]]

[[QuaRot]]의 자리. Llama-2-7B를 가중치·활성·[[KV 캐시]] 모두 4비트로 했을 때의 WikiText2 ppl. 같은 [[회전 (양자화)|회전]]이라도 가중치를 GPTQ가 아니라 반올림으로 하면 8.37로 나빠진다. 숫자는 QuaRot 논문 표([[OmniQuant]], [[SmoothQuant]]는 OmniQuant 논문 값을 옮긴 것).

> [!src] 나오는 곳 [[회전양자화 05강 친절판 돌린 채로 산다|5강 친절판]] · [[회전 양자화의 계보]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/spin_k06.html)
