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

// 获取用户总数
export const getALLUserLength = () => request({
  url: 'user/getALLUserLength',
  method: 'get'
})

// 获取用户列表
export const getUserList = ({ pageSize = 10, pageIndex = 1, keyword = '', mark = '' }) => request({
  url: 'user/getUserList',
  method: 'get',
  params: {
    pageSize,
    pageIndex,
    keyword,
    mark
  }
})
