---
title: "ACIQ"
type: "저작"
aliases:
  - "ACIQ: 정수 양자화를 위한 해석적 클리핑"
  - "ACIQ: Analytical Clipping for Integer Quantization"
  - "Post training 4-bit quantization of convolutional networks for rapid-deployment"
원어: "ACIQ: Analytical Clipping for Integer Quantization"
출처: "NeurIPS 2019"
책:
  - "[[신경망 양자화 강좌]]"
강의:
  - "[[양자화강좌 08강 어디서 자르고 어느 쪽으로 반올림할 것인가 클리핑과 AdaRound|양자화강좌 8강]]"
처음: "[[양자화강좌 08강 어디서 자르고 어느 쪽으로 반올림할 것인가 클리핑과 AdaRound]]"
description: "바너·나흐샨·수드리의 2019년 NeurIPS 논문(초판 제목 「ACIQ: 정수 양자화를 위한 해석적 클리핑」)이다. 라플라스 입력을 ±α에서 잘라 M비트로 양자화할 때의 MSE를 과부하 2b²e^{−α/b}와 입상 α²/(3·4^M)의 두 항으로 쓰고, 미분해 최적 클리핑 2비트 2.83b, 3비트 3.89b, 4비트 5.03b를 얻는다."
tags:
  - "저작"
  - "양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
바너·나흐샨·수드리의 2019년 NeurIPS 논문(초판 제목 「ACIQ: 정수 양자화를 위한 해석적 클리핑」)이다. 라플라스 입력을 ±α에서 잘라 M비트로 양자화할 때의 MSE를 과부하 2b²e^{−α/b}와 입상 α²/(3·4^M)의 두 항으로 쓰고, 미분해 최적 클리핑 2비트 2.83b, 3비트 3.89b, 4비트 5.03b를 얻는다.

> [!src] 원어 *ACIQ: Analytical Clipping for Integer Quantization* · NeurIPS 2019 · 처음 놓인 곳 [[양자화강좌 08강 어디서 자르고 어느 쪽으로 반올림할 것인가 클리핑과 AdaRound|8강]] · [[신경망 양자화 강좌]]

## 강의에서

- **[[양자화강좌 08강 어디서 자르고 어느 쪽으로 반올림할 것인가 클리핑과 AdaRound|8강]]** — 2강의 클리핑 식을 정확히 푸는 해석적 길이 바너 등의 ACIQ다.

## 이어지는 것

- **저자** — [[론 바너]] · [[다니엘 수드리]]
- **사례** — [[클리핑]]
- **도구** — [[라플라스 분포]]
