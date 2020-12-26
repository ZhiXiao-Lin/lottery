/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 0,
    title: "",
    text: "抽奖结束",
  },
  {
    type: 1,
    count: 1,
    text: "特等奖",
    title: "神秘大礼",
    img: "../img/secrit.jpg",
  },
  {
    type: 2,
    count: 3,
    text: "一等奖",
    title: "语数外试卷",
    img: "../img/mbp.jpg",
  },
  {
    type: 3,
    count: 3,
    text: "二等奖",
    title: "薯片",
    img: "../img/huawei.png",
  },
  {
    type: 4,
    count: 3,
    text: "三等奖",
    title: "AD钙奶",
    img: "../img/ipad.jpg",
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "MoShang";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY,
};
