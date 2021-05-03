<template>
  <div>
    <div class="tool">
        <div class="row head">
        <div class="col-4">
            <slot name="image"></slot>
        </div>
        <div class="col-8">
            <div class="cur">
                <slot name="title"></slot>
            </div>
        </div>
        </div>

        <div class="body">
            <slot name="body"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>