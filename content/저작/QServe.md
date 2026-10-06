---
title: "QServe"
type: "저작"
aliases:
  - "QServe: W4A8KV4 Quantization and System Co-design"
원어: "QServe: W4A8KV4 Quantization and System Co-design for Efficient LLM Serving"
출처: "MLSys 2025"
책:
  - "[[신경망 양자화 강좌]]"
강의:
  - "[[양자화강좌 10강 거인의 이상치 SmoothQuant, AWQ, QServe|양자화강좌 10강]]"
  - "[[양자화강좌 16강 결산과 반론|양자화강좌 16강]]"
처음: "[[양자화강좌 10강 거인의 이상치 SmoothQuant, AWQ, QServe]]"
description: "린 등의 2025년 MLSys 논문으로, 클라우드 서빙(W8A8KV8)과 엣지 추론(W4A16KV16)이 따로 노는 문제에 W4A8KV4로 답한다. 점진적 그룹 양자화로 INT4를 INT8로 푸는 일을 정수 연산으로 끝내고, SmoothAttention으로 키를 4비트 KV 캐시에 맞게 매끄럽게 한다. 처리량은 TensorRT-LLM 대비 A100에서 1."
tags:
  - "저작"
  - "양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
린 등의 2025년 MLSys 논문으로, 클라우드 서빙(W8A8KV8)과 엣지 추론(W4A16KV16)이 따로 노는 문제에 W4A8KV4로 답한다. 점진적 그룹 양자화로 INT4를 INT8로 푸는 일을 정수 연산으로 끝내고, SmoothAttention으로 키를 4비트 KV 캐시에 맞게 매끄럽게 한다. 처리량은 TensorRT-LLM 대비 A100에서 1.2\~2.4배, L40S에서 1.5\~3.5배다.

> [!src] 원어 *QServe: W4A8KV4 Quantization and System Co-design for Efficient LLM Serving* · MLSys 2025 · 처음 놓인 곳 [[양자화강좌 10강 거인의 이상치 SmoothQuant, AWQ, QServe|10강]] · [[신경망 양자화 강좌]]

## 강의에서

- **[[양자화강좌 10강 거인의 이상치 SmoothQuant, AWQ, QServe|10강]]** — 마지막 조각인 QServe가 클라우드와 엣지의 간극을 W4A8KV4로 메운다.
- 또 나오는 곳 — [[양자화강좌 16강 결산과 반론|16강]]

## 이어지는 것

- **저자** — [[위쥔 린]]
- **부분** — [[W4A8KV4]] · [[점진적 그룹 양자화]] · [[SmoothAttention]]
