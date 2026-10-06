---
title: "seq가 하스켈의 단위법칙을 깬다"
type: "사실"
책:
  - "[[범주론 입문]]"
강의:
  - "[[범주론 14강 결산과 반론|범주론 14강]]"
처음: "[[범주론 14강 결산과 반론]]"
description: "안드레이 바우어가 든 반례로, 하스켈의 seq 함수를 쓰면 seq undefined ()는 undefined이지만 seq (undefined . id) ()는 ()가 된다. 따라서 undefined . id와 undefined가 같지 않아 범주의 단위법칙이 깨진다."
tags:
  - "사실"
  - "범주론"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
안드레이 바우어가 든 반례로, 하스켈의 seq 함수를 쓰면 seq undefined ()는 undefined이지만 seq (undefined . id) ()는 ()가 된다. 따라서 undefined . id와 undefined가 같지 않아 범주의 단위법칙이 깨진다.

> [!src] 처음 놓인 곳 [[범주론 14강 결산과 반론|14강]] · [[범주론 입문]]

## 강의에서

- **[[범주론 14강 결산과 반론|14강]]** — seq undefined ()는 undefined인데 seq (undefined . id) ()는 ()여서 undefined . id ≠ undefined, 곧 단위법칙 f∘1 = f가 깨진다.

## 이어지는 것

- **사례** — [[Hask는 범주가 아니다]]
- **비판** — [[단위법칙]]
