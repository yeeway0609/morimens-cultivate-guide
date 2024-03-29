const awakers = [
  {
    'id': 1,
    'name': '拉蒙娜',
    'career': '混沌',
    'type': '輔助型',
    'position': '輔助|副C',
    'intro': '官方定位是<span class="text-brown">輔助</span>，但是牌組裡有一張強力輸出，<span class="text-red">女王之劍</span>，偶爾可以<span class="text-brown">兼職輸出</span>的角色。<br><br>不過大部分的使用方式都是賣掉女王之劍，利用拉蒙娜加<span class="text-brown">小小心願</span>，詞條堆狂氣回充和鑰令充能，使用<span class="text-brown">狂氣爆發</span>抓牌給其他角色打輸出。',
    'recommend_evolution': 3,
    'recommend_evolution_desc': '隨調查等級提升會拿到碎片，能多高升多高。',
    'rage_burst': '獲得100點銀鑰能量。選擇1張抽牌堆或棄牌堆的牌置入手牌,使其算力消耗變為0點。將1張「靈感」洗入抽牌堆。',
    'recommend_destiny_wheels_id': [63, 29, 42, 41, 11, 31],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為輔助使用</span><br>本身以及其效果給予大量充能，使裝備者能夠多次開出大招。',
      '<span class="text-brown">作為輔助使用</span><br>穩定回合充能，使裝備者能夠多次開出大招。',
      '<span class="text-brown">作為輔助使用</span><br>打出裝備者卡牌後能夠回復銀鑰能量，配合銀鑰技能可以緩解算利壓力。',
      '<span class="text-brown">作為輔助使用</span><br>輔助通用命輪，釋放<span class="text-red">狂氣爆發</span>後能夠幫隊友充能。',
      '<span class="text-brown">作為輸出使用</span><br>傷害類主C通用命輪。',
      '<span class="text-brown">作為輸出使用</span><br>傷害類主C通用命輪，造成傷害後提升爆擊率契合<span class="text-brown">拉蒙娜</span>的多段傷害。'
    ],
    'recommend_covenants_id': [7, 1, 3, 2],
    'recommend_covenants_desc': [
      '造成傷害就充能鑰令，適合所有多段傷害角色。',
      '開場給算力加速隊伍成長或出傷，一般一隊一個角色攜帶即可。',
      '配合拉蒙娜覺醒，等於每回合額外白嫖一張打擊，等於額外的算力、等於額外的狂氣。',
      '配合拉蒙娜覺醒，等於每回合額外白嫖一張防禦，等於額外的算力、等於額外的狂氣。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 2,
    'name': '奧吉爾',
    'career': '混沌',
    'type': '防禦型',
    'position': '生存|增傷',
    'intro': '官方定位是<span class="text-brown">防禦</span>，實際定位是有<span class="text-brown">增傷</span>的防禦角，狂氣覺醒可以解脆弱並給予力量、商店裡的專武也是類似機制，還有一個兩回合易傷的小技能牌，在組隊策略上，只要是吃力量的輸出都能用他補位。<br><br><span class="text-red">穿刺之槍</span>有時稍嫌卡手，如果有加算力、減費的造物或刻印手感會比較好用，如果有其他易傷手段，也可以考慮賣掉這張卡。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '只需商店兌換碎片，三個啟靈都有不錯的提升，如果常使用奧吉爾可以換滿。',
    'rage_burst': '驅散自身脆弱狀態。獲得12點護盾。在本回合中內獲得5點力量。',
    'recommend_destiny_wheels_id': [2, 46, 36, 14, 9],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為輔助增傷使用</span><br>裝備者<span class="text-red">狂氣爆發</span>後能夠給於等同於防禦值(百分比)的臨時力量。可輔助隊伍內輸出增傷。',
      '<span class="text-brown">作為輔助增傷使用</span><br>裝備者打出<span class="text-red">防禦</span>後能夠給於等同於攻擊力(百分比)的臨時力量。可輔助隊伍內輸出增傷。',
      '<span class="text-brown">作為生存使用</span><br>使牌庫新增一張裝備者的<span class="text-red">防禦</span>，並提高裝備者的防禦護盾。',
      '<span class="text-brown">作為生存使用</span><br>打出裝備者的卡牌後即可獲得等同於裝備者防禦力(百分比)的護盾，<br>作為給盾的生存位非常實用。',
      '<span class="text-brown">作為隊伍回血使用</span><br>裝備者釋放<span class="text-red">狂氣爆發</span>後回復隊伍生命，並根據剩餘算力額外回復生命。<br>因為<span class="text-brown">奧吉爾</span>體質非常好，在不帶奶媽的隊伍裡，他的狂氣通常會是第一個放，奶一口只略輸專職奶媽的朵爾一些'
    ],
    'recommend_covenants_id': [4, 1, 2],
    'recommend_covenants_desc': [
      '防禦向通用密契，詞條死抗狂氣鑰令都不錯，也可以補增傷。',
      '開場給算力加速隊伍成長或出傷，一般一隊一個角色攜帶即可。',
      '搭配有防禦特效的命輪使用，兩回合多一張穩定的防禦卡。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 3,
    'name': '蘿坦',
    'career': '混沌',
    'type': '傷害型',
    'position': '輸出|降傷輔助',
    'intro': '官方定位是<span class="text-brown">傷害</span>角色，且是<span class="text-brown">混沌</span>界域。在其他界域沒抽齊，或是資源緊繃的狀況下，可以當通用主C。跨5~10等的副本都是可以打的。<br><br>因為打擊類命輪的特殊機制，帶上<span class="text-brown">切割與傷害</span>和<span class="text-brown">苦咒縛</span>也可以當降傷輔助兼副C。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '一啟必要，主C或輔助都需要這個效果。三啟稍微加強菁英跟最終戰的傷害。',
    'rage_burst': '驅散自身虛弱狀態。對所有敵人造成56點傷害。在本場戰鬥中每打出1張「打擊」便使傷害+12。<br>+ 12 .',
    'recommend_destiny_wheels_id': [11, 17, 45, 43, 34],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為主C使用</span><br>傷害類主C通用命輪，配合<span class="text-brown">蘿坦</span>輸出卡牌費用較低的特性有機率可以使傷害卡牌低費出手',
      '<span class="text-brown">作為主C使用</span><br>傷害類主C通用命輪，增加<span class="text-red">打擊</span>基礎傷害。',
      '<span class="text-brown">作為主C使用</span><br>提高<span class="text-red">打擊</span>卡牌傷害，生成<span class="text-red">打擊</span>卡牌契合<span class="text-red">桀驁之刃</span>的減費機制。',
      '<span class="text-brown">作為輔助使用</span><br>作為降攻輔助時配戴，可使<span class="text-red">打擊</span>卡牌副加減攻效果。',
      '<span class="text-brown">作為副C使用</span><br>作為副C時配戴，可使<span class="text-red">打擊</span>卡使<span class="text-red">打擊</span>卡牌增加中毒效果，緩解隊友輸出壓力。'
    ],
    'recommend_covenants_id': [6, 3, 7],
    'recommend_covenants_desc': [
      '傷害強效全隊共用，適合雙C場合。',
      '帶切割與傷害的時候很適合這個密契，兩回合穩定多一張打擊，降攻保命一流。',
      '造成傷害就充能鑰令，配合拉蒙娜狂氣爆發，出傷行雲流水。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 4,
    'name': '朵爾',
    'career': '混沌',
    'type': '輔助型',
    'position': '生存|降傷',
    'intro': '官方定位是<span class="text-brown">輔助</span>，實際定位是俗稱的<span class="text-brown">奶媽</span>，狂氣爆發除了<span class="text-brown">回血</span>外，額外給全隊<span class="text-brown">狂氣</span>、專武也是類似機制，<span class="text-red">靈知覺醒</span>效果會給額外的護盾，是一位很萬能的防禦奶。<br><br><span class="text-red">等價交換</span>可以主動棄手牌回血，部分關卡有奇效，啟靈二與覺醒額外給護盾。但個人卡偏高費，搭配特性是<span class="text-brown">保留</span>的主C時會略為卡手。<br><br>朵爾牌權不高，很常被刪除或賣卡，要減少給他鑰令充能類詞條。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '商店可兌換碎片，一啟的兩回合虛弱對生存幫助很大，不過終究是可以換滿的，建議三啟。',
    'rage_burst': '驅散自身易傷狀態。回復10點生命,其他喚醒體獲得5點狂氣。',
    'recommend_destiny_wheels_id': [4, 44, 41, 15, 9],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為充能輔助使用</span><br><span class="text-brown">朵爾</span>的專武，契合<span class="text-brown">朵爾</span>的<span class="text-red">狂氣爆發</span>能夠幫隊友快速回充狂氣。',
      '<span class="text-brown">作為充能輔助使用</span><br>打出症狀卡後充能全隊狂氣，因<span class="text-brown">朵爾</span>本身能夠回血，可將扣血類症狀卡傷害壓低。',
      '<span class="text-brown">作為充能輔助使用</span><br>釋放<span class="text-red">狂氣爆發</span>後，隊友獲得狂氣，配合<span class="text-brown">朵爾</span>的<span class="text-red">狂氣爆發</span>能夠幫隊友快速回充狂氣。',
      '<span class="text-brown">作為生存使用</span><br>提高生命回復以及護盾百分比，契合<span class="text-brown">朵爾</span>的覺醒。',
      '<span class="text-brown">作為生存使用</span><br>裝備者釋放<span class="text-red">狂氣爆發</span>後回復隊伍生命，並根據剩餘算力額外回復生命。'
    ],
    'recommend_covenants_id': [4, 1, 10],
    'recommend_covenants_desc': [
      '防禦向通用密契，詞條死抗狂氣鑰令都不錯，也可以補增傷。',
      '開場給算力加速隊伍成長或出傷，一般一隊一個角色攜帶即可。',
      '目前很少兼顧回血跟護盾的角色，說朵爾專屬密契也不為過。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 5,
    'name': '諾締拉',
    'career': '混沌',
    'type': '防禦型',
    'position': '生存|反擊輔助',
    'intro': '官方定位為<span class="text-brown">防禦型</span>，作為當前版本防禦屬性最高的喚醒體，<span class="text-brown">諾締拉</span>同樣擁有不俗的體質，搭配上<span class="text-brown">覺醒</span>後無條件獲得的盾量加成以及<span class="text-red">短期記憶</span>的狂氣回復，都讓<span class="text-brown">諾締拉</span>成為一個萬金油的選擇，不論是哪個界域的<span class="text-brown">生存位</span>都能佔有一席之地。<br><br>此外，<span class="text-brown">諾締拉</span>的<span class="text-red">狂氣爆發「整裝待發」</span>，更是可以直接提高當前所有的護盾數值。在已經擁有大量護盾的前提下釋放，更是能夠扛住高難<span class="text-brown">深潛關卡</span>首領破千的單次爆發傷害，是保命位置的不二人選。需要注意的是，<span class="text-brown">諾締拉</span><span class="text-red">狂氣爆發</span>提高盾量並不是獲取護盾，無法搭配<span class="text-brown">先賢斷章</span>等需要獲取護盾才能觸發的造物。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '一啟降低短期記憶費用，使用上會更順滑。<br><br>二啟收益較低，不做推薦。<br><br>三啟在釋放狂氣爆發後可以免疫虛弱、脆弱、易傷，屬於對策用。',
    'rage_burst': '獲得6點護盾和6點反擊。使當前的護盾提高50%',
    'recommend_destiny_wheels_id': [22, 13, 36, 37, 35, 67],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為生存使用</span><br>打出裝備者<span class="text-red">打擊</span>獲得臨時力量、打出裝備者<span class="text-red">防禦</span>獲得臨時戒備。戒備在此遊戲中是相當稀有的屬性，搭配諾締拉的高防禦力不無小補。',
      '<span class="text-brown">作為反擊輔助使用</span><br>增加一張裝備者的<span class="text-red">防禦</span>，並且打出裝備者的<span class="text-red">防禦</span>後獲得反擊。獲取的反擊量受裝備者防禦數值影響，極為適配諾締拉的高防禦。',
      '<span class="text-brown">作為生存使用</span><br>增加一張裝備者的<span class="text-red">防禦</span>，並使裝備者的<span class="text-red">防禦</span>護盾量提高。這張SR命輪幾乎可以說是<span class="text-brown">諾締拉</span>的專武，由於<span class="text-brown">諾締拉</span>覺醒後自帶護盾量提高效果，兩者作用下可使<span class="text-red">防禦</span>獲取的護盾量大大提高。',
      '<span class="text-brown">作為反擊輔助使用</span><br>提高裝備者獲得的反擊，並使<span class="text-red">防禦</span>能夠獲得臨時反擊。獲取的臨時反擊量受裝備者<span class="text-red">防禦</span>數值影響，可以搭配<span class="text-brown">諾締拉</span>的高防禦。',
      '<span class="text-brown">作為生存使用</span><br>釋放狂氣爆發後，獲得額外的護盾量。獲取的護盾受裝備者防禦數值影響，需特別注意此效果是在<span class="text-red">狂氣爆發</span>後生效，此命輪獲取的護盾將無法享受到整裝待發提高護盾效果。',
      '<span class="text-brown">作為生存使用</span><br>增加裝備者造成的護盾量與中毒量，觸發死亡抵抗時全隊臨時爆擊率和爆擊傷害。能提升<span class="text-brown">諾締拉</span>的護盾量，提供的臨時爆擊率和爆擊傷害能協助提升輸出。'
    ],
    'recommend_covenants_id': [9, 2, 4],
    'recommend_covenants_desc': [
      '提高裝備者<span class="text-red">防禦</span>的護盾數值。若同時擁有<span class="text-red">靈知覺醒</span>、<span class="text-brown">不存在之地</span>與<span class="text-brown">遠方的歡宴</span>，六十級的<span class="text-brown">諾締拉</span>可達到一張防禦一百護盾。',
      '裝備者在每個偶數回合獲取一張帶有虛無、消耗的防禦指令卡。若命輪攜帶<span class="text-brown">傷痛之鰭</span>、<span class="text-brown">核心熔解</span>等需要打出防禦觸發的，可以使用白子穩定觸發頻率。',
      '防禦向通用密契。增加死亡抵抗，觸發死亡抵抗後回充狂氣。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 6,
    'name': '寧菲亞',
    'career': '混沌',
    'type': '傷害型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 7,
    'name': '潘狄婭',
    'career': '混沌',
    'type': '輔助型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 8,
    'name': '艾爾瓦',
    'career': '混沌',
    'type': '防禦型',
    'position': '護盾|輸出',
    'intro': '官方定位為<span class="text-brown">防禦型</span>，實際上是半防禦半輸出的坦C型角色。做為防禦型角色，<span class="text-brown">艾爾瓦</span><span class="text-red">靈知覺醒</span>擁有整個遊戲裡較為稀缺<span class="text-brown">戒備</span>屬性、以及自帶保留與成長性的零費護盾卡<span class="text-red">臨戰體勢</span>；作為<span class="text-brown">輸出</span>，<span class="text-brown">艾爾瓦</span>具有護盾越高傷害加成就越高的<span class="text-red">心眼利刃</span>，同時在靈知覺醒後<span class="text-brown">艾爾瓦</span>自身造成的傷害也會隨著護盾量提高而變高，完全是攻防一體的狠角色。<br><br>若是撇開生存與輸出層面不談，<span class="text-brown">艾爾瓦</span>的<span class="text-red">狂氣爆發</span>能夠丟棄症狀卡並抽取等量卡，一啟後<span class="text-red">臨戰體勢</span>還具備破除封印的能力，極大程度上可以避免在關鍵回合抽到滿手症狀卡、喚醒體被封印的困擾，因此不管擔任哪個位置，<span class="text-brown">艾爾瓦</span>都是可以勝任的優秀對策卡。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '一啟必要，讓臨戰體勢能夠破除封印，作為對策卡使用。<br>二啟可有可無，可讓艾爾瓦沒有症狀卡時也能抽一張牌。<br>若是作為輸出，三啟必要，防禦可使心眼降費，可一次性打出多張心眼。',
    'rage_burst': '獲得19點護盾。棄掉手牌所有的狀態卡和症狀卡，並抽取等量的卡牌。',
    'recommend_destiny_wheels_id': [8, 11, 64, 32, 35, 67],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為輸出使用</span><br><span class="text-brown">艾爾瓦</span>專武。增加裝備者<span class="text-red">打擊</span>與<span class="text-red">防禦</span>各一張，並提升裝備者的傷害與護盾量。增加的<span class="text-red">打擊</span>與<span class="text-red">防禦</span>可以提升<span class="text-brown">艾爾瓦</span>堆疊護盾、輸出的效率；缺點是牌庫增加會降低抽牌的效率。',
      '<span class="text-brown">作為輸出使用</span><br>釋放<span class="text-red">狂氣爆發</span>後，提高裝備者爆擊傷害，並使手中裝備者的卡牌概率降低算力。命輪主詞條為爆擊，釋放狂氣後提升爆傷，兩者都是<span class="text-brown">艾爾瓦</span>非常需要的屬性。',
      '<span class="text-brown">作為輸出使用</span><br>擁有極致爆傷加成的命輪，敵人死亡時還會掉落額外黑印。可為<span class="text-brown">艾爾瓦</span>提供常駐的爆傷加成，缺點是<span class="text-brown">艾爾瓦</span>本身爆擊率低，會需要其他命輪、密契、造物做搭配。',
      '<span class="text-brown">作為輸出使用</span><br>釋放<span class="text-red">狂氣爆發</span>後，提高全體友方爆擊率。命輪詞條為爆擊傷害，並能提供爆擊率，兩者都是<span class="text-brown">艾爾瓦</span>需要的屬性。',
      '<span class="text-brown">作為生存位使用</span><br>釋放<span class="text-red">狂氣爆發</span>後，獲得額外的護盾量。獲取的護盾受裝備者防禦數值影響，<span class="text-brown">艾爾瓦</span>可將額外的護盾轉化為輸出。',
      '<span class="text-brown">作為生存位使用</span><br>增加裝備者造成的護盾量與中毒量，觸發死亡抵抗時全隊臨時爆擊率和爆擊傷害。能提升裝備者施加的護盾量，觸發死亡抵抗後的臨時爆擊率和爆擊傷害能協助提升輸出。'
    ],
    'recommend_covenants_id': [8, 4],
    'recommend_covenants_desc': [
      '極致爆傷特化的密契，釋放鑰令時增加裝備者爆擊率。由於<span class="text-brown">艾爾瓦</span>依靠護盾增傷，吃不太到基礎傷害加成，因此更需要爆擊率與爆級傷害加成。',
      '防禦向通用密契，增加死亡抵抗，觸發死亡抵抗後回充狂氣。由於<span class="text-brown">艾爾瓦</span>隊伍會有較高的死亡抵抗，搭配命輪<span class="text-brown">35mm的魔法</span>能提升輸出。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 9,
    'name': '珈倫',
    'career': '混沌',
    'type': '輔助型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 10,
    'name': '奧瑞塔',
    'career': '深海',
    'type': '傷害型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 11,
    'name': '戈利亞',
    'career': '深海',
    'type': '傷害型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 12,
    'name': '法洛思',
    'career': '深海',
    'type': '輔助型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 13,
    'name': '凱刻斯',
    'career': '深海',
    'type': '防禦型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 14,
    'name': '珊',
    'career': '深海',
    'type': '防禦型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 15,
    'name': '希萊斯特',
    'career': '深海',
    'type': '輔助型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 16,
    'name': '艾繼絲',
    'career': '血肉',
    'type': '輔助型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 17,
    'name': '希洛',
    'career': '血肉',
    'type': '傷害型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 18,
    'name': '阿格里帕',
    'career': '血肉',
    'type': '防禦型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 19,
    'name': '尤烏哈希',
    'career': '血肉',
    'type': '傷害型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 20,
    'name': '雷婭',
    'career': '血肉',
    'type': '輔助型',
    'position': '',
    'intro': '官方定位是<span class="text-brown">輔助型</span>，血肉隊第一奶媽，<span class="text-brown">胚胎</span>的超級充電寶。<br><del>沒有這個角色不要挑戰血肉隊（暴論）</del><br><br>大招是目前遊戲唯一的<span class="text-red">百分比回血</span>，搭配特定命輪和造物，單回合回上百血的奶媽僅此一家。但相對應的是全遊戲最慘的三圍，導致指令卡數值悲劇，但因為靈知覺醒是打牌養<span class="text-brown">胚胎</span>，<span class="text-brown">不建議</span>賣<span class="text-brown">雷婭</span>的卡牌。',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '每個啟靈都是穩定提升，但不強求。',
    'rage_burst': '【吞噬:回復16%已損失的生命。驅散自身易傷狀態。 】<br>回復8點生命。獲得2點力量。',
    'recommend_destiny_wheels_id': [20, 15, 33, 41],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為輔助使用</span><br><span class="text-brown">雷婭</span>的專武，回復生命效果提高，且可以獲得隊伍損失生命百分比的力量與護盾，讓<span class="text-brown">雷婭</span>能更好的兼顧生存與輔助為一體。',
      '<span class="text-brown">作為生存使用</span><br>回復生命效果提高，裝備者釋放<span class="text-red">狂氣爆發</span>後回復隊伍損失生命百分比，能適當的減少生存壓力。',
      '<span class="text-brown">作為生存使用</span><br>提高裝備者護盾與生命回復，因為通常不會賣掉<span class="text-brown">雷婭</span>的卡，所以基礎卡牌傷害提高也算不無小補。',
      '<span class="text-brown">作為輔助使用</span><br>裝備者<span class="text-red">狂氣爆發</span>後，所有友方獲得狂氣，是充能向輔助的通用命輪。'
    ],
    'recommend_covenants_id': [10, 1, 4],
    'recommend_covenants_desc': [
      '補充奶量，減少生存壓力。',
      '開場給算力加速隊伍成長或出傷，一般一隊一個角色攜帶即可。',
      '輔助通用密契，詞條死抗狂氣鑰令都不錯，也可以補增傷。死抗在破200前多多益善。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 21,
    'name': '菲茵特',
    'career': '血肉',
    'type': '防禦型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 22,
    'name': '艾瑞卡',
    'career': '超維',
    'type': '防禦型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 23,
    'name': '莉茲',
    'career': '超維',
    'type': '傷害型',
    'position': '輸出',
    'intro': '官方定位為<span class="text-brown">傷害</span>，具備完全不需要消耗算力便可打出大量傷害的強勢角色。<span class="text-brown">莉茲</span>的玩法主要依靠屯積升級後的<span class="text-red">綠炎</span>一次丟棄，打出大量傷害的同時堆疊高額毒傷，再依靠毒傷的天然優勢不斷消耗敵人血線。<br><br>需要注意的是，<span class="text-brown">莉茲</span>覺醒後會主動生成<span class="text-red">綠炎</span>，容易導致滿手<span class="text-red">綠炎</span>無法抽牌，會需要有<span class="text-brown">棄牌能力</span>的隊友配合。另外，升級過後的<span class="text-red">綠炎</span>皆為多段傷害，如果遇到有<span class="text-brown">反擊</span>特性的敵人，開<span class="text-brown">莉茲</span>狂氣很有可能會被反傷彈死。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '一啟必要，讓綠炎能夠額外升級一次，多增加一段傷害與中毒數值。',
    'rage_burst': '獲得2臨時力量。棄掉手牌中所有莉茲的牌,並觸發他們的效果。',
    'recommend_destiny_wheels_id': [23, 6, 28, 33, 34, 31],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為輸出使用</span><br><span class="text-brown">莉茲</span>專武。打出或棄掉裝備者的牌都可以給隨機敵人增加中毒。超維回合結束後有概率觸發一次中毒效果。配合<span class="text-brown">莉茲</span>狂氣棄大量<span class="text-red">綠炎</span>可以打一波爆發。',
      '<span class="text-brown">作為輸出使用</span><br>提高裝備者施加的中毒效果，釋放狂氣前先對所有敵人施加中毒效果。同類別的中毒命輪，可做為沒有<span class="text-brown">旋轉，旋轉</span>的備選。',
      '<span class="text-brown">作為輸出使用</span><br>增加裝備者基礎傷害、中毒、反擊、爆擊率。十分全面的效果，除了反擊外都是<span class="text-brown">莉茲</span>需要的屬性。',
      '<span class="text-brown">作為輸出使用</span><br>通用輸出命輪，只要是使用指令卡輸出的都會獲得基礎傷害增加效果。<span class="text-brown">莉茲</span>狂氣因為是丟棄指令卡並觸發指令卡效果，因此需要帶指令卡傷害增加的命輪。',
      '<span class="text-brown">作為輸出使用</span><br>使打擊卡增加中毒效果。雖然<span class="text-brown">莉茲</span>二啟打擊自帶躍遷中毒，但中毒效果不嫌多，疊越多打越快。',
      '<span class="text-brown">作為輸出使用</span><br>裝備者造成傷害後提升爆擊率，直到造成爆擊後清空所獲得的爆擊率。莉茲施加的中毒效果都是依靠傷害數值來去判定的，提升爆擊爆傷便能提升<span class="text-brown">莉茲</span>施加的中毒層數。'
    ],
    'recommend_covenants_id': [6, 7, 8],
    'recommend_covenants_desc': [
      '輸出向通用密契。傷害強效提高施加的中毒效果，基礎傷害提升也能增加莉茲施加的中毒效果。',
      '造成傷害就充能鑰令，若搭配小小心願可加快鑰令與狂氣的連動。',
      '極致爆傷特化的密契。若使用臨界點命輪則可以考慮，追求單次狂氣爆發施加的中毒最大化。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 24,
    'name': '汀克特',
    'career': '超維',
    'type': '輔助型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 25,
    'name': '溫柯爾',
    'career': '超維',
    'type': '防禦型',
    'position': '狂氣輔助|生存',
    'intro': '官方定位為<span class="text-brown">防禦</span>，並擁有回充其他喚醒體狂氣的通用功能，適合需要依賴狂氣爆發打高輸出的隊伍。<span class="text-red">能量射線</span>可選擇回復狂氣或是回充銀鑰能量，與鑰令<span class="text-brown">小小心願</span>配合起來能達成不錯的效果。<br><br><span class="text-brown">溫柯爾</span>不僅僅有狂氣可以提供盾量，<span class="text-red">精神重建</span>更可以依照棄牌數量以百分比提高盾量，這讓<span class="text-brown">溫柯爾</span>一個人就具備扛下敵人高傷害爆發的能力，在各種菁英戰、最終戰關卡中都是超維生存角色的最佳選擇。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '一啟必要，讓溫柯爾可以提供虛弱，大大增加隊伍生存能力。<br><br>若有餘力開到二啟，精神重建提供的下回合護盾可以扛住某些敵人的連續爆發。',
    'rage_burst': '驅散自身脆弱狀態並獲得11點護盾。選擇1名其他喚醒體獲35點狂氣。',
    'recommend_destiny_wheels_id': [25, 4, 41, 39, 35, 37],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為狂氣輔助使用</span><br><span class="text-brown">溫柯爾</span>的專武。增加由裝備者產生的狂氣數值，並且在釋放狂氣後補充銀鑰能量，能夠加速鑰令與狂氣的釋放循環。須注意<span class="text-brown">小小心願</span>無法享受此項加成。',
      '<span class="text-brown">作為狂氣輔助使用</span><br>釋放<span class="text-red">狂氣爆發</span>前，使其他喚醒體獲得狂氣。若有易傷狀態則效果翻倍。<br>由於是SSR命輪，推薦順序較低，一般使用職責所在作為下位替代。',
      '<span class="text-brown">作為狂氣輔助使用</span><br>釋放<span class="text-red">狂氣爆發</span>後，使其他喚醒體獲得狂氣。獲得的狂氣數值受無法完成的演算增益影響。',
      '<span class="text-brown">作為狂氣輔助使用</span><br>釋放鑰令後獲得狂氣，能夠加速鑰令與狂氣的釋放循環。獲得的狂氣數值受<span class="text-brown">無法完成的演算</span>影響。',
      '<span class="text-brown">作為生存位使用</span><br>釋放<span class="text-red">狂氣爆發</span>後，獲得額外的護盾量。此護盾參考裝備者的防禦力數值，在越級推關時抗壓很有幫助。',
      '<span class="text-brown">作為反擊隊使用</span><br>提高裝備者獲得的反擊，並使<span class="text-red">防禦</span>能夠獲得臨時反擊。由於<span class="text-brown">溫柯爾</span>的<span class="text-red">靈知覺醒</span>能提供反擊，通常在反擊隊使用。面對複數小怪時，臨時反擊能夠保障一定的生存能力。'
    ],
    'recommend_covenants_id': [9, 5, 4],
    'recommend_covenants_desc': [
      '提高裝備者「防禦」的護盾數值，增加生存。',
      '若裝備了專注精神命輪，無垢啟示錄可以提供超維隊伍稀缺的回復能力。',
      '防禦向通用密契，詞條主選狂氣回充、傷害強效，副選銀鑰與死亡抵抗。',
      '若裝備了職責所在，界域精通堆疊到50以上可以考慮配帶，配合精神重建的高加成能提供可觀的盾量。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 26,
    'name': '詹金',
    'career': '超維',
    'type': '傷害型',
    'position': '輸出',
    'intro': '官方定位為<span class="text-brown">傷害型</span>，玩法上是需要空回合蓄力來打出超高傷害的<span class="text-brown">爆發型</span>角色。不同於傳統屯牌爆發的傷害型角色，<span class="text-brown">詹金</span>對於超維的界域機制有較高的依賴性，平時輸出相對疲軟，需將爆發卡一一存入超維空間內，再於超維回合打出足以一次清空所有敵人血線的爆炸傷害。<br><br>由於<span class="text-brown">詹金</span>的核心輸出卡<span class="text-red">鼠群衝擊</span>並不在自身指令卡當中，而是需要在每場戰鬥中使用<span class="text-red">集結鼠群</span>來獲得。因此，如何分配好輪空回合拿取<span class="text-red">鼠群衝擊</span>；如何篩選超維空間的指令卡使爆發傷害最大化；以及如何控制進入超維回合的時間，都是<span class="text-brown">詹金</span>隊需要思考的問題。上述條件使得<span class="text-brown">詹金</span>隊有著較高的操作難度，不建議還不了解此類遊戲機制的新手使用。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '一啟必要，讓重複打出的布朗出動可以堆疊鼠群衝擊的傷害。<br>若有餘力可升至三啟，額外一張布朗出動可以增加鼠群衝擊爆發時的傷害。',
    'rage_burst': '將3張附加消耗的「布朗出動!」置入手牌。臨時暴擊傷害+50%',
    'recommend_destiny_wheels_id': [26, 11, 64, 32, 33, 31],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為輸出使用</span><br><span class="text-brown">詹金</span>的專武。裝備者造成傷害後有機率抽取一張裝備者的指令卡並降低算力，可輔助<span class="text-brown">詹金</span>堆疊<span class="text-red">布朗出動</span>傷害、或是抽取<span class="text-red">鼠群衝擊</span>關鍵卡。',
      '<span class="text-brown">作為輸出使用</span><br>釋放<span class="text-red">狂氣爆發</span>後，提升裝備者爆擊傷害，並使手中所有裝備者的指令卡概率降低算力。降低算力可以契合<span class="text-brown">詹金</span>狂氣給予的<span class="text-red">布朗出動</span>，讓爆發回合不需要消耗這麼高額的算力。',
      '<span class="text-brown">作為輸出使用</span><br>擁有極致暴傷加成的命輪，擊殺敵人時還能提供些許黑印。<span class="text-brown">詹金</span>的<span class="text-red">狂氣爆發</span>、靈知覺醒都相當吃重暴率與暴傷，若是暴擊率堆疊夠高，可選用爆傷加成的命輪來提升傷害。',
      '<span class="text-brown">作為輸出使用</span><br>釋放狂氣後，提高全體友方爆擊率。能契合<span class="text-brown">詹金</span><span class="text-red">狂氣爆發</span>，確保爆發回合時每下傷害皆為爆擊。',
      '<span class="text-brown">作為輸出使用</span><br>通用輸出命輪，只要是使用指令卡輸出的都會獲得基礎傷害增加效果。<span class="text-brown">詹金</span>覺醒後會獲得高額的爆擊與爆傷，此時增加基礎傷害能讓傷害收益最大化。',
      '<span class="text-brown">作為輸出使用</span><br>裝備者造成傷害後提升爆擊率，直到造成爆擊後清空所獲得的爆擊率。詹金釋放<span class="text-red">狂氣爆發</span>後會獲得高額爆傷，若此時爆擊率未滿，可選用此命輪增加爆擊觸發的穩定性。'
    ],
    'recommend_covenants_id': [6, 7, 8],
    'recommend_covenants_desc': [
      '輸出向通用密契。詹金覺醒後會獲得高額的爆擊與爆傷，提升基礎傷害能讓傷害收益最大化。需注意一般詹金會配戴爆擊爆傷相關的命輪，因此觸發荒原狼增傷的傷害強效條件需由隊友協助獲取。',
      '造成傷害就充能鑰令，爆擊傷害會充能更多。若搭配小小心願可加速詹金狂氣爆發循環，能夠堆疊更多次數的布朗出動。',
      '極致爆傷特化的密契。釋放鑰令時可增加裝備者的爆擊率，增加爆擊的穩定性。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 27,
    'name': '卡茜亞',
    'career': '超維',
    'type': '輔助型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 28,
    'name': '圖魯',
    'career': '深海',
    'type': '傷害型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 29,
    'name': '達芙黛爾',
    'career': '超維',
    'type': '傷害型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 30,
    'name': '索蕾爾',
    'career': '血肉',
    'type': '傷害型',
    'position': '輸出',
    'intro': '官方定位是<span class="text-brown">輸出型</span>，現階段血肉輸出之一。<br>傷害手段是<span class="text-brown">多段輸出</span>，需要有<span class="text-brown">力量類</span>輔助，依賴多段傷害及<span class="text-red">覺醒</span>堆疊大量臨時力量以打出高額傷害，此外也有回血和優秀的胚胎融合的能力。在團隊可以作為主輸出，也可以勝任副輸出的角色。<br><br>技能建議優先提升<span class="text-red">珠玉之卵</span>、<span class="text-red">打擊</span>、<span class="text-red">覺醒</span>、<span class="text-red">狂氣爆發</span>。<br><br>相比<span class="text-brown">希洛</span>和<span class="text-brown">尤烏哈希</span>，<span class="text-brown">索蕾爾</span>一啟就是傷害完全體，目前傷害上限最高的是三啟<span class="text-brown">尤烏哈希</span>，小怪穩定度最高的是三啟<span class="text-brown">希洛</span>，傷害面各有勝場。<br><br>但是<span class="text-brown">索蕾爾</span>自己可以產胚胎，血肉的強度，在於生胎的速度，<span class="text-brown">索蕾爾</span>綜合強度還是大於常駐角色的。',
    'recommend_evolution': 1,
    'recommend_evolution_desc': '一啟關鍵，血肉隊有多需要胚胎玩過都僅，二段打擊也讓<span class="text-brown">索蕾爾</span>能擔任切割手，降低承傷。<br><br>二啟穩定爆擊率，可惜是臨時，這部分比較容易用造物和命輪做補強，非必要。<br><br>三啟開場及觸發死抗可以加速胚胎，可以考慮和<span class="text-brown">菲茵特一起入隊</span>。開局給胚胎融合也可以稍微降低小怪關卡的壓力。',
    'rage_burst': '【無限吞噬：本次權欲輪舞的傷害次數+3。】隨機造成6點傷害5次。回復5點生命。',
    'recommend_destiny_wheels_id': [65, 64, 45, 43],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為輸出使用</span><br><span class="text-brown">索蕾爾</span>專武，以薔薇之名的三段傷害可以吃到力量加成，也可以吃到<span class="text-brown">索蕾爾</span>覺醒增加臨時力量，等於狂氣爆發常駐1個胚胎的特效（5+3次傷害，接近60%的增傷），但是在無限吞噬後邊際效應遞減。<br>假設一次吞了五個胚胎，增傷只剩下大約15%的效果。<br>也就是說在王關，<span class="text-brown">至為珍貴的藏品</span>上限是比<span class="text-brown">以薔薇之名</span>優秀的，但是<span class="text-brown">以薔薇之名</span>能大幅增加清理小怪跟菁英的效率。',
      '<span class="text-brown">作為輸出使用</span><br>擁有極致暴傷加成的命輪，擊殺敵人時還能提供些許黑印。若是暴擊率堆疊夠高，可選用暴傷加成的命輪來提升傷害。',
      '<span class="text-brown">作為輸出使用</span><br>提高打擊卡牌傷害，生成打擊卡牌<br>對胚胎融合和狂氣回充都很有幫助',
      '<span class="text-brown">作為副C使用</span><br>作為副C時配戴，可使打擊卡牌附加減攻效果。'
    ],
    'recommend_covenants_id': [7, 8, 3],
    'recommend_covenants_desc': [
      '多段傷害的特性很適合用來補充銀鑰能量。',
      '追求傷害極限的唯一選擇，額外的30爆擊率可能是王會不會殘血的關鍵。',
      '兩回合一張打擊，對胚胎融合和狂氣回充都很有幫助，也很適配切割與傷害。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 31,
    'name': '環形 · 拉蒙娜',
    'career': '混沌',
    'type': '輔助型',
    'position': '',
    'intro': '',
    'recommend_evolution': 0,
    'recommend_evolution_desc': '',
    'rage_burst': '',
    'recommend_destiny_wheels_id': [],
    'recommend_destiny_wheels_desc': [],
    'recommend_covenants_id': [],
    'recommend_covenants_desc': [],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  },
  {
    'id': 32,
    'name': '莉莉',
    'career': '混沌',
    'type': '防禦型',
    'position': '生存|爆發',
    'intro': '<span class="text-brown">莉莉</span>官方定位是<span class="text-brown">防禦型</span>角色，目前單卡盾量在遊戲裡也是名列前茅，非常契合定位。<br><br>透過<span class="text-brown">忍耐</span>被動，可以選擇用<span class="text-red">報償打擊</span>輸出，也可以透過<span class="text-red">狂氣爆發</span>回血，在60級隊伍1000血的假設下，滿<span class="text-brown">忍耐</span>可以恢復約80點血量，不如打一刀<span class="text-red">報償打擊</span>收掉精英或小怪，減少損血量其實是比較划算的選項。<br><br>當然，如果收不掉的狀況，可以計算一下傷害，開<span class="text-red">狂氣爆發</span>少賣一次死抗也不失一個划算的選擇。<br><br>此外<span class="text-brown">莉莉</span>有大量的<span class="text-brown">弱毒</span>，在道中可以稍微加速小怪清理，算是很全能的角色。<br><br>技能建議優先提升<span class="text-red">防禦</span>、<span class="text-red">報償打擊</span>，一啟後可升高<span class="text-red">黑沼禁域</span>，半血後是目前最厚的2費盾。有佩戴<span class="text-brown">跨越疼痛</span>的話，攻擊也可以給不錯的盾量，可以升級，不帶<span class="text-brown">跨越疼痛</span>的<span class="text-brown">莉莉</span>就建議賣掉攻擊卡。',
    'recommend_evolution': '1',
    'recommend_evolution_desc': '一啟顯著提升盾量，可以給黑沼保留（透過造物或刻印），關鍵時刻單卡破百盾非常實用。<br>二啟加速報償打擊的預備回合，不過因為常規隊伍忍耐不容易堆疊，另外也可以透過拉蒙娜直接拉出0費報償，非必要。<br>三啟忍耐消耗減半，手感大加分，三啟莉莉才能算合格的副輸出。三啟前，建議留忍耐值在菁英或關鍵時刻再使用。',
    'rage_burst': '獲得14點護盾。回復忍耐層數8%的生命並移除忍耐。直到下個回合開始,每受到1次攻擊就對攻擊者施加3層中毒。',
    'recommend_destiny_wheels_id': [66, 18, 14, 46, 67],
    'recommend_destiny_wheels_desc': [
      '<span class="text-brown">作為生存</span>/爆發使用<br>莉莉的專武，提高<span class="text-red">打擊</span>卡暴率與暴傷，能夠使<span class="text-red">報償打擊<span>的傷害進一步提升，此外還能使<span class="text-red">打擊</span>卡擁有增加護盾的效果，十分契合攻防一體的莉莉。',
      '<span class="text-brown">作為生存</span>/疊毒使用<br>能夠使裝備者的<span class="text-red">防禦</span>附加中毒效果，契合莉莉的<span class="text-red">靈知覺醒</span>。',
      '<span class="text-brown">作為生存使用</span><br>打出裝備者卡牌後獲得護盾，契合莉莉的<span class="text-red">靈知覺醒</span>。',
      '<span class="text-brown">作為輔助增傷使用</span><br>裝備者打出<span class="text-red">防禦</span>後能夠給於等同於攻擊力(百分比)的臨時力量。可輔助隊伍內輸出增傷。',
      '<span class="text-brown">作為生存</span>/疊毒使用<br>增加裝備者造成的護盾量與中毒量，契合莉莉指令卡。觸發死亡抵抗時全隊臨時爆擊率和爆擊傷害。提供的臨時爆擊率和爆擊傷害能協助提升輸出。'
    ],
    'recommend_covenants_id': [3, 2, 9],
    'recommend_covenants_desc': [
      '兩回合一張打擊，攜帶<span class="text-brown">跨越疼痛</span>時首選。',
      '作為常規盾角、或攜帶<span class="text-brown">冒險行囊</span>時使用。',
      '極致盾量，但是代幣很貴。不適合新手。'
    ],
    'recommend_teams': [
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`,
      `{ "awaker_id": [], "awaker_position": [], "team_desc": "" }`
    ]
  }
];

module.exports = awakers;
