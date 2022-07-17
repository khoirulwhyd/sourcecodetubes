import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class  DetailPengembalian extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pengembalian: {},
      key: ''
    };
  }
  
  componentDidMount() {
    const ref = firebase.firestore().collection('pengembalian').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          pengembalian: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('pengembalian').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/ListPengembalian")
      alert("data pengembalian berhasil di hapus")
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
              Detail Pengembalian
            </h2>
            <p><Link to={`/ListPengembalian`}>List Pengembalian</Link>/Detail Pengembalian</p>
            <hr/>
            <h3 class="panel-title">
              {this.state.pengembalian.title}
            </h3>
          </div>
          <div class="panel-body">
          <div class="card">
            <div class="card-body">
              <br/>
            <dl>
              <dt>Nama:</dt>
              <dd>{this.state.pengembalian.nama}</dd>
              <dt>No Identitas:</dt>
              <dd>{this.state.pengembalian.noidentitas}</dd>
              <dt>Alamat:</dt>
              <dd>{this.state.pengembalian.alamat}</dd>
              <dt>Judul Buku:</dt>
              <dd>{this.state.pengembalian.judulbuku}</dd>
              <dt>No Telephone:</dt>
              <dd>{this.state.pengembalian.notelp}</dd>
              <dt>Status:</dt>
              <dd>{this.state.pengembalian.status}</dd>
              <dt>Tanggal Pinjam:</dt>
              <dd>{this.state.pengembalian.tanggalpinjam}</dd>
              <dt>Tanggal Kembali:</dt>
              <dd>{this.state.pengembalian.tanggalkembali}</dd>
              <dt>Denda:</dt>
              <dd>{this.state.pengembalian.denda}</dd>
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

export default DetailPengembalian;

