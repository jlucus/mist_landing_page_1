<template>
  <div>
    <div class="error">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.error {
    width: 100%;
    padding: 10px;
    text-align: center;
    background: #4d0213;
    color: #fff;
    font-size: 18px;
}
</style>