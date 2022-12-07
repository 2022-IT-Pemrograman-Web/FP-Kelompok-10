<template>
    <div class="welcome">
        <h2>Selamat datang, ADMIN</h2>
    </div>
    <div class="header">
		<br><br>
		<h1>Sistem Informasi Ternak Hewan</h1>
	</div>
    <div class="dasboard">
        <img alt="dashboard icon" src="../assets/white/dashboard-icon.svg"><a>Dashboard</a><hr />
        <img alt="list icon" src="../assets/white/list-icon.svg"><a href="daftar-ternak">Daftar Hewan Ternak</a><hr />
        <img alt="add icon" src="../assets/white/add-icon.svg"><a href="hewan-baru">Hewan Ternak Baru</a><hr />
        <!-- <img alt="history icon" src="../assets/white/history-icon.svg"><a href="transaksi">Riwayat Transaksi Ternak</a><hr /> -->
	</div>
    <div class="menu">
        <img alt="dashboard svgrepo com" src="../assets/black/dashboard-svgrepo-com.svg">
        <span>Dashboard</span>
    </div>
    <div class="item-list">
		<a href="daftar-ternak">
			<div class="animal-list">
				<h1>Jumlah Hewan Ternak</h1>
				<h3>{{ jumlahhewan }}</h3>
				<h4>Lihat Detail -></h4>
			</div>
		</a>
		<!-- <a href="prestasi">
			<div class="prestasi-list">
				<h1>Jumlah Prestasi</h1>
				<h3>4</h3>
				<h4>Lihat Detail -></h4>
			</div>
		</a> -->
		<!-- <a href="transaksi">
			<div class="ketuntungan-list">
				<h1>Total Keuntungan</h1>
				<h3>Rp 8.000.000</h3>
				<h4>Lihat Detail -></h4>
			</div>
		</a> -->
		<!-- <a href="tanggal">
			<div class="calendar-list">
				<h1>Tanggal Penting</h1>
				<h3>7</h3>
				<h4>Lihat Detail -></h4>
			</div>
		</a> -->
		<!-- <a href="pengobatan">
			<div class="medicine-list">
				<h1>Riwayat Pengobatan</h1>
				<h3>4</h3>
				<h4>Lihat Detail -></h4>
			</div>
		</a> -->
	</div>
</template>


<script>
export default {
	data () {
    return {
      jumlahhewan : 0,
    }
  },

}
</script>

<style>
body{
	margin: 0px;
	font-family: sans-serif;
}

.welcome{
	height: 100%;
	padding: 1px;
	background-color: rgba(32,78,147,255);
}

.welcome h2{
	margin-left: 20px;
	font-family: 'comic sans ms';
	color: white;
	text-align: start;
}

.header{
	height: 150px;
	text-align: center;
    vertical-align: middle;
	position: relative;
	-webkit-text-stroke: 2px black;
	background-image: url("../assets/header.jpg");
}

.header h1{
	margin: 0;
	color: white;
	font-family: 'comic sans ms';
	font-size: 60px;
	font-weight: bold;
}

.dasboard{
    position: absolute;
    left: 0px;
    width: 400px;
    height: 600px;
    border: 5px solid black;
    background-color: rgba(32,78,147,255);
    display: inline;
}

.dasboard img{
    float: left;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    fill:rgb(255, 255, 255);
}

.dasboard a{
    font-family: 'comic sans ms';
    color: rgb(255, 255, 255);
    font-size:x-large;
    display: flex;
    align-items:center;
    line-height: 50px;
    text-decoration: none;
    margin-top: 10px;
}

.menu {
    border-bottom: 5px solid black;
    margin-left: 400px;
    display: flex;
    align-items:center;
}

.menu img{
    margin-left: 20px;
}

.menu span{
    margin-left: 10px;
    font-family: 'comic sans ms';
    font-size: 30px;
    align-items:center;
    line-height: 0px;
}

h2{
    text-align: center;
}

*{
    box-sizing: border-box;
}

.item-list {
    justify-content: space-between;
    width: AUTO;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-left: 430px;
    margin-top: 15px;
}

.item-list a{
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-family: 'comic sans ms';
    font-size: 12px;
    margin-bottom: 0;
}

.item-list h3{
    font-size: 70px;
    text-align: left;
    margin-top: 0;
    padding-left: 20px;
    margin-bottom: 0;
}

.item-list img{
    padding-left: 80px;
}

.item-list h4{
    margin-top: 0;
    padding-left: 20px;
    font-size: 20px;
}

.animal-list{
	width: 300px;
	height: 180px;
	border-radius: 5%;
	object-fit: cover;
	background-color: rgb(0, 213, 255);
}

.animal-list h1{
	margin-bottom: 0;
}

.item-list h1{
	padding-left: 15px;
	padding-top: 10px;
	padding-bottom: 0;
}

.prestasi-list{
	width: 300px;
	height: 180px;
	border-radius: 5%;
	object-fit: cover;
	background-color: rgb(255, 203, 60);
}

.prestasi-list h1{
	margin-bottom: 0;
}

.ketuntungan-list{
	width: 300px;
	height: 180px;
	border-radius: 5%;
	object-fit: cover;
	background-color: rgb(13, 255, 0);
}

.ketuntungan-list h1{
	margin-bottom: 0;
}

.ketuntungan-list h3{
	padding-top: 20px;
	padding-bottom: 25px;
	font-size: 35px;
}

.calendar-list{
	margin-top: 50px;
	width: 300px;
	height: 180px;
	border-radius: 5%;
	object-fit: cover;
	background-color: rgb(255, 67, 255);
}

.calendar-list h1{
	margin-bottom: 0;
}

.medicine-list{
	margin-top: 50px;
	width: 300px;
	height: 180px;
	border-radius: 5%;
	margin-right: 60px;
	background-color: rgb(255, 67, 67);
}

.medicine-list h1{
	margin-bottom: 0;
}

.item-card img {
	width: 330px;
	height: 250px;
	border-radius: 10%;
	object-fit: cover;
	margin-left: 80px;
}
	
.item-card p{
	font-family: 'comic sans ms';
	font-weight: 800;
	font-size: 25px;
	text-align: center;
	color: #F54D42;
}
</style>