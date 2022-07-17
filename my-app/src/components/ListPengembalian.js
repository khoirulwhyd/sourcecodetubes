import { Component } from "react/cjs/react.production.min";
import { Link } from 'react-router-dom';
import firebase from '../Firebase';

// import font awesome ( icon font )
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

class ListPengembalian extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('pengembalian');
    this.unsubscribe = null;
    this.state = {
      pengembalian: [],
      key: ''
    };
  }



  onCollectionUpdate = (querySnapshot) => {
    const pengembalian = [];
    querySnapshot.forEach((doc) => {
      const { alamat, judulbuku, nama, noidentitas, notelp, status, tanggalkembali, tanggalpinjam, denda } = doc.data();
      pengembalian.push({
        key: doc.id,
        doc, // DocumentSnapshot
        alamat,
        judulbuku,
        nama,
        noidentitas,
        notelp,
        status,
        tanggalkembali,
        tanggalpinjam,
        denda
      });
    });
    this.setState({
      pengembalian
    });
  }

  delete(id){
    firebase.firestore().collection('pengembalian').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/ListPengembalian")
      alert("data peminjaman berhasil di hapus")
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
              List Pengembalian
            </h2>
            <p><Link to={`/book`}>Tentang Buku</Link>/Pengembalian</p>
            <hr/>
          </div>
          <div class="panel-body">
            <h4><Link to="/pengembalian" class="btn btn-primary"><FontAwesomeIcon icon={faCirclePlus} /> Tambah Data Pengembalian</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>No Identitas</th>
                  <th>Alamat</th>
                  <th>Judul Buku</th>
                  <th>No Telephone</th>
                  <th>Status</th>
                  <th>Tanggal Pinjam</th>
                  <th>Tanggal Kembali</th>
                  <th>Denda</th>
                  <th>AKSI</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pengembalian.map(pengembalian =>
                  <tr>
                    {/* <td><Link to={`/show/${mahasiswa.key}`}>{mahasiswa.nama}</Link></td> */}
                    <td>{pengembalian.nama}</td>
                    <td>{pengembalian.noidentitas}</td>
                    <td>{pengembalian.alamat}</td>
                    <td>{pengembalian.judulbuku}</td>
                    <td>{pengembalian.notelp}</td>
                    <td>{pengembalian.status}</td>
                    <td>{pengembalian.tanggalpinjam}</td>
                    <td>{pengembalian.tanggalkembali}</td>
                    <td>{pengembalian.denda}</td>
                    <td>
                        <Link to={`/DetailPengembalian/${pengembalian.key}`} class="btn btn-warning"><FontAwesomeIcon icon={faBook} /> Tampilkan</Link>&nbsp;
                        <Link to={`/EditPengembalian/${pengembalian.key}`} class="btn btn-success"><FontAwesomeIcon icon={faPenToSquare} /> Edit</Link>&nbsp;
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

export default ListPengembalian;