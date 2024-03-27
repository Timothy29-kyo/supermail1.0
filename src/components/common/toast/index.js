import Toast from './toast'

const obj = {}

obj.install = function (Vue) {
  //undifined
  // console.log(Toast.$el);
  // document.body.appendChild(Toast.$el)

  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2.new的方式，根据组件构造器
  const toast = new toastConstructor()

  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4.此时toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast


}
export default obj