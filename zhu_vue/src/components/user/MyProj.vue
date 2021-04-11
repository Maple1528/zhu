<template>
  <div class="my_proj">
    <div class="upload">
      <div class="upload_box">+</div>
      <div class="upload_text">点击上传项目</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProj'
}
</script>

<style scoped>
.my_proj {
  height: 100%;
  width: 100%;
  position: relative;
}

.upload {
  height: auto;
  width: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.upload_box {
  height: 200px;
  width: 300px;
  border: 6px dashed #e4e4e4;
  color: #dfdfdf;
  border-radius: 14px;
  font-size: 100px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease;
}

.upload_box:hover {
  border: 6px dashed #52b6f9;
  color: #52b6f9;
  cursor: pointer;
}

.upload_text {
  width: 300px;
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}
</style>
