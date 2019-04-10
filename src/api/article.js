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

// 根据id获取新闻内容
export const getNewsById = (id) => request({
  url: 'article/getNewsById',
  method: 'get',
  params: {
    id
  }
})

// 根据id将新闻的status改为del
export const deleteNewsById = (id) => request({
  url: 'article/deleteNewsById',
  method: 'post',
  data: {
    id
  }
})

// 根据id改变新闻的status值
export const updateNewsStatusById = (id, status) => request({
  url: 'article/updateNewsStatusById',
  method: 'post',
  data: {
    id,
    status
  }
})
