<template>
  <div>
    <div id="connectWallet">
      It seems you haven't connected your wallet.
      <button>Connect Wallet</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#connectWallet {
  width: 100%;
  padding: 10px;
  text-align: center;
  background: #181617;
  color: #fff;
  font-size: 18px;
}
#connectWallet button {
  background: #7f520b;
  color: #fff;
  padding: 8px 20px;
  border-radius: 21px;
  margin-left:15px;
  border: 0;
}
#connectWallet button:hover {
  background: #683f0a;
}
</style>