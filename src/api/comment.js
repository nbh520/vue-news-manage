import request from '@/utils/request'

export const getCommentDayLength = (day = 7) => request({
  url: 'comment/getCommentDayLength',
  method: 'get',
  params: {
    day
  }
})

// 获取评论总数
export const getALLCommentLength = () => request({
  url: 'comment/getALLCommentLength',
  method: 'get'
})
