//index.js
Page({
  data: {
    result: 'asd'
  },

  onLoad: function() {
    console.log("this is login page")
    console.log(this.data.result)
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    self=this
    wx.request({
      url:'https://chenth.net/login_wx',
      data:{
        username:e.detail.value.username,
        password:e.detail.value.password
      },
      method:'POST',
      header:{
        'content-type':'application/json'
      },
      //self=this,
      success:function(res){
        console.log("--------chenth success--------");
        console.log(res.data);
        self.setData({
          result: res.data
        })
      },
      fail:function(res){
        console.log("--------chenth fail--------");
        self.setData({
          result: res.data
        })
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})
