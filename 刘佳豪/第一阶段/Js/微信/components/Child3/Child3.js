// components/Child3/Child3.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    msg1:true,
    latitude: 23.099994,
    longitude: 113.324520,
    x:10,
    y:30
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgText(){
      console.log("图片加载完成")
    },
    imgtext(){
      console.log("图片加载失败")
    },
    btn1(){
      this.setData({
        msg1:!this.data.msg1
      })
    },
    td(){
      console.log("拖动")
    }
  }
})
