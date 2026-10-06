---
title: "QK-norm"
type: "개념"
aliases:
  - "q_norm"
  - "k_norm"
  - "쿼리·키 정규화"
원어: "QK-norm"
책:
  - "[[회전 양자화의 계보]]"
강의:
  - "[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|회전양자화 8강]]"
처음: "[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽]]"
description: "쿼리와 키에 RMS형 정규화를 거는 장치다. Llama 4 Scout은 학습 가중치 없는 정규화를 RoPE 뒤에 걸어 회전과 교환하므로 새 벽이 아니지만, Qwen3의 q_norm·k_norm은 학습된 원소별 γ를 갖고 RoPE 전에 있어 그 자체로 벽이다."
tags:
  - "개념"
  - "회전양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
쿼리와 키에 RMS형 정규화를 거는 장치다. Llama 4 Scout은 학습 가중치 없는 정규화를 RoPE 뒤에 걸어 회전과 교환하므로 새 벽이 아니지만, Qwen3의 q\_norm·k\_norm은 학습된 원소별 γ를 갖고 RoPE 전에 있어 그 자체로 벽이다.

> [!src] 원어 *QK-norm* · 처음 놓인 곳 [[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|8강]] · [[회전 양자화의 계보]]

## 강의에서

- **[[회전양자화 08강 Q와 K, 그리고 RoPE라는 벽|8강]]** — 벽 말고도 QK-norm이 걸린다.

## 이어지는 것

- **같은 계열** — [[RMSNorm]] · [[계산 불변성]]
