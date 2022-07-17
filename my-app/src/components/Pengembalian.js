import React, { Component } from 'react';
import firebase from "../Firebase";
import { Link } from 'react-router-dom';

class Pengembalian extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('pengembalian');
        this.state = {
            alamat: '',
            judulbuku: '',
            nama: '',
            noidentitas: '',
            notelp: '',
            status: '',
            tanggalkembali: '',
            tanggalpinjam: '',
            denda:'',
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { alamat, judulbuku, nama, noidentitas, notelp, status, tanggalkembali, tanggalpinjam, denda } = this.state;
        this.ref.add({
            alamat,
            judulbuku,
            nama,
            noidentitas,
            notelp,
            status,
            tanggalkembali,
            tanggalpinjam,
            denda
        }).then((docRef) => {
            this.setState({
                alamat: '',
                judulbuku: '',
                nama: '',
                noidentitas: '',
                notelp: '',
                status: '',
                tanggalkembali: '',
                tanggalpinjam: '',
                denda:'',
            });
            this.props.history.push("/listpengembalian")
            alert("Daftar Pengembalian Buku Berhasil ditambahakan")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
    }
    render() {
        const { alamat, judulbuku, nama, noidentitas, notelp, status, tanggalkembali, tanggalpinjam, denda } = this.state;
        return (
            <div>
                <div class="container">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                Tambah Data Pengembalian
                            </h3>
                        </div>
                        <br></br>
                        <div class="card">
                        <div class="card-body">
                        <br/>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group row">
                                <label for="nama" class="col-sm-2 col-form-label">Nama</label>
                                <div class="col-sm-10">
                                    <input type="nama" name="nama" onChange={this.onChange} class="form-control" id="nama" placeholder="nama"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="noidentitas" class="col-sm-2 col-form-label">No Identitas</label>
                                <div class="col-sm-10">
                                    <input type="noidentitas" name="noidentitas" onChange={this.onChange} class="form-control" id="noidentitas" placeholder="noidentitas"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="alamat" class="col-sm-2 col-form-label">Alamat</label>
                                <div class="col-sm-10">
                                    <input type="alamat" name="alamat" onChange={this.onChange} class="form-control" id="alamat" placeholder="alamat"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="judulbuku" class="col-sm-2 col-form-label">Judul Buku</label>
                                <div class="col-sm-10">
                                    <input type="judulbuku" name="judulbuku" onChange={this.onChange} class="form-control" id="judulbuku" placeholder="judulbuku"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="notelp" class="col-sm-2 col-form-label">No Telephone</label>
                                <div class="col-sm-10">
                                    <input type="notelp" name="notelp" onChange={this.onChange} class="form-control" id="notelp" placeholder="notelp"/>
                                </div>
                            </div>   
                            <div class="form-group row">
                                <label for="status" class="col-sm-2 col-form-label">Status</label>
                                <div class="col-sm-10">
                                    <input type="status" name="status" onChange={this.onChange} class="form-control" id="status" placeholder="status"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="tanggalpinjam" class="col-sm-2 col-form-label">Tanggal Pinjam</label>
                                <div class="col-sm-10">
                                    <input type="tanggalpinjam" name="tanggalpinjam" onChange={this.onChange} class="form-control" id="tanggalpinjam" placeholder="tanggalpinjam"/>
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <label for="tanggalkembali" class="col-sm-2 col-form-label">Tanggal Kembali</label>
                                <div class="col-sm-10">
                                    <input type="tanggalkembali" name="tanggalkembali" onChange={this.onChange} class="form-control" id="tanggalkembali" placeholder="tanggalkembali"/>
                                </div>

                                <div class="form-group row">
                                <label for="denda" class="col-sm-2 col-form-label">Denda</label>
                                <div class="col-sm-10">
                                    <input type="denda" name="denda" onChange={this.onChange} class="form-control" id="denda" placeholder="denda"/>
                                </div>
                            </div>

                            </div>
                            <br>
                            </br>
                            <div className="container text-left" style={{padding:"0px"}}>
                            <span className="btn1">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </span>
                        </div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pengembalian;