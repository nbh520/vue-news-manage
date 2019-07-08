<template>
  <div class="app-container">
    <el-input v-model="listQuery.userName" placeholder="请输入姓名" class="filter-item" style="width: 200px">
      <i slot="prefix" class="el-input__icon el-icon-search" />
    </el-input>
    <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
      Search
    </el-button>
    <el-table :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" type="selection" width="80" />
      <el-table-column align="center" label="序号" type="index" width="80" />
      <el-table-column align="center" label="角色名称" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.fullName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色描述" width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="handleEditRole(scope.row.roleId)">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="handleDeleteRole(scope.row.roleId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

const User = [
  {
    'description': '啦啦啦啦',
    'fullName': '111',
    'roleId': 'c9c6dc42354645398a0d48c1eebe8c48'
  },
  {
    'description': '测试2233',
    'fullName': '测试233',
    'roleId': 'c8ddd2c373494b67b4607e363e760da9'
  },
  {
    'description': '3/25测试角色',
    'fullName': '测试003',
    'roleId': '1e1d368552394fafa0d6016a646e62be'
  },
  {
    'description': '3/19 测试',
    'fullName': '测试002',
    'roleId': 'ba62e614eb464b41a13f643004b621ae'
  }
]
export default {
  name: 'User',
  data() {
    return {
      list: User,
      listQuery: {
        pageSize: 10,
        pageIndex: 1,
        mark: '',
        userName: ''
      }
    }
  },
  methods: {
    handleEditRole(roleId) {
      console.log(roleId)
    },
    handleDeleteRole(roleId) {
      console.log(roleId)
    },
    handleFilter() {

    }
  }
}
</script>
