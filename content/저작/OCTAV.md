---
title: "OCTAV"
type: "저작"
aliases:
  - "Optimal Clipping and Magnitude-aware Differentiation"
원어: "Optimal Clipping and Magnitude-aware Differentiation for Improved Quantization-aware Training"
출처: "ICML 2022"
책:
  - "[[신경망 양자화 강좌]]"
강의:
  - "[[양자화강좌 08강 어디서 자르고 어느 쪽으로 반올림할 것인가 클리핑과 AdaRound|양자화강좌 8강]]"
처음: "[[양자화강좌 08강 어디서 자르고 어느 쪽으로 반올림할 것인가 클리핑과 AdaRound]]"
description: "엔비디아의 사크르 등이 2022년 ICML에 낸 방법으로, 분포 가정 없이 실제 데이터의 MSE를 최소로 하는 클리핑 값을 뉴턴–랩슨 반복으로 찾는다. 반복식의 분자는 잘려 나갈 원소들의 크기 합, 분모는 남는 원소의 입상 비용 가중치와 잘릴 원소 수의 합이며 열 번쯤이면 수렴한다. 4비트에서 ResNet-50 76.07→75.84, MobileNet-V2"
tags:
  - "저작"
  - "양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
엔비디아의 사크르 등이 2022년 ICML에 낸 방법으로, 분포 가정 없이 실제 데이터의 MSE를 최소로 하는 클리핑 값을 뉴턴–랩슨 반복으로 찾는다. 반복식의 분자는 잘려 나갈 원소들의 크기 합, 분모는 남는 원소의 입상 비용 가중치와 잘릴 원소 수의 합이며 열 번쯤이면 수렴한다. 4비트에서 ResNet-50 76.07→75.84, MobileNet-V2 71.71→70.88, BERT-Large 91.00→87.09다.

> [!src] 원어 *Optimal Clipping and Magnitude-aware Differentiation for Improved Quantization-aware Training* · ICML 2022 · 처음 놓인 곳 [[양자화강좌 08강 어디서 자르고 어느 쪽으로 반올림할 것인가 클리핑과 AdaRound|8강]] · [[신경망 양자화 강좌]]

## 강의에서

- **[[양자화강좌 08강 어디서 자르고 어느 쪽으로 반올림할 것인가 클리핑과 AdaRound|8강]]** — 이 계열의 최신판으로 장표가 엔비디아의 OCTAV를 보여 준다.

## 이어지는 것

- **저자** — [[샤르벨 사크르]]
- **계보** — [[ACIQ]]
- **도구** — [[뉴턴법]]
