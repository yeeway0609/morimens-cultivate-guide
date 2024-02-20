CREATE DATABASE morimens-cultivate-guide-db;
USE morimens-cultivate-guide-db;

-- 喚醒體
CREATE TABLE awakers (
  id INT PRIMARY KEY,
  name TEXT NOT NULL,
  career TEXT NOT NULL, -- 界域
  type TEXT NOT NULL, -- 類型
  position TEXT, -- 定位
  intro TEXT, -- 角色簡介
  rage_burst TEXT, -- 狂氣爆發
  recommend_evolution INT, -- 關鍵啟靈
  recommend_evolution_desc TEXT, -- 關鍵啟靈描述
  recommend_destiny_wheels_id INT[], -- 推薦命輪
  recommend_destiny_wheels_desc TEXT[], -- 推薦命輪描述
  recommend_covenants_id INT[], -- 推薦密契
  recommend_covenants_desc TEXT[], -- 推薦密契描述
  recommend_teams JSONB -- 推薦隊伍 [{ "awaker_id": [], "awaker_position": [], "team_desc": "" }, ...]
);

-- 命輪
CREATE TABLE destiny_wheels (
  id INT PRIMARY KEY,
  name TEXT,
  effect TEXT,
  description TEXT,
  recommend_awakers_id INT[] -- 推薦喚醒體
);

-- 密契
CREATE TABLE covenants (
  id INT PRIMARY KEY,
  name TEXT,
  effect TEXT,
  description TEXT,
  recommend_awakers_id INT[] -- 推薦喚醒體
);