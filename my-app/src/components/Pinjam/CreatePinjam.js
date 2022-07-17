import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class CreatePinjam extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('peminjaman');
    this.state = {
      idpinjam: '',
      kodebuku: '',
      namabuku: '',
      namapeminjam: '',
      tglpinjam: '',
      tglkembali: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { idpinjam, kodebuku, namabuku, namapeminjam, tglpinjam, tglkembali } = this.state;
    this.ref.add({
      idpinjam,
      kodebuku,
      namabuku,
      namapeminjam,
      tglpinjam,
      tglkembali
    }).then((docRef) => {
      this.setState({
        idpinjam: '',
        kodebuku: '',
        namabuku: '',
        namapeminjam: '',
        tglpinjam: '',
        tglkembali:''
      });
      this.props.history.push("/listpinjam")
      alert("Daftar Peminjam Buku Berhasil ditambahakan")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { idpinjam, kodebuku, namabuku, namapeminjam, 
        tglpinjam, tglkembali } = this.state;
        return (
          <div>
              <div class="container">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                        <br/>
                          <h2 class="panel-title">
                              Tambah Data Peminjaman
                          </h2>
                          <p><Link to={`/listpinjam`}>List Peminjaman</Link>/Tambah Data Peminjaman</p>
                      </div>
                      <hr/>
                      <div class="card">
                          <div class="card-body">
                            <br/>
                              <form onSubmit={this.onSubmit}>
                                  <div class="form-group row">
                                      <label for="idpinjam" class="col-sm-2 col-form-label">ID PINJAM</label>
                                      <div class="col-sm-10">
                                          <input type="idpinjam" name="idpinjam" onChange={this.onChange} class="form-control" id="idpinjam" placeholder="ID PINJAM" />
                                      </div>
                                  </div>
                                  <div class="form-group row">
                                      <label for="kodebuku" class="col-sm-2 col-form-label">KODE BUKU</label>
                                      <div class="col-sm-10">
                                          <input type="kodebuku" name="kodebuku" onChange={this.onChange} class="form-control" id="kodebuku" placeholder="KODE BUKU" />
                                      </div>
                                  </div>
                                  <div class="form-group row">
                                      <label for="namabuku" class="col-sm-2 col-form-label">NAMA BUKU</label>
                                      <div class="col-sm-10">
                                          <input type="namabuku" name="namabuku" onChange={this.onChange} class="form-control" id="namabuku" placeholder="NAMA BUKU" />
                                      </div>
                                  </div>
                                  <div class="form-group row">
                                      <label for="namapeminjam" class="col-sm-2 col-form-label">NAMA PEMINJAM</label>
                                      <div class="col-sm-10">
                                          <input type="namapeminjam" name="namapeminjam" onChange={this.onChange} class="form-control" id="namapeminjam" placeholder="NAMA PEMINJAM" />
                                      </div>
                                  </div>
                                  <div class="form-group row">
                                      <label for="tglpinjam" class="col-sm-2 col-form-label">TANGGAL PINJAM</label>
                                      <div class="col-sm-10">
                                          <input type="tglpinjam" name="tglpinjam" onChange={this.onChange} class="form-control" id="tglpinjam" placeholder="TANGGAL PINJAM" />
                                      </div>
                                  </div>
                                  <div class="form-group row">
                                      <label for="tglkembali" class="col-sm-2 col-form-label">TANGGAL KEMBALI</label>
                                      <div class="col-sm-10">
                                          <input type="tglkembali" name="tglkembali" onChange={this.onChange} class="form-control" id="tglkembali" placeholder="TANGGAL KEMBALI" />
                                      </div>
                                  </div>
                                  <br>
                                  </br>
                                  <div className="container text-left" style={{ padding: "0px" }}>
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

export default CreatePinjam;