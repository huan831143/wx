Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    locale:[
        {
          imgs:"../../imgs/1.jpg",
          texts:"小丸子啊小丸子"
        },
        {
          imgs: "../../imgs/2.jpg",
          texts: "萌萌哒小丸子啊萌萌"
        },
        {
          imgs: "../../imgs/3.jpg",
          texts: "小丸子啊小丸子"
        },
        {
          imgs: "../../imgs/4.jpg",
          texts: "萌萌哒小丸子啊萌萌"
        },
        {
          imgs: "../../imgs/1.jpg",
          texts: "小丸子啊小丸子"
        },
        {
          imgs: "../../imgs/2.jpg",
          texts: "萌萌哒小丸子啊萌萌"
        },
        {
          imgs: "../../imgs/3.jpg",
          texts: "小丸子啊小丸子"
        },
        {
          imgs: "../../imgs/4.jpg",
          texts: "萌萌哒小丸子啊萌萌"
        }

    ],
    life:[
      {
        imgs: "../../imgs/01.jpg",
        texts: "徐云龙争顶"
      },
      {
        imgs: "../../imgs/02.jpg",
        texts: "马季奇向裁判示意对手拉扯武磊进球后腿抽筋"
      },
      {
        imgs: "../../imgs/01.jpg",
        texts: "徐云龙争顶"
      },
      {
        imgs: "../../imgs/02.jpg",
        texts: "马季奇向裁判示意对手拉扯武磊进球后腿抽筋"
      },
      {
        imgs: "../../imgs/01.jpg",
        texts: "徐云龙争顶"
      },
      {
        imgs: "../../imgs/02.jpg",
        texts: "马季奇向裁判示意对手拉扯武磊进球后腿抽筋"
      },
      {
        imgs: "../../imgs/01.jpg",
        texts: "徐云龙争顶"
      },
      {
        imgs: "../../imgs/02.jpg",
        texts: "马季奇向裁判示意对手拉扯武磊进球后腿抽筋"
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  change: function (e){
    var _this = this;
    _this.setData({ currentTab: e.detail.current });
  },
  claChange:function(e){
    var _this=this;    
    _this.setData({
      currentTab: e.target.dataset.current - 0
    })
  }
})