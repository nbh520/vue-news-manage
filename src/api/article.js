import request from '@/utils/request'

export const createArticle = data => {
  return request({
    url: 'article/create',
    method: 'post',
    data
  })
}
export const updateArticle = data => {
  return request({
    url: 'article/updateArticle',
    method: 'post',
    data
  })
}
export const articleList = query => {
  return request({
    url: 'article/getPageNews',
    method: 'post',
    data: query
  })
}
