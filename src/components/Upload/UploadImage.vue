<!-- 上传图片组件 -->
<template>
  <div class="upload-container">
    <!-- TODO: 上线修改 -->
    <el-upload drag action="http://localhost:4001/article/uploadCoverImage" multiple list-type="picture" class="image-uploader">
      <i class="el-icon-upload" />
      <div class="el-upload_text"><em>上传封面图</em></div>
    </el-upload>
    <div v-for="(image, index) in imagesArr" :key="index" class="image-preview image-app-preview" >
      <div class="image-preview-wrapper">
        <img :src="image">
        <div class="image-preview-action">
          <i class="el-icon-delete" @click="rmCoverImg(index)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadImage',
  props: {
    images: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    imagesArr() {
      return this.images
    }
  },
  methods: {
    // 删除图片
    rmCoverImg(index) {
      this.$confirm('确定删除该封面图片吗', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        this.imagesArr = this.imagesArr.splice(index, 1)
        this.$message({
          message: '删除成功',
          type: 'success',
          duration: '2000'
        })
      }).catch(() => {
      })
    }
  }
}

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "~@/styles/mixin.scss";
.upload-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .image-uploader {
    width: 35%;
    float: left;
  }
  .image-preview {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, .5);
      transition: opacity .3s;
      cursor: pointer;
      text-align: center;
      line-height: 200px;
      .el-icon-delete {
        font-size: 36px;
      }
    }
    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
  .image-app-preview {
    width: 320px;
    height: 180px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .app-fake-conver {
      height: 44px;
      position: absolute;
      width: 100%; // background: rgba(0, 0, 0, .1);
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
}
</style>
