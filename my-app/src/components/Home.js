import React, { Component } from 'react';
import NavbarComp from './NavbarComp';
// import './home.css';
import Homee from "../component/Homee";
import '../Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';
import './home.css';


export default class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {               //komponen state dari react untuk statefull cin
        listKunjungan: [],      //variabel array yang digunakan untuk menyimpan data
        totalData: 0,
        isUpdate: false,
        Notif: {
            alertShow: false,
            actionType:'',
            responCode:0,
        },
        insertPengunjung: {
            id:1,
            nama: "Hamdan Fauzi",
            jeniskelamin: "Laki-laki",
            keperluan:"Membaca Buku"
        }
    }
    }

    ambilDataDariServerAPI = () => {                        //komponen untuk mengecek component telah di mount-img, maka panggil API
        fetch('http://localhost:3001/kunjungan?_sort=id&_order=asc')                //alamat url API yang ingin kita ambil datanya
            .then(response => response.json())              //ubah response data dari url API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {                //data json hasil ambil dari API kita masukkan kedalam listArtikel pada state
                this.setState({
                    listKunjungan: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount(){              //komponen yang mengecek ketika component telah di mount ing, maka panggil API
        this.ambilDataDariServerAPI() //ambil data dari server api LOKAL
    }
    
    EditDataPengunjung = () => {
      const dataUpdate = this.state.insertPengunjung; // varialbel ini akan di isi dengan data user yang telahkita kirim pada hendel update.
      const id = dataUpdate.id; // 
      fetch('http://localhost:3001/kunjungan/' + id, {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataUpdate)
      })
          .then((Response) => {
              console.log(Response)
              console.log("Status Update", Response.status)
              this.setState({
                  Notif: {
                      alertShow: true,
                      actionType: 'updated',
                      responCode: Response.status,
                  }
              })
    
              this.ambilDataDariServerAPI();      // reload / refresh data
              this.ClearForm();
          });
    }
    

    handleHapusPengunjung = () => {
        this.state.listKunjungan.map(pengunjung=> {
        fetch(`http://localhost:3002/kunjungan/${pengunjung.id}`, {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
        })
    }

    handleTambahPengunjung = (event) => {
        let formInsertPengunjung = {...this.state.insertPengunjung};
        let timestamp = new Date().getTime();
        formInsertPengunjung['id'] = timestamp;
        formInsertPengunjung[event.target.name] = event.target.value;
        this.setState( {
            insertPengunjung: formInsertPengunjung
        });
    }

    handleEditPengunjung = (data) => {
        console.log('Update id', data.id); // menampilkan log data pada cpncole, hanya untyj memastikan data yang dikirim sudah sesuai dengan data yang kita pilih atau belum 
        console.log('Update arry', data); // menampilkan log data pada cpncole, hanya untyj memastikan data yang dikirim sudah sesuai dengan data yang kita pilih atau belum
        this.setState({  // melakukan setstate diisi dengan data yang kita update
            InsertPengunjung: data,
            isUpdate: true // se state jadi true untuk mengaktifkan filter action button simpan
        })
    }


    handleTombolSimpan = () => {
        if (this.state.isUpdate) {
            this.EditDataPengunjung();
        } else {
            this.SaveNewDataPengunjung();
        }
    }

    render() {
        return (
            <div>
                <div id="container"></div>
                <h1><strong><FontAwesomeIcon icon={faHome}/> Halaman Home Perpustakaan</strong></h1>
                    <hr/>
                    <div class="header" src="../images/polinema.jpg" width="100" height="100">
            
                    
                    
                    <h3><strong>
                    Selamat Datang di Perpustakaan Jurusan Teknologi Informasi Politeknik Negeri Malang
                    </strong></h3>

                    <p>Silahkan masukkan data kunjungan anda, sebelum masuk ke perpustakaan. Terima Kasih</p>

                    <h4>Nama</h4>
                    <textarea className="form-control" id="nama" name="nama" rows="3" onChange={this.handleTambahPengunjung}></textarea> 

                    <h4>Jenis Kelamin</h4>
                    <textarea className="form-control" id="jeniskelamin" name="jeniskelamin" rows="3" onChange={this.handleTambahPengunjung}></textarea> 

                    <h4>Keperluan</h4>
                    <textarea className="form-control" id="keperluan" name="keperluan" rows="3" onChange={this.handleTambahPengunjung}></textarea> 
                    <br/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                <button className = "btn btn-sm btn-warning" onClick={this.handleHapusPengunjung}>Hapus</button>

                {/* <h4>Daftar Pengunjung</h4>
                {
                    this.state.listKunjungan.map(pengunjung=>{
                        return <Homee key={pengunjung.id} id={pengunjung.id} nama={pengunjung.nama} jeniskelamin={pengunjung.jeniskelamin} keperluan={pengunjung.keperluan} hapusPengunjung={this.handleHapusPengunjung}/>
                    })
                } */}
                <hr/>
                <h1><strong><FontAwesomeIcon icon={faInfoCircle}/> Halaman About Perpustakaan</strong></h1>
                <hr/>
                <div class="row gx-4 gx-lg-5 align-items-center my-5">
                    <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="./images/ilustrasi-buku.png" alt="..." /></div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light"><strong>Perpustakaan Politeknik Negeri Malang</strong></h1>
                        <hr />
                        <p>Perpustakaan Politeknik Negeri terletak di lantai 2 Graha Polinema.
                            Didalam Perpustakaan ini tersedia beberapa jenis buku dan pastinya
                            hampir lengkap </p>
                    </div>
                </div>

                <div className="main-footer">
                    <div className="container">
                        <div className="row">
                            {/* Column1 */}
                            <div className="col">
                                <h4><b>PERPUSTAKAAN</b></h4>
                                <ui className="list-unstyled">
                                    <li>Politeknik Negeri Malang</li>
                                    <li>Malang, Jawa Timur</li>
                                    <li>JL. Soekarno Hatta No. 25 Kota Malang</li>
                                </ui>
                            </div>
                            {/* Column2 */}
                            <div className="col">
                                <h4><strong>Fitur</strong></h4>
                                <ui className="list-unstyled">
                                    <li>TAMBAH BUKU</li>
                                    <li>EDIT BUKU</li>
                                    <li>PINJAM DAN KEMBALIKAN BUKU</li>
                                </ui>
                            </div>
                            {/* Column3 */}
                            <div className="col">
                                <h4><strong>Fitur Lainnya</strong></h4>
                                <ui className="list-unstyled">
                                    <li>HOME</li>
                                    <li>ABOUT</li>
                                    <li>TENTANG BUKU</li>
                                </ui>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} PERPUSTAKAAN | All rights reserved |
                                Terms Of Service | Privacy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}