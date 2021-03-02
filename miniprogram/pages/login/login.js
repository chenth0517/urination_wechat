//index.js
Page({
  onLoad: function() {
    console.log("this is login page")
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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
      success:function(res){
        console.log("--------chenth success--------");
        console.log(res.data);
      },
      fail:function(res){
        console.log("--------chenth fail--------");
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})
