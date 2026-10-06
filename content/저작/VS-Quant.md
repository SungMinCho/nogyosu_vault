---
title: "VS-Quant"
type: "저작"
aliases:
  - "VS-Quant: Per-vector Scaled Quantization"
  - "벡터별 스케일 양자화"
원어: "VS-Quant: Per-vector Scaled Quantization for Accurate Low-Precision Neural Network Inference"
출처: "MLSys 2021"
책:
  - "[[신경망 양자화 강좌]]"
강의:
  - "[[양자화강좌 07강 눈금을 몇 무리에 나눠 줄 것인가 세밀도와 두 개의 MX|양자화강좌 7강]]"
처음: "[[양자화강좌 07강 눈금을 몇 무리에 나눠 줄 것인가 세밀도와 두 개의 MX]]"
description: "엔비디아의 다이 등이 2021년 MLSys에 낸 논문으로, 굵은 부동소수점 스케일과 가는 정수 스케일을 겹친 계층적 스케일을 내놓았다. 4비트 가중치·활성값으로 ResNet-50 정확도를 75퍼센트 넘게 유지하면서 면적 37퍼센트, 에너지 24퍼센트를 아꼈다고 보고한다."
tags:
  - "저작"
  - "양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
엔비디아의 다이 등이 2021년 MLSys에 낸 논문으로, 굵은 부동소수점 스케일과 가는 정수 스케일을 겹친 계층적 스케일을 내놓았다. 4비트 가중치·활성값으로 ResNet-50 정확도를 75퍼센트 넘게 유지하면서 면적 37퍼센트, 에너지 24퍼센트를 아꼈다고 보고한다.

> [!src] 원어 *VS-Quant: Per-vector Scaled Quantization for Accurate Low-Precision Neural Network Inference* · MLSys 2021 · 처음 놓인 곳 [[양자화강좌 07강 눈금을 몇 무리에 나눠 줄 것인가 세밀도와 두 개의 MX|7강]] · [[신경망 양자화 강좌]]

## 강의에서

- **[[양자화강좌 07강 눈금을 몇 무리에 나눠 줄 것인가 세밀도와 두 개의 MX|7강]]** — 다이 등의 VS-Quant가 계층적 스케일 장치를 r = γ·S\_q(q − Z)로 적는다.

## 이어지는 것

- **저자** — [[스티브 다이]]
- **계보** — [[다단계 스케일링]]
