<template>
<div class="welcome">
  <h2>Selamat datang, ADMIN</h2>
</div>
<div class="header">
  <br><br>
  <h1>Sistem Informasi Ternak Hewan</h1>
</div>
<div class="dasboard">
  <img alt="dashboard icon" src="../assets/white/dashboard-icon.svg"><a href="home">Dashboard</a><hr />
  <img alt="list icon" src="../assets/white/list-icon.svg"><a href="daftar-ternak">Daftar Hewan Ternak</a><hr />
  <img alt="add icon" src="../assets/white/add-icon.svg"><a href="hewan-baru">Hewan Ternak Baru</a><hr />
  <!-- <img alt="history icon" src="../assets/white/history-icon.svg"><a href="transaksi">Riwayat Transaksi Ternak</a><hr /> -->
</div>
<div class="menu">
  <img alt="cow icon" src="../assets/black/cow-icon.svg">
  <span>Daftar Hewan Ternak</span>
</div>
<div class="form">    
  <form id="frm-hwn" @submit.prevent="addprofilhewan">
    <div class="wrapper">
      <label for="jenis" class="labelfrm">Jenis Hewan: </label><br>
      <input type="text" name="jenis" id="jenis" maxlength="10" size="20" v-model="profilhewan.jenishewan" placeholder="Ayam/Sapi/Kambing"/><br>
    </div><br>

    <div class="wrapper">
      <label for="id" class="labelfrm">ID: </label><br>
      <input type="text" name="id" id="id" size="5" v-model="profilhewan.idhewan" placeholder="A-XXX"/><br>
    </div><br>

    <div class="wrapper">
      <label for="nama" class="labelfrm">Nama: </label><br>
      <input type="text" name="nama" id="nam" maxlength="10" size="20" v-model="profilhewan.nama" placeholder="xxxx"/><br>
    </div><br>

    <div class="wrapper">
      <label for="gender" class="labelfrm">Jenis Kelamin: </label><br>
      <input type="text" name="gender" id="gender" maxlength="10" size="20" v-model="profilhewan.jeniskelamin" placeholder="Jantan/Betina"/><br>
    </div><br>

    <div class="wrapper">
      <label for="umur" class="labelfrm">Umur(tahun): </label><br>
      <input type="text" name="umur" id="umur" maxlength="3" size="5" v-model="profilhewan.umur" placeholder="xxx"/><br>
    </div><br>

    <div class="wrapper">
      <label for="berat" class="labelfrm">Berat Badan(kg): </label><br>
      <input type="text" name="berat" id="berat" size="5" v-model="profilhewan.beratbadan" placeholder="xxx"/><br>
    </div><br>
    
            
    <div class="wrapper">
      <label for="kawin" class="labelfrm">Hasil Kawin: </label>
      <input class="checkbox" type="checkbox" id="kawin" name="kawin" value="kawin" v-model="profilhewan.hasilkawin">
    </div><br>

    <div class="wrapper">
      <label for="submit" class="labelfrm" ></label>
      <input type="submit" name="Submit" value="Submit"  onclick="window.location.href = 'home';"/>
    </div>
  </form>
</div>
<!-- @click="plusJumlahHewan(id, jumlahhewan.id)" -->
</template>


<script>
//import { setDoc, doc, collection, /*query, where, getCountFromServer, updateDoc*/ } from "firebase/firestore/lite";
//import db from "../firebase";
import axios from "axios";

