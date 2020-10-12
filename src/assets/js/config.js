const config = {
  isTest: false,
  pressList: [
    {
      name: "巧考",
      mark: "qk",
      new_mark: "",
      press: "巧考",
      business_id: 100001,
      product_id: 25,
      app_id: "wx3c59d4cc74739188",
      my_app_id: 69,
      client_id: "qiaokao",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.qk.aphone",
      schema: "qiaokao://",
      beian: "教APP备1100871号",
      appId: 1458305565,
      scope: "com.zhl.qk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.qk.iphone": 187,
        "com.zhl.qk.aphone": 188,
        "com.zhl.qk.aphone.web": 189,
        "com.zhl.qk.iphone.web": 190
      }
    },
    {
      name: "浙教高分",
      mark: "zjqk",
      new_mark: "zjxx",
      press: "浙教高分",
      business_id: 100002,
      product_id: 26,
      client_id: "qiaokao-zjxx",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.zjqk.aphone",
      schema: "zjqiaokao://",
      beian: "教APP备1100857号",
      appId: 1458075703,
      scope: "com.zhl.zjqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.zjqk.iphone": 191,
        "com.zhl.zjqk.aphone": 192,
        "com.zhl.zjqk.aphone.web": 193,
        "com.zhl.zjqk.iphone.web": 194
      }
    },
    {
      name: "优化高分",
      mark: "yhqk",
      new_mark: "yhxx",
      press: "优化高分",
      business_id: 100003,
      product_id: 27,
      client_id: "qiaokao-yhxx",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.yhqk.aphone",
      schema: "yhqiaokao://",
      beian: "教APP备1100827号",
      appId: 1463370037,
      scope: "com.zhl.yhqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.yhqk.iphone": 195,
        "com.zhl.yhqk.aphone": 196,
        "com.zhl.yhqk.aphone.web": 197,
        "com.zhl.yhqk.iphone.web": 198
      }
    },
    {
      name: "闽教高分",
      mark: "mjqk",
      new_mark: "mjxx",
      press: "闽教高分",
      business_id: 100009,
      product_id: 28,
      client_id: "qiaokao-mjxx",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.mjqk.aphone",
      schema: "mjqiaokao://",
      beian: "教APP备1100819号",
      appId: 1471485274,
      scope: "com.zhl.mjqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.mjqk.iphone": 206,
        "com.zhl.mjqk.aphone": 207,
        "com.zhl.mjqk.aphone.web": 208,
        "com.zhl.mjqk.iphone.web": 209
      }
    },
    {
      name: "冀教高分",
      mark: "jjqk",
      new_mark: "jjxx",
      press: "冀教高分",
      business_id: 100007,
      product_id: 29,
      client_id: "qiaokao-jjxx",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.jjqk.aphone",
      schema: "jjqiaokao://",
      beian: "教APP备1100837号",
      appId: 1471485422,
      scope: "com.zhl.jjqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.jjqk.iphone": 210,
        "com.zhl.jjqk.aphone": 211,
        "com.zhl.jjqk.aphone.web": 212,
        "com.zhl.jjqk.iphone.web": 213
      }
    },
    {
      name: "时代高分",
      mark: "asqk",
      new_mark: "sdxx",
      press: "时代高分",
      business_id: 100006,
      product_id: 30,
      client_id: "qiaokao-asxx",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.asqk.aphone",
      schema: "asqiaokao://",
      beian: "教APP备1100835号",
      appId: 1471485657,
      scope: "com.zhl.asqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.asqk.iphone": 214,
        "com.zhl.asqk.aphone": 215,
        "com.zhl.asqk.aphone.web": 216,
        "com.zhl.asqk.iphone.web": 217
      }
    },
    {
      name: "云教高分",
      mark: "yjqk",
      new_mark: "yjgf",
      press: "云教高分",
      business_id: 100012,
      product_id: 31,
      client_id: "qiaokao-yjxx",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.yjqk.aphone",
      schema: "yjqiaokao://",
      beian: "教APP备1100829号",
      appId: 1485838950,
      scope: "com.zhl.yjqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.yjqk.iphone": 218,
        "com.zhl.yjqk.aphone": 219,
        "com.zhl.yjqk.aphone.web": 220,
        "com.zhl.yjqk.iphone.web": 221
      }
    },
    {
      name: "龙教高分",
      mark: "hljqk", // 新增APP时配置Mark形成scope
      new_mark: "ljgf",
      press: "龙教高分",
      business_id: 100022,
      product_id: 32,
      client_id: "qiaokao-hljxx",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.hljqk.aphone",
      schema: "hljqiaokao://",
      beian: "教APP备1100831号",
      appId: 1492779232,
      scope: "com.zhl.hljqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.hljqk.iphone": 248,
        "com.zhl.hljqk.aphone": 249,
        "com.zhl.hljqk.aphone.web": 250,
        "com.zhl.hljqk.iphone.web": 251
      }
    },
    {
      name: "辽海高分",
      mark: "lhqk", // 新增APP时配置Mark形成scope
      new_mark: "lhgf",
      press: "辽海出版社",
      business_id: 100023,
      product_id: 33,
      client_id: "qiaokao-hljxx",
      yyb_address: "",
      schema: "lhqiaokao://",
      beian: "教APP备1101585号",
      appId: 1497862734,
      scope: "com.zhl.lhqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.lhqk.iphone": 259,
        "com.zhl.lhqk.aphone": 260,
        "com.zhl.lhqk.aphone.web": 261,
        "com.zhl.lhqk.iphone.web": 262
      }
    },
    {
      name: "湖北教育中学版",
      mark: "hbqk", // 新增APP时配置Mark形成scope
      new_mark: "hbjy",
      press: "湖北教育中学版",
      business_id: 100020,
      product_id: 34,
      client_id: "qiaokao-hljxx",
      yyb_address: "",
      schema: "hbjqiaokao://",
      beian: "教APP备1101587号",
      appId: 1497863030,
      scope: "com.zhl.hbqk.aphone",
      msg: "湖北中小学在线学习平台",
      scope_Obj: {
        "com.zhl.hbqk.iphone": 263,
        "com.zhl.hbqk.aphone": 264,
        "com.zhl.hbqk.aphone.web": 265,
        "com.zhl.hbqk.iphone.web": 266
      }
    },
    {
      name: "长少高分",
      mark: "csqk", // 新增APP时配置Mark形成scope
      new_mark: "csgf",
      press: "长少高分",
      business_id: 100025,
      product_id: 35,
      client_id: "qiaokao-hljxx",
      yyb_address: "",
      schema: "csqiaokao://",
      beian: "教APP备1101583号",
      appId: 1497863226,
      scope: "com.zhl.csqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.csqk.iphone": 267,
        "com.zhl.csqk.aphone": 268,
        "com.zhl.csqk.aphone.web": 269,
        "com.zhl.csqk.iphone.web": 270
      }
    },
    {
      name: "名校学习",
      mark: "sjhzqk", // 新增APP时配置Mark形成scope
      new_mark: "mxxx",
      press: "名校学习",
      business_id: 100024,
      product_id: 36,
      client_id: "qiaokao-hljxx",
      yyb_address:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.zhl.sjhzqk.aphone",
      schema: "mxqiaokao://",
      beian: "教APP备1101581号",
      appId: 1497863295,
      scope: "com.zhl.sjhzqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.sjhzqk.iphone": 271,
        "com.zhl.sjhzqk.aphone": 272,
        "com.zhl.sjhzqk.aphone.web": 273,
        "com.zhl.sjhzqk.iphone.web": 274
      }
    },

    {
      name: "渝快学中学版",
      mark: "yujiaoqk", // 新增APP时配置Mark形成scope
      new_mark: "ykx",
      press: "渝快学中学版",
      business_id: 100027,
      product_id: 37,
      client_id: "qiaokao-yujiaoxx",
      yyb_address: "",
      schema: "ykxqiaokao://",
      beian: "教APP备1101733号",
      appId: 1500389287,
      scope: "com.zhl.yujiaoqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.yujiaoqk.iphone": 293,
        "com.zhl.yujiaoqk.aphone": 294,
        "com.zhl.yujiaoqk.aphone.web": 295,
        "com.zhl.yujiaoqk.iphone.web": 296
      }
    },
    {
      name: "桂教高分",
      mark: "guijiaoqk", // 新增APP时配置Mark形成scope
      new_mark: "gjgf", // 官网用的后缀
      press: "桂教高分",
      business_id: 100028,
      product_id: 38,
      client_id: "qiaokao-guijiaoxx",
      yyb_address: "",
      schema: "gjqiaokao://",
      beian: "教APP备1101731号",
      appId: 1500680538,
      scope: "com.zhl.guijiaoqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.guijiaoqk.iphone": 297,
        "com.zhl.guijiaoqk.aphone": 298,
        "com.zhl.guijiaoqk.aphone.web": 299,
        "com.zhl.guijiaoqk.iphone.web": 300
      }
    },
    {
      name: "苏科优学中学版",
      mark: "skqk", // 新增APP时配置Mark形成scope
      new_mark: "skyx", // 官网用的后缀
      press: "苏科优学中学版",
      business_id: 100029,
      product_id: 62,
      client_id: "qiaokao-skxx",
      yyb_address: "",
      schema: "skqiaokao://",
      beian: "教APP备1101996号",
      appId: 1508444718,
      scope: "com.zhl.skqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.skqk.iphone": 321,
        "com.zhl.skqk.aphone": 322,
        "com.zhl.skqk.aphone.web": 323,
        "com.zhl.skqk.iphone.web": 324
      }
    },
    {
      name: "海教高分",
      mark: "haijiaoqk", // 新增APP时配置Mark形成scope
      new_mark: "hjgf", // 官网用的后缀
      press: "海教高分",
      business_id: 100031,
      product_id: 56,
      client_id: "qiaokao-haijiaoxx",
      yyb_address: "",
      schema: "hjqiaokao://",
      beian: "教APP备1102132号",
      appId: 1513876490,
      scope: "com.zhl.haijiaoqk.aphone",
      msg: "智能数字教辅学习平台",
      scope_Obj: {
        "com.zhl.haijiaoqk.iphone": 331,
        "com.zhl.haijiaoqk.aphone": 332,
        "com.zhl.haijiaoqk.aphone.web": 333,
        "com.zhl.haijiaoqk.iphone.web": 334
      }
    }
  ],
  getQueryString(name) {
    var result = location.search.match(
      new RegExp("[?&]" + name + "=([^&]+)", "i")
    );
    if (result == null || result.length < 1) {
      return "";
    }
    return result[1];
  },
  getArgs() {
    var args = new Object();
    var query = !window.location.search
      ? window.location.hash.substring(window.location.hash.indexOf("?") + 1)
      : window.location.search.substring(1);
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pos = pairs[i].indexOf("=");
      if (pos == -1) continue;
      var argname = pairs[i].substring(0, pos);
      var value = pairs[i].substring(pos + 1);
      value = decodeURIComponent(value);
      args[argname] = value;
    }
    return args;
  }
};
export default config;
