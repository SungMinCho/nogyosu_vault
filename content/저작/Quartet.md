---
title: "Quartet"
type: "저작"
aliases:
  - "Quartet II"
  - "MS-EDEN"
  - "QuEST"
원어: "Quartet: Native FP4 Training Can Be Optimal for Large Language Models"
출처: "NeurIPS 2025; 2026"
책:
  - "[[회전 양자화의 계보]]"
강의:
  - "[[회전양자화 09강 블록마다 자를 주는 시대 회전은 약인가 독인가|회전양자화 9강]]"
  - "[[회전양자화 10강 결산과 반론|회전양자화 10강]]"
처음: "[[회전양자화 09강 블록마다 자를 주는 시대 회전은 약인가 독인가]]"
description: "ISTA 팀의 FP4 훈련 계열이다. QuEST(2025년 2월)가 하다마드로 분포를 가우시안에 가깝게 만든 뒤 가우시안 최적 클리핑을 거는 논리를 세웠고, Quartet(2025년 5월, NeurIPS 2025)는 MXFP4 순전파에 그룹 크기 32 하다마드를, 역전파에 쳉 등의 SR + RHT를 써 순전파까지 FP4로 도는 네이티브 훈련을 했다(RTX "
tags:
  - "저작"
  - "회전양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
ISTA 팀의 FP4 훈련 계열이다. QuEST(2025년 2월)가 하다마드로 분포를 가우시안에 가깝게 만든 뒤 가우시안 최적 클리핑을 거는 논리를 세웠고, Quartet(2025년 5월, NeurIPS 2025)는 MXFP4 순전파에 그룹 크기 32 하다마드를, 역전파에 쳉 등의 SR + RHT를 써 순전파까지 FP4로 도는 네이티브 훈련을 했다(RTX 5090에서 선형층이 FP8보다 약 1.8배). 2026년 1월 Quartet II는 NVFP4로 가며 SR이 오차 제곱을 두 배 넘게 키운다며 128원소 RHT 조각마다 보정 인수를 FP8 스케일 쪽에 확률적으로 반올림해 넣는 MS-EDEN(오차 9.4)을 냈다.

> [!src] 원어 *Quartet: Native FP4 Training Can Be Optimal for Large Language Models* · NeurIPS 2025; 2026 · 처음 놓인 곳 [[회전양자화 09강 블록마다 자를 주는 시대 회전은 약인가 독인가|9강]] · [[회전 양자화의 계보]]

## 강의에서

- **[[회전양자화 09강 블록마다 자를 주는 시대 회전은 약인가 독인가|9강]]** — 같은 팀의 Quartet는 MXFP4 순전파에 하다마드를 썼다.
- 또 나오는 곳 — [[회전양자화 10강 결산과 반론|10강]]

## 이어지는 것

- **계보** — [[MXFP4로 LLM 훈련하기]]
- **도구** — [[확률적 반올림]]
