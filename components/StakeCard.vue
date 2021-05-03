<template>
  <div>
    <div class="tool">
      <div class="row head">
        <div class="col-4">
          <img src="@/assets/img/mist-m.png" class="logo" />
        </div>
        <div class="col-8">
          <div class="cur">Stake Now</div>
        </div>
      </div>

      <div class="body">
        <form>
          <label>How much do you want to stake? (MIST)</label>

          <input
            type="text"
            class="form-control"
            name="stake"
            placeholder="0"
          />

          <div class="info">
            <strong>Balance:</strong> 40
            <a href="#"> Use Max </a>
          </div>

          <button>Approve</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>