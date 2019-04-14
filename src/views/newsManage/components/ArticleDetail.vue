<!--  -->
<template>
  <div class="article-detail">
    <el-form ref="articleForm" :model="articleForm" label-width="50px">

      <sticky :class-name="'sub-navbar ' + articleForm.status">
        <el-button style="margin-left: 10px;" type="success" @click="publishedForm">
          发布
        </el-button>
        <el-button type="warning" @click="draftForm">草稿</el-button>
      </sticky>

      <div class="main">
        <el-row>
          <el-col :span="4">
            <el-form-item label="作者:">
              <el-input v-model="articleForm.author" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="发布时间:" label-width="100px">
              <el-time-picker v-model="articleForm.create_time" placeholder="发布时间" format="yyyy-MM-dd HH:mm:ss" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="标题:" label-width="50px">
              <el-input v-model="articleForm.title" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="摘要:" label-width="50px">
            <el-input v-model="articleForm.description" type="textarea" rows="1" />
          </el-form-item>
          <el-form-item>
            <Tinymce ref="editor" v-model="articleForm.content" :height="400" />
          </el-form-item>
          <el-form-item>
            <upload-image :images="articleForm.coverImg" />
          </el-form-item>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import Sticky from '@/components/Sticky'
import UploadImage from '@/components/Upload/UploadImage'
import { getNewsById, updateNewsStatusById } from '@/api/article'

export default {
  name: 'ArticleDetail',
  components: {
    Tinymce,
    Sticky,
    UploadImage
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      articleForm: {
        author: '',
        create_time: '',
        title: '',
        description: '',
        coverImg: []
      }
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    }
  },
  methods: {
    // 保存进草稿
    draftForm() {
      if (this.articleForm.id) {
        updateNewsStatusById(this.articleForm.id, 'draft').then(res => {
          if (res.status === 1) {
            this.$message({
              message: '保存成功',
              type: 'success',
              showClose: true,
              duration: 1000
            })
            this.articleForm.status = 'draft'
          }
        })
      }
    },
    fetchData(id) {
      getNewsById(id).then(res => {
        this.articleForm = res.data
        console.log(res.data)
      })
    },
    publishedForm() {
      if (this.articleForm.id) {
        updateNewsStatusById(this.articleForm.id, 'published').then(res => {
          if (res.status === 1) {
            this.$message({
              message: '发布成功',
              type: 'success',
              showClose: true,
              duration: 1000
            })
            this.articleForm.status = 'published'
          }
        })
      }
    }
  }
}

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.article-detail{
  .main{
    padding: 40px 45px 20px 50px;
  }
}
</style>
