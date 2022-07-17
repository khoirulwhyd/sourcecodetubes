import { Component } from "react/cjs/react.production.min";
// import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

class ListBuku extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.ref = firebase.firestore().collection('daftarbuku');
    this.unsubscribe = null;
    this.state = {
      daftarbuku: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const daftarbuku = [];
    querySnapshot.forEach((doc) => {
      const { kodebuku, nama, jenis, penulis, penerbit } = doc.data();
      daftarbuku.push({
        key: doc.id,
        doc, // DocumentSnapshot
        kodebuku,
        nama,
        jenis,
        penulis,
        penerbit
      });
    });
    this.setState({
      daftarbuku
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  delete(id){
    firebase.firestore().collection('daftarbuku').doc(id).delete().then(()=>{
      console.log("Documment successfully deleted!");
      this.props.history.push("/")
    }).catch((error)=>{
      console.error("Error removing document: ", error);
    });
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 class="panel-title">
                Daftar Buku
              </h2>
              <p><Link to={`/book`}>Tentang Buku</Link>/Daftar Buku</p>
              <hr/>
            </div>
            
            <Link to="/tambahBuku" class="btn btn-primary"><FontAwesomeIcon icon={faCirclePlus}/> Tambah Buku</Link>
            <table class="table table-stripe">
              <thead class="thead-dark">
                <tr>
                  <th>Kode Buku</th>
                  <th>Nama Buku</th>
                  <th>Jenis Buku</th>
                  <th>Penulis</th>
                  <th>Penerbit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.daftarbuku.map(daftarbuku =>
                  <tr>
                    {/* <th><Link to={`/showMhs/${mahasiswas.key}`}>{mahasiswas.Nama}</Link></th> */}
                    <td>{daftarbuku.kodebuku}</td>
                    <td>{daftarbuku.nama}</td>
                    <td>{daftarbuku.jenis}</td>
                    <td>{daftarbuku.penulis}</td>
                    <td>{daftarbuku.penerbit}</td>
                    <td>
                      <Link to={`/showBuku/${daftarbuku.key}`} class="btn btn-warning"><FontAwesomeIcon icon={faBook} /> Tampilkan</Link>&nbsp;
                      <Link to={`/editBuku/${daftarbuku.key}`} class="btn btn-success"><FontAwesomeIcon icon={faPenToSquare}/>Edit</Link>&nbsp;
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBuku;