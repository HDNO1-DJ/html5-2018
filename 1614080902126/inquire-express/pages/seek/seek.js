//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    expressNu: '263659231149',
    message: "待查询信息",
    array: ['中通', '圆通', '顺丰', 'EMS', '申通', '韵达', '天天', '汇通', '全峰', '德邦', '宅急送'],
    objectArray: [
      {
        id: 0, name: 'zhongtong'
      },
      {
        id: 1, name: 'yuantong'
      },
      {
        id: 2, name: 'shunfeng'
      },
      {
        id: 3, name: 'ems'
      },
      {
        id: 4, name: 'shentong'
      },
      {
        id: 5, name: 'yunda'
      },
      {
        id: 6, name: 'tiantian'
      },
      {
        id: 7, name: 'huitongkuaidi'
      },
      {
        id: 8, name: 'quanfengwuliu'
      },
      {
        id: 9, name: 'zhaijisong'
      },
    ],
    index: 0,
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  input: function (e) {
    console.log(e)
    this.setData({ expressNu: e.detail.value })
  },
  btnClick: function () {
    var thisPage = this;
    console.log(this.data.objectArray[this.data.index].name)
    app.getExpressInfo(this.data.expressNu, this.data.objectArray[this.data.index].name, function (data) {
      thisPage.setData({ message: data })
      console.log(data);
    })
  },
  delete: function () {
    this.setData({ message: "待查询信息" })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})



