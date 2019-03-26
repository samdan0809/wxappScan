
const app = getApp()

Page({
  data: {
     qrCodeResult:"",
     scanType: ['QR_CODE', 'AZTEC', 'CODABAR', 'CODE_93', 'CODE_128', 'DATA_MATRIX', 'EAN_8', 'EAN_13', 'ITF', 'MAXICODE', 'PDF_417', 'RSS_14', 'RSS_EXPANDED', 'UPC_A', 'UPC_E', 'UPC_EAN_EXTENSION', 'WX_CODE','CODE_25']
  },  
  startScan: function() {
    var that=this;
    wx.scanCode({
      scanType: that.data.scanType,
      success:function(res){
        that.setData({
          qrCodeResult: res.result
        });
          console.log(res);
      }
    })
  },
  onLoad: function () {
   
  } 
})
