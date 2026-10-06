---
title: "도해 2 — 텐트 사상 T(x) = 2ReLU(x) − 4ReLU(x − ½)를…"
type: "도해"
책: "[[딥러닝의 기하학]]"
강: "1강"
description: " 텐트 사상 T(x) = 2ReLU(x) − 4ReLU(x − ½)를 k번 거치면 곧은 조각이 2k개다(붉은 점은 꺾인 점). 한 번 거칠 때마다 구간을 두 겹으로 접기 때문이다. k = 10이면 뉴런 20개로 1,024조각. 층 하나로는 적어도 1,023개의 뉴런이 든다."
tags:
  - "도해"
  - "딥러닝기하"
cssclasses:
  - "panseo-dlgeom"
  - "figure-note"
publish: true
---
![[dlgeom-f03.svg]]

![[dlgeom-f04.svg]]

![[dlgeom-f05.svg]]

[[텐트 사상]] T(x) = 2ReLU(x) − 4ReLU(x − ½)를 k번 거치면 곧은 조각이 2<sup>k</sup>개다(붉은 점은 꺾인 점). 한 번 거칠 때마다 구간을 두 겹으로 접기 때문이다. k = 10이면 뉴런 20개로 1,024조각. 층 하나로는 적어도 1,023개의 뉴런이 든다.

> [!src] 나오는 곳 [[딥러닝기하 01강 조각마다 곧다|1강 조각마다 곧다]] · [[딥러닝의 기하학]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/dlgeom.html)
