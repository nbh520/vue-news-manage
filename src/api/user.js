import request from '@/utils/request'

export const getUserDayLength = (day = 7) => request({
  url: 'user/getUserDayLength',
  method: 'get',
  params: {
    day
  }
})

// 查询用户地区分布
export const queryUserAddress = () => request({
  url: 'user/queryUserAddress',
  method: 'get'
})
