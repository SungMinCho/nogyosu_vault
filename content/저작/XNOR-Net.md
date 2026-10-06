---
title: "XNOR-Net"
type: "저작"
aliases:
  - "XNOR-Net: ImageNet Classification Using Binary Convolutional Neural Networks"
원어: "XNOR-Net: ImageNet Classification Using Binary Convolutional Neural Networks"
출처: "ECCV 2016"
책:
  - "[[신경망 양자화 강좌]]"
강의:
  - "[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|양자화강좌 9강]]"
처음: "[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지]]"
description: "라스테가리 등의 2016년 ECCV 논문으로, 이진 가중치에 스케일 α = ‖W‖₁/n(가중치 절댓값의 평균)을 붙이고 활성값까지 이진화해 합성곱을 XNOR과 popcount로 바꿨다. 메모리 32배, 계산 약 58배 절약을 보고했으며(이론값 62.27배), AlexNet 정확도는 부동소수점 56.6, BWN 56.8, XNOR-Net 44.2퍼센트다."
tags:
  - "저작"
  - "양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
라스테가리 등의 2016년 ECCV 논문으로, 이진 가중치에 스케일 α = ‖W‖₁/n(가중치 절댓값의 평균)을 붙이고 활성값까지 이진화해 합성곱을 XNOR과 popcount로 바꿨다. 메모리 32배, 계산 약 58배 절약을 보고했으며(이론값 62.27배), AlexNet 정확도는 부동소수점 56.6, BWN 56.8, XNOR-Net 44.2퍼센트다.

> [!src] 원어 *XNOR-Net: ImageNet Classification Using Binary Convolutional Neural Networks* · ECCV 2016 · 처음 놓인 곳 [[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|9강]] · [[신경망 양자화 강좌]]

## 강의에서

- **[[양자화강좌 09강 양자화를 알고 배우기, 그리고 1비트까지|9강]]** — 부호만 남기면 정확도가 크게 떨어져서 XNOR-Net은 스케일 하나를 붙인다.

## 이어지는 것

- **저자** — [[모하마드 라스테가리]]
- **부분** — [[XNOR–popcount 연산]]
- **사례** — [[이진 양자화]]
