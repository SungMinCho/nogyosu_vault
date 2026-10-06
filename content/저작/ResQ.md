---
title: "ResQ"
type: "저작"
aliases:
  - "레스큐"
원어: "ResQ: Mixed-Precision Quantization of Large Language Models with Low-Rank Residuals"
출처: "ICML 2025"
책:
  - "[[회전 양자화의 계보]]"
강의:
  - "[[회전양자화 07강 좋은 회전이란 무엇인가 여섯 갈래|회전양자화 7강]]"
처음: "[[회전양자화 07강 좋은 회전이란 무엇인가 여섯 갈래]]"
description: "퍼듀와 d-Matrix의 2024년 12월 논문(ICML 2025)으로, 모두를 같은 정밀도로 할 필요가 있느냐는 넷째 갈래다. PCA로 활성 분산이 가장 큰 부분공간(은닉 차원의 8분의 1)은 8비트, 나머지는 4비트로 하고 부분공간 안에서 무작위 회전하며 '증명 가능한 최적 혼합 정밀도'라 했다. Q·K 쪽 변환 UC는 RoPE 때문에 명시적으로 적용한"
tags:
  - "저작"
  - "회전양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
퍼듀와 d-Matrix의 2024년 12월 논문(ICML 2025)으로, 모두를 같은 정밀도로 할 필요가 있느냐는 넷째 갈래다. PCA로 활성 분산이 가장 큰 부분공간(은닉 차원의 8분의 1)은 8비트, 나머지는 4비트로 하고 부분공간 안에서 무작위 회전하며 '증명 가능한 최적 혼합 정밀도'라 했다. Q·K 쪽 변환 UC는 RoPE 때문에 명시적으로 적용한다. Llama-3-70B W4A4KV4 WikiText2 4.1(SpinQuant 6.2), MMLU 74.0 대 59.4다.

> [!src] 원어 *ResQ: Mixed-Precision Quantization of Large Language Models with Low-Rank Residuals* · ICML 2025 · 처음 놓인 곳 [[회전양자화 07강 좋은 회전이란 무엇인가 여섯 갈래|7강]] · [[회전 양자화의 계보]]

## 강의에서

- **[[회전양자화 07강 좋은 회전이란 무엇인가 여섯 갈래|7강]]** — 넷째 갈래는 부분공간마다 다른 정밀도를 주는 ResQ다.

## 이어지는 것

- **사례** — [[혼합 정밀도]]
- **도구** — [[주성분 분석]]
