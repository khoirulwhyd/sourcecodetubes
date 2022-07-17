import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class showBuku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftarbuku: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('daftarbuku').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    daftarbuku: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    delete(id) {
        firebase.firestore().collection('daftarbuku').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            this.props.history.push("/listBuku")
            alert("Buku berhasil dihapus")
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">

                        <h2>Tampilkan Data Buku</h2>
                        <p><Link to={`/listBuku`}>List Peminjaman</Link>/Detail Peminjaman</p>
                        <hr/>
                        <h3 class="panel-title">
                            {this.state.daftarbuku.title}
                        </h3>
                    </div>
                    <div class="panel-body">
                    <div class="card">
                    <div class="card-body">
                    <br/>
                        <dl>
                            <dt>Kode Buku:</dt>
                            <dd>{this.state.daftarbuku.kodebuku}</dd>
                            <dt>Nama Buku:</dt>
                            <dd>{this.state.daftarbuku.nama}</dd>
                            <dt>Jenis Buku:</dt>
                            <dd>{this.state.daftarbuku.jenis}</dd>
                            <dt>Penulis:</dt>
                            <dd>{this.state.daftarbuku.penulis}</dd>
                            <dt>Penerbit:</dt>
                            <dd>{this.state.daftarbuku.penerbit}</dd>
                            {/* <dt>Tanggal Kembali:</dt>
                            <dd>{this.state.peminjaman.tglkembali}</dd> */}
                        </dl>
                        {/* <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp; */}
                        <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default showBuku;