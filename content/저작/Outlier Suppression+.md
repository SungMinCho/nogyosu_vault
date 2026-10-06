---
title: "Outlier Suppression+"
type: "저작"
aliases:
  - "OS+"
원어: "Outlier Suppression+: Accurate quantization of large language models by equivalent and optimal shifting and scaling"
출처: "2023"
책:
  - "[[회전 양자화의 계보]]"
강의:
  - "[[회전양자화 03강 첫 번째 무기 대각 행렬로 난도를 옮기다|회전양자화 3강]]"
처음: "[[회전양자화 03강 첫 번째 무기 대각 행렬로 난도를 옮기다]]"
description: "웨이 등의 2023년 4월 논문으로, 이상치가 채널에 몰려 있을 뿐 아니라 채널마다 한쪽으로 치우쳐 있음(−97~−58, 5.7~43)을 보고 축척 전에 이동을 넣었다. X̃ = (X − z) ⊘ s(z_j는 채널 중점)로 하고 빼 준 z는 다음 층 바이어스 b̃ = zWᵀ + b로 흡수한다. W4A4 LLaMA-1-7B에서 14.17이다."
tags:
  - "저작"
  - "회전양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
웨이 등의 2023년 4월 논문으로, 이상치가 채널에 몰려 있을 뿐 아니라 채널마다 한쪽으로 치우쳐 있음(−97\~−58, 5.7\~43)을 보고 축척 전에 이동을 넣었다. X̃ = (X − z) ⊘ s(z\_j는 채널 중점)로 하고 빼 준 z는 다음 층 바이어스 b̃ = zWᵀ + b로 흡수한다. W4A4 LLaMA-1-7B에서 14.17이다.

> [!src] 원어 *Outlier Suppression+: Accurate quantization of large language models by equivalent and optimal shifting and scaling* · 2023 · 처음 놓인 곳 [[회전양자화 03강 첫 번째 무기 대각 행렬로 난도를 옮기다|3강]] · [[회전 양자화의 계보]]

## 강의에서

- **[[회전양자화 03강 첫 번째 무기 대각 행렬로 난도를 옮기다|3강]]** — OS+는 축척 전에 이동을 넣었다.

## 이어지는 것

- **저자** — [[시우잉 웨이]]
- **사례** — [[채널별 스케일링]]
