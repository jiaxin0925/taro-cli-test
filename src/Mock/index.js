import Mock from 'mockjs';


const data = Mock.mock({
  'lists|80-100': [
    {
      id: "@increment",
      "title|+1": titles,
      isbn: "@natural(9781782910284, 9981782910284)",
      publisher: "上海人民出版社",
      pubdate: "@date",
      "author|+1": authors,
      translator: "@cname",
      binding: "精装",
      price: "@float(60, 100, 2, 2)",
      pages: "@integer(60, 100)",
      words: "@integer(60, 100)",
      tags: ["小说", "文学", "名著"],
      score: "@float(0, 10, 1, 1)",
      review_num: "@integer(60, 100)",
      "image|+1": images,
      introduction:
        "12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。\n成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？\n故事如此残忍而又美丽，作者以温暖细腻的笔法勾勒人性的本质与救赎，读来令人荡气回肠。"
    }
  ]
})

module.exports = {
  data
}
