import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class ShowPinjam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peminjaman: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('peminjaman').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          peminjaman: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('peminjaman').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/listpinjam")
      alert("data peminjam berhasil di hapus")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h2 class="panel-title">
              Detail Peminjaman
            </h2>
            <p><Link to={`/listpinjam`}>List Peminjaman</Link>/Detail Peminjaman</p>
            <hr/>
            <h3 class="panel-title">
              {this.state.peminjaman.title}
            </h3>
          </div>
          <div class="panel-body">
          <div class="card">
          <div class="card-body">
            <br/>
            <dl>
              <dt>ID PINJAM :</dt>
              <dd>{this.state.peminjaman.idpinjam}</dd>
              <dt>KODE BUKU :</dt>
              <dd>{this.state.peminjaman.kodebuku}</dd>
              <dt>NAMA BUKU :</dt>
              <dd>{this.state.peminjaman.namabuku}</dd>
              <dt>NAMA PEMINJAM :</dt>
              <dd>{this.state.peminjaman.namapeminjam}</dd>
              <dt>TANGGAL PINJAM :</dt>
              <dd>{this.state.peminjaman.tglpinjam}</dd>
              <dt>TANGGAL KEMBALI :</dt>
              <dd>{this.state.peminjaman.tglkembali}</dd>
            </dl>
            {/* <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp; */}
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
};

export default ShowPinjam;