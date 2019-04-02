<!-- 新闻列表 -->
<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width:100%">
      <el-table-column align="center" prop="id" label="ID" width="80" />
      <el-table-column align="center" prop="update_time" label="Date" width="160" />
      <el-table-column align="center" prop="author" label="Author" />
      <el-table-column align="left" prop="title" label="Title" min-width="300px">
        <template slot-scope="scope">
          <router-link :to="'/newsManage/edit/'+scope.row.id" class="link-type">
            <span class="link-type">{{ scope.row.title }}</span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="voteCount" label="vote" />
      <el-table-column align="center" prop="commentCount" label="reply" />
      <el-table-column align="center" prop="category" label="category" />
      <el-table-column align="center" label="Action">
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">Edit</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <Pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { articleList } from '@/api/article'
export default {
  name: 'List',
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      articleList(this.listQuery).then(res => {
        this.list = res.data.items
        this.total = res.data.total
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
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
