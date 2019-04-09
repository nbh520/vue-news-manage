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

// 获取文章总数
export const articleLength = () => request({
  url: 'article/getALLNewsLength',
  method: 'get'
})

// 获取？天至今天的文章数
export const getNewsDayLength = (day = 7) => request({
  url: 'article/getNewsDayLength',
  method: 'get',
  params: {
    day
  }
})

