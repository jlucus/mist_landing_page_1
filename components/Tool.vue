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
#staking {
    background: #000;
    padding: 60px 0px 170px 0px;
    background-image: url(assets/img/header-texture.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-top: 45px;
}
#staking::before {
    position: absolute;
    top: 0px;
    left: 0px;
    content: '';
    width: 100%;
    height: 120px;
    background: linear-gradient(to top, transparent 0%, black 100%);
}
#staking::after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: '';
    width: 100%;
    height: 120px;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
}
#staking h3 {
    font-size: 40px;
    text-transform: uppercase;
    color: #7f520b;
    text-align:center;
    margin-bottom:50px;
}
#staking .tool {
    background:#000;
    border-radius:32px;
    width:350px;
    -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
    box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
    margin:auto;
    margin-bottom:80px;
}
#staking .tool .body {
    padding:20px;
}
#staking .tool .head {
    background: #7f520b;
    margin: 0;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
}
#staking .tool .logo {
    width: 50px;
    background: #000;
    border-radius: 50%;
    padding: 4px;
    margin-left:-7px;
    margin-top: 5px;
    margin-bottom: 5px;
}
#staking .tool .cur {
    font-weight: bold;
    text-align: right;
    font-size: 26px;
    color: #fff;
    padding-top: 10px;
    font-family: 'Dumbledor';
}
#staking .form-control {
    background:#191718;
    color:#fff;
    border:0;
    height:auto;
    font-size:20px;
    padding:10px 20px;
}
#staking label {
    color: #fff;
    font-size: 13px;
    text-align: left;
    display: block;
}
#staking .info {
    text-align:left;
    color:#fff;
}
#staking .info {
    margin-top:4px;
}
#staking .info a {
    float: right;
    text-decoration: underline;
    color: #7f520b;
}
#staking .info a:hover {
    color: #5d3a0a;
}
#staking button {
    background: #7f520b;
    color: #fff;
    padding: 8px 20px;
    border-radius: 21px;
    border: 0;
    margin-top: 10px;
    margin-right:8px;
}
#staking button:hover {
    background: #683f0a;
}
#staking .stat {
    font-size:15px;
    color:#fff;
    margin-bottom: 14px;
}
#staking .stat span {
    float: right;
    font-weight: bold;
    font-size: 20px;
    color: #7f520b;
    position: relative;
    top: -6px;
}
#staking .stakeItem {
    background:#191718;
    padding:10px;
    border-radius:10px;
}
#staking button.disabled {
    opacity:0.5;
}

#staking img.divider {
    margin-top:50px;
}

#staking .container {
    margin-top:80px;
}
</style>