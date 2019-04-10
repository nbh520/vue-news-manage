import request from '@/utils/request'
export const getVideoDayLength = (day = 7) => request({
  url: 'video/getVideoDayLength',
  method: 'get',
  params: {
    day
  }
})

// 获取视频总数
export const getALLVideoLength = () => request({
  url: 'video/getALLVideoLength',
  method: 'get'
})
