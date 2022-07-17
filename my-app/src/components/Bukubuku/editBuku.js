import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class editBuku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      kodebuku: '',
      nama: '',
      jenis: '',
      penulis:'',
      penerbit:''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('daftarbuku').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const daftarbuku = doc.data();
        this.setState({
          key: doc.id,
          kodebuku: daftarbuku.kodebuku,
          nama: daftarbuku.nama,
          jenis: daftarbuku.jenis,
          penulis: daftarbuku.penulis,
          penerbit: daftarbuku.penerbit
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({daftarbuku:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { kodebuku, nama, jenis, penulis, penerbit } = this.state;

    const updateRef = firebase.firestore().collection('daftarbuku').doc(this.state.key);
    updateRef.set({
      kodebuku,
      nama,
      jenis,
      penulis,
      penerbit
    }).then((docRef) => {
      this.setState({
        key: '',
        kodebuku: '',
        nama: '',
        jenis: '',
        penulis: '',
        penerbit: ''
      });
      // this.props.history.push("/showpinjam/"+this.props.match.params.id)
      this.props.history.push("/listBuku")
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
              Edit Buku
            </h2>
            <p><Link to={`/listBuku`}>List Buku</Link>/Edit Buku</p>
            <hr/>
          </div>
          <div class="panel-body">
          <div class="card">
          <div class="card-body">
          <br/>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="kodebuku">KODE BUKU:</label>
                <input type="text" class="form-control" name="kodebuku" value={this.state.kodebuku} onChange={this.onChange} placeholder="Kode Buku" />
              </div>
              <div class="form-group">
                <label for="nama">NAMA BUKU:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="NAMA BUKU" />
              </div>
              <div class="form-group">
                <label for="jenis">JENIS BUKU:</label>
                <input type="jenis" class="form-control" name="jenis" value={this.state.jenis} onChange={this.onChange} placeholder="JENIS BUKU" />
              </div>
              <div class="form-group">
                <label for="penulis">PENULIS:</label>
                <input type="text" class="form-control" name="penulis" value={this.state.penulis} onChange={this.onChange} placeholder="PENULIS" />
              </div>
              <div class="form-group">
                <label for="penerbit">PENERBIT:</label>
                <input type="text" class="form-control" name="penerbit" value={this.state.penerbit} onChange={this.onChange} placeholder="PENERBIT" />
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

export default editBuku;