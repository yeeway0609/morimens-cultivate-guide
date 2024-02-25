CREATE DATABASE morimens-cultivate-guide-db;
USE morimens-cultivate-guide-db;

-- 喚醒體
CREATE TABLE awakers (
  id smallint PRIMARY KEY,
  name varchar(20) NOT NULL,
  career varchar(20) NOT NULL, -- 界域
  type varchar(20) NOT NULL, -- 類型
  position varchar(20), -- 定位
  intro text, -- 角色簡介
  rage_burst text, -- 狂氣爆發
  recommend_evolution smallint, -- 關鍵啟靈
  recommend_evolution_desc text, -- 關鍵啟靈描述
  recommend_destiny_wheels_id smallint[], -- 推薦命輪
  recommend_destiny_wheels_desc text[], -- 推薦命輪描述
  recommend_covenants_id smallint[], -- 推薦密契
  recommend_covenants_desc text[], -- 推薦密契描述
  recommend_teams jsonb[] -- 推薦隊伍 [{ "awaker_id": [], "awaker_position": [], "team_desc": "" }, ...]
);

-- 命輪
CREATE TABLE destiny_wheels (
  id smallint PRIMARY KEY,
  name varchar(20),
  effect text,
  description text,
  recommend_awakers_id smallint[] -- 推薦喚醒體
);

-- 密契
CREATE TABLE covenants (
  id smallint PRIMARY KEY,
  name varchar(20),
  effect text,
  description text,
  recommend_awakers_id smallint[] -- 推薦喚醒體
);

[
  `{ "awaker_id": [31, 20, 16, 31], "awaker_position": ['輸出', '生存', '副C', '輔助'], "team_desc": '主C<span class="text-brown">索蕾爾</span>，利用<span class="text-brown">環行拉蒙娜</span>的狂氣覺醒複製上回合的牌，可以不斷讓<span class="text-brown">索蕾爾</span>生胚胎（<span class="text-red">打擊</span>＋<span class="text-red">珠玉之卵<span>50%胚胎進度），還能微量回血，<span class="text-brown">環行拉蒙娜</span>的<span class="text-red">回環打擊</span>效果也很契合力量隊的輸出模式，可以幫忙打點傷害。推薦拿些算力類造物，<span class="text-brown">環行拉蒙娜</span>很吃算力。但是這隊防禦能力很弱，在進入精英或王關前，建議準備好<span class="text-brown">艾繼絲</span>的<span class="text-red">狂氣爆發<span>，減少道中戰損。' }`,
  `{ "awaker_id": [30, 20, 21, 19], "awaker_position": ['副C', '生存', '生存', '輸出'], "team_desc": '<span class="text-brown">尤烏哈希</span>做主C的配隊，<span class="text-brown">索蕾爾</span>當副C，帶上<span class="text-brown">切割與傷害</span>與<span class="text-brown">扭曲雙子 · 黑</span>密契，全遊最高攻的切割效果會很嚇人。多段傷害的場合用<span class="text-brown">切割與傷害</span>降攻，單發高傷的場合靠死抗，如果是三啟<span class="text-brown">索蕾爾</span>，這隊胚胎一個接一個來。小怪或菁英主要讓<span class="text-brown">索蕾爾</span>狂氣爆發打傷害，到王關盡快讓<span class="text-brown">尤烏哈希</span>吞噬5個以上的胚胎，你會感受到他驚人的長線火力。（當然別忘了給<span class="text-brown">雷婭</span>疊力量）' }`
]

UPDATE awakers
SET recommend_teams = ARRAY[
  JSONB('{"awaker_id": [31, 20, 16, 31], "awaker_position": ["輸出", "生存", "副C", "輔助"], "team_desc": "主C<span class=\"text-brown\">索蕾爾</span>，利用<span class=\"text-brown\">環行拉蒙娜</span>的狂氣覺醒複製上回合的牌，可以不斷讓<span class=\"text-brown\">索蕾爾</span>生胚胎（<span class=\"text-red\">打擊</span>＋<span class=\"text-red\">珠玉之卵</span>50%胚胎進度），還能微量回血，<span class=\"text-brown\">環行拉蒙娜</span>的<span class=\"text-red\">回環打擊</span>效果也很契合力量隊的輸出模式，可以幫忙打點傷害。推薦拿些算力類造物，<span class=\"text-brown\">環行拉蒙娜</span>很吃算力。但是這隊防禦能力很弱，在進入精英或王關前，建議準備好<span class=\"text-brown\">艾繼絲</span>的<span class=\"text-red\">狂氣爆發<span>，減少道中戰損。" }'),
  JSONB('{"awaker_id": [30, 20, 21, 19], "awaker_position": ["副C", "生存", "生存", "輸出"], "team_desc": "<span class=\"text-brown\">尤烏哈希</span>做主C的配隊，<span class=\"text-brown\">索蕾爾</span>當副C，帶上<span class=\"text-brown\">切割與傷害</span>與<span class=\"text-brown\">扭曲雙子 · 黑</span>密契，全遊最高攻的切割效果會很嚇人。多段傷害的場合用<span class=\"text-brown\">切割與傷害</span>降攻，單發高傷的場合靠死抗，如果是三啟<span class=\"text-brown\">索蕾爾</span>，這隊胚胎一個接一個來。小怪或菁英主要讓<span class=\"text-brown\">索蕾爾</span>狂氣爆發打傷害，到王關盡快讓<span class=\"text-brown\">尤烏哈希</span>吞噬5個以上的胚胎，你會感受到他驚人的長線火力。（當然別忘了給<span class=\"text-brown\">雷婭</span>疊力量）" }')
]
WHERE id = 30

SELECT name
FROM awakers
WHERE id=30