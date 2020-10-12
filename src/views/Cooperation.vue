<template>
  <div class="content">
    <div class="headerBox">
      <div class="wrapper">
        <div class="headerNav">
          <Header />
        </div>
        <div class="subTitle">让学习更有效、更有趣
        </div>
        <div class="title">智慧流智能数字教辅
        </div>
      </div>
    </div>
    <div class="cont">
      <div class="wrapper">
        <div class="center">
          <div class="titleHeader">
            <div class="line"></div>
            <div class="subTitle">智慧流模式</div>
            <div class="title">帮助出版社打造数字出版4大核心能力
            </div>
          </div>
          <div class="item">
            <div class="con">
              <div class="subMsg">智慧流帮助出版社打造出版社自己的
              </div>
              <div class="conTitle">数字教辅强势品牌
              </div>
              <div class="conSubTitle">出版社打造自己的品牌，才算自己的业绩
              </div>
              <div class="msg">
                互联网时代，教育服务在网络空间中已无处不在，智慧流将帮助出版社树
                立辨识度高、具有持久、广泛影响力的K12数字教辅品牌，为产品打开
                “聚光灯”，助力出版社在数字出版行业红海战场中突围。
              </div>
            </div>
            <div class="circle">
              <div class="name">品牌</div>
              <TouchRipple :centerRipple="true" />
            </div>
          </div>
          <div class="item">

            <div class="circle">
              <div class="name">内容</div>
              <TouchRipple :centerRipple="true" />
            </div>
            <div class="con">
              <div class="subMsg">智慧流帮助出版社打造出版社自己的
              </div>
              <div class="conTitle">教育优质内容平台

              </div>
              <div class="conSubTitle">发挥优质内容的平台优势，做大知识付费产业

              </div>
              <div class="msg">
                知识付费时代，优质内容是用户付费转化关键。智慧流将与出版社共同建
                立K12覆盖全学科、全学段的优质内容平台，出版社无需自建，真正实现
                "低投入，高产出”。

              </div>
            </div>
          </div>
          <div class="item">
            <div class="con">
              <div class="subMsg">智慧流帮助出版社打造出版社自己的
              </div>
              <div class="conTitle">教育产品在线销售渠道

              </div>
              <div class="conSubTitle">掌控在线销售渠道，带动数字出版全面发展

              </div>
              <div class="msg">
                智慧流帮助出版社打造“智能数字教辅产品闭环”，涵盖PC端、移动端
                APP、小程序等各种互联网产品形态的在线销售渠道，必将带动出版社数
                字出版的快速发展。

              </div>
            </div>
            <div class="circle">
              <div class="name">渠道</div>
              <TouchRipple :centerRipple="true" />
            </div>
          </div>
          <div class="item">
            <div class="circle">
              <div class="name">数据</div>
              <TouchRipple :centerRipple="true" />
            </div>
            <div class="con">
              <div class="subMsg">智慧流帮助出版社打造出版社自己的
              </div>
              <div class="conTitle">用户大数据平台

              </div>
              <div class="conSubTitle">用户大数据，精准营销、精准效果

              </div>
              <div class="msg">
                精准营销时代，掌握用户个性化数据，便能在激烈的市场竞争中抢占先
                机。智慧流作为国家级高新技术企业，人工智能、大数据、云计算技术领
                先行业。智慧流将助力出版社建立K12教育用户的大数据画像分析平台，
                精准分析用户需求。

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TouchRipple from '@/components/clickActive/TouchRipple'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Cooperation',
  components: {
    Footer,
    Header,
    TouchRipple
  },
  data() {
    return {
    }
  },
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style lang="less" scoped>
.content {
  .wrapper {
    width: 1200px;
    margin: 0 auto;
  }
  .headerBox {
    height: 412px;
    overflow: hidden;
    background: #3550a0;
    .wrapper {
      height: 100%;
      background: url('../assets/img/cbsHeader.png') no-repeat top;
      padding-top: 30px;
      .headerNav {
        width: 100%;
        height: 40px;
      }
      .title {
        font-size: 42px;
        line-height: 42px;
        letter-spacing: 1px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        color: #fff;
        text-align: center;
      }
      .subTitle {
        margin-top: 85px;
        margin-bottom: 15px;
        font-size: 20px;
        color: #fff;
        line-height: 20px;
        letter-spacing: 12px;
        text-align: center;
      }
    }
  }
  .cont {
    background: #3550a0;
    .wrapper {
      padding: 0px 40px;
      padding-bottom: 126px;
      box-sizing: border-box;
      .center {
        border-radius: 15px;
        background: #fff;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        padding: 90px 70px;
        padding-bottom: 70px;
        box-sizing: border-box;
        .titleHeader {
          .line {
            width: 80px;
            height: 3px;
            border-radius: 3px;
            background: #3550a0;
            margin-bottom: 18px;
          }
          .subTitle {
            font-size: 36px;
            line-height: 36px;
            color: #3550a0;
            margin-bottom: 18px;
            letter-spacing: 1px;
          }
          .title {
            font-size: 40px;
            line-height: 40px;
            letter-spacing: 2px;
            color: #3550a0;
            font-weight: bold;
          }
        }
        .item {
          height: 450px;
          border-bottom: 1px solid #e6e6e6;
          display: flex;
          align-items: center;
          padding: 0 20px;
          box-sizing: border-box;
          justify-content: space-between;
          &:nth-child(2n) {
            .con {
              .subMsg,
              .conTitle,
              .conSubTitle {
                text-align: left;
              }
            }
          }
          &:last-child {
            border: 0;
          }
          .circle {
            flex-shrink: 0;
            position: relative;
            overflow: hidden;
            width: 320px;
            height: 320px;
            border-radius: 320px;
            background: linear-gradient(to right, #ebedff, #e7e0ff);
            display: flex;
            justify-content: center;
            align-items: center;
            .name {
              width: 182px;
              height: 182px;
              border-radius: 182px;
              background: linear-gradient(to right, #a9afff, #9c84ff);
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 40px;
              line-height: normal;
              color: #fff;
              font-weight: bold;
            }
          }
          &:nth-child(2) {
            .circle {
              background: linear-gradient(to right, #ffdcdb, #ffe8d7);
              .name {
                background: linear-gradient(to right, #ff6a69, #ff9d56);
              }
            }
          }
          &:nth-child(3) {
            .circle {
              background: linear-gradient(to right, #def6f1, #def6f1);
              .name {
                background: linear-gradient(to right, #42ff5d, #76d5d4);
              }
            }
          }
          &:nth-child(4) {
            .circle {
              background: linear-gradient(to right, #d6ebff, #d6e4ff);
              .name {
                background: linear-gradient(to right, #55a9ff, #5592ff);
              }
            }
          }
        }
        .con {
          width: 550px;
          .subMsg {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 12px;
            color: #333;
            font-weight: 500;
            text-align: right;
          }
          .conTitle {
            font-size: 34px;
            line-height: 34px;
            margin-bottom: 24px;
            color: #da3472;
            font-weight: bold;
            text-align: right;
          }
          .conSubTitle {
            font-size: 27px;
            line-height: 27px;
            margin-bottom: 10px;
            color: #333;
            font-weight: 500;
            text-align: right;
          }
        }
        .msg {
          font-size: 16px;
          line-height: 30px;
          text-align: justify;
          margin-bottom: 25px;
          color: #333;
        }
      }
    }
  }
}
</style>
