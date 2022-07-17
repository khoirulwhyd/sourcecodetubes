import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class EditPengembalian extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      alamat: '',
      judulbuku: '',
      nama: '',
      noidentitas: '',
      notelp: '',
      status: '',
      tanggalpinjam: '',
      tanggalkembali: '',
      denda:''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('pengembalian').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const pengembalian = doc.data();
        this.setState({
          key: doc.id,
          alamat: pengembalian.alamat,
          judulbuku: pengembalian.judulbuku,
          nama: pengembalian.nama,
          noidentitas:pengembalian.noidentitas,
          notelp: pengembalian.notelp,
          status: pengembalian.status,
          tanggalpinjam: pengembalian.tanggalpinjam,
          tanggalkembali: pengembalian.tanggalkembali,
          denda: pengembalian.denda
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({pengembalian:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { alamat, judulbuku, nama, noidentitas, notelp, status, tanggalpinjam, tanggalkembali, denda }= this.state;

    const updateRef = firebase.firestore().collection('pengembalian').doc(this.state.key);
    updateRef.set({
        alamat,
        judulbuku,
        nama,
        noidentitas,
        notelp,
        status,
        tanggalpinjam,
        tanggalkembali,
        denda
    }).then((docRef) => {
      this.setState({
                key: '',
                alamat: '',
                judulbuku: '',
                nama: '',
                noidentitas: '',
                notelp: '',
                status: '',
                tanggalpinjam: '',
                tanggalkembali: '',
                denda:''
      });
      // this.props.history.push("/showpinjam/"+this.props.match.params.id)
      this.props.history.push("/ListPengembalian")
      alert("Pengembalian Berhasil di Edit")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">
              Edit Pengembalian
            </h2>
            <p><Link to={`/ListPengembalian`}>List Pengembalian</Link>/Edit Pengembalian</p>
            <hr/>
          </div>
          <div class="panel-body">
          <div class="card">
            <div class="card-body">
              <br/>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="Nama" />
              </div>
              <div class="form-group">
                <label for="noidentitas">No Identitas:</label>
                <input type="text" class="form-control" name="noidentitas" value={this.state.noidentitas} onChange={this.onChange} placeholder="No Identitas" />
              </div>
              <div class="form-group">
                <label for="alamat">Alamat:</label>
                <input type="text" class="form-control" name="alamat" value={this.state.alamat} onChange={this.onChange} placeholder="Alamat" />
              </div>
              <div class="form-group">
                <label for="judulbuku">Judul Buku:</label>
                <input type="text" class="form-control" name="judulbuku" value={this.state.judulbuku} onChange={this.onChange} placeholder="Judul Buku" />
              </div>
              <div class="form-group">
                <label for="notelp">No Telephone:</label>
                <input type="text" class="form-control" name="notelp" value={this.state.notelp} onChange={this.onChange} placeholder="Nomor Telephone" />
              </div>
              <div class="form-group">
                <label for="status">Status:</label>
                <input type="text" class="form-control" name="status" value={this.state.status} onChange={this.onChange} placeholder="Status " />
              </div>
              <div class="form-group">
                <label for="tanggalpinjam">Tanggal Pinjam:</label>
                <input type="text" class="form-control" name="tanggalpinjam" value={this.state.tanggalpinjam} onChange={this.onChange} placeholder="Tanggal Pinjam " />
              </div>
              <div class="form-group">
                <label for="tanggalkembali">Tanggal Kembali:</label>
                <input type="text" class="form-control" name="tanggalkembali" value={this.state.tanggalkembali} onChange={this.onChange} placeholder="Tanggal Kembali " />
              </div>
              <div class="form-group">
                <label for="denda">Denda:</label>
                <input type="text" class="form-control" name="denda" value={this.state.denda} onChange={this.onChange} placeholder="Denda " />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPengembalian;