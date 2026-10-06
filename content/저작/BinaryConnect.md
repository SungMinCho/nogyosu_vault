---
title: "BinaryConnect"
type: "저작"
aliases:
  - "BinaryConnect: Training Deep Neural Networks with binary weights during propagations"
원어: "BinaryConnect: Training Deep Neural Networks with binary weights during propagations"
출처: "2015"
책:
  - "[[신경망 양자화 강좌]]"
강의:
  - "[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|양자화강좌 9강]]"
처음: "[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지]]"
description: "쿠르바리오 등의 2015년 논문으로, 하드 시그모이드 σ(r) = min(max((r+1)/2, 0), 1)의 확률로 +1을 고르는 확률적 이진화를 썼다. 확률적 반올림을 1비트에 쓴 것이며, 하드웨어가 무작위 비트를 만들어야 해 구현이 더 어렵다. 부호만 남겨 AlexNet 정확도가 21.2퍼센트 떨어졌다."
tags:
  - "저작"
  - "양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
쿠르바리오 등의 2015년 논문으로, 하드 시그모이드 σ(r) = min(max((r+1)/2, 0), 1)의 확률로 +1을 고르는 확률적 이진화를 썼다. 확률적 반올림을 1비트에 쓴 것이며, 하드웨어가 무작위 비트를 만들어야 해 구현이 더 어렵다. 부호만 남겨 AlexNet 정확도가 21.2퍼센트 떨어졌다.

> [!src] 원어 *BinaryConnect: Training Deep Neural Networks with binary weights during propagations* · 2015 · 처음 놓인 곳 [[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|9강]] · [[신경망 양자화 강좌]]

## 강의에서

- **[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|9강]]** — 쿠르바리오 등의 BinaryConnect는 하드 시그모이드 확률로 +1을 고르는 확률적 이진화다.

## 이어지는 것

- **저자** — [[마티외 쿠르바리오]]
- **사례** — [[이진 양자화]]
- **같은 계열** — [[확률적 반올림]]
