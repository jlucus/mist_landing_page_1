<template>
  <div>
        <Error>
          Your wallet network is not on Binance Smart Chain. Please switch to this
            before proceeding.
        </Error>

        <connect-wallet />
  </div>
</template>

<script>
import ConnectWallet from './ConnectWallet.vue'
import Error from './Error'
export default {
  components: {
    Error,
    ConnectWallet
  }
}
</script>

<style>
    

</style>