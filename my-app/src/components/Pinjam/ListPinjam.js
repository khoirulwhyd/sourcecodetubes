import { Component } from "react/cjs/react.production.min";
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

// import font awesome ( icon font )
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

class ListPinjam extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('peminjaman');
    this.unsubscribe = null;
    this.state = {
      peminjaman: [],
      key: ''
    };
  }



  onCollectionUpdate = (querySnapshot) => {
    const peminjaman = [];
    querySnapshot.forEach((doc) => {
      const { idpinjam, kodebuku, namabuku, namapeminjam, tglkembali, tglpinjam } = doc.data();
      peminjaman.push({
        key: doc.id,
        doc, // DocumentSnapshot
        idpinjam,
        kodebuku,
        namabuku,
        namapeminjam,
        tglkembali,
        tglpinjam,
      });
    });
    this.setState({
      peminjaman
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

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">
              List Peminjaman
            </h2>
            <p><Link to={`/book`}>Tentang Buku</Link>/Peminjaman</p>
            <hr/>
          </div>
          <div class="panel-body">
            <h4><Link to="/createpinjam" class="btn btn-primary"><FontAwesomeIcon icon={faCirclePlus} /> Tambah Data Peminjaman</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID PINJAM</th>
                  <th>KODE BUKU</th>
                  <th>NAMA BUKU</th>
                  <th>NAMA PEMINJAM</th>
                  <th>TANGGAL PINJAM</th>
                  <th>TANGGAL KEMBALI</th>
                  <th>AKSI</th>
                </tr>
              </thead>
              <tbody>
                {this.state.peminjaman.map(peminjaman =>
                  <tr>
                    {/* <td><Link to={`/show/${mahasiswa.key}`}>{mahasiswa.nama}</Link></td> */}
                    <td>{peminjaman.idpinjam}</td>
                    <td>{peminjaman.kodebuku}</td>
                    <td>{peminjaman.namabuku}</td>
                    <td>{peminjaman.namapeminjam}</td>
                    <td>{peminjaman.tglpinjam}</td>
                    <td>{peminjaman.tglkembali}</td>
                    <td>
                        <Link to={`/showpinjam/${peminjaman.key}`} class="btn btn-warning"><FontAwesomeIcon icon={faBook} /> Tampilkan</Link>&nbsp;
                        <Link to={`/editpinjam/${peminjaman.key}`} class="btn btn-success"><FontAwesomeIcon icon={faPenToSquare} /> Edit</Link>&nbsp;
                    {/* <button onClick={this.delete.bind(this, this.key)} class="btn btn-danger">Delete</button> */}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListPinjam;