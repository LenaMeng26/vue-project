// 用mockjs模拟生成数据
// 引入模块
var Mock = require("mockjs");

// node app.js 要求db.js 暴露一个object
let mapData = (n) => {
  let data = [];

  for (let i = 1; i <= n; i++) {
    data.push({
      _aId: i + "",
      aId: i + "",
      image: "./imgs/author" + i + ".png",
      author: "@cname()",
      sign: "@ctitle(3,4)",
      content: "@cparagraph(3)",
    });
  }

  return data;
};

let mapData2 = (n) => {
  let data = [];

  for (let i = 1; i <= n; i++) {
    data.push({
      gId: i + "",
      title: "@ctitle(2,4)",
      author: "@cname()",
      content: "@cparagraph(3)",
      contents: [1, 2]
        .map(
          () =>
            "<p style='margin-top: 20px;text-indent: 2em'>" +
            "@cparagraph(5,10)" +
            "</p>"
        )
        .join(""),
      image: "./imgs/book" + i + ".png",
      date: '@date("yyyy-MM-dd")',
    });
  }

  return data;
};
let banner = (n) => {
  let data = [];

  for (let i = 1; i <= n; i++) {
    data.push({
      _gId: i + "",
      gId: i + "",
      banner: "./imgs/banner" + i + ".png",
      title: "@ctitle(3,5)",
      content: "@cparagraph(3)",
    });
  }

  return data;
};

module.exports = Mock.mock({
  user: {
    "uId|+1": 0,
    userName: Mock.Random.cname(),
    password: /^\d{6}$/,
    email: Mock.Random.email(),
    phone: /^1{1}[3-9]{1}\d{9}$/,
    icon: './imgs/user.png',
    "msgNum|1-20": 20,
    "friNum|1-10": 10,
    "friNums|10-30": 30,
    time: Mock.Random.now(),
  },
  book: mapData2(6),
  book_one: mapData2(1),
  auto: mapData(6),
  banner: banner(3),
});
