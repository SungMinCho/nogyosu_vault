---
title: "Investments (보디·케인·마커스)"
type: "책"
저자:
  - "[[즈비 보디]]"
  - "[[알렉스 케인]]"
  - "[[앨런 J. 마커스]]"
원제: "Investments, 13th ed. (McGraw Hill, 2024)"
판서: "「공짜 점심은 드물다」"
aliases:
  - "Investments"
  - "《Investments》"
  - "투자론"
  - "인베스트먼트"
  - "「공짜 점심은 드물다」"
description: "Bodie·Kane·Marcus 《Investments》 13판 전 28장을 장과 절의 순서 그대로 옮긴 노교수 강의와 판서."
tags:
  - "책"
  - "투자론"
cssclasses:
  - "panseo-bkm"
  - "book"
publish: true
---
> [!sheet] 판서 「공짜 점심은 드물다」
> 보디·케인·마커스, 『Investments』 13판
>
> **[원본 판서 페이지 열기 →](https://sungmincho.github.io/nogyosu_vault/static/panseo/bkm.html)** — 판서 디자인 그대로, 강 28편과 도해 70점이 한 장에 이어진 원본

즈비 보디·알렉스 케인·앨런 J. 마커스가 쓴 투자론 교과서로, 13판은 2024년에 나왔고 본문 996쪽, 일곱 부 스물여덟 장이다. 미국 경영대학원 투자론의 표준 교재이자 CFA 수험서로 쓰인다. 시장의 정보 효율성, 위험–수익 상충, 현대 포트폴리오 이론의 세 가닥으로 묶이며 자산배분과 파생상품을 크게 다룬다.

## 읽는 법

### 이 판서를 읽는 법

서문이 꼽은 책의 세 가닥은 시장이 거의 효율적이라는 것, 더 높은 기대수익은 더 큰 위험이라는 값을 치러야 얻는다는 것, 그리고 그 위험을 재고 섞는 [[현대 포트폴리오 이론]]입니다. 제목의 '드물다'는 '없다'가 아니에요. 그 차이가 [[인베스트먼트 11강 효율적 시장 가설|11강]]의 주제이고, [[인베스트먼트 28강 투자정책과 CFA 연구소의 틀|28강]] 끝의 결산이 그 차이로 책 전체를 다시 봅니다.

도해와 본문에서 색은 한 가지 뜻으로만 씁니다.

- — **녹색** 보상 · 기대수익 · [[위험 프리미엄]]
- — **청색** 위험 · [[표준편차]] · [[베타]]
- — **청동** 시간 · [[무위험자산|무위험이자율]] · 할인 · 쿠폰
- — **주홍** 경보 · 손실 · [[꼬리위험]] · 가격 위반

절취선으로 둘러친 회색 전표가 손계산입니다. 숫자는 모두 파이썬으로 다시 계산했고, 역사 수익률은 [[케네스 프렌치]] 데이터 라이브러리(CRSP 2026년 8월판)에서 직접 셌습니다. 이 강의는 원서 본문을 옮긴 것이 아니라 목차를 지도로 삼아 각 절의 이론을 원 논문으로 되짚어 다시 짠 것이고, 예제는 전부 새로 만들었습니다. 자세한 사정은 맨 끝 꼬리말에 적었습니다.

## 차례

- **[[인베스트먼트 01강 투자의 환경|1강 투자의 환경]]**  
  《Investments》 1장 '투자의 환경'을 따라 실물자산과 금융자산을 가르고, 금융시장의 다섯 기능과 투자 과정, 경쟁 시장의 두 귀결(위험–수익 상충과 효율적 시장)을 세운 뒤, 그 모든 것이 한꺼번에 잘못 돌아간 2008–2009년 금융위기를 숫자로 되짚는다. 공짜 점심은 '없는' 것이 아니라 '드물다'는 책 전체의 주제를 처음 내건다.
- **[[인베스트먼트 02강 자산의 종류와 금융상품|2강 자산의 종류와 금융상품]]**  
  《Investments》 2장을 따라 단기 금융시장의 증서들(T-bill, CD, 기업어음, 레포, 리보와 SOFR, 머니마켓펀드), 채권, 주식, 지수, 파생상품을 차례로 손에 들어 본다. 같은 현금흐름도 어떤 자로 재느냐(분모, 날수, 복리, 가중 방식, 배당 포함 여부)에 따라 다른 숫자가 나온다는 것을 교훈으로 삼는다.
- **[[인베스트먼트 03강 증권은 어떻게 거래되는가|3강 증권은 어떻게 거래되는가]]**  
  《Investments》 3장을 따라 증권이 발행시장에서 태어나는 길(총액인수, IPO, 스팩)과 유통시장에서 손을 바꾸는 길(시장 유형, 주문, 체결 구조, 전자 거래, 거래비용)을 보고, 신용거래와 공매도의 장부를 밟아 게임스톱 공매도 잔고가 유통 주식의 100%를 넘은 산수를 푼다. 마지막으로 증권 규제의 뼈대와 내부자거래를 다룬다.
- **[[인베스트먼트 04강 뮤추얼펀드와 투자회사|4강 뮤추얼펀드와 투자회사]]**  
  《Investments》 4장을 따라 투자회사와 순자산가치(NAV)를 세우고, 단위형 투자신탁·개방형·폐쇄형·ETF의 구분, 뮤추얼펀드의 종류와 판매 방식, 보수 구조와 과세, ETF의 설정·환매 장치를 장부로 밟는다. 연 1% 보수가 30년 뒤 재산의 4분의 1이자 위험 보상의 4분의 1이라는 것을 보이고, 능동 펀드 대부분이 시장을 이기지 못하는 까닭의 상당 부분이 보수임을 확인한다.
- **[[인베스트먼트 05강 위험, 수익, 그리고 역사의 기록|5강 위험, 수익, 그리고 역사의 기록]]**  
  《Investments》 5장을 따라 보유기간수익률과 연율·실효연이율·연속복리로 수익을 같은 자에 올리고, 실질이자율과 피셔 방정식, 세금의 효과, 기대수익·표준편차·위험 프리미엄·샤프 비율을 세운다. 정규분포의 이상형에서 현실 수익이 꼬리에서 어긋나는 것을 VaR·ES·소르티노 비율로 재고, 백 년 치 자료가 주는 위험 프리미엄은 점이 아니라 ±4%p의 구간이라는 것과 장기 예측에 쓸 평균의 문제를 다룬다.
- **[[인베스트먼트 06강 위험자산에의 자본배분|6강 위험자산에의 자본배분]]**  
  《Investments》 6장을 따라 위험회피를 효용값 U = E(r) − ½Aσ²로 숫자화하고, 위험 포트폴리오 하나와 무위험자산 사이의 자본배분을 자본배분선(CAL)과 최적 비중 y\* = \[E(r\_P) − r\_f\]/(Aσ\_P²)로 푼다. 차입 금리에 따른 꺾인 CAL, 두꺼운 꼬리의 보정, 시장 지수를 쓰는 수동 전략과 자본시장선을 다룬 뒤, 부록에서 상트페테르부르크 역설과 기대효용 이론으로 보험과 복권을 함께 사는 사람의 수수께끼에 답한다.
- **[[인베스트먼트 07강 효율적 분산|7강 효율적 분산]]**  
  《Investments》 7장을 따라 위험 포트폴리오 P의 상자를 연다. 두 자산 포트폴리오의 분산 식에서 공분산이 분산 효과의 원천임을 보이고, 최소분산 포트폴리오·기회집합·효율적 경계·접점 포트폴리오를 공통 예제(S와 B)로 계산한 뒤, 마코위츠 모형과 토빈의 분리 성질, 종목 수와 위험의 관계를 세운다. 끝으로 위험 공동출자와 위험 공유를 갈라 시간 분산이라는 믿음을 새뮤얼슨과 보디의 논증으로 무너뜨린다.
- **[[인베스트먼트 08강 지수 모형|8강 지수 모형]]**  
  《Investments》 8장을 따라 3,000종목의 공분산 450만 개를 '시장이라는 바람 하나'의 가정으로 베타 3,000개와 시장 분산 하나로 접는 단일지수모형을 세운다. 프렌치 산업 자료로 증권특성선을 그어 베타는 단단하고 알파는 흐물흐물하게 추정됨을 보이고, 블룸의 조정 베타, 트레이너–블랙 절차와 정보비율로 최적 포트폴리오를 짠 뒤, 지수 모형과 표본 공분산의 표본 밖 성과로 '구조 대 자료'의 맞바꿈을 잰다.
- **[[인베스트먼트 09강 자본자산가격결정모형|9강 자본자산가격결정모형]]**  
  《Investments》 9장을 따라 모두가 같은 입력 목록으로 최적화하면 모두가 시장 포트폴리오를 들게 되고, 시장 프리미엄은 평균 위험회피도 곱하기 시장 분산이며, 각 자산은 시장 분산에 보탠 몫만큼 보상받아 증권시장선 위에 선다는 CAPM을 세운다. 제로베타·인적자본·ICAPM·소비 CAPM·유동성으로 가정을 하나씩 풀고, 롤의 비판과 프렌치 베타 5분위 자료로 실측 SML이 이론보다 납작함을 보인 뒤 업계의 쓰임을 다룬다.
- **[[인베스트먼트 10강 차익거래가격결정이론과 다요인 모형|10강 차익거래가격결정이론과 다요인 모형]]**  
  《Investments》 10장을 따라 수익률을 기대에 요인 뉴스와 고유 뉴스를 더한 것으로 보는 요인 모형에서 출발해, 공짜 점심이 없다는 차익거래 조건만으로 잘 분산된 포트폴리오의 기대수익률이 요인 베타의 선형 함수가 된다는 로스의 APT를 세운다. APT와 CAPM을 견주고, 다요인 APT와 요인 포트폴리오, 첸–롤–로스의 거시 요인, 파마–프렌치 3요인·5요인 모형과 모멘텀을 프렌치 자료로 직접 재며, 스마트 베타의 정체를 다요인의 눈으로 밝힌다.
- **[[인베스트먼트 11강 효율적 시장 가설|11강 효율적 시장 가설]]**  
  《Investments》 11장을 따라 주가의 예측 불가능성이 왜 시장이 정보를 소화했다는 증거인지(랜덤워크·마틴게일, 새뮤얼슨의 증명)를 세우고, 그로스먼–스티글리츠 모형으로 균형 가격의 정보량이 정보 비용 때문에 반드시 1보다 작음을 보인다. 효율성의 세 형태와 결합 가설, 사건 연구, 약형·준강형·강형 검정과 이상 현상(소형주, 가치, 모멘텀, 이익 발표 후 표류), 실러의 유행 가설, 데이터 스누핑과 발표 후 소멸, 거품, 애널리스트와 펀드의 성적표를 거쳐 '공짜 점심은 드물다'를 이론과 자료로 매듭짓는다.
- **[[인베스트먼트 12강 행동재무학과 기술적 분석|12강 행동재무학과 기술적 분석]]**  
  《Investments》 12장을 따라 3Com–팜의 음의 '나머지'로 시작해, 가격이 틀린 채 머무르려면 정보 처리·행동 편향(제한된 주의, 과신, 보수주의, 확증 편향, 외삽, 프레이밍, 심적 회계, 전망 이론)과 차익거래의 한계(근본 위험, 잡음 거래자 위험, 실행 비용, 모형 위험)라는 두 기둥이 함께 서야 함을 보인다. 일물일가 위반 사례와 거품, 파마의 반격을 저울에 올린 뒤, 다우 이론·이동평균·상대강도·심리 지표와 기계학습으로 기술적 분석을 검토하고 무작위 수열의 머리어깨형으로 경고한다.
- **[[인베스트먼트 13강 수익률이 남긴 증거|13강 수익률이 남긴 증거]]**  
  《Investments》 13장을 따라 CAPM을 데이터로 시험하는 2단계 검정과 파마–맥베스 회귀를 밟고, 롤의 비판과 베타 측정오차의 감쇠 편향을 거쳐 실측 SML의 납작함이 측정 탓만은 아님을 보인다. 노동소득·비상장 사업체·거시 요인과 파마–프렌치 요인의 위험 대 행동 해석, 모멘텀의 붕괴, 팩터 동물원과 다중검정 문턱(t>3)·재현 논쟁, 유동성과 자산 가격을 다룬 뒤, 주식 프리미엄 퍼즐과 무위험이자율 퍼즐을 생존 편향·재난 위험·국채 편의·근시안적 손실회피로 풀어 본다.
- **[[인베스트먼트 14강 채권의 값과 수익률|14강 채권의 값과 수익률]]**  
  《Investments》 14장을 따라 채권의 특성(국채, 경과이자, 콜·전환·풋·변동금리 조항, 국제 채권, 영구채·재난채권·물가연동채 같은 혁신)을 보고, 현금흐름을 하나하나 할인해 더하는 가격결정과 그 역인 만기수익률·콜 수익률·실현 복리수익률, 시간에 따른 가격과 세후 수익률을 계산한다. 끝으로 신용등급·정크본드·Z점수·신탁증서 조항으로 부도위험을 다루고, 약정 대 기대수익률, CDS, 그리고 부도 상관 하나가 CDO 시니어 트랑셰의 위험을 수천 배로 키우는 산수를 직접 셈한다.
- **[[인베스트먼트 15강 이자율의 기간구조|15강 이자율의 기간구조]]**  
  무이표채 가격에서 현물이자율과 선도이자율을 읽어 내는 법을 세우고, 선도이자율이 미래 단기금리의 예측인지 웃돈이 얹힌 것인지를 두고 기대가설·유동성 선호 이론·시장 분할 이론을 비교한다. 마지막에 선도이자율이 무이표채 두 장으로 오늘 붙잡을 수 있는 거래 가능한 금리임을 보인다.
- **[[인베스트먼트 16강 채권 포트폴리오 관리|16강 채권 포트폴리오 관리]]**  
  채권 가격의 금리 민감도를 재는 자로 듀레이션과 볼록성을 세우고, 그 자로 채권 포트폴리오를 지키는 소극적 관리(지수 추종·면역화·현금흐름 맞춤)와 공격하는 적극적 관리(채권 스와프·기간 분석)를 차례로 다룬다. 오렌지카운티와 실리콘밸리은행 사례로 레버리지와 부채 가정이 면역을 깨뜨리는 길을 보인다.
- **[[인베스트먼트 17강 거시경제와 산업 분석|17강 거시경제와 산업 분석]]**  
  하향식 증권 분석의 첫 두 계단으로 세계·국내 거시경제와 산업을 읽는 법을 다룬다. 수요 충격과 공급 충격을 물가·산출의 부호로 가르는 규칙으로 코로나19 이후 인플레이션을 해석하고, 경기 지표·영업레버리지·섹터 순환·산업 수명주기·포터의 다섯 힘으로 산업의 경기 민감도와 수익성을 따진다.
- **[[인베스트먼트 18강 주식의 값을 매기는 법|18강 주식의 값을 매기는 법]]**  
  비교 평가에서 출발해 내재가치와 배당할인모형을 세우고, 고든 성장모형과 PVGO 분해로 성장이 값을 보태는 것은 재투자 수익률(ROE)이 할인율보다 높을 때뿐임을 손으로 셈한다. 같은 원리를 P/E·P/B·CAPE·잉여현금흐름·시장 전체의 이익수익률로 넓혀 '성장 그 자체는 가치가 아니다'라는 한 문장으로 묶는다.
- **[[인베스트먼트 19강 장부를 읽는 법|19강 장부를 읽는 법]]**  
  가상의 빵집 노을제과의 장부를 거래 하나씩 써 가며 손익계산서·대차대조표·현금흐름표를 세우고, 이익과 현금이 갈라지는 자리를 간접법으로 보인다. ROA·ROE·EVA와 듀퐁 분해로 성과를 쪼개 읽고, 재고 평가·감가상각·인플레이션·공정가치·국제 기준이 비교를 어렵게 만드는 길과 그레이엄의 가치투자를 다룬다.
- **[[인베스트먼트 20강 옵션 시장 입문|20강 옵션 시장 입문]]**  
  탈레스의 올리브 압착기 이야기로 옵션을 '작은 값을 먼저 치르고 유리할 때만 쓰는 권리'로 세우고, 상장 옵션의 제도(OCC·미국형과 유럽형)와 만기 손익, 보호적 풋·커버드 콜·스트래들·칼라 같은 전략을 다룬다. 풋-콜 패리티를 기둥으로 전환사채·워런트·담보대출·주식 자체를 옵션으로 뜯어 읽고, 금융공학과 이색옵션으로 넓힌다.
- **[[인베스트먼트 21강 옵션의 값 매기기|21강 옵션의 값 매기기]]**  
  옵션 값을 내재가치와 시간가치로 나누고 차익거래만으로 값의 경계와 조기행사 규칙을 좁힌 뒤, 이항 나무의 복제 논증으로 확률과 기대수익률 없이 옵션 값을 세는 법과 위험중립 확률을 세운다. 그 극한인 블랙–숄즈 공식을 항별로 읽고 내재변동성·델타 헤지·포트폴리오 보험·예금보험으로 넓힌 뒤, 1987년 이후의 변동성 스마일과 이론의 수행성 논쟁으로 실증을 마무리한다.
- **[[인베스트먼트 22강 선물 시장|22강 선물 시장]]**  
  권리가 아닌 의무를 사고파는 선물을 도지마 쌀 시장과 시카고에서 출발해 세우고, 청산소·일일정산·반대매매가 약속을 지키게 하는 장치임을 장부로 보인다. 헤지와 베이시스 위험, 메탈게젤샤프트의 유동성 위험을 다룬 뒤, 현물-선물 패리티로 선물 가격을 보유비용에 묶고 기대가설·정상 백워데이션·콘탱고·CAPM으로 선물 가격과 기대 현물 가격의 관계를 따진다.
- **[[인베스트먼트 23강 선물·스와프와 위험관리|23강 선물·스와프와 위험관리]]**  
  선물이라는 장치를 실제 위험에 대어, 무위험 이자율 평가로 외환 선도 가격을 보유비용에 묶고(2008년 이후 깨진 교차통화 베이시스까지), 주가지수 선물로 합성 주식·지수 차익거래·베타 헤지를, 국채 선물로 듀레이션 헤지를 짠다. 스와프를 선도의 묶음이자 채권 두 개로 값 매기며 LIBOR에서 SOFR로의 전환과 CDS·AIG를 다루고, 원자재의 창고비와 편의수익으로 2020년 4월 20일 원유 선물의 음의 가격을 설명한다.
- **[[인베스트먼트 24강 포트폴리오 성과 평가|24강 포트폴리오 성과 평가]]**  
  돈을 번 매니저와 잘한 매니저를 가르는 세 벽 — 수익률 측정(시간가중 대 금액가중), 위험 조정(샤프·트레이너·젠센·정보비율·M²를 포트폴리오의 역할로 고르기), 실력과 운의 구별(표본 기간과 생존 편향) — 을 차례로 넘는다. 스타일 분석, 성과 조작과 모닝스타 MRAR, 콜옵션으로 본 마켓 타이밍, 성과 귀속을 다룬 뒤 브린슨의 93.6%가 어떻게 오독되었는지 바로잡는다.
- **[[인베스트먼트 25강 국제 분산투자|25강 국제 분산투자]]**  
  왜 한국 투자자는 세계의 2퍼센트 남짓인 한국 주식을 그렇게 많이 담느냐는 물음으로, 유동주식으로 센 세계 주식시장의 모양과 자국 편향을 보고, 환율이 원화 투자자에게 위험이 아니라 쿠션이었다는 실측과 약세장 상관의 착시·진실을 가른다. 정치 위험을 ICRG 점수와 러시아 편출의 절벽으로 보이고, 국제 포트폴리오의 성과를 통화·국가·종목 선택으로 쪼갠다.
- **[[인베스트먼트 26강 대체자산|26강 대체자산]]**  
  헤지펀드와 사모주식(벤처캐피털·차입매수)을 유한책임 파트너십이라는 계약의 그릇에서 읽고, 헤지펀드 전략·포터블 알파·벤처 단계 투자의 옵션성·J곡선·차입매수의 레버리지를 손으로 셈한다. 평활화·생존·백필 편향과 풋 매도형 꼬리 사건으로 대체자산의 성과를 재는 자가 휘어 있음을 보이고, '오르든 내리든 번다는 펀드는 무엇을 팔았는가'에 폭락 보험이라고 답한 뒤, 2와 20·최고수위선·워터폴의 보수 구조를 옵션으로 매긴다.
- **[[인베스트먼트 27강 능동적 포트폴리오 관리의 이론|27강 능동적 포트폴리오 관리의 이론]]**  
  남보다 조금 더 안다는 것의 값을 묻는다. 날것의 알파를 트레이너–블랙 모형에 넣으면 282% 같은 극단적 비중이 나오는 '오차 극대화'를 보이고, 추적오차 제한과 달리 과거 예측–실현 회귀로 알파를 수축하는 정밀도 조정이 예측을 기대값으로 번역함을 세운다. 블랙–리터먼 모형의 역최적화와 베이즈 결합을 손으로 밟고 두 모형이 보완재임을 보인 뒤, 능동 관리의 값이 IR²/2A로 정보비율의 제곱에 비례하며 IR ≈ IC√BR임을 다룬다.
- **[[인베스트먼트 28강 투자정책과 CFA 연구소의 틀|28강 투자정책과 CFA 연구소의 틀]]**  
  토빈의 분리 성질이 지운 세금·부채·인적자본·유동성을 다시 불러들여, CFA 연구소의 틀(목표·제약·투자정책서·하향식 자산배분·재조정)로 투자자마다 다른 좋은 포트폴리오를 정의한다. 기금 지출 규칙, 인적자본과 활강 경로, 은퇴 설계와 과세이연·자산 배치, DB 연금의 부채 헤지와 연금 보증의 풋을 손으로 셈한 뒤, 책 전체를 다섯 가닥으로 결산하고 그 가닥에 열 가지 반론을 던진다.

## 도해

- [[인베스트먼트 도해 01 금융자산은 누군가의 자산이면서 동시에 누군가의 부채다|도해 1 — 금융자산은 누군가의 자산이면서 동시에 누군가의 부채다]] · [[인베스트먼트 01강 투자의 환경|1강]]
- [[인베스트먼트 도해 02 리먼 어음 7억 8,500만 달러라는 손실의 크기는 그대로인데|도해 2 — 리먼 어음 7억 8,500만 달러라는 손실의 크기는 그대로인데]] · [[인베스트먼트 01강 투자의 환경|1강]]
- [[인베스트먼트 도해 03 같은 현금흐름(오늘 9,900달러|도해 3 — 같은 현금흐름(오늘 9,900달러]] · [[인베스트먼트 02강 자산의 종류와 금융상품|2강]]
- [[인베스트먼트 도해 04 같은 세 종목의 같은 하루|도해 4 — 같은 세 종목의 같은 하루]] · [[인베스트먼트 02강 자산의 종류와 금융상품|2강]]
- [[인베스트먼트 도해 05 시장가 주문은 값을 정하지 않으니|도해 5 — 시장가 주문은 값을 정하지 않으니]] · [[인베스트먼트 03강 증권은 어떻게 거래되는가|3강]]
- [[인베스트먼트 도해 06 빌려 판 주식을 산 사람이 그 주식을 다시 빌려주면|도해 6 — 빌려 판 주식을 산 사람이 그 주식을 다시 빌려주면]] · [[인베스트먼트 03강 증권은 어떻게 거래되는가|3강]]
- [[인베스트먼트 도해 07 보수는 해마다 자산 전체에 붙고 그 깎인 몫이 다시 불어나지 못하니|도해 7 — 보수는 해마다 자산 전체에 붙고 그 깎인 몫이 다시 불어나지 못하니]] · [[인베스트먼트 04강 뮤추얼펀드와 투자회사|4강]]
- [[인베스트먼트 도해 08 ETF가 NAV보다 비쌀 때의 설정 고리|도해 8 — ETF가 NAV보다 비쌀 때의 설정 고리]] · [[인베스트먼트 04강 뮤추얼펀드와 투자회사|4강]]
- [[인베스트먼트 도해 09 미국 주식시장 월간 초과수익(1926.07–2026.08|도해 9 — 미국 주식시장 월간 초과수익(1926.07–2026.08]] · [[인베스트먼트 05강 위험, 수익, 그리고 역사의 기록|5강]]
- [[인베스트먼트 도해 10 미국 주식시장 연간 초과수익(Mkt−RF)의 평균과 95% 신뢰구간|도해 10 — 미국 주식시장 연간 초과수익(Mkt−RF)의 평균과 95% 신뢰구간]] · [[인베스트먼트 05강 위험, 수익, 그리고 역사의 기록|5강]]
- [[인베스트먼트 도해 11 위험회피도 A = 3인 투자자의 무차별곡선(곡선 셋)과 주식 펀드…|도해 11 — 위험회피도 A = 3인 투자자의 무차별곡선(곡선 셋)과 주식 펀드…]] · [[인베스트먼트 06강 위험자산에의 자본배분|6강]]
- [[인베스트먼트 도해 12 빌려줄 때 3%, 빌릴 때 5%인 투자자의 자본배분선|도해 12 — 빌려줄 때 3%, 빌릴 때 5%인 투자자의 자본배분선]] · [[인베스트먼트 06강 위험자산에의 자본배분|6강]]
- [[인베스트먼트 도해 13 부 10만 달러인 로그효용 투자자에게 반반의 확률로 5만 달러를…|도해 13 — 부 10만 달러인 로그효용 투자자에게 반반의 확률로 5만 달러를…]] · [[인베스트먼트 06강 위험자산에의 자본배분|6강]]
- [[인베스트먼트 도해 14 상관계수에 따라 휘는 포트폴리오 기회집합|도해 14 — 상관계수에 따라 휘는 포트폴리오 기회집합]] · [[인베스트먼트 07강 효율적 분산|7강]]
- [[인베스트먼트 도해 15 무위험이자율 3%에 못을 박고 직선을 위로 돌리면 효율적 경계에…|도해 15 — 무위험이자율 3%에 못을 박고 직선을 위로 돌리면 효율적 경계에…]] · [[인베스트먼트 07강 효율적 분산|7강]]
- [[인베스트먼트 도해 16 모든 종목의 σ = 50%일 때 종목 수와 포트폴리오 위험|도해 16 — 모든 종목의 σ = 50%일 때 종목 수와 포트폴리오 위험]] · [[인베스트먼트 07강 효율적 분산|7강]]
- [[인베스트먼트 도해 17 첨단기술 산업의 증권특성선|도해 17 — 첨단기술 산업의 증권특성선]] · [[인베스트먼트 08강 지수 모형|8강]]
- [[인베스트먼트 도해 18 잔차는 시장과 상관이 0이므로|도해 18 — 잔차는 시장과 상관이 0이므로]] · [[인베스트먼트 08강 지수 모형|8강]]
- [[인베스트먼트 도해 19 매년 직전 L개월로 공분산을 추정해 10개 산업의 최소분산…|도해 19 — 매년 직전 L개월로 공분산을 추정해 10개 산업의 최소분산…]] · [[인베스트먼트 08강 지수 모형|8강]]
- [[인베스트먼트 도해 20 두 펀드 예제의 세 자산(주식 펀드 S|도해 20 — 두 펀드 예제의 세 자산(주식 펀드 S]] · [[인베스트먼트 09강 자본자산가격결정모형|9강]]
- [[인베스트먼트 도해 21 베타 순으로 나눈 포트폴리오의 실측 SML(1963.07–2026.08|도해 21 — 베타 순으로 나눈 포트폴리오의 실측 SML(1963.07–2026.08]] · [[인베스트먼트 09강 자본자산가격결정모형|9강]]
- [[인베스트먼트 도해 22 APT의 증권시장선|도해 22 — APT의 증권시장선]] · [[인베스트먼트 10강 차익거래가격결정이론과 다요인 모형|10강]]
- [[인베스트먼트 도해 23 다섯 요인과 모멘텀의 연평균 프리미엄(월평균×12)과 t값|도해 23 — 다섯 요인과 모멘텀의 연평균 프리미엄(월평균×12)과 t값]] · [[인베스트먼트 10강 차익거래가격결정이론과 다요인 모형|10강]]
- [[인베스트먼트 도해 24 그로스먼–스티글리츠 모형의 균형|도해 24 — 그로스먼–스티글리츠 모형의 균형]] · [[인베스트먼트 11강 효율적 시장 가설|11강]]
- [[인베스트먼트 도해 25 사건 연구가 읽는 세 가지 모양|도해 25 — 사건 연구가 읽는 세 가지 모양]] · [[인베스트먼트 11강 효율적 시장 가설|11강]]
- [[인베스트먼트 도해 26 두 이상 현상의 1달러 누적(로그 눈금)|도해 26 — 두 이상 현상의 1달러 누적(로그 눈금)]] · [[인베스트먼트 11강 효율적 시장 가설|11강]]
- [[인베스트먼트 도해 27 트버스키–카너먼(1992)의 가치함수 v(x) = x0.88 (이익)|도해 27 — 트버스키–카너먼(1992)의 가치함수 v(x) = x0.88 (이익)]] · [[인베스트먼트 12강 행동재무학과 기술적 분석|12강]]
- [[인베스트먼트 도해 28 로버츠(1959)의 착상을 따라 만든 무작위 주가|도해 28 — 로버츠(1959)의 착상을 따라 만든 무작위 주가]] · [[인베스트먼트 12강 행동재무학과 기술적 분석|12강]]
- [[인베스트먼트 도해 29 베타를 잘못 재면 증권시장선이 눕는다|도해 29 — 베타를 잘못 재면 증권시장선이 눕는다]] · [[인베스트먼트 13강 수익률이 남긴 증거|13강]]
- [[인베스트먼트 도해 30 모멘텀 요인(과거 승자 매수·패자 매도, 프렌치 자료)의 누적 가치|도해 30 — 모멘텀 요인(과거 승자 매수·패자 매도, 프렌치 자료)의 누적 가치]] · [[인베스트먼트 13강 수익률이 남긴 증거|13강]]
- [[인베스트먼트 도해 31 공통 채권 예제(10년, 표면이율 5%, 반기 지급)의 가격 경로|도해 31 — 공통 채권 예제(10년, 표면이율 5%, 반기 지급)의 가격 경로]] · [[인베스트먼트 14강 채권의 값과 수익률|14강]]
- [[인베스트먼트 도해 32 같은 대출 100건(각 부도확률 5%|도해 32 — 같은 대출 100건(각 부도확률 5%]] · [[인베스트먼트 14강 채권의 값과 수익률|14강]]
- [[인베스트먼트 도해 33 선도이자율은 해마다 새로 더해지는 한 해의 금리|도해 33 — 선도이자율은 해마다 새로 더해지는 한 해의 금리]] · [[인베스트먼트 15강 이자율의 기간구조|15강]]
- [[인베스트먼트 도해 34 미국 국채 10년 수익률에서 3개월 수익률을 뺀 값(FRED 일별…|도해 34 — 미국 국채 10년 수익률에서 3개월 수익률을 뺀 값(FRED 일별…]] · [[인베스트먼트 15강 이자율의 기간구조|15강]]
- [[인베스트먼트 도해 35 시장에 없는 '1년 뒤 시작하는 1년 대출'을 있는 블록 두 개로 만든다|도해 35 — 시장에 없는 '1년 뒤 시작하는 1년 대출'을 있는 블록 두 개로 만든다]] · [[인베스트먼트 15강 이자율의 기간구조|15강]]
- [[인베스트먼트 도해 36 공통 채권(10년|도해 36 — 공통 채권(10년]] · [[인베스트먼트 16강 채권 포트폴리오 관리|16강]]
- [[인베스트먼트 도해 37 듀레이션은 수익률 5%에서 곡선에 그은 접선의 기울기이고|도해 37 — 듀레이션은 수익률 5%에서 곡선에 그은 접선의 기울기이고]] · [[인베스트먼트 16강 채권 포트폴리오 관리|16강]]
- [[인베스트먼트 도해 38 면역화의 기제|도해 38 — 면역화의 기제]] · [[인베스트먼트 16강 채권 포트폴리오 관리|16강]]
- [[인베스트먼트 도해 39 수요 충격은 총수요곡선(AD)을 옮겨 균형이 총공급곡선(AS)을…|도해 39 — 수요 충격은 총수요곡선(AD)을 옮겨 균형이 총공급곡선(AS)을…]] · [[인베스트먼트 17강 거시경제와 산업 분석|17강]]
- [[인베스트먼트 도해 40 섹터 순환의 통념|도해 40 — 섹터 순환의 통념]] · [[인베스트먼트 17강 거시경제와 산업 분석|17강]]
- [[인베스트먼트 도해 41 세 회사 모두 성장하지만(9%|도해 41 — 세 회사 모두 성장하지만(9%]] · [[인베스트먼트 18강 주식의 값을 매기는 법|18강]]
- [[인베스트먼트 도해 42 할인율 10%일 때 처음 N년의 배당이 내재가치에서 차지하는 몫 1…|도해 42 — 할인율 10%일 때 처음 N년의 배당이 내재가치에서 차지하는 몫 1…]] · [[인베스트먼트 18강 주식의 값을 매기는 법|18강]]
- [[인베스트먼트 도해 43 재투자율을 올리면 PE가 오르느냐 내리느냐는 ROE와 k의 대소가…|도해 43 — 재투자율을 올리면 PE가 오르느냐 내리느냐는 ROE와 k의 대소가…]] · [[인베스트먼트 18강 주식의 값을 매기는 법|18강]]
- [[인베스트먼트 도해 44 노을제과 첫해|도해 44 — 노을제과 첫해]] · [[인베스트먼트 19강 장부를 읽는 법|19강]]
- [[인베스트먼트 도해 45 간접법은 순이익에서 출발해 '이익에는 잡혔는데 현금은 안 움직인…|도해 45 — 간접법은 순이익에서 출발해 '이익에는 잡혔는데 현금은 안 움직인…]] · [[인베스트먼트 19강 장부를 읽는 법|19강]]
- [[인베스트먼트 도해 46 세율 25%, 이자율 8%|도해 46 — 세율 25%, 이자율 8%]] · [[인베스트먼트 19강 장부를 읽는 법|19강]]
- [[인베스트먼트 도해 47 같은 주식(행사가격 100|도해 47 — 같은 주식(행사가격 100]] · [[인베스트먼트 20강 옵션 시장 입문|20강]]
- [[인베스트먼트 도해 48 풋-콜 패리티의 복제 논증|도해 48 — 풋-콜 패리티의 복제 논증]] · [[인베스트먼트 20강 옵션 시장 입문|20강]]
- [[인베스트먼트 도해 49 주식은 회사에 대한 콜이다|도해 49 — 주식은 회사에 대한 콜이다]] · [[인베스트먼트 20강 옵션 시장 입문|20강]]
- [[인베스트먼트 도해 50 공통 예제 콜(행사가격 100, 반년, 4%, 30%)의 값 곡선|도해 50 — 공통 예제 콜(행사가격 100, 반년, 4%, 30%)의 값 곡선]] · [[인베스트먼트 21강 옵션의 값 매기기|21강]]
- [[인베스트먼트 도해 51 한 단계 이항 나무의 복제|도해 51 — 한 단계 이항 나무의 복제]] · [[인베스트먼트 21강 옵션의 값 매기기|21강]]
- [[인베스트먼트 도해 52 공통 예제 콜을 단계 수 n의 이항 나무(u = exp(σ√Δt)|도해 52 — 공통 예제 콜을 단계 수 n의 이항 나무(u = exp(σ√Δt)]] · [[인베스트먼트 21강 옵션의 값 매기기|21강]]
- [[인베스트먼트 도해 53 일일정산의 현금 사슬|도해 53 — 일일정산의 현금 사슬]] · [[인베스트먼트 22강 선물 시장|22강]]
- [[인베스트먼트 도해 54 두 계좌는 날마다 서로의 거울상으로 움직인다|도해 54 — 두 계좌는 날마다 서로의 거울상으로 움직인다]] · [[인베스트먼트 22강 선물 시장|22강]]
- [[인베스트먼트 도해 55 현금-보유 차익거래|도해 55 — 현금-보유 차익거래]] · [[인베스트먼트 22강 선물 시장|22강]]
- [[인베스트먼트 도해 56 같은 두 모서리(오늘의 원화, 1년 뒤의 원화)를 잇는 두 길|도해 56 — 같은 두 모서리(오늘의 원화, 1년 뒤의 원화)를 잇는 두 길]] · [[인베스트먼트 23강 선물·스와프와 위험관리|23강]]
- [[인베스트먼트 도해 57 딜러를 가운데 둔 금리 스와프|도해 57 — 딜러를 가운데 둔 금리 스와프]] · [[인베스트먼트 23강 선물·스와프와 위험관리|23강]]
- [[인베스트먼트 도해 58 2020년 4월 17일과 20일의 WTI 정산가(CFTC 중간 보고서)|도해 58 — 2020년 4월 17일과 20일의 WTI 정산가(CFTC 중간 보고서)]] · [[인베스트먼트 23강 선물·스와프와 위험관리|23강]]
- [[인베스트먼트 도해 59 같은 두 해, 두 개의 성적표|도해 59 — 같은 두 해, 두 개의 성적표]] · [[인베스트먼트 24강 포트폴리오 성과 평가|24강]]
- [[인베스트먼트 도해 60 M²는 샤프 비율을 퍼센트로 바꾼 것이다|도해 60 — M²는 샤프 비율을 퍼센트로 바꾼 것이다]] · [[인베스트먼트 24강 포트폴리오 성과 평가|24강]]
- [[인베스트먼트 도해 61 초과수익 1.10%p를 결정의 갈래마다 나눈다|도해 61 — 초과수익 1.10%p를 결정의 갈래마다 나눈다]] · [[인베스트먼트 24강 포트폴리오 성과 평가|24강]]
- [[인베스트먼트 도해 62 같은 미국 주식|도해 62 — 같은 미국 주식]] · [[인베스트먼트 25강 국제 분산투자|25강]]
- [[인베스트먼트 도해 63 변하지 않은 상관이 변해 보이는 착시|도해 63 — 변하지 않은 상관이 변해 보이는 착시]] · [[인베스트먼트 25강 국제 분산투자|25강]]
- [[인베스트먼트 도해 64 J곡선|도해 64 — J곡선]] · [[인베스트먼트 26강 대체자산|26강]]
- [[인베스트먼트 도해 65 풋을 판 펀드는 평온한 달마다 보험료를 벌고 폭락한 달에 몇 해치를…|도해 65 — 풋을 판 펀드는 평온한 달마다 보험료를 벌고 폭락한 달에 몇 해치를…]] · [[인베스트먼트 26강 대체자산|26강]]
- [[인베스트먼트 도해 66 워터폴의 웅덩이|도해 66 — 워터폴의 웅덩이]] · [[인베스트먼트 26강 대체자산|26강]]
- [[인베스트먼트 도해 67 트레이너–블랙 비중을 세 번 계산한 결과|도해 67 — 트레이너–블랙 비중을 세 번 계산한 결과]] · [[인베스트먼트 27강 능동적 포트폴리오 관리의 이론|27강]]
- [[인베스트먼트 도해 68 시장의 말과 매니저의 말을 정밀도로 가중해 합치면|도해 68 — 시장의 말과 매니저의 말을 정밀도로 가중해 합치면]] · [[인베스트먼트 27강 능동적 포트폴리오 관리의 이론|27강]]
- [[인베스트먼트 도해 69 인적자본을 채권처럼 보면 활강 경로가 저절로 나온다|도해 69 — 인적자본을 채권처럼 보면 활강 경로가 저절로 나온다]] · [[인베스트먼트 28강 투자정책과 CFA 연구소의 틀|28강]]
- [[인베스트먼트 도해 70 블랙(1980)·테퍼(1981)의 논증|도해 70 — 블랙(1980)·테퍼(1981)의 논증]] · [[인베스트먼트 28강 투자정책과 CFA 연구소의 틀|28강]]

## 여러 강을 가로지르는 개념

[[옵션]] · [[차익거래]] · [[공매도]] · [[레버리지]] · [[무위험자산]] · [[초과수익률]] · [[표준편차]] · [[시가총액가중 지수]] · [[위험 프리미엄]] · [[베타]] · [[CAPM]] · [[선물]] · [[정규분포]] · [[알파]] · [[재무부 단기증권]] · [[현재가치]] · [[금융자산]] · [[수동적 관리]] · [[옵션 스프레드]] · [[공분산]] · [[기대수익률]] · [[샤프 비율]] · [[체계적 위험]] · [[개방형 펀드]] · [[단일지수모형]] · [[인플레이션]] · [[자산배분]] · [[헤지]] · [[효율적 시장 가설]] · [[상대적 위험회피도]] · [[신용거래]] · [[증권시장선]] · [[파생상품]] · [[행사가격]] · [[가치주]] · [[대리인 문제]] · [[보통주]] · [[시장 포트폴리오]] · [[차익거래의 한계]] · [[금리 스와프]]

## 다른 책과 이어지는 노트

이 책의 원자 노트 가운데 65개가 서가의 다른 책에도 나온다. 노트를 열면 「강의에서」가 책마다 갈라져 있다.

[[아리스토텔레스]] *(존재양식, 개체화, 재귀성, 바흐, 범주론)* · [[정규분포]] *(선형대수, 양자화강좌, 회전양자화, CAT)* · [[브누아 망델브로]] *(헤르메스, 분열증, 절멸)* · [[존 메이너드 케인스]] *(지젝, 지구)* · [[존 폰 노이만]] *(양자화강좌, 홀덤)* · [[밀턴 프리드먼]] *(바흐, 지구)* · [[첨도]] *(회전양자화, CAT)* · [[대니얼 카너먼]] *(지능과정신, 행동)* · [[로버트 실러]] *(지구)* · [[유진 파마]] *(지구)* · [[인적자본]] *(지구)* · [[제임스 토빈]] *(지구)* · [[효율적 시장 가설]] *(지구)* · [[거품]] *(지구)* · [[게임 이론과 경제 행동]] *(홀덤)* · [[결합 가설 문제]] *(지구)* · [[고든 성장모형]] *(지구)* · [[나라의 부는 종이가 아니라 실물자산에 있다]] *(지구)* · [[대차대조표]] *(지구)* · [[레버리지]] *(지구)* · [[비트코인]] *(지구)* · [[안드레이 슐라이퍼]] *(지구)* · [[존 버 윌리엄스]] *(지구)* · [[캠벨 하비]] *(지구)* · [[클리프 애스니스]] *(지구)* · [[폴 새뮤얼슨]] *(지구)* · [[2008년 금융위기]] *(지구)* · [[Chancellor on brink of second bailout for banks]] *(지구)* · [[MSCI ACWI]] *(지구)* · [[경기조정 주가수익비율]] *(지구)* · [[고용, 이자 및 화폐의 일반이론]] *(지구)* · [[공분산 행렬]] *(선형대수)* · [[국내총생산]] *(지구)* · [[금리 스와프]] *(지구)* · [[금융자산]] *(지구)* · [[높은 CAPE는 낮은 장기 수익률을 예고한다]] *(지구)* · [[듀레이션]] *(지구)* · [[마이런 고든]] *(지구)* · [[물가연동 국채]] *(지구)* · [[베이즈 정리]] *(바흐)* · [[복식부기]] *(절멸)* · [[브루노 드 피네티]] *(지능과정신)* · [[비이성적 과열]] *(지구)* · [[사토시 나카모토]] *(지구)* · [[상관계수]] *(행동)* · [[생존 편향]] *(행동)* · [[승자의 저주]] *(행동)* · [[시가총액 대 GDP 비율]] *(지구)* · [[실물자산]] *(지구)* · [[실질이자율]] *(지구)* · [[아모스 트버스키]] *(행동)* · [[위험 프리미엄]] *(지구)* · [[잔여청구권]] *(지구)* · [[정치학 (아리스토텔레스)]] *(개체화)* · [[주가수익비율]] *(지구)* · [[케인스의 미인 대회]] *(지구)* · [[탈레스]] *(헤르메스)* · [[토빈의 q]] *(지구)* · [[투자가치론]] *(지구)* · [[파생상품]] *(지구)*

## 이 책에서 뽑은 원자 노트

개념 450 · 인물 126 · 명제 99 · 저작 45 · 사건·장소 36 · 사실 25 · 인용 5 — 모두 786개.

## 판서에 대하여

### 출처와 정직성 주석

이 판서는 [[즈비 보디|Zvi Bodie]], [[알렉스 케인|Alex Kane]], [[앨런 J. 마커스|Alan J. Marcus]], *Investments*, 13th ed. (New York: McGraw Hill, 2024; 본문 996쪽)의 장·절·소절 순서를 그대로 따른 강의입니다. 확보한 원서 자료는 출판사가 공개한 13판 서문과 목차([PDF](https://info.mheducation.com/rs/128-SJW-347/images/Bodie_Preface_Investments_13e.pdf))뿐이며, 원서 본문은 대조하지 않았습니다. 따라서 각 절의 내용은 그 절이 가리키는 표준 이론을 원 논문과 공식 자료로 다시 구성한 것이고, 원서가 고른 예제·강조·수치와 다를 수 있습니다. 원서 내용으로 인용한 것은 서문의 문장, 13판 신규 사항 목록, 개념 점검 9.2의 수치(최근 95년 미국 주식 평균 [[초과수익률|초과수익]] 8.9%, [[표준편차]] 20.3%)뿐입니다.

모든 예제와 손계산은 이 강의를 위해 새로 만든 것이며 파이썬으로 다시 계산했습니다. 역사 수익률은 [Kenneth R. French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)의 CRSP 2026년 8월판 자료(시장·규모·가치·수익성·투자·[[모멘텀|모멘텀 요인]], 10개 산업, 베타 5분위 포트폴리오, 일간 요인)로 직접 계산했습니다. 원서의 1927–2021년 표와 기간이 다릅니다.

외국어 인용은 짧은 직접 인용을 빼면 모두 뜻으로 옮긴 것이며 축자 번역이 아닙니다. 조사 도중 웹 검색 한도가 소진되어 일부 사실은 위키백과 같은 2차 자료로만 확인했고, 본문에서 그런 대목은 "전해지기로는"으로 표시했습니다. 원서가 조판된 2022년 이후의 일(2023년 실리콘밸리은행, 2025년 [[U.S. 스틸 상장 폐지|U.S. Steel]] 상장 폐지, [[주문 흐름에 대한 대가|주문 내부화]] 규칙 제안의 철회 등)은 원서에 없는, 이 강의가 덧붙인 것입니다. 원서의 문장과 도표는 옮기지 않았습니다.

### 강별 출처

> [!note] 1강
> 1. Bodie, Kane, Marcus (2024). Preface. Investments, 13th ed. New York: McGraw Hill. [링크](https://info.mheducation.com/rs/128-SJW-347/images/Bodie_Preface_Investments_13e.pdf)
> 2. Grossman, Stiglitz (1980). [[정보적으로 효율적인 시장의 불가능성에 관하여|On the Impossibility of Informationally Efficient Markets]]. American Economic Review 70(3), 393–408. [링크](http://www.dklevine.com/archive/refs41908.pdf)
> 3. Sharpe (1991). [[능동적 관리의 산수|The Arithmetic of Active Management]]. Financial Analysts Journal 47(1), 7–9.
> 4. Jensen, Meckling (1976). Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure. Journal of Financial Economics 3(4), 305–360.
> 5. Friedman (1970). The Social Responsibility of Business Is to Increase Its Profits. The New York Times Magazine, September 13.
> 6. Business Roundtable (2019). Statement on the Purpose of a Corporation.
> 7. Berg, Kölbel, Rigobon (2022). Aggregate Confusion: The Divergence of ESG Ratings. Review of Finance 26(6), 1315–1344.
> 8. Pástor, Stambaugh, Taylor (2021). Sustainable Investing in Equilibrium. Journal of Financial Economics 142(2), 550–571.
> 9. Pástor, Stambaugh, Taylor (2022). Dissecting Green Returns. Journal of Financial Economics 146(2), 403–424.
> 10. U.S. Securities and Exchange Commission (2009). Complaint, SEC v. Reserve Management Company, Inc., et al. [링크](https://www.sec.gov/litigation/complaints/2009/comp21025.pdf)
> 11. [[리먼 브라더스 레버리지 30.7배|Lehman Brothers]] Holdings Inc. (2007). Fourth Quarter and Fiscal Year 2007 Results, Form 8-K Exhibit 99.1. [링크](https://www.sec.gov/Archives/edgar/data/0000806085/000110465907088588/a07-30473_33ex99d1.htm)
> 12. [[비트코인|Bitcoin]] Wiki (n.d.). Genesis block. [링크](https://en.bitcoin.it/wiki/0) 2차

> [!note] 2강
> 1. Hahn (1998). Commercial Paper. Instruments of the Money Market, ch. 9. Richmond: Federal Reserve Bank of Richmond. [링크](https://www.richmondfed.org/-/media/richmondfedorg/publications/research/special_reports/instruments_of_the_money_market/pdf/chapter_09.pdf)
> 2. Alternative Reference Rates Committee (2019). A User's Guide to [[SOFR]]. Federal Reserve Bank of New York. [링크](https://www.newyorkfed.org/medialibrary/microsites/arrc/files/2019/Guide_to_SOFR.pdf)
> 3. Financial Services Authority (2012). Barclays Fined £59.5 Million for Significant Failings in Relation to [[리보|LIBOR]] and EURIBOR. Press release, June 27. [링크](https://www.fca.org.uk/news/press-releases/barclays-fined-£595-million-significant-failings-relation-libor-and-euribor)
> 4. Financial Conduct Authority (2023). US Dollar LIBOR Panel Has Now Ceased. [링크](https://www.fca.org.uk/news/news-stories/us-dollar-libor-panel-has-now-ceased)
> 5. Federal Reserve Bank of New York (2020). Credit Sensitivity Letters (regional banks' letter of September 23, 2019). [링크](https://www.newyorkfed.org/medialibrary/media/newsevents/events/markets/2020/credit-sensitivity-letters.pdf)
> 6. Flanagan (2020). It's Fundingmental. WisdomTree blog, July 22. [링크](https://www.wisdomtree.com/us/insights/blog/its-fundingmental)
> 7. Davis Polk & Wardwell (2023). SEC Adopts Money Market Fund Reforms. Client update, July. [링크](https://www.davispolk.com/insights/client-update/sec-adopts-money-market-fund-reforms-july-2023) 2차
> 8. Investment Company Institute (2026). Money Market Fund Holdings, August 2026. [링크](https://www.ici.org/research/stats/mmfsummary/nmfp_08_26)
> 9. SIFMA (2026). 2026 Capital Markets Fact Book: Key Findings. [링크](https://www.sifma.org/news/blog/2026-capital-markets-fact-book-key-findings)
> 10. U.S. Department of the Treasury, Bureau of the Fiscal Service (n.d.). Timeline: Treasury Bills. [링크](https://savingsbond.gov/research-center/timeline/bills/)
> 11. U.S. Department of the Treasury, Bureau of the Fiscal Service (n.d.). Timeline: [[물가연동 국채|Treasury Inflation-Protected Securities]]. [링크](https://www.fedinvest.gov/research-center/timeline/tips)
> 12. Internal Revenue Service (2024). Generic Legal Advice Memorandum AM 2024-002. [링크](https://irs.gov/pub/lanoa/am-2024-002.pdf)
> 13. JPMorgan Chase (2002). JPMorgan Chase Celebrates 75th Anniversary of the ADR. Press release. [링크](https://jpmorganchaseco.gcs-web.com/news-releases/news-release-details/jpmorgan-chase-celebrates-75th-anniversary-adr/)
> 14. Fisher Investments (2024). Notes on a Japanese Record. Market commentary, February 22. [링크](https://www.fisherinvestments.com/en-us/insights/market-commentary/notes-on-a-japanese-record)

> [!note] 3강
> 1. U.S. Securities and Exchange Commission, Division of Trading and Markets (2021). Staff Report on Equity and Options Market Structure Conditions in Early 2021. [링크](https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf)
> 2. Tenev (2021). Written Testimony before the U.S. House Committee on Financial Services, February 18. [링크](https://democrats-financialservices.house.gov/UploadedFiles/HHRG-117-BA00-Wstate-TenevV-20210218.pdf)
> 3. Ritter (2026). Initial Public Offerings: Updated Statistics. University of Florida. [링크](https://site.warrington.ufl.edu/ritter/files/IPO-Statistics.pdf)
> 4. Ritter (1991). The Long-Run Performance of Initial Public Offerings. Journal of Finance 46(1), 3–27.
> 5. U.S. Securities and Exchange Commission (2024). Special Purpose Acquisition Companies, Shell Companies, and Projections. Release No. 33-11265. [링크](https://www.sec.gov/files/rules/final/2024/33-11265.pdf)
> 6. Klausner, Ohlrogge, Ruan (2022). A Sober Look at [[기업인수목적회사|SPAC]]s. Yale Journal on Regulation 39(1), 228–303. [링크](https://www.yalejreg.com/print/a-sober-look-at-spacs/)
> 7. Laughlin, Aguirre, Grundfest (2014). Information Transmission between Financial Markets in Chicago and New York. Financial Review 49(2), 283–312. [링크](https://arxiv.org/pdf/1302.5966)
> 8. U.S. Securities and Exchange Commission (2012). Report to Congress on Decimalization. [링크](https://www.sec.gov/files/decimalization-072012.pdf)
> 9. U.S. Securities and Exchange Commission (2005). Regulation NMS. Release No. 34-51808. [링크](https://www.sec.gov/rules/final/34-51808.pdf)
> 10. U.S. Securities and Exchange Commission (2022). Press Release 2022-225, December 14. [링크](https://www.sec.gov/newsroom/press-releases/2022-225)
> 11. U.S. Securities and Exchange Commission (2025). Withdrawal of Proposed Regulatory Actions. Federal Register, June 17. [링크](https://www.federalregister.gov/documents/2025/06/17/2025-11110/withdrawal-of-proposed-regulatory-actions)
> 12. U.S. Securities and Exchange Commission (2010). Press Release 2010-26, February 24. [링크](https://www.sec.gov/news/press/2010/2010-26.htm)
> 13. Jaffe (1974). Special Information and Insider Trading. Journal of Business 47(3), 410–428.
> 14. Seyhun (1986). Insiders' Profits, Costs of Trading, and Market Efficiency. Journal of Financial Economics 16(2), 189–212.

> [!note] 4강
> 1. Investment Company Institute (2026). 2026 Investment Company Fact Book. [링크](https://www.icifactbook.org/pdf/2026-factbook.pdf)
> 2. Lee, Shleifer, Thaler (1991). Investor Sentiment and the Closed-End Fund Puzzle. Journal of Finance 46(1), 75–109. [링크](https://ideas.repec.org/a/bla/jfinan/v46y1991i1p75-109.html)
> 3. Sirri, Tufano (1998). Costly Search and Mutual Fund Flows. Journal of Finance 53(5), 1589–1622.
> 4. S&P Dow Jones Indices (2026). SPIVA U.S. Mid-Year 2026. [링크](https://www.spglobal.com/spdji/en/spiva/article/spiva-us/)
> 5. U.S. Securities and Exchange Commission, Staff of DERA and Division of Trading and Markets (2015). Research Note: Equity Market Volatility on [[2015년 8월 24일 ETF 급락|August 24, 2015]]. [링크](https://www.sec.gov/marketstructure/research/equity_market_volatility.pdf)
> 6. FINRA (n.d.). Rule 2341: Investment Company Securities. [링크](https://www.finra.org/rules-guidance/rulebooks/finra-rules/2341)
> 7. U.S. Code (n.d.). 26 U.S.C. §852: Taxation of Regulated Investment Companies and Their Shareholders. [링크](https://www.law.cornell.edu/uscode/text/26/852)
> 8. U.S. Securities and Exchange Commission, Investor.gov (n.d.). Real Estate Investment Trusts ([[부동산투자신탁|REITs]]). [링크](https://www.investor.gov/introduction-investing/investing-basics/investment-products/real-estate-investment-trusts-reits)
> 9. Vanguard (n.d.). Our History. [링크](https://corporate.vanguard.com/content/corporatesite/us/en/corp/who-we-are/sets-us-apart/our-history.html)
> 10. [[SPY 신탁 종료일 2118년 1월 22일|SPDR S&P 500]] ETF Trust (2025). Prospectus, Form 485BPOS. SEC EDGAR. [링크](https://efts.sec.gov/LATEST/search-index?q=%22January%2022,%202118%22)
> 11. Wikipedia (n.d.). The Vanguard Group. [링크](https://en.wikipedia.org/wiki/The_Vanguard_Group) 2차
> 12. Wikipedia (n.d.). SPDR S&P 500 ETF Trust. [링크](https://en.wikipedia.org/wiki/SPDR_S%26P_500_ETF_Trust) 2차

> [!note] 5강
> 1. Merton (1980). On Estimating the Expected Return on the Market: An Exploratory Investigation. Journal of Financial Economics 8(4), 323–361. [링크](https://www.nber.org/system/files/working_papers/w0444/w0444.pdf)
> 2. [[브누아 망델브로|Mandelbrot]] (1963). [[어떤 투기적 가격의 변동|The Variation of Certain Speculative Prices]]. Journal of Business 36(4), 394–419. [링크](https://web.williams.edu/Mathematics/sjmiller/public_html/341Fa09/econ/Mandelbroit_VariationCertainSpeculativePrices.pdf)
> 3. Gopikrishnan 외 (1998). Inverse Cubic Law for the Distribution of Stock Price Variations. European Physical Journal B 3(2), 139–140. [링크](https://arxiv.org/abs/cond-mat/9803374)
> 4. Fisher (1896). Appreciation and Interest. Publications of the American Economic Association 11(4), 331–442. [링크](https://archive.org/details/appreciationinte00fish)
> 5. Fama (1975). Short-Term Interest Rates as Predictors of Inflation. American Economic Review 65(3), 269–282.
> 6. Humphrey (1983). The Early History of the Real/Nominal Interest Rate Relationship. Federal Reserve Bank of Richmond Economic Review 69(3), 2–10. [링크](https://www.richmondfed.org/-/media/RichmondFedOrg/publications/research/economic_review/1983/pdf/er690301.pdf)
> 7. Darby (1975). The Financial and Tax Effects of Monetary Policy on Interest Rates. Economic Inquiry 13(2), 266–276. [링크](https://ideas.repec.org/r/oup/ecinqu/v13y1975i2p266-76.html)
> 8. Artzner 외 (1999). Coherent Measures of Risk. Mathematical Finance 9(3), 203–228. [링크](https://ideas.repec.org/a/bla/mathfi/v9y1999i3p203-228.html)
> 9. Basel Committee on Banking Supervision (2016). Minimum Capital Requirements for Market Risk. [링크](https://www.bis.org/press/p160114.htm)
> 10. Sortino, Price (1994). Performance Measurement in a Downside Risk Framework. Journal of Investing 3(3).
> 11. Sharpe (1994). The Sharpe Ratio. Journal of Portfolio Management 21(1), 49–58. [링크](https://web.stanford.edu/~wfsharpe/art/sr/sr.htm)
> 12. Jacquier, Kane, Marcus (2003). Geometric or Arithmetic Mean: A Reconsideration. Financial Analysts Journal 59(6), 46–53. [링크](https://ideas.repec.org/a/taf/ufajxx/v59y2003i6p46-53.html)
> 13. Dimson, Marsh, Staunton (2025). [[세계 투자수익 연감|UBS Global Investment Returns Yearbook]] 2025. Zurich: UBS. [링크](https://www.ubs.com/global/en/media/display-page-ndp/en-20250304-global-investment-returns-yearbook-2025.html)
> 14. Damodaran (2026). Historical Returns on Stocks, Bonds and Bills: 1928–2025. NYU Stern School of Business. [링크](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html)

> [!note] 6강
> 1. Bernoulli (1738/1954). [[위험의 측정에 관한 새 이론의 시론|Exposition of a New Theory on the Measurement of Risk]], trans. L. Sommer. Econometrica 22(1), 23–36. [링크](https://cw.fel.cvut.cz/b191/_media/courses/xp36vpd/bernoulli-theorymeasurementofrisk.pdf)
> 2. [[존 폰 노이만|von Neumann]], Morgenstern (1947). [[게임 이론과 경제 행동|Theory of Games and Economic Behavior]], 2nd ed. Princeton: Princeton University Press.
> 3. Pratt (1964). Risk Aversion in the Small and in the Large. Econometrica 32(1/2), 122–136.
> 4. Arrow (1965). Aspects of the Theory of Risk-Bearing. Helsinki: Yrjö Jahnssonin Säätiö.
> 5. Friedman, Savage (1948). The Utility Analysis of Choices Involving Risk. Journal of Political Economy 56(4), 279–304.
> 6. Markowitz (1952). The Utility of Wealth. Journal of Political Economy 60(2), 151–158.
> 7. Rabin (2000). Risk Aversion and Expected-Utility Theory: A Calibration Theorem. Econometrica 68(5), 1281–1292.
> 8. Barsky 외 (1995). Preference Parameters and Behavioral Heterogeneity: An Experimental Approach in the Health and Retirement Survey. NBER Working Paper 5213. [링크](https://www.nber.org/papers/w5213)
> 9. Menger (1934). Das Unsicherheitsmoment in der Wertlehre. Zeitschrift für Nationalökonomie 5(4), 459–485.
> 10. Buffon (1777). Essai d'arithmétique morale. Histoire naturelle, Supplément IV. Paris: Imprimerie royale.
> 11. Peterson (2023). The St. Petersburg Paradox. Stanford Encyclopedia of Philosophy. [링크](https://plato.stanford.edu/entries/paradox-stpetersburg/) 2차

> [!note] 7강
> 1. Markowitz (1952). [[포트폴리오 선택|Portfolio Selection]]. Journal of Finance 7(1), 77–91. [링크](https://ideas.repec.org/a/bla/jfinan/v7y1952i1p77-91.html)
> 2. Tobin (1958). [[위험에 대한 태도로서의 유동성 선호|Liquidity Preference as Behavior Towards Risk]]. Review of Economic Studies 25(2), 65–86. [링크](https://ideas.repec.org/a/oup/restud/v25y1958i2p65-86..html)
> 3. Roy (1952). Safety First and the Holding of Assets. Econometrica 20(3), 431–449.
> 4. de Finetti (1940). Il problema dei «pieni». Giornale dell'Istituto Italiano degli Attuari 11(1), 1–88.
> 5. Markowitz (2006). De Finetti Scoops Markowitz. Journal of Investment Management 4(3), 3–18. [링크](https://joim.com/de-finetti-scoops-markowitz)
> 6. Markowitz (1999). The Early History of Portfolio Theory: 1600–1960. Financial Analysts Journal 55(4), 5–16. [링크](https://ideas.repec.org/a/taf/ufajxx/v55y1999i4p5-16.html)
> 7. Samuelson (1963). [[위험과 불확실성 — 큰 수의 오류|Risk and Uncertainty: A Fallacy of Large Numbers]]. Scientia 98, 108–113. [링크](https://www.casact.org/pubs/forum/94sforum/94sf049.pdf)
> 8. Samuelson (1969). Lifetime Portfolio Selection by Dynamic Stochastic Programming. Review of Economics and Statistics 51(3), 239–246. [링크](https://ideas.repec.org/a/tpr/restat/v51y1969i3p239-46.html)
> 9. Bodie (1995). [[장기 주식 위험에 관하여|On the Risk of Stocks in the Long Run]]. Financial Analysts Journal 51(3), 18–22. [링크](https://rpc.cfainstitute.org/research/financial-analysts-journal/1995/on-the-risk-of-stocks-in-the-long-run)
> 10. Evans, Archer (1968). Diversification and the Reduction of Dispersion: An Empirical Analysis. Journal of Finance 23(5), 761–767. [링크](https://ideas.repec.org/a/bla/jfinan/v23y1968i5p761-767.html)
> 11. Statman (1987). How Many Stocks Make a Diversified Portfolio? Journal of Financial and Quantitative Analysis 22(3), 353–363. [링크](https://ideas.repec.org/a/cup/jfinqa/v22y1987i03p353-363_01.html)
> 12. Campbell 외 (2001). Have Individual Stocks Become More Volatile? An Empirical Exploration of Idiosyncratic Risk. Journal of Finance 56(1), 1–43. [링크](https://ideas.repec.org/a/bla/jfinan/v56y2001i1p1-43.html)
> 13. Canner, Mankiw, Weil (1997). An Asset Allocation Puzzle. American Economic Review 87(1), 181–191. [링크](https://ideas.repec.org/a/aea/aecrev/v87y1997i1p181-91.html)
> 14. Samuelson (1979). Why We Should Not Make Mean Log of Wealth Big Though Years to Act Are Long. Journal of Banking & Finance 3(4), 305–307. [링크](https://ideas.repec.org/a/eee/jbfina/v3y1979i4p305-307.html)

> [!note] 8강
> 1. Sharpe (1963). [[포트폴리오 분석을 위한 단순화된 모형|A Simplified Model for Portfolio Analysis]]. Management Science 9(2), 277–293. [링크](https://ideas.repec.org/a/inm/ormnsc/v9y1963i2p277-293.html)
> 2. Treynor, Black (1973). [[포트폴리오 선택을 개선하는 데 증권분석을 쓰는 법|How to Use Security Analysis to Improve Portfolio Selection]]. Journal of Business 46(1), 66–86. [링크](https://ideas.repec.org/a/ucp/jnlbus/v46y1973i1p66-86.html)
> 3. Blume (1971). [[위험의 평가에 관하여|On the Assessment of Risk]]. Journal of Finance 26(1), 1–10. [링크](https://ideas.repec.org/a/bla/jfinan/v26y1971i1p1-10.html)
> 4. Sharpe (1990). Autobiography. In Les Prix Nobel 1990. Stockholm: Nobel Foundation. [링크](https://www.nobelprize.org/prizes/economic-sciences/1990/sharpe/biographical/)
> 5. Campbell 외 (2001). Have Individual Stocks Become More Volatile? An Empirical Exploration of Idiosyncratic Risk. Journal of Finance 56(1), 1–43. [링크](https://ideas.repec.org/a/bla/jfinan/v56y2001i1p1-43.html)
> 6. Wikipedia (n.d.). Beta (finance). [링크](https://en.wikipedia.org/wiki/Beta_%28finance%29) 2차
> 7. Wikipedia (n.d.). U.S. Steel. [링크](https://en.wikipedia.org/wiki/U.S._Steel) 2차

> [!note] 9강
> 1. Sharpe (1964). Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk. Journal of Finance 19(3), 425–442. [링크](https://doi.org/10.1111/j.1540-6261.1964.tb02865.x)
> 2. Lintner (1965). The Valuation of Risk Assets and the Selection of Risky Investments in Stock Portfolios and Capital Budgets. Review of Economics and Statistics 47(1), 13–37.
> 3. Mossin (1966). Equilibrium in a Capital Asset Market. Econometrica 34(4), 768–783. [링크](https://econometricsociety.org/publications/econometrica/1966/10/01/equilibrium-capital-asset-market)
> 4. Treynor (1999). [[위험자산의 시장가치 이론을 향하여|Toward a Theory of Market Value of Risky Assets]]. In Korajczyk (ed.), Asset Pricing and Portfolio Performance. London: Risk Books, 15–22.
> 5. Sharpe (1990). Autobiography. In Les Prix Nobel 1990. Stockholm: Nobel Foundation. [링크](https://www.nobelprize.org/prizes/economic-sciences/1990/sharpe/biographical/)
> 6. Black (1972). Capital Market Equilibrium with Restricted Borrowing. Journal of Business 45(3), 444–455.
> 7. Merton (1973). An Intertemporal [[CAPM|Capital Asset Pricing Model]]. Econometrica 41(5), 867–887. [링크](https://econometricsociety.org/publications/econometrica/1973/09/01/intertemporal-capital-asset-pricing-model)
> 8. Breeden (1979). An Intertemporal Asset Pricing Model with Stochastic Consumption and Investment Opportunities. Journal of Financial Economics 7(3), 265–296. [링크](https://www.sciencedirect.com/science/article/pii/0304405X79900163)
> 9. Amihud, Mendelson (1986). Asset Pricing and the Bid-Ask Spread. Journal of Financial Economics 17(2), 223–249. [링크](https://www.sciencedirect.com/science/article/pii/0304405X86900656)
> 10. Acharya, Pedersen (2005). Asset Pricing with Liquidity Risk. Journal of Financial Economics 77(2), 375–410. [링크](https://ideas.repec.org/a/eee/jfinec/v77y2005i2p375-410.html)
> 11. Roll (1977). A Critique of the Asset Pricing Theory's Tests Part I: On Past and Potential Testability of the Theory. Journal of Financial Economics 4(2), 129–176. [링크](https://www.sciencedirect.com/science/article/pii/0304405X77900095)
> 12. Fama, French (2004). The Capital Asset Pricing Model: Theory and Evidence. Journal of Economic Perspectives 18(3), 25–46. [링크](https://www.fsb.miamioh.edu/lij14/420n_paper_capm.pdf)
> 13. Frazzini, Pedersen (2014). [[베타에 반대로 걸기|Betting Against Beta]]. Journal of Financial Economics 111(1), 1–25. [링크](https://www.sciencedirect.com/science/article/pii/S0304405X13002675)
> 14. Graham, Harvey (2001). The Theory and Practice of Corporate Finance: Evidence from the Field. Journal of Financial Economics 60(2–3), 187–243. [링크](https://casact.org/abstract/theory-and-practice-corporate-finance-evidence-field)

> [!note] 10강
> 1. Ross (1976). The Arbitrage Theory of Capital Asset Pricing. Journal of Economic Theory 13(3), 341–360. [링크](https://ideas.repec.org/a/eee/jetheo/v13y1976i3p341-360.html)
> 2. Huberman (1982). A Simple Approach to [[차익거래가격결정이론|Arbitrage Pricing Theory]]. Journal of Economic Theory 28(1), 183–191. [링크](https://ideas.repec.org/a/eee/jetheo/v28y1982i1p183-191.html)
> 3. Shanken (1982). The Arbitrage Pricing Theory: Is It Testable? Journal of Finance 37(5), 1129–1140. [링크](https://ideas.repec.org/a/bla/jfinan/v37y1982i5p1129-40.html)
> 4. Chen, Roll, Ross (1986). [[경제의 힘과 주식시장|Economic Forces and the Stock Market]]. Journal of Business 59(3), 383–403. [링크](https://doi.org/10.1086/296344)
> 5. Fama, French (1992). The Cross-Section of Expected Stock Returns. Journal of Finance 47(2), 427–465. [링크](https://ideas.repec.org/a/bla/jfinan/v47y1992i2p427-65.html)
> 6. Fama, French (1993). [[주식과 채권 수익률의 공통 위험 요인|Common Risk Factors in the Returns on Stocks and Bonds]]. Journal of Financial Economics 33(1), 3–56. [링크](https://www.sciencedirect.com/science/article/pii/0304405X93900235)
> 7. Jegadeesh, Titman (1993). Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency. Journal of Finance 48(1), 65–91. [링크](https://ideas.repec.org/a/bla/jfinan/v48y1993i1p65-91.html)
> 8. Carhart (1997). On Persistence in Mutual Fund Performance. Journal of Finance 52(1), 57–82. [링크](https://ideas.repec.org/a/bla/jfinan/v52y1997i1p57-82.html)
> 9. Fama, French (2015). A Five-Factor Asset Pricing Model. Journal of Financial Economics 116(1), 1–22. [링크](https://ideas.repec.org/a/eee/jfinec/v116y2015i1p1-22.html)
> 10. Hou, Xue, Zhang (2015). Digesting Anomalies: An Investment Approach. Review of Financial Studies 28(3), 650–705. [링크](https://ideas.repec.org/a/oup/rfinst/v28y2015i3p650-705..html)
> 11. Fama, French (2018). Choosing Factors. Journal of Financial Economics 128(2), 234–252. [링크](https://ideas.repec.org/a/eee/jfinec/v128y2018i2p234-252.html)
> 12. American Finance Association (2017). In Memoriam: [[스티븐 로스|Stephen A. Ross]]. [링크](https://afajof.org/wp-content/uploads/files/in-memoriam/IN_MEMORIAM_ROSS.pdf)
> 13. Wikipedia (n.d.). Stephen Ross (economist). [링크](https://en.wikipedia.org/wiki/Stephen_Ross_%28economist%29) 2차
> 14. Wikipedia (n.d.). Smart [[베타|beta]]. [링크](https://en.wikipedia.org/wiki/Smart_beta) 2차

> [!note] 11강
> 1. Grossman, Stiglitz (1980). On the Impossibility of Informationally Efficient Markets. American Economic Review 70(3), 393–408. [링크](http://www.dklevine.com/archive/refs41908.pdf)
> 2. Fama (1970). Efficient Capital Markets: A Review of Theory and Empirical Work. Journal of Finance 25(2), 383–417. [링크](https://datagolf.com/static/blogs/fl_bias/fama_1970.pdf)
> 3. Samuelson (1965). Proof That Properly Anticipated Prices Fluctuate Randomly. Industrial Management Review 6(2), 41–49.
> 4. Bachelier (1900). [[투기의 이론|Théorie de la spéculation]]. Annales scientifiques de l'École Normale Supérieure 17, 21–86.
> 5. Fama 외 (1969). The Adjustment of Stock Prices to New Information. International Economic Review 10(1), 1–21.
> 6. Shiller (1981). Do Stock Prices Move Too Much to Be Justified by Subsequent Changes in Dividends? American Economic Review 71(3), 421–436. [링크](https://www.johnhcochrane.com/s/shiller.pdf)
> 7. Shiller (1984). Stock Prices and Social Dynamics. Brookings Papers on Economic Activity 1984(2), 457–497. [링크](https://www.brookings.edu/wp-content/uploads/1984/06/1984b_bpea_shiller_fischer_friedman.pdf)
> 8. De Bondt, Thaler (1985). [[주식시장은 과잉반응하는가|Does the Stock Market Overreact?]] Journal of Finance 40(3), 793–805. [링크](https://ideas.repec.org/a/bla/jfinan/v40y1985i3p793-805.html)
> 9. Jegadeesh, Titman (1993). Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency. Journal of Finance 48(1), 65–91. [링크](https://ideas.repec.org/a/bla/jfinan/v48y1993i1p65-91.html)
> 10. Banz (1981). The Relationship between Return and Market Value of Common Stocks. Journal of Financial Economics 9(1), 3–18. [링크](https://www.sciencedirect.com/science/article/pii/0304405X81900180)
> 11. Fama, French (1992). The Cross-Section of Expected Stock Returns. Journal of Finance 47(2), 427–465. [링크](https://ideas.repec.org/a/bla/jfinan/v47y1992i2p427-65.html)
> 12. McLean, Pontiff (2016). Does Academic Research Destroy Stock Return Predictability? Journal of Finance 71(1), 5–32. [링크](https://www.gwern.net/doc/economics/2016-mclean.pdf)
> 13. Barras, Scaillet, Wermers (2010). False Discoveries in Mutual Fund Performance: Measuring Luck in Estimated Alphas. Journal of Finance 65(1), 179–216. [링크](https://ideas.repec.org/a/bla/jfinan/v65y2010i1p179-216.html)
> 14. Berk, Green (2004). Mutual Fund Flows and Performance in Rational Markets. Journal of Political Economy 112(6), 1269–1295. [링크](https://ideas.repec.org/a/ucp/jpolec/v112y2004i6p1269-1295.html)

> [!note] 12강
> 1. Kahneman, Tversky (1979). Prospect Theory: An Analysis of Decision under Risk. Econometrica 47(2), 263–291. [링크](https://ideas.repec.org/a/ecm/emetrp/v47y1979i2p263-91.html)
> 2. Tversky, Kahneman (1992). Advances in Prospect Theory: Cumulative Representation of Uncertainty. Journal of Risk and Uncertainty 5(4), 297–323. [링크](https://ideas.repec.org/a/kap/jrisku/v5y1992i4p297-323.html)
> 3. Shleifer, Vishny (1997). The Limits of Arbitrage. Journal of Finance 52(1), 35–55. [링크](https://ideas.repec.org/a/bla/jfinan/v52y1997i1p35-55.html)
> 4. De Long 외 (1990). Noise Trader Risk in Financial Markets. Journal of Political Economy 98(4), 703–738. [링크](https://ideas.repec.org/a/ucp/jpolec/v98y1990i4p703-38.html)
> 5. Lamont, Thaler (2003). [[시장은 더하기 빼기를 할 줄 아는가|Can the Market Add and Subtract?]] Mispricing in Tech Stock Carve-Outs. Journal of Political Economy 111(2), 227–268. [링크](https://www.nber.org/system/files/working_papers/w8302/w8302.pdf)
> 6. Thaler (1985). Mental Accounting and Consumer Choice. Marketing Science 4(3), 199–214. [링크](https://ideas.repec.org/a/inm/ormksc/v4y1985i3p199-214.html)
> 7. Shefrin, Statman (1985). The Disposition to Sell Winners Too Early and Ride Losers Too Long: Theory and Evidence. Journal of Finance 40(3), 777–790. [링크](https://ideas.repec.org/a/bla/jfinan/v40y1985i3p777-90.html)
> 8. Odean (1998). Are Investors Reluctant to Realize Their Losses? Journal of Finance 53(5), 1775–1798. [링크](https://faculty.haas.berkeley.edu/odean/papers%20current%20versions/areinvestorsreluctant.pdf)
> 9. Barber, Odean (2000). [[매매는 당신의 부에 해롭다|Trading Is Hazardous to Your Wealth]]: The Common Stock Investment Performance of Individual Investors. Journal of Finance 55(2), 773–806. [링크](https://ideas.repec.org/a/bla/jfinan/v55y2000i2p773-806.html)
> 10. Froot, Dabora (1999). How Are Stock Prices Affected by the Location of Trade? Journal of Financial Economics 53(2), 189–216. [링크](https://ideas.repec.org/a/eee/jfinec/v53y1999i2p189-216.html)
> 11. Keynes (1936). [[고용, 이자 및 화폐의 일반이론|The General Theory of Employment, Interest and Money]], ch. 12. London: Macmillan. [링크](https://www.marxists.org/reference/subject/economics/keynes/general-theory/ch12.htm)
> 12. Fama (1998). Market Efficiency, Long-Term Returns, and Behavioral Finance. Journal of Financial Economics 49(3), 283–306. [링크](https://www.sciencedirect.com/science/article/pii/S0304405X98000269)
> 13. Brock, Lakonishok, LeBaron (1992). Simple Technical Trading Rules and the Stochastic Properties of Stock Returns. Journal of Finance 47(5), 1731–1764. [링크](https://ideas.repec.org/a/bla/jfinan/v47y1992i5p1731-64.html)
> 14. Gu, Kelly, Xiu (2020). Empirical Asset Pricing via Machine Learning. Review of Financial Studies 33(5), 2223–2273. [링크](https://www.nber.org/system/files/working_papers/w25398/w25398.pdf)

> [!note] 13강
> 1. Black, Jensen, Scholes (1972). The Capital Asset Pricing Model: Some Empirical Tests. In Jensen (ed.), Studies in the Theory of Capital Markets. New York: Praeger, 79–121.
> 2. Fama, MacBeth (1973). Risk, Return, and Equilibrium: Empirical Tests. Journal of Political Economy 81(3), 607–636. [링크](https://ideas.repec.org/a/ucp/jpolec/v81y1973i3p607-36.html)
> 3. Roll (1977). A Critique of the Asset Pricing Theory's Tests Part I: On Past and Potential Testability of the Theory. Journal of Financial Economics 4(2), 129–176. [링크](https://ideas.repec.org/a/eee/jfinec/v4y1977i2p129-176.html)
> 4. Fama, French (1992). The Cross-Section of Expected Stock Returns. Journal of Finance 47(2), 427–465. [링크](https://ideas.repec.org/a/bla/jfinan/v47y1992i2p427-65.html)
> 5. Fama, French (1996). Multifactor Explanations of Asset Pricing Anomalies. Journal of Finance 51(1), 55–84. [링크](https://ideas.repec.org/a/bla/jfinan/v51y1996i1p55-84.html)
> 6. Daniel, Moskowitz (2016). Momentum Crashes. Journal of Financial Economics 122(2), 221–247. [링크](https://www.nber.org/system/files/working_papers/w20439/w20439.pdf)
> 7. Cochrane (2011). Presidential Address: Discount Rates. Journal of Finance 66(4), 1047–1108. [링크](https://www.nber.org/system/files/working_papers/w16972/w16972.pdf)
> 8. Harvey, Liu, Zhu (2016). …and the Cross-Section of Expected Returns. Review of Financial Studies 29(1), 5–68. [링크](https://www.nber.org/papers/w20592.pdf)
> 9. Hou, Xue, Zhang (2020). [[이상 현상의 재현|Replicating Anomalies]]. Review of Financial Studies 33(5), 2019–2133. [링크](https://ideas.repec.org/a/oup/rfinst/v33y2020i5p2019-2133..html)
> 10. Jensen, Kelly, Pedersen (2023). [[금융에 재현 위기가 있는가|Is There a Replication Crisis in Finance?]] Journal of Finance 78(5), 2465–2518. [링크](https://research-api.cbs.dk/ws/portalfiles/portal/95651880/theis_ingerslev_jensen_et_al_is_there_a_replication_crisis_in_finance_publishersversion.pdf)
> 11. Pástor, Stambaugh (2003). Liquidity Risk and Expected Stock Returns. Journal of Political Economy 111(3), 642–685. [링크](https://www.nber.org/papers/w8462)
> 12. Mehra, Prescott (1985). The Equity Premium: A Puzzle. Journal of Monetary Economics 15(2), 145–161. [링크](https://psc.ky.gov/pscecf/2012-00221/rateintervention@ag.ky.gov/10252012f/Mehra_-_The_Equity_Premium_-_A_Puzzle.pdf)
> 13. Weil (1989). The Equity Premium Puzzle and the Risk-Free Rate Puzzle. Journal of Monetary Economics 24(3), 401–421. [링크](https://ideas.repec.org/a/eee/moneco/v24y1989i3p401-421.html)
> 14. Barro (2006). Rare Disasters and Asset Markets in the Twentieth Century. Quarterly Journal of Economics 121(3), 823–866. [링크](https://dash.harvard.edu/bitstream/handle/1/3208215/Barro_RareDisasters.pdf)

> [!note] 14강
> 1. Altman (1968). Financial Ratios, Discriminant Analysis and the Prediction of Corporate Bankruptcy. Journal of Finance 23(4), 589–609. [링크](https://ideas.repec.org/a/bla/jfinan/v23y1968i4p589-609.html)
> 2. Altman (2000). Predicting Financial Distress of Companies: Revisiting the Z-Score and ZETA Models. Working paper, NYU Stern School of Business. [링크](https://pages.stern.nyu.edu/~ealtman/Zscores.pdf)
> 3. Li (2000). [[부도 상관에 대하여|On Default Correlation: A Copula Function Approach]]. Journal of Fixed Income 9(4), 43–54.
> 4. Coval, Jurek, Stafford (2009). The Economics of Structured Finance. Journal of Economic Perspectives 23(1), 3–25. [링크](https://www.aeaweb.org/articles?id=10.1257/jep.23.1.3)
> 5. Shiller (2003). The Invention of Inflation-Indexed Bonds in Early America. NBER Working Paper 10183. [링크](https://www.nber.org/system/files/working_papers/w10183/w10183.pdf)
> 6. Salmon (2009). Recipe for Disaster: The Formula That Killed Wall Street. Wired 17(3).
> 7. U.S. Code (n.d.). 26 U.S.C. §243: Dividends Received by Corporations. [링크](https://www.law.cornell.edu/uscode/text/26/243)
> 8. Wikipedia (n.d.). Bond [[신용등급|credit rating]]. [링크](https://en.wikipedia.org/wiki/Bond_credit_rating) 2차
> 9. Wikipedia (n.d.). Credit default swap. [링크](https://en.wikipedia.org/wiki/Credit_default_swap) 2차
> 10. Wikipedia (n.d.). Catastrophe bond. [링크](https://en.wikipedia.org/wiki/Catastrophe_bond) 2차
> 11. Wikipedia (n.d.). Bowie Bonds. [링크](https://en.wikipedia.org/wiki/Bowie_Bonds) 2차
> 12. Wikipedia (n.d.). [[유로본드|Eurobond]] (external bond). [링크](https://en.wikipedia.org/wiki/Eurobond_%28external_bond%29) 2차
> 13. Wikipedia (n.d.). Consol (bond). [링크](https://en.wikipedia.org/wiki/Consol_%28bond%29) 2차
> 14. Wikipedia (n.d.). Perpetual bond. [링크](https://en.wikipedia.org/wiki/Perpetual_bond) 2차

> [!note] 15강
> 1. Hicks (1939). [[가치와 자본|Value and Capital]]: An Inquiry into Some Fundamental Principles of Economic Theory. Oxford: Clarendon Press. [링크](https://archive.org/details/in.ernet.dli.2015.6501)
> 2. Fisher (1896). Appreciation and Interest. Publications of the American Economic Association 11(4), 331–442. [링크](https://archive.org/details/appreciationinte00fish)
> 3. Culbertson (1957). The Term Structure of Interest Rates. Quarterly Journal of Economics 71(4), 485–517. [링크](https://academic.oup.com/qje/article-abstract/71/4/485/1885575)
> 4. Modigliani, Sutch (1966). Innovations in Interest Rate Policy. American Economic Review 56(1/2), 178–197.
> 5. Vayanos, Vila (2021). A Preferred-Habitat Model of the Term Structure of Interest Rates. Econometrica 89(1), 77–112. [링크](https://www.econometricsociety.org/publications/econometrica/2021/01/01/preferred-habitat-model-term-structure-interest-rates)
> 6. Swanson (2011). Let's Twist Again: A High-Frequency Event-Study Analysis of [[오퍼레이션 트위스트|Operation Twist]] and Its Implications for QE2. Brookings Papers on Economic Activity 2011(1), 151–188. [링크](https://www.brookings.edu/wp-content/uploads/2011/03/2011a_bpea_swanson.pdf)
> 7. Harvey (1986). Recovering Expectations of Consumption Growth from an Equilibrium Model of the Term Structure of Interest Rates. PhD dissertation, University of Chicago.
> 8. Estrella, Mishkin (1996). The Yield Curve as a Predictor of U.S. Recessions. Current Issues in Economics and Finance 2(7). Federal Reserve Bank of New York. [링크](https://www.newyorkfed.org/medialibrary/media/research/current_issues/ci2-7.html)
> 9. Campbell, Shiller (1989). Yield Spreads and Interest Rate Movements: A Bird's Eye View. NBER Working Paper 3153. [링크](https://www.nber.org/papers/w3153)
> 10. Bloomberg (2023). Economist Says His Indicator That Predicted Eight US Recessions Is Wrong This Year. Reprinted in Advisor Perspectives, January 5. [링크](https://www.advisorperspectives.com/articles/2023/01/05/economist-says-his-indicator-that-predicted-eight-us-recessions-is-wrong-this-year)
> 11. National Bureau of Economic Research (n.d.). Business Cycle Dating. [링크](https://www.nber.org/research/business-cycle-dating)
> 12. Federal Reserve Bank of St. Louis (2026). FRED: T10Y3M, T10Y2Y, DGS3MO, DGS1, DGS2, DGS5, DGS7, DGS10, DGS20, DGS30. [링크](https://fred.stlouisfed.org/graph/fredgraph.csv?id=T10Y3M)
> 13. Wikipedia (n.d.). [[존 힉스|John Hicks]]. [링크](https://en.wikipedia.org/wiki/John_Hicks) 2차

> [!note] 16강
> 1. Macaulay (1938). Some Theoretical Problems Suggested by the Movements of Interest Rates, Bond Yields and Stock Prices in the United States since 1856. New York: National Bureau of Economic Research.
> 2. Hicks (1939). Value and Capital: An Inquiry into Some Fundamental Principles of Economic Theory. Oxford: Clarendon Press. [링크](https://archive.org/details/in.ernet.dli.2015.6501)
> 3. Redington (1952). [[생명보험회사 평가 원칙의 검토|Review of the Principles of Life-Office Valuations]]. Journal of the Institute of Actuaries 78(3), 286–340. [링크](https://www.actuaries.org.uk/system/files/documents/pdf/0286-0340.pdf)
> 4. Malkiel (1962). Expectations, Bond Prices, and the Term Structure of Interest Rates. Quarterly Journal of Economics 76(2), 197–218. [링크](https://academic.oup.com/qje/article-abstract/76/2/197/1891960)
> 5. Homer, Leibowitz (1972). [[수익률 책의 속|Inside the Yield Book]]. Englewood Cliffs, NJ: Prentice-Hall.
> 6. Jorion (n.d.). Orange County Case: Using Value at Risk to Control Financial Risk. UC Irvine. [링크](https://merage.uci.edu/~jorion/oc/case.html)
> 7. Barr (2023). Review of the Federal Reserve's Supervision and Regulation of [[실리콘밸리은행 파산|Silicon Valley Bank]]. Board of Governors of the Federal Reserve System. [링크](https://www.federalreserve.gov/publications/files/svb-review-20230428.pdf)
> 8. Bank of England (2022). Financial Stability Report, December 2022. [링크](https://www.bankofengland.co.uk/financial-stability-report/2022/december-2022)
> 9. Bank of England (2022). Bank of England Announces Gilt Market Operation. News release, September 28. [링크](https://www.bankofengland.co.uk/news/2022/september/bank-of-england-announces-gilt-market-operation)
> 10. Federal Reserve Bank of St. Louis (2026). FRED: DFEDTAR, DFEDTARU, DGS5.
> 11. Wikipedia (n.d.). Collapse of Silicon Valley Bank. [링크](https://en.wikipedia.org/wiki/Collapse_of_Silicon_Valley_Bank) 2차
> 12. Wikipedia (n.d.). [[로버트 시트론|Robert Citron]]. [링크](https://en.wikipedia.org/wiki/Robert_Citron) 2차
> 13. Wikipedia (n.d.). [[프랭크 레딩턴|Frank Redington]]. [링크](https://en.wikipedia.org/wiki/Frank_Redington) 2차
> 14. Wikipedia (n.d.). [[프레더릭 매컬리|Frederick Macaulay]]. [링크](https://en.wikipedia.org/wiki/Frederick_Macaulay) 2차

> [!note] 17강
> 1. Porter (1979). [[경쟁의 힘이 전략을 빚는 방식|How Competitive Forces Shape Strategy]]. Harvard Business Review 57(2), 137–145. [링크](https://hbr.org/1979/03/how-competitive-forces-shape-strategy)
> 2. Ritter (2005). Economic Growth and Equity Returns. Pacific-Basin Finance Journal 13(5), 489–503. [링크](https://site.warrington.ufl.edu/ritter/files/2015/04/Economic-growth-and-equity-returns-2005.pdf)
> 3. Bernanke, Blanchard (2023). What Caused the U.S. Pandemic-Era Inflation? Hutchins Center Working Paper, Brookings Institution. [링크](https://www.brookings.edu/articles/what-caused-the-u-s-pandemic-era-inflation/)
> 4. Shapiro (2022). How Much Do Supply and Demand Drive Inflation? FRBSF Economic Letter, June 21. [링크](https://www.frbsf.org/research-and-insights/publications/economic-letter/2022/06/how-much-do-supply-and-demand-drive-inflation/)
> 5. Jordà 외 (2022). Why Is U.S. Inflation Higher than in Other Countries? FRBSF Economic Letter, March 28. [링크](https://www.frbsf.org/research-and-insights/publications/economic-letter/2022/03/why-is-us-inflation-higher-than-in-other-countries/)
> 6. Benigno 외 (2022). A New Barometer of Global Supply Chain Pressures. Liberty Street Economics, Federal Reserve Bank of New York, January 4. [링크](https://libertystreeteconomics.newyorkfed.org/2022/01/a-new-barometer-of-global-supply-chain-pressures/)
> 7. National Bureau of Economic Research (2021). Business Cycle Dating Committee Announcement, July 19, 2021. [링크](https://www.nber.org/news/business-cycle-dating-committee-announcement-july-19-2021)
> 8. U.S. Bureau of Labor Statistics (2022). Consumer Price Index – June 2022. News release, July 13. [링크](https://www.bls.gov/news.release/archives/cpi_07132022.htm)
> 9. Federal Reserve Bank of St. Louis (2026). FRED and ALFRED: CPIAUCNS, UNRATE, PAYEMS, A191RL1Q225SBEA, UMCSENT, DTWEXBGS, PCEDG, PCES.
> 10. The Conference Board (2026). US Leading Indicators. [링크](https://www.conference-board.org/topics/us-leading-indicators)
> 11. U.S. Census Bureau (n.d.). North American Industry Classification System (NAICS). [링크](https://www.census.gov/naics/)
> 12. Wikipedia (n.d.). CARES Act. [링크](https://en.wikipedia.org/wiki/CARES_Act) 2차
> 13. Wikipedia (n.d.). American Rescue Plan Act of 2021. [링크](https://en.wikipedia.org/wiki/American_Rescue_Plan_Act_of_2021) 2차
> 14. Wikipedia (n.d.). [[허츠 파산|Hertz]] Global Holdings. [링크](https://en.wikipedia.org/wiki/Hertz_Global_Holdings) 2차

> [!note] 18강
> 1. Williams (1938). [[투자가치론|The Theory of Investment Value]]. Cambridge, MA: Harvard University Press. [링크](https://archive.org/stream/in.ernet.dli.2015.225177/2015.225177.The-Theory_djvu.txt)
> 2. Gordon, Shapiro (1956). Capital Equipment Analysis: The Required Rate of Profit. Management Science 3(1), 102–110. [링크](https://ideas.repec.org/a/inm/ormnsc/v3y1956i1p102-110.html)
> 3. Gordon (1959). Dividends, Earnings, and Stock Prices. Review of Economics and Statistics 41(2), 99–105. [링크](https://doi.org/10.2307/1927792)
> 4. Durand (1957). Growth Stocks and the Petersburg Paradox. Journal of Finance 12(3), 348–363. [링크](https://ideas.repec.org/a/bla/jfinan/v12y1957i3p348-363.html)
> 5. Miller, Modigliani (1961). [[배당 정책, 성장, 주식의 가치평가|Dividend Policy, Growth, and the Valuation of Shares]]. Journal of Business 34(4), 411–433. [링크](https://www.proquest.com/docview/222567181)
> 6. Campbell, Shiller (1988). Stock Prices, Earnings, and Expected Dividends. Journal of Finance 43(3), 661–676.
> 7. Campbell, Shiller (2001). Valuation Ratios and the Long-Run Stock Market Outlook: An Update. NBER Working Paper 8221. [링크](https://www.nber.org/papers/w8221)
> 8. Tobin (1969). A General Equilibrium Approach to Monetary Theory. Journal of Money, Credit and Banking 1(1), 15–29. [링크](https://mail.tku.edu.tw/niehcc/paper/T%281969-jmcb%29.pdf)
> 9. Modigliani, Cohn (1979). Inflation, Rational Valuation and the Market. Financial Analysts Journal 35(2), 24–44.
> 10. Buffett (1992). Letter to Shareholders. Berkshire Hathaway Inc. Annual Report 1992. [링크](https://www.berkshirehathaway.com/letters/1992.html)
> 11. Buffett (2012). Letter to Shareholders. Berkshire Hathaway Inc. Annual Report 2012. [링크](https://www.berkshirehathaway.com/letters/2012ltr.pdf)
> 12. Apple Inc. (2012). Apple Announces Plans to Initiate Dividend and Share Repurchase Program. Press release, March 19. [링크](https://www.apple.com/newsroom/2012/03/19Apple-Announces-Plans-to-Initiate-Dividend-and-Share-Repurchase-Program/)
> 13. Shiller (2000). Irrational Exuberance. Princeton: Princeton University Press.
> 14. multpl.com (2026). Shiller PE Ratio; [[시가총액가중 지수|S&P 500]] PE Ratio, Dividend Yield and Price to Book Value. [링크](https://www.multpl.com/shiller-pe)

> [!note] 19강
> 1. Modigliani, Miller (1958). The Cost of Capital, Corporation Finance and the Theory of Investment. American Economic Review 48(3), 261–297.
> 2. Graham, Dodd (1934). [[증권분석|Security Analysis]]. New York: Whittlesey House.
> 3. Graham (1949). [[현명한 투자자|The Intelligent Investor]]. New York: Harper & Brothers.
> 4. Sloan (1996). Do Stock Prices Fully Reflect Information in Accruals and Cash Flows about Future Earnings? Accounting Review 71(3), 289–315.
> 5. Modigliani, Cohn (1979). Inflation, Rational Valuation and the Market. Financial Analysts Journal 35(2), 24–44.
> 6. Cohen, Polk, Vuolteenaho (2005). Money Illusion in the Stock Market: The Modigliani–Cohn Hypothesis. Quarterly Journal of Economics 120(2), 639–668. [링크](https://www.nber.org/papers/w11018)
> 7. Financial Accounting Standards Board (1987). Statement of Financial Accounting Standards No. 95: Statement of Cash Flows.
> 8. Financial Accounting Standards Board (2006). Statement of Financial Accounting Standards No. 157: Fair Value Measurements.
> 9. International Accounting Standards Board (2003). IAS 2 Inventories (revised December 2003). [링크](https://www.iasplus.com/en/standards/ias/ias2)
> 10. Wikipedia (n.d.). DuPont analysis. [링크](https://en.wikipedia.org/wiki/DuPont_analysis) 2차
> 11. Wikipedia (n.d.). [[도널드슨 브라운|Donaldson Brown]]. [링크](https://en.wikipedia.org/wiki/Donaldson_Brown) 2차
> 12. Wikipedia (n.d.). Dowlais Ironworks. [링크](https://en.wikipedia.org/wiki/Dowlais_Ironworks) 2차
> 13. Wikipedia (n.d.). [[엔론 사태|Enron]] scandal. [링크](https://en.wikipedia.org/wiki/Enron_scandal) 2차
> 14. Wikipedia (n.d.). [[벤저민 그레이엄|Benjamin Graham]]. [링크](https://en.wikipedia.org/wiki/Benjamin_Graham) 2차

> [!note] 20강
> 1. Stoll (1969). The Relationship between Put and Call Option Prices. Journal of Finance 24(5), 801–824. [링크](https://ideas.repec.org/a/bla/jfinan/v24y1969i5p801-24.html)
> 2. Black, Scholes (1973). [[옵션과 회사 부채의 가격결정|The Pricing of Options and Corporate Liabilities]]. Journal of Political Economy 81(3), 637–654. [링크](https://www.journals.uchicago.edu/doi/10.1086/260062)
> 3. Merton (1973). [[합리적 옵션 가격결정 이론|Theory of Rational Option Pricing]]. Bell Journal of Economics and Management Science 4(1), 141–183. [링크](https://ideas.repec.org/a/rje/bellje/v4y1973ispringp141-183.html)
> 4. Merton (1974). On the Pricing of Corporate Debt: The Risk Structure of Interest Rates. Journal of Finance 29(2), 449–470. [링크](https://ideas.repec.org/a/bla/jfinan/v29y1974i2p449-70.html)
> 5. [[아리스토텔레스|Aristotle]] (1885). Politics, trans. B. Jowett, Book I, ch. 11 (1259a). Oxford: Clarendon Press. [링크](https://classics.mit.edu/Aristotle/politics.1.one.html)
> 6. Garber (1989). [[튤립 광기|Tulipmania]]. Journal of Political Economy 97(3), 535–560. [링크](https://ms.mcmaster.ca/~grasselli/Garber89.pdf)
> 7. Thompson (2007). The Tulipmania: Fact or Artifact? Public Choice 130(1–2), 99–114. [링크](https://ideas.repec.org/a/kap/pubcho/v130y2007i1p99-114.html)
> 8. Goldgar (2007). Tulipmania: Money, Honor, and Knowledge in the Dutch Golden Age. Chicago: University of Chicago Press.
> 9. U.S. Securities and Exchange Commission (1978). Special Study of the Options Markets. [링크](https://www.sechistorical.org/collection/papers/1970/1978_OptMkt_04_Chapter_I_1.pdf)
> 10. [[시카고옵션거래소|Chicago Board Options Exchange]] (2013). Annual Report 2012. [링크](https://cdn.cboe.com/resources/annual_reports/annualreport2012.pdf)
> 11. Barone, Olivieri (n.d.). Derivatives and Usury. Annali del Dipartimento MEMOTEF, Sapienza Università di Roma. [링크](https://rosa.uniroma1.it/rosa02/annali_memotef/article/download/662/559)
> 12. Lamont, Thaler (2003). Can the Market Add and Subtract? Mispricing in Tech Stock Carve-Outs. Journal of Political Economy 111(2), 227–268. [링크](https://ideas.repec.org/a/ucp/jpolec/v111y2003i2p227-268.html)
> 13. Wikipedia (n.d.). Asian option. [링크](https://en.wikipedia.org/wiki/Asian_option) 2차
> 14. Wikipedia (n.d.). [[옵션청산회사|Options Clearing Corporation]]. [링크](https://en.wikipedia.org/wiki/Options_Clearing_Corporation) 2차

> [!note] 21강
> 1. Black, Scholes (1973). The Pricing of Options and Corporate Liabilities. Journal of Political Economy 81(3), 637–654. [링크](https://www.journals.uchicago.edu/doi/10.1086/260062)
> 2. Merton (1973). Theory of Rational Option Pricing. Bell Journal of Economics and Management Science 4(1), 141–183. [링크](https://ideas.repec.org/a/rje/bellje/v4y1973ispringp141-183.html)
> 3. Cox, Ross, Rubinstein (1979). Option Pricing: A Simplified Approach. Journal of Financial Economics 7(3), 229–263. [링크](https://ideas.repec.org/a/eee/jfinec/v7y1979i3p229-263.html)
> 4. Rendleman, Bartter (1979). Two-State Option Pricing. Journal of Finance 34(5), 1093–1110. [링크](https://ideas.repec.org/a/bla/jfinan/v34y1979i5p1093-1110.html)
> 5. Merton (1977). An Analytic Derivation of the Cost of Deposit Insurance and Loan Guarantees. Journal of Banking & Finance 1(1), 3–11. [링크](https://ideas.repec.org/a/eee/jbfina/v1y1977i1p3-11.html)
> 6. Black, Scholes (1972). The Valuation of Option Contracts and a Test of Market Efficiency. Journal of Finance 27(2), 399–417. [링크](https://ideas.repec.org/a/bla/jfinan/v27y1972i2p399-417.html)
> 7. Rubinstein (1985). Nonparametric Tests of Alternative Option Pricing Models Using All Reported Trades and Quotes on the 30 Most Active CBOE Option Classes from August 23, 1976 through August 31, 1978. Journal of Finance 40(2), 455–480. [링크](https://ideas.repec.org/a/bla/jfinan/v40y1985i2p455-80.html)
> 8. Rubinstein (1994). Implied Binomial Trees. Journal of Finance 49(3), 771–818. [링크](https://ideas.repec.org/a/bla/jfinan/v49y1994i3p771-818.html)
> 9. MacKenzie, Millo (2003). Constructing a Market, Performing Theory: The Historical Sociology of a Financial Derivatives Exchange. American Journal of Sociology 109(1), 107–145. [링크](https://www.journals.uchicago.edu/doi/10.1086/374404)
> 10. Haug, Taleb (2011). Option Traders Use (Very) Sophisticated Heuristics, Never the Black–Scholes–Merton Formula. Journal of Economic Behavior & Organization 77(2), 97–106. [링크](https://ideas.repec.org/a/eee/jeborg/v77y2011i2p97-106.html)
> 11. Thorp (2003). A Perspective on Quantitative Finance: Models for Beating the Market. Quantitative Finance Review 2003. [링크](http://www.edwardothorp.com/wp-content/uploads/2016/11/thorpwilmottqfinrev2003.pdf)
> 12. Presidential Task Force on Market Mechanisms (1988). Report of the Presidential Task Force on Market Mechanisms. Washington, DC: U.S. Government Printing Office. [링크](https://archive.org/stream/reportofpresiden01unit/reportofpresiden01unit_djvu.txt)
> 13. Royal Swedish Academy of Sciences (1997). Press Release: The Prize in Economic Sciences 1997. [링크](https://www.nobelprize.org/prizes/economic-sciences/1997/press-release/)
> 14. Royal Swedish Academy of Sciences (1997). Advanced Information on the Prize in Economic Sciences 1997. [링크](https://www.nobelprize.org/prizes/economic-sciences/1997/advanced-information/)

> [!note] 22강
> 1. Keynes (1930). [[화폐론|A Treatise on Money]], Vol. II: The Applied Theory of Money. London: Macmillan.
> 2. Keynes (1923). Some Aspects of Commodity Markets. Manchester Guardian Commercial, European Reconstruction Series, Section 13.
> 3. Hicks (1939). Value and Capital: An Inquiry into Some Fundamental Principles of Economic Theory. Oxford: Clarendon Press. [링크](https://archive.org/details/in.ernet.dli.2015.6501)
> 4. Cox, Ingersoll, Ross (1981). The Relation between Forward Prices and Futures Prices. Journal of Financial Economics 9(4), 321–346. [링크](https://ideas.repec.org/r/eee/jfinec/v9y1981i4p321-346.html)
> 5. Gorton, Rouwenhorst (2006). Facts and Fantasies about Commodity Futures. Financial Analysts Journal 62(2), 47–68. [링크](https://www.nber.org/papers/w10595.pdf)
> 6. Bhardwaj, Gorton, Rouwenhorst (2015). Facts and Fantasies about Commodity Futures Ten Years Later. NBER Working Paper 21243. [링크](https://www.nber.org/papers/w21243)
> 7. Schaede (1989). Forwards and Futures in Tokugawa-Period Japan: A New Perspective on the Dōjima Rice Market. Journal of Banking & Finance 13(4–5), 487–513. [링크](https://sfu.ca/~poitras/JBF_Tokugawa-Japan_89.pdf)
> 8. Culp, Miller (1995). [[메탈게젤샤프트 사태|Metallgesellschaft]] and the Economics of Synthetic Storage. Journal of Applied Corporate Finance 7(4).
> 9. Edwards, Canter (1995). The Collapse of Metallgesellschaft: Unhedgeable Risks, Poor Hedging Strategy, or Just Bad Luck? Journal of Futures Markets 15(3).
> 10. Mello, Parsons (1995). Maturity Structure of a Hedge Matters: Lessons from the Metallgesellschaft Debacle. Journal of Applied Corporate Finance 8(1).
> 11. U.S. [[상품선물거래위원회|Commodity Futures Trading Commission]] (n.d.). US Futures Trading and Regulation Before the Creation of the CFTC. [링크](https://www.cftc.gov/About/HistoryoftheCFTC/history_precftc.html)
> 12. U.S. Commodity Futures Trading Commission (2020). Interim Staff Report: Trading in NYMEX WTI Crude Oil Futures Contract Leading up to, on, and around April 20, 2020. [링크](https://cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download)
> 13. Accominotti, Chambers (2016). If You're So Smart: [[존 메이너드 케인스|John Maynard Keynes]] and Currency Speculation in the Interwar Years. Journal of Economic History 76(2), 342–386.
> 14. Foresti, Sanfilippo (2017). Keynes's Personal Investments in the Wheat Futures Markets, 1925–1935. History of Economic Ideas 25(2). [링크](https://research.gold.ac.uk/26915)

> [!note] 23강
> 1. Du, Tepper, Verdelhan (2018). Deviations from Covered Interest Rate Parity. Journal of Finance 73(3), 915–957. [링크](https://www.nber.org/system/files/working_papers/w23170/w23170.pdf)
> 2. Borio 외 (2016). Covered Interest Parity Lost: Understanding the Cross-Currency Basis. BIS Quarterly Review, September. [링크](https://www.bis.org/publ/qtrpdf/r_qt1609e.htm)
> 3. Keynes (1923). [[화폐개혁론|A Tract on Monetary Reform]]. London: Macmillan.
> 4. Kaldor (1939). Speculation and Economic Stability. Review of Economic Studies 7(1), 1–27.
> 5. Working (1949). The Theory of Price of Storage. American Economic Review 39(6), 1254–1262.
> 6. Keynes (1930). A Treatise on Money, Vol. II: The Applied Theory of Money. London: Macmillan.
> 7. U.S. Commodity Futures Trading Commission (2020). Interim Staff Report: Trading in NYMEX WTI Crude Oil Futures Contract Leading up to, on, and around April 20, 2020. [링크](https://cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download)
> 8. CME Group (2020). Clearing Advisory 20-171, April 21. [링크](https://cmegroup.com/notices/clearing/2020/04/Chadv20-171.html)
> 9. Financial Conduct Authority (2021). Announcements on the End of LIBOR. Press release, March 5. [링크](https://www.fca.org.uk/news/press-releases/announcements-end-libor)
> 10. Alternative Reference Rates Committee (n.d.). SOFR Transition. Federal Reserve Bank of New York. [링크](https://www.newyorkfed.org/arrc/sofr-transition)
> 11. U.S. Code (n.d.). 12 U.S.C. §5802: Definitions (Adjustable Interest Rate (LIBOR) Act). [링크](https://www.law.cornell.edu/uscode/text/12/5802)
> 12. Bank for International Settlements (2024). OTC Derivatives Statistics at End-June 2024. [링크](https://www.bis.org/publ/otc_hy2411.htm)
> 13. Wikipedia (n.d.). American International Group. [링크](https://en.wikipedia.org/wiki/American_International_Group) 2차
> 14. Wikipedia (n.d.). Cross-[[통화 스와프|currency swap]]. [링크](https://en.wikipedia.org/wiki/Cross-currency_swap) 2차

> [!note] 24강
> 1. Sharpe (1966). Mutual Fund Performance. Journal of Business 39(1), 119–138.
> 2. Treynor (1965). How to Rate Management of Investment Funds. Harvard Business Review 43(1), 63–75.
> 3. Modigliani, Modigliani (1997). Risk-Adjusted Performance. Journal of Portfolio Management 23(2), 45–54.
> 4. Sharpe (1994). The Sharpe Ratio. Journal of Portfolio Management 21(1), 49–58. [링크](https://web.stanford.edu/~wfsharpe/art/sr/sr.htm)
> 5. Brinson, Hood, Beebower (1986). Determinants of Portfolio Performance. Financial Analysts Journal 42(4), 39–44. [링크](https://indexacapital.com/bundles/unaiadvisor/docs/papers/1986-Brinson-Determinants-of-Portfolio-Performance-I.pdf)
> 6. Ibbotson, Kaplan (2000). Does Asset Allocation Policy Explain 40, 90, or 100 Percent of Performance? Financial Analysts Journal 56(1), 26–33. [링크](https://rpc.cfainstitute.org/research/financial-analysts-journal/2000/does-asset-allocation-policy-explain-40-90-or-100-percent-of-performance)
> 7. Sharpe (1992). Asset Allocation: Management Style and Performance Measurement. Journal of Portfolio Management 18(2), 7–19. [링크](https://web.stanford.edu/~wfsharpe/art/sa/sa.htm)
> 8. Treynor, Mazuy (1966). Can Mutual Funds Outguess the Market? Harvard Business Review 44(4), 131–136.
> 9. Merton (1981). On Market Timing and Investment Performance. I. An Equilibrium Theory of Value for Market Forecasts. Journal of Business 54(3), 363–406. [링크](https://ideas.repec.org/a/ucp/jnlbus/v54y1981i3p363-406.html)
> 10. Henriksson, Merton (1981). On Market Timing and Investment Performance. II. Statistical Procedures for Evaluating Forecasting Skills. Journal of Business 54(4), 513–533. [링크](https://ideas.repec.org/a/ucp/jnlbus/v54y1981i4p513-33.html)
> 11. Goetzmann 외 (2007). Portfolio Performance Manipulation and Manipulation-Proof Performance Measures. Review of Financial Studies 20(5), 1503–1546. [링크](https://ideas.repec.org/a/oup/rfinst/v20y2007i5p1503-1546.html)
> 12. Dichev (2007). What Are Stock Investors' Actual Historical Returns? Evidence from Dollar-Weighted Returns. American Economic Review 97(1), 386–401. [링크](https://ideas.repec.org/a/aea/aecrev/v97y2007i1p386-401.html)
> 13. Morningstar (2016). The Morningstar Rating for Funds: Methodology Document. [링크](https://s21.q4cdn.com/198919461/files/doc_downloads/othe_disclosure_materials/MorningstarRatingforFunds.pdf)
> 14. Nuttall (2000). The Importance of Asset Allocation. University of Western Ontario. [링크](https://publish.uwo.ca/~jnuttall/asset.html)

> [!note] 25강
> 1. Solnik (1974). Why Not Diversify Internationally Rather Than Domestically? Financial Analysts Journal 30(4). [링크](https://rpc.cfainstitute.org/research/financial-analysts-journal/1995/why-not-diversify-internationally-rather-than-domestically)
> 2. French, Poterba (1991). [[투자자 분산과 국제 주식시장|Investor Diversification and International Equity Markets]]. American Economic Review 81(2), 222–226. [링크](https://ideas.repec.org/a/aea/aecrev/v81y1991i2p222-26.html)
> 3. Longin, Solnik (2001). [[국제 주식시장의 극단 상관|Extreme Correlation of International Equity Markets]]. Journal of Finance 56(2), 649–676. [링크](https://ideas.repec.org/a/bla/jfinan/v56y2001i2p649-676.html)
> 4. Forbes, Rigobon (2002). No Contagion, Only Interdependence: Measuring Stock Market Comovements. Journal of Finance 57(5), 2223–2261. [링크](https://ideas.repec.org/a/bla/jfinan/v57y2002i5p2223-2261.html)
> 5. MSCI (2026). [[MSCI ACWI]] Index (USD) Factsheet, August 31, 2026. [링크](https://www.msci.com/documents/10199/a71b65b5-d0ea-4b5c-a709-24b1213bc3c5)
> 6. MSCI (2026). MSCI Emerging Markets Index (USD) Factsheet, August 31, 2026. [링크](https://www.msci.com/documents/10199/c0db0a48-01f2-4ba9-ad01-226fd5678111)
> 7. MSCI (2022). MSCI to Reclassify the MSCI Russia Indexes from Emerging Markets to Standalone Markets Status. Press release, March 2. [링크](https://ir.msci.com/news-releases/news-release-details/msci-reclassify-msci-russia-indexes-emerging-markets-standalone)
> 8. PRS Group (n.d.). [[국제국가위험지침|International Country Risk Guide]] (ICRG). [링크](https://www.prsgroup.com/explore-our-products/icrg/)
> 9. World Bank (2026). World Development Indicators: CM.MKT.LCAP.CD, NY.GDP.MKTP.CD. [링크](https://api.worldbank.org/v2/country/KOR;WLD;USA;JPN;CHN;TWN/indicator/CM.MKT.LCAP.CD?format=json&date=2015:2025&per_page=100)
> 10. Board of Governors of the Federal Reserve System (2026). H.10 Foreign Exchange Rates: South Korean Won to U.S. Dollar (EXKOUS), via FRED. [링크](https://fred.stlouisfed.org/data/EXKOUS.txt)
> 11. Wikipedia (n.d.). National Pension Service. [링크](https://en.wikipedia.org/wiki/National_Pension_Service) 2차

> [!note] 26강
> 1. Loomis (1966). The Jones Nobody Keeps Up With. Fortune, April. [링크](https://fortune.com/2015/12/29/hedge-funds-fortune-1966/)
> 2. Getmansky, Lo, Makarov (2004). An Econometric Model of Serial Correlation and Illiquidity in Hedge Fund Returns. Journal of Financial Economics 74(3), 529–609. [링크](https://ideas.repec.org/a/eee/jfinec/v74y2004i3p529-609.html)
> 3. Lo (2001). Risk Management for Hedge Funds: Introduction and Overview. Financial Analysts Journal 57(6), 16–33. [링크](https://ideas.repec.org/a/taf/ufajxx/v57y2001i6p16-33.html)
> 4. Malkiel, Saha (2005). Hedge Funds: Risk and Return. Financial Analysts Journal 61(6), 80–88. [링크](https://swh.princeton.edu/~ceps/workingpapers/104malkiel.pdf)
> 5. Fung, Hsieh (2001). The Risk in Hedge Fund Strategies: Theory and Evidence from Trend Followers. Review of Financial Studies 14(2), 313–341. [링크](https://ideas.repec.org/a/oup/rfinst/v14y2001i2p313-41.html)
> 6. Goetzmann, Ingersoll, Ross (2003). High-Water Marks and Hedge Fund Management Contracts. Journal of Finance 58(4), 1685–1718. [링크](https://ideas.repec.org/a/bla/jfinan/v58y2003i4p1685-1718.html)
> 7. Kaplan, Schoar (2005). Private Equity Performance: Returns, Persistence, and Capital Flows. Journal of Finance 60(4), 1791–1823. [링크](https://ideas.repec.org/a/bla/jfinan/v60y2005i4p1791-1823.html)
> 8. Harris, Jenkinson, Kaplan (2014). Private Equity Performance: What Do We Know? Journal of Finance 69(5), 1851–1882. [링크](https://www.nber.org/papers/w17874)
> 9. Kortum, Lerner (2000). Assessing the Contribution of Venture Capital to Innovation. RAND Journal of Economics 31(4), 674–692. [링크](https://ideas.repec.org/a/rje/randje/v31y2000iwinterp674-692.html)
> 10. Lerner, Sorensen, Strömberg (2011). Private Equity and Long-Run Investment: The Case of Innovation. Journal of Finance 66(2), 445–477. [링크](https://corpgov.law.harvard.edu/2010/10/01/private-equity-and-long-run-investment)
> 11. Gompers (1996). Grandstanding in the Venture Capital Industry. Journal of Financial Economics 42(1), 133–156. [링크](https://ideas.repec.org/a/eee/jfinec/v42y1996i1p133-156.html)
> 12. Gatev, Goetzmann, Rouwenhorst (2006). Pairs Trading: Performance of a Relative-Value Arbitrage Rule. Review of Financial Studies 19(3), 797–827. [링크](https://ideas.repec.org/a/oup/rfinst/v19y2006i3p797-827.html)
> 13. Khandani, Lo (2007). What Happened to the Quants in August 2007? Journal of Investment Management 5(4). [링크](https://web.mit.edu/Alo/www/Papers/august07.pdf)
> 14. U.S. General Accounting Office (2000). Responses to Questions Concerning Long-Term Capital Management and Related Events. GAO/GGD-00-67R. [링크](https://www.gao.gov/assets/ggd-00-67r.pdf)

> [!note] 27강
> 1. Treynor, Black (1973). How to Use Security Analysis to Improve Portfolio Selection. Journal of Business 46(1), 66–86. [링크](https://ideas.repec.org/a/ucp/jnlbus/v46y1973i1p66-86.html)
> 2. Grinold (1989). The Fundamental Law of Active Management. Journal of Portfolio Management 15(3), 30–37.
> 3. Kane, Kim, White (2010). Forecast Precision and Portfolio Performance. Journal of Financial Econometrics 8(3), 265–304. [링크](https://ideas.repec.org/a/oup/jfinec/v8y2010i3p265-304.html)
> 4. Black, Litterman (1992). Global Portfolio Optimization. Financial Analysts Journal 48(5), 28–43.
> 5. Black, Litterman (1991). Asset Allocation: Combining Investor Views with Market Equilibrium. Journal of Fixed Income 1(2), 7–18.
> 6. Grinold, Kahn (2000). Active Portfolio Management, 2nd ed. New York: McGraw-Hill.
> 7. Bodie, Kane, Marcus (2024). Preface. Investments, 13th ed. New York: McGraw Hill. [링크](https://info.mheducation.com/rs/128-SJW-347/images/Bodie_Preface_Investments_13e.pdf)
> 8. Wikipedia (n.d.). [[잭 트레이너|Jack L. Treynor]]. [링크](https://en.wikipedia.org/wiki/Jack_L._Treynor) 2차
> 9. Wikipedia (n.d.). [[로버트 리터먼|Robert Litterman]]. [링크](https://en.wikipedia.org/wiki/Robert_Litterman) 2차

> [!note] 28강
> 1. CFA Institute (2010). Elements of an Investment Policy Statement for Institutional Investors. [링크](https://www.cfainstitute.org/-/media/documents/article/position-paper/investment-policy-statement-institutional-investors.pdf)
> 2. Tobin (1974). What Is Permanent Endowment Income? American Economic Review 64(2), 427–432. [링크](https://ideas.repec.org/a/aea/aecrev/v64y1974i2p427-32.html)
> 3. Bodie, Merton, Samuelson (1992). Labor Supply Flexibility and Portfolio Choice in a Life Cycle Model. Journal of Economic Dynamics and Control 16(3–4), 427–449. [링크](https://ideas.repec.org/a/eee/dyncon/v16y1992i3-4p427-449.html)
> 4. Bodie (1990). The ABO, the PBO and Pension Investment Policy. Financial Analysts Journal 46(5), 27–34. [링크](https://rpc.cfainstitute.org/research/financial-analysts-journal/1990/the-abo-the-pbo-and-pension-investment-policy)
> 5. Black (1980). The Tax Consequences of Long-Run Pension Policy. Financial Analysts Journal 36(4), 21–28. [링크](https://rpc.cfainstitute.org/research/financial-analysts-journal/1980/the-tax-consequences-of-long-run-pension-policy)
> 6. Tepper (1981). Taxation and Corporate Pension Policy. Journal of Finance 36(1), 1–13. [링크](https://ideas.repec.org/a/bla/jfinan/v36y1981i1p1-13.html)
> 7. Sharpe (1976). Corporate Pension Funding Policy. Journal of Financial Economics 3(3), 183–193. [링크](https://ideas.repec.org/a/eee/jfinec/v3y1976i3p183-193.html)
> 8. Marcus (1987). Corporate Pension Policy and the Value of [[연금 보증의 풋 가치|PBGC]] Insurance. In Bodie, Shoven, Wise (eds.), Issues in Pension Economics. Chicago: University of Chicago Press. [링크](https://www.nber.org/books-and-chapters/issues-pension-economics/corporate-pension-policy-and-value-pbgc-insurance)
> 9. Constantinides (1983). Capital Market Equilibrium with Personal Tax. Econometrica 51(3), 611–636. [링크](https://ideas.repec.org/a/ecm/emetrp/v51y1983i3p611-36.html)
> 10. Bengen (1994). Determining Withdrawal Rates Using Historical Data. Journal of Financial Planning 7(4), 171–180.
> 11. Cooley, Hubbard, Walz (1998). Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable. AAII Journal 20(2), 16–21.
> 12. Supreme Judicial Court of Massachusetts (1830). [[하버드 칼리지 대 에이머리 판결|Harvard College v. Amory]], 26 Mass. (9 Pick.) 446.
> 13. Swensen (2000). [[개척적 포트폴리오 관리|Pioneering Portfolio Management]]: An Unconventional Approach to Institutional Investment. New York: Free Press.
> 14. Bodie, Kane, Marcus (2024). Preface. Investments, 13th ed. New York: McGraw Hill. [링크](https://info.mheducation.com/rs/128-SJW-347/images/Bodie_Preface_Investments_13e.pdf)

— 이표 스물여덟 장 끝 —
