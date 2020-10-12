<template>
  <div class="footerBox">
    <div class="footerCount">
      <div class="left">
        <div class="footerItem">
          <div class="title">关于智慧流</div>
          <ul>
            <li><a href="JavaScript:;">公司简介</a></li>
            <li><a href="JavaScript:;">企业荣誉</a></li>
            <li><a href="JavaScript:;">教育公益</a></li>
            <li><a href="JavaScript:;">党建专栏</a></li>
          </ul>
        </div>
        <div class="footerItem">
          <div class="title">加入智慧流</div>
          <ul>
            <li><a href="JavaScript:;">社会招聘</a></li>
            <li><a href="JavaScript:;">校园招聘</a></li>
            <li><a href="JavaScript:;">智慧流学院</a></li>
          </ul>
        </div>
        <div class="footerItem">
          <div class="title">用户服务</div>
          <ul>
            <li><a href="JavaScript:;">意见反馈</a></li>
            <li><a href="JavaScript:;">投诉监督</a></li>
            <li><a href="JavaScript:;">隐私保护 </a></li>
          </ul>
        </div>
        <div class="footerItem">
          <div class="title">商务合作</div>
          <ul>
            <li><a href="/cooperation">出版社合作</a></li>
            <li><a href="/cooperation">学校合作</a></li>
            <li><a href="/cooperation">优质内容合作</a></li>
            <li><a href="/cooperation">教育公益合作</a></li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="codeItem">
          <div class="title">关注我们</div>
          <img class="code"
               src="../assets/img/zhlcode.png"
               alt="智慧流公众号" />
          <div class="name">官方微信</div>
        </div>
        <div class="codeItem">
          <div class="xin">
            <img src="../assets/img/xin.png"
                 alt="官方微博" />
            <a href="https://weibo.com/u/5688712561"
               target="_blanck">官方微博</a>
          </div>
          <img class="code"
               src="../assets/img/qjcode.png"
               alt="智慧流公众号" />
          <div class="name">教师服务微信</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p class="copyright">
        Copyright
        © 2015-2019 智慧流版权所有
      </p>
      <p class="msg">
        京ICP证080047号
        <span>京ICP备15042556号-1</span>
        工商营业执照
      </p>
      <div class="beian">
        <a target="_blank"
           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802030160"
           style="text-decoration:none;height:20px;line-height:20px;">
          <img src="../assets/img/beian.png" />
          <p style="height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">京公网安备 11010802030160号</p>
        </a>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.footerBox {
  width: 100%;
  background: #fff;
  .footerCount {
    height: 230px;
    background: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      display: flex;
      margin-right: 140px;
      .footerItem {
        height: 144px;
        border-left: 1px solid #dddddd;
        padding-left: 24px;
        margin-left: 80px;
        &:first-child {
          margin-left: 0;
          border: 0;
        }
        .title {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 12px;
          color: #333;
          font-weight: bold;
        }
        a {
          line-height: 30px;
          font-size: 14px;
          color: #595959;
          &:hover {
            color: #333;
          }
          &:active {
            color: #595959;
          }
        }
      }
    }
    .right {
      display: flex;
      .codeItem {
        margin-right: 22px;
        .title {
          font-size: 15px;
          line-height: 15px;
          margin-bottom: 10px;
          font-weight: bold;
          color: #333;
        }
        .code {
          width: 96px;
          height: 96px;
        }
        .name {
          text-align: center;
          font-size: 12px;
          line-height: 12px;
          margin-top: 5px;
          color: #595959;
        }
        .xin {
          height: 15px;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          a {
            font-size: 12px;
            color: #595959;
            margin-left: 5px;
            &:hover {
              color: #333;
            }
            &:active {
              color: #595959;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 127px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    .copyright {
      color: #999;
    }
    .msg {
      color: #999;
      margin-top: 10px;
      span {
        margin: 0 10px;
      }
    }
    .beian {
      width: 300px;
      margin: 0 auto;
      padding: 20px 0;
      padding-top: 10px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>
