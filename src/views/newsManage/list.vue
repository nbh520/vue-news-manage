<!-- 新闻列表 -->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" style="width: 200px" class="filter-item" placeholder="Title"/>
      <el-select v-model="listQuery.status" placeholder="Status" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-button v-permission="['admin']" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
      <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button>
    </div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width:100%">
      <el-table-column align="center" prop="id" label="ID" width="50" />
      <el-table-column align="center" prop="update_time" label="Date" width="160" />
      <el-table-column align="center" prop="author" label="Author" />
      <el-table-column align="center" prop="status" label="Status" min-width="100px">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">
            <span>{{ scope.row.status }}</span>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="left" prop="title" label="Title" min-width="300px">
        <template slot-scope="scope">
          <router-link :to="'/newsManage/editNews/'+scope.row.id" class="link-type">
            <span class="link-type">{{ scope.row.title }}</span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="voteCount" label="vote" />
      <el-table-column align="center" prop="commentCount" label="reply" />
      <el-table-column align="center" prop="category" label="category" />
      <el-table-column align="center" label="Action" min-width="200px">
        <template slot-scope="scope">
          <router-link :to="'/newsManage/editNews/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">Edit</el-button>
          </router-link>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteNews(scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { articleList, updateNewsStatusById } from '@/api/article'
import permission from '@/directive/permission/index.js'
import { parseTime } from '@/utils'
export default {
  name: 'List',
  components: { Pagination },
  directives: { permission },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        del: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        title: undefined,
        author: undefined,
        status: undefined,
        sort: '+id'
      },
      importanceOptions: ['published', 'draft', 'del'], // 筛选状态  草稿、发布、删除
      downloadLoading: false // 下载loading
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const res = await articleList(this.listQuery)
      this.list = res.data.items
      this.total = res.data.total
      this.listLoading = false
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    // 改变新闻删除状态
    deleteNews(id) {
      updateNewsStatusById(id, 'del').then(res => {
        if (res.status === 1) {
          this.$message({
            message: '删除成功',
            type: 'success',
            showClose: true,
            duration: 1000
          })
          this.getList()
        }
      })
    },
    // 搜索
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    // 下载
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Id', 'Date', 'Title', 'Author', 'Stauts', 'vote', 'reply', 'category']
        const filterVal = ['id', 'create_time', 'title', 'author', 'status', 'voteCount', 'commentCount', 'category']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}

</script>

<style scoped>
  .link-type, .link-type:focus {
    color: #337ab7;
    cursor: pointer;
  }

</style>
