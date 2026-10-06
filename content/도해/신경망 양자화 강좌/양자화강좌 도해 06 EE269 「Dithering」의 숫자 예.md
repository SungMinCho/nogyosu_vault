---
title: "도해 6 — EE269 「Dithering」의 숫자 예"
type: "도해"
책: "[[신경망 양자화 강좌]]"
강: "4강"
description: "EE269 「Dithering」의 숫자 예. 한 칸 폭의 균일 디더 $d\\sim U(-8,8)$를 더하면 $x+d$는 92~108에 고르게 떨어지고, 경계 104를 넘는 몫(4/16)만큼 위로 반올림됩니다. 출력의 기댓값이 입력과 정확히 같아지는 선형화이고, 이것이 곧 확률적 반올림입니"
tags:
  - "도해"
  - "양자화"
cssclasses:
  - "panseo-quantcourse"
  - "figure-note"
publish: true
---
![[quantcourse-f06.svg]]

EE269 「Dithering」의 숫자 예. 한 칸 폭의 균일 디더 $d\sim U(-8,8)$를 더하면 $x+d$는 92\~108에 고르게 떨어지고, 경계 104를 넘는 몫(4/16)만큼 위로 [[최근접 반올림|반올림]]됩니다. 출력의 기댓값이 입력과 정확히 같아지는 [[디더링|선형화]]이고, 이것이 곧 [[확률적 반올림]]입니다.

> [!src] 나오는 곳 [[양자화강좌 04강 일부러 떠는 손 디더링과 확률적 반올림|4강 일부러 떠는 손: 디더링과 확률적 반올림]] · [[신경망 양자화 강좌]] · [원본 판서에서 보기](https://sungmincho.github.io/nogyosu_vault/static/panseo/quantcourse.html)
