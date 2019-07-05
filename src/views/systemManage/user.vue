<template>
  <div class="app-container">
    <el-table :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="checkbox" width="80">
        <template slot-scope="scope">
          <span>{{ scope }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getUserList } from '@/api/user'
export default {
  name: 'User',
  data() {
    return {
      list: null,
      listQuery: {
        pageSize: 10,
        pageIndex: 1,
        keyword: '',
        mark: ''
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getUserList(this.listQuery).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
