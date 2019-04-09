import request from '@/utils/request'
export const getVideoDayLength = (day = 7) => request({
  url: 'video/getVideoDayLength',
  method: 'get',
  params: {
    day
  }
})