export default {
  data() {
    return {
      profilhewan: {
        jenishewan: "",
        idhewan: "",
        nama: "",
        jeniskelamin: "",
        umur: "",
        beratbadan: "",
        hasilkawin: false,
      },
      // jumlahhewan: [],
    };
  },
  mounted () {

  },
  methods: {
    async addprofilhewan() {
      try {
        await axios.post("http://localhost:8080/create", {
          idhewan: this.profilhewan.idhewan,
          nama: this.profilhewan.nama,
          umur: this.profilhewan.umur,
          jenishewan: this.profilhewan.jenishewan,
          hasilkawin: this.profilhewan.hasilkawin,
          beratbadan: this.profilhewan.beratbadan,
          jeniskelamin: this.profilhewan.jeniskelamin
        })
      } catch (err) {
        console.log(err)
      }
    }
    // async getCount() {
    //   try {
    //     const coll = collection(db, "jumlahhewan");
    //     const query_ = query(coll, where('jumlahhewan', '>', 0));
    //     const snapshot = await getCountFromServer(query_);
    //     this.count = snapshot.data().count;
    //     console.log('count: ', snapshot.data().count);
    //     }
    //     catch (e) {
    //       console.log("Error counting document : ", e.message)
    //     }
    // },
    // plusJumlahHewan(index, id) { 
    //     this.jumlahhewan[index].jumlahhewan += 1;
    //     this.updateJumlahHewan(index, id); 

    // },
    // async updateJumlahHewan(index, id) {
    //     const docRef = doc(db, "jumlahhewan", id);
    //     try {
    //       await updateDoc(docRef, {
    //         jumlahhewan : this.jumlahhewan[index].jumlahhewan
    //       });
    //       this.loadData();
    //       this.getCount();
    //       }
    //     catch (e) {
    //         console.error("Error editing document: ", e);
    //       }
    // }
  }
}


</script>

<style>
body{
	margin: 0;
	font-family: sans-serif;
}

.header{
	background-color: rgb(50, 50, 214);
}

.dasboard{
		position: absolute;
		left: 0px;
		width: 250px;
		height: 1000px;
		border: 50px solid rgb(50, 50, 214);
		background-color: rgb(50, 50, 214);
}

a{
	color: rgb(255, 255, 255);
	font-size:large;
}

h1{
	color: rgb(255, 255, 255);
	text-align: center;
}

h2{
	text-align: center;
}

*{
	box-sizing: border-box;
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
  font-size: 50px;
  font-weight: bold;
}

.menu {
  border-bottom: 5px solid black;
  margin-left: 400px;
  display: flex;
  align-items:center;
}

.menu img{
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.menu span{
  margin-left: 10px;
  font-family: 'comic sans ms';
  font-size: 30px;
  align-items:center;
  line-height: 0px;
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

.table{
  width: 72%;
  border-collapse: collapse;
  float: right;
  margin-right: 10px;
}

.table td,.table th{
  padding:12px 15px;
  border:1px solid #ddd;
  text-align: center;
  font-size:16px;
}

.table th{
  background-color: rgb(50, 50, 214);
  color:#ffffff;
}

.table tbody tr:nth-child(even){
  background-color: #f5f5f5;
}

@media(max-width: 500px){
	.table thead{
		display: none;
	}

	.table, .table tbody, .table tr, .table td{
    display: block;
    width: 100%;
	}
	.table tr{
    margin-bottom:15px;
	}
	.table td{
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
	}
	.table td::before{
    content: attr(data-label);
    position: absolute;
    left:0;
    width: 50%;
    padding-left:15px;
    font-size:15px;
    font-weight: bold;
    text-align: left;
	}
}

input.checkbox{
  width: 20px;
  height: 20px;
  align-items: center;
}

label.labelfrm{
  align-items: center;
}

.wrapper{
  display: flex;
  align-items: center;
}

.form{
  margin-left: 450px;
  margin-top: 20px;
  align-items: center;
  font-family: 'comic sans ms';
  font-size: 20px;
}

.error { font-size:small; color:red; }

.button-submit{
  text-decoration: none;
}

.button{
  background-color: blue;
  width: 100px;
  height: 50px;
  margin-top: 10px;
  text-decoration: none;
  text-align: center;
  border-radius: 9px;
  border: black;
  border-style: solid;
}

.button h3{
  margin-top: 5px;
}
</style>
