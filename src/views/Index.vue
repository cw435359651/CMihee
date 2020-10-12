<template>
  <div class="content">
    <div class="headerBox">
      <div class="wrapper">
        <div class="headerNav">
          <Header />
        </div>
        <div class="title">智能数字教辅
        </div>
        <div class="subTitle">让学习更有效、更有趣
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="wrapper">
        <div class="bannerBox">
          <div class="left">
            <div class="subTitle">智慧流致力于</div>
            <div class="title">用科技让教育更普惠</div>
            <div class="msg">
              中国有近 2 亿的中小学生，同时，中国的地域差距造
              成教育资源分布不均衡。互联网科技产品的一大特点
              是∶提供服务的边际成本是递减的。可以预见的是，
              在未来，科技将成为中国教育普惠的最重要力量。<br>
              我们相信，基于纸质教材及教辅的智能数字教辅必将
              在这一过程中发挥重大的作用。智慧流作为智能数字
              教辅3.0的创新引领者也将尽所能的为中国的教育普惠
              贡献力量。
            </div>
          </div>
          <img src="../assets/img/index_banner.png"
               alt="好好学习天天向上" />
        </div>
      </div>
    </div>
    <div class="cont">
      <div class="line l1"></div>
      <div class="wrapper">
        <div class="subTitle">为什么越来越多的学生和家长都选择
        </div>
        <div class="title">智慧流智能数字教辅
        </div>
        <div class="contItem">
          <img src="../assets/img/cont1.png" />
          <div class="msgBox">
            <div class="msgTitle">让学习更有效</div>
            <div class="msg">学习的有效包含两层含义:有效果和有效率。学习先要有
              效果，然后才是有效率。在中小学，传统的学习方式最重
              要的学习工具就是纸质的教材教辅。相对于传统的学习方
              式，智慧流智能数字教辅有着天然的优势。智慧流智能数
              字教辅通过人工智能、大数据技术对于各学科、各学段、
              各模块的知识点能够进行精准的解构，并对每一个学习者
              编绘干人千面的“个性化学习画像”，最终帮助学习者达
              到更好的学习效果，同时大幅提升学习效率。
            </div>
          </div>
        </div>
        <div class="contItem">
          <div class="msgBox">
            <div class="msgTitle">让学习更有趣</div>
            <div class="msg">学习本质的乐趣在于对知识求知欲的驱动下所获得的成就
              感。智能设备在人机交互方面的先天优势能够在学习过程
              的有趣性方面有着巨大的价值。智慧流智能数字教辅依托
              认知心理学进行底层的架构设计，对各学科的知识点及题
              库依据学科特征进行科学分解，通过游戏化学习的机制进
              行设计，帮助学习者的学习过程变得更有乐趣。
            </div>
          </div>
          <img src="../assets/img/cont2.png" />
        </div>
      </div>
      <div class="line l2"></div>
    </div>
    <div class="cbsBox">
      <div class="wrapper">
        <div class="conBox">
          <div class="subTitle">出版行业的领先者们都选择与智慧流
          </div>
          <div class="title">—起迈进智能数字教辅 3.0 的新时代</div>
          <div class="cbsList">
            <template v-for="(item, i) in cbsList">
              <div class="cbs"
                   v-if="item.business_id != 100001"
                   :key="i">
                <img :class="item.business_id == 100012 ? 'small':''"
                     :src="require('../assets/img/cbs/'+ item.business_id +'.png')"
                     alt=""
                     srcset="">
              </div>
            </template>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import config from '@/assets/js/config.js'
