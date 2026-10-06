---
title: "KVQuant"
type: "저작"
aliases:
  - "KV퀀트"
원어: "KVQuant: Towards 10 Million Context Length LLM Inference with KV Cache Quantization"
출처: "2024"
책:
  - "[[회전 양자화의 계보]]"
강의:
  - "[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|회전양자화 8강]]"
처음: "[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽]]"
description: "2024년 1월 버클리의 논문으로, 'RoPE 뒤의 키를 캐시하면 위치마다 채널 쌍이 다른 양만큼 섞인다'며 RoPE 전 키를 양자화해 캐시하고 역양자화 직후 RoPE를 즉석에서 적용했다. 3비트에서 perplexity 저하 0.1 미만, LLaMA-7B로 A100 한 장에 백만 토큰이다."
tags:
  - "저작"
  - "회전양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
2024년 1월 버클리의 논문으로, 'RoPE 뒤의 키를 캐시하면 위치마다 채널 쌍이 다른 양만큼 섞인다'며 RoPE 전 키를 양자화해 캐시하고 역양자화 직후 RoPE를 즉석에서 적용했다. 3비트에서 perplexity 저하 0.1 미만, LLaMA-7B로 A100 한 장에 백만 토큰이다.

> [!src] 원어 *KVQuant: Towards 10 Million Context Length LLM Inference with KV Cache Quantization* · 2024 · 처음 놓인 곳 [[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|8강]] · [[회전 양자화의 계보]]

## 강의에서

- **[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|8강]]** — 둘째 길은 벽 앞에 캐시하는 KVQuant의 길이다.

## 이어지는 것

- **계보** — [[RotateKV]]
- **같은 계열** — [[KV 캐시]]
