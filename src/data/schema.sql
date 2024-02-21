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
  recommend_teams jsonb -- 推薦隊伍 [{ "awaker_id": [], "awaker_position": [], "team_desc": "" }, ...]
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