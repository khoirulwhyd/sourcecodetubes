import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class editPinjam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      idpinjam: '',
      kodebuku: '',
      namabuku: '',
      namapeminjam:'',
      tglpinjam:'',
      tglkembali:''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('peminjaman').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const peminjaman = doc.data();
        this.setState({
          key: doc.id,
          idpinjam: peminjaman.idpinjam,
          kodebuku: peminjaman.kodebuku,
          namabuku: peminjaman.namabuku,
          namapeminjam:peminjaman.namapeminjam,
          tglpinjam: peminjaman.tglpinjam,
          tglkembali: peminjaman.tglkembali
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({peminjaman:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { idpinjam, kodebuku, namabuku, namapeminjam, tglpinjam,  tglkembali } = this.state;

    const updateRef = firebase.firestore().collection('peminjaman').doc(this.state.key);
    updateRef.set({
      idpinjam,
      kodebuku,
      namabuku,
      namapeminjam,
      tglpinjam,
      tglkembali
    }).then((docRef) => {
      this.setState({
        key: '',
        idpinjam: '',
        kodebuku: '',
        namabuku: '',
        namapeminjam: '',
        tglpinjam: '',
        tglkembali: ''
      });
      // this.props.history.push("/showpinjam/"+this.props.match.params.id)
      this.props.history.push("/listpinjam")
      alert("Peminjaman Berhasil di Edit")
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
              Edit Pinjam
            </h2>
            <p><Link to={`/listpinjam`}>List Peminjaman</Link>/Edit Pinjam</p>
            <hr/>
          </div>
          <div class="card">
          <div class="card-body">
            <br/>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="idpinjam">ID PINJAM:</label>
                <input type="text" class="form-control" name="idpinjam" value={this.state.idpinjam} onChange={this.onChange} placeholder="ID PINJAM" />
              </div>
              <div class="form-group">
                <label for="kodebuku">KODE BUKU:</label>
                <input type="text" class="form-control" name="kodebuku" value={this.state.kodebuku} onChange={this.onChange} placeholder="KODE BUKU" />
              </div>
              <div class="form-group">
                <label for="namabuku">NAMA BUKU:</label>
                <input type="text" class="form-control" name="namabuku" value={this.state.namabuku} onChange={this.onChange} placeholder="NAMA BUKU" />
              </div>
              <div class="form-group">
                <label for="namapeminjam">NAMA PEMINJAM:</label>
                <input type="text" class="form-control" name="namapeminjam" value={this.state.namapeminjam} onChange={this.onChange} placeholder="NAMA PEMINJAM" />
              </div>
              <div class="form-group">
                <label for="tglpinjam">TANGGAL PINJAM:</label>
                <input type="text" class="form-control" name="tglpinjam" value={this.state.tglpinjam} onChange={this.onChange} placeholder="TANGGAL PINJAM" />
              </div>
              <div class="form-group">
                <label for="tglkembali">TANGGAL KEMBALI:</label>
                <input type="text" class="form-control" name="tglkembali" value={this.state.tglkembali} onChange={this.onChange} placeholder="TANGGAL KEMBALI" />
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

export default editPinjam;
