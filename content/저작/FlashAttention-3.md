---
title: "FlashAttention-3"
type: "저작"
aliases:
  - "FA3"
원어: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision"
출처: "2024"
책:
  - "[[회전 양자화의 계보]]"
강의:
  - "[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|회전양자화 8강]]"
  - "[[회전양자화 09강 블록마다 자를 주는 시대 회전은 약인가 독인가|회전양자화 9강]]"
처음: "[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽]]"
description: "2024년 7월 트리 다오와 메타·NVIDIA 등이 호퍼에서 FP8 어텐션을 만든 논문이다. FP8 양자화 전에 Q와 K에 무작위 직교 M(±1 무작위 대각 곱하기 하다마드)을 곱해 (QM)(KM)ᵀ = QKᵀ로 이상치를 흩는 비간섭 처리를, 메모리 병목인 RoPE 커널에 레지스터 안 896번 덧셈·뺄셈으로 숨겨 추가 비용이 거의 없다. 합성 입력에서 FP"
tags:
  - "저작"
  - "회전양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
2024년 7월 트리 다오와 메타·NVIDIA 등이 호퍼에서 FP8 어텐션을 만든 논문이다. FP8 양자화 전에 Q와 K에 무작위 직교 M(±1 무작위 대각 곱하기 하다마드)을 곱해 (QM)(KM)ᵀ = QKᵀ로 이상치를 흩는 비간섭 처리를, 메모리 병목인 RoPE 커널에 레지스터 안 896번 덧셈·뺄셈으로 숨겨 추가 비용이 거의 없다. 합성 입력에서 FP8 RMSE가 2.4×10⁻²에서 9.1×10⁻³으로 2.6배 정확해졌고 비간섭 처리만 빼면 되돌아간다. 공개 인터페이스에는 하다마드 옵션이 없다.

> [!src] 원어 *FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision* · 2024 · 처음 놓인 곳 [[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|8강]] · [[회전 양자화의 계보]]

## 강의에서

- **[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|8강]]** — 첫째 길의 비용을 거의 0으로 만든 것이 FlashAttention-3다.
- 또 나오는 곳 — [[회전양자화 09강 블록마다 자를 주는 시대 회전은 약인가 독인가|9강]]

## 이어지는 것

- **저자** — [[트리 다오]]
- **사례** — [[온라인 회전]]
- **도구** — [[비간섭성]]