// import TouchRipple from '@/components/clickActive/TouchRipple' // 点击特效的组件
// import zhlGodPolicy from '@/assets/js/zhl_god_policy'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Index',
  components: {
    Footer,
    Header
  },
  data() {
    return {
      cbsList: []
    }
  },
  created() {
    this.cbsList = config.pressList
  },
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
    height: 646px;
    overflow: hidden;
    background: #1fa8fc;
    .wrapper {
      height: 100%;
      background: url('../assets/img/index_header.png') no-repeat top;
      padding-top: 30px;
      .headerNav {
        width: 100%;
        height: 40px;
      }
      .title {
        font-size: 60px;
        line-height: 60px;
        letter-spacing: 1px;
        font-weight: bold;
        margin-bottom: 24px;
        margin-top: 200px;
        padding-left: 120px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        color: #fff;
      }
      .subTitle {
        font-size: 28px;
        color: #fff;
        line-height: 28px;
        letter-spacing: 2px;
        padding-left: 120px;
      }
    }
  }
  .banner {
    background: #1fa8fc;
    .wrapper {
      padding: 0 40px;
      padding-bottom: 32px;
      box-sizing: border-box;
      .bannerBox {
        background: #fff;
        display: flex;
        border-radius: 15px;
        overflow: hidden;
        padding: 0 55px;
        .left {
          flex: 1;
          overflow: hidden;
          padding-left: 30px;
          padding-top: 60px;
          padding-bottom: 60px;
          margin-right: 55px;
          .subTitle {
            font-size: 32px;
            color: #333;
            line-height: 32px;
            margin-bottom: 15px;
          }
          .title {
            font-size: 38px;
            color: #333;
            line-height: 38px;
            font-weight: bold;
            margin-bottom: 25px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          }
          .msg {
            line-height: 30px;
            font-size: 17.5px;
            color: #5e5e5e;
            text-align: justify;
          }
        }
      }
    }
  }
  .cont {
    position: relative;
    background: #d6f6fc;
    overflow: hidden;
    background: #f6f6f6 url('../assets/img/index_contentbg.png') no-repeat top;
    background-size: 100% 100%;
    .line {
      height: 25px;
      width: 100%;
      background: url('../assets/img/yuan.png');
      background-size: 25px 25px;
      position: absolute;
      z-index: 1;
      &.l1 {
        top: -12.5px;
      }
      &.l2 {
        bottom: -12.5px;
      }
    }
    .wrapper {
      padding: 13px 0;

      .subTitle {
        font-size: 26px;
        line-height: 26px;
        margin-top: 100px;
        margin-bottom: 25px;
        color: #333;
        letter-spacing: 15px;
        text-align: center;
      }
      .title {
        font-size: 50px;
        line-height: 50px;
        font-weight: bold;
        color: #333;
        text-align: center;
        letter-spacing: 4px;
        margin-bottom: 80px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }
      .contItem {
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 0 70px;
        overflow: hidden;
        .msgBox {
          flex: 1;
          overflow: hidden;
          padding-left: 80px;
          padding-right: 50px;
          .msgTitle {
            font-size: 36px;
            line-height: 36px;
            font-weight: bold;
            letter-spacing: 1px;
            color: #f05d28;
            margin-bottom: 15px;
          }
          .msg {
            font-size: 18px;
            line-height: 30px;
            color: #333;
            text-align: justify;
          }
        }
        &:last-child {
          margin-bottom: 38px;
          img {
            margin-right: 13px;
          }
          .msgBox {
            padding-left: 55px;
            padding-right: 92px;
          }
        }
      }
    }
  }
  .cbsBox {
    overflow: hidden;
    background: #1fa8fc;
    .wrapper {
      background: url('../assets/img/index_footer.png') no-repeat top;
      .conBox {
        padding: 50px 0;
        .subTitle {
          text-align: center;
          font-size: 30px;
          line-height: 30px;
          color: #fff;
          letter-spacing: 4px;
          margin-bottom: 15px;
        }
        .title {
          font-size: 45px;
          color: #fff;
          line-height: 45px;
          margin-bottom: 60px;
          text-align: center;
          font-weight: bold;
          letter-spacing: 1px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .cbsList {
          width: 1035px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          .cbs {
            width: 240px;
            height: 70px;
            margin-bottom: 25px;
            margin-right: 25px;
            background: #fff;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
            img {
              width: 180px;
              &.small {
                width: 120px;
              }
            }
            &:hover {
              transform: scale(1.05);
            }
            &:nth-child(4n) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
