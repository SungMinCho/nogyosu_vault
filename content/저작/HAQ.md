---
title: "HAQ"
type: "저작"
aliases:
  - "하드웨어 인지 자동 양자화"
  - "HAQ: Hardware-Aware Automated Quantization with Mixed Precision"
원어: "HAQ: Hardware-Aware Automated Quantization with Mixed Precision"
출처: "CVPR 2019"
책:
  - "[[신경망 양자화 강좌]]"
강의:
  - "[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|양자화강좌 9강]]"
처음: "[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지]]"
description: "송한 연구실의 왕 등이 2019년 CVPR에 낸 논문으로, 강화 학습 에이전트(DDPG)가 층마다 2~8비트 중 하나를 고르게 하고 정확도 변화를 보상으로, 하드웨어 시뮬레이터(BitFusion·BISMO)의 지연 시간과 에너지를 제약으로 준다. 고정 8비트보다 지연 시간을 1.4~1.95배, 에너지를 1.9배 줄였다. 사람의 직관이 아니라 하드웨어의 피드"
tags:
  - "저작"
  - "양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
송한 연구실의 왕 등이 2019년 CVPR에 낸 논문으로, 강화 학습 에이전트(DDPG)가 층마다 2\~8비트 중 하나를 고르게 하고 정확도 변화를 보상으로, 하드웨어 시뮬레이터(BitFusion·BISMO)의 지연 시간과 에너지를 제약으로 준다. 고정 8비트보다 지연 시간을 1.4\~1.95배, 에너지를 1.9배 줄였다. 사람의 직관이 아니라 하드웨어의 피드백이 비트를 정한다.

> [!src] 원어 *HAQ: Hardware-Aware Automated Quantization with Mixed Precision* · CVPR 2019 · 처음 놓인 곳 [[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|9강]] · [[신경망 양자화 강좌]]

## 강의에서

- **[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|9강]]** — 혼합 정밀도의 설계 공간을 강화 학습으로 자동 탐색하는 것이 HAQ다.

## 이어지는 것

- **사례** — [[혼합 정밀도]]
- **같은 계열** — [[송한]]
