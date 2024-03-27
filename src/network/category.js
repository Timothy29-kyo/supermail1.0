import { request } from "./request";
//请求数据
// export function getCategory() {
//   return request({
//     url: '/category'
//   }).catch(err => err)
// }

// export function getSubcategory(maitKey) {
//   return request({
//     url: '/subcategory',
//     params: {
//       maitKey
//     }
//   }).catch(err => err)
// }

// export function getCategoryDetail(miniWallkey) {
//   return request({
//     url: '/subcategory/detail',
//     params: {
//       miniWallkey
//     }
//   }).catch(err => err)
// }

export function getAllCategory() {
  return request({
    url: '/category'
  })
}
export function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}