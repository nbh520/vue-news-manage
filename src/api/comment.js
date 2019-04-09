import request from '@/utils/request'

export const getCommentDayLength = (day = 7) => request({
  url: 'comment/getCommentDayLength',
  method: 'get',
  params: {
    day
  }
})
