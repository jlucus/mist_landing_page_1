<template>
  <main id="panel">
    <Header />

    <div class="container-fluid scrollspy" id="staking">
      <a href="#" class="addLiquid"> Add Liquidity </a>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-12">
            <Tool>
              <template v-slot:image>
                <img src="@/assets/img/mist-m.png" class="logo" />
              </template>
              <template v-slot:title> Stake Now </template>
              <template v-slot:body>
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
              </template>
            </Tool>
          </div>

          <div class="col-lg-6 col-md-12 col-12">
            <Tool>
              <template v-slot:image>
                <img src="@/assets/img/mist-m.png" class="logo" />
              </template>
              <template v-slot:title> Participation </template>
              <template v-slot:body>
                <div class="stat">
                  Total Staked
                  <span>100</span>
                </div>

                <div class="stat">
                  Earning
                  <span>7 <small>per day</small></span>
                </div>

                <div class="stat">
                  APY
                  <span>xx</span>
                </div>

                <hr />

                <div class="stakeItem">
                  <div class="stat">
                    Staked At
                    <span>xxxxx</span>
                  </div>
                  <div class="stat">
                    Available to withdraw in
                    <span>4 days</span>
                  </div>
                  <div class="stat">
                    Amount
                    <span>10,000</span>
                  </div>

                  <button class="disabled">Withdraw</button>

                  <button class="disabled">Unstake</button>
                </div>
              </template>
            </Tool>
          </div>
        </div>
      </div>
      <img src="@/assets/img/divider.png" class="divider" />
    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tool from "../components/Tool";
export default {
  components: {
    Footer,
    Header,
    Tool,
  },
};
</script>

<style>
</style>
