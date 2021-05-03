<template>
  <div class="container-fluid" id="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-12">
          <a href="#"
            ><img src="@/assets/img/mist-logo.png" class="logo" alt="Mist"
          /></a>
          <ul>
            <li>
              <a href="https://twitter.com/mistnft" target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="https://t.me/MistNFT" target="_blank"
                ><i class="fab fa-telegram-plane"></i
              ></a>
            </li>
            <li>
              <a href="http://discord.gg/qEGNt7txf9" target="_blank"
                ><i class="fab fa-discord"></i
              ></a>
            </li>
            <li>
              <a href="https://mistnft.medium.com" target="_blank"
                ><i class="fab fa-medium-m"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 col-12" id="copyright">
          <span>&copy; Copyright Mist 2021</span>
          <img src="@/assets/img/rating.jpeg" class="rating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

#footer {
	background: #000;
	padding: 80px 0px;
}
#footer img {
	width: 120px;
	height: auto;
}
#footer ul {
	display: inline-block;
	margin-left: 30px;
}
#footer ul li {
	display: inline-block;
	margin-right: 10px;
}
#footer ul li a {
	color: #9c9661;
	font-size: 24px;
}
#footer ul li a:hover {
	color: #fff;
}
#copyright {
	text-align: right;
	font-size: 13px;
	color: #ccc;
}
</style>