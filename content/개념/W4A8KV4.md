---
title: "W4A8KV4"
type: "개념"
aliases:
  - "4비트 가중치·8비트 활성값·4비트 KV 캐시"
원어: "W4A8KV4"
책:
  - "[[신경망 양자화 강좌]]"
강의:
  - "[[양자화강좌 10강 거인의 이상치 SmoothQuant, AWQ, QServe|양자화강좌 10강]]"
처음: "[[양자화강좌 10강 거인의 이상치 SmoothQuant, AWQ, QServe]]"
description: "가중치 4비트, 활성값 8비트, KV 캐시 4비트의 양자화 설정으로 QServe가 고른 것이다. Atom·QuaRot 같은 W4A4는 정확도 손실이 크고 현재 GPU에서 효율적으로 돌지 않는다는 진단 아래 택했다."
tags:
  - "개념"
  - "양자화"
cssclasses:
  - "panseo"
  - "atom"
publish: true
---
가중치 4비트, 활성값 8비트, KV 캐시 4비트의 양자화 설정으로 QServe가 고른 것이다. Atom·QuaRot 같은 W4A4는 정확도 손실이 크고 현재 GPU에서 효율적으로 돌지 않는다는 진단 아래 택했다.

> [!src] 원어 *W4A8KV4* · 처음 놓인 곳 [[양자화강좌 10강 거인의 이상치 SmoothQuant, AWQ, QServe|10강]] · [[신경망 양자화 강좌]]

## 강의에서

- **[[양자화강좌 10강 거인의 이상치 SmoothQuant, AWQ, QServe|10강]]** — QServe는 W4A4 대신 W4A8KV4를 고른다.

## 이어지는 것

- **부분** — [[QServe]] · [[KV 캐시]]
