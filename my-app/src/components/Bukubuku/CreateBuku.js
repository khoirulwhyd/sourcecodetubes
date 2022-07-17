import { Component } from "react/cjs/react.production.min";
import firebase from "../../Firebase";
import { Link } from 'react-router-dom';

class CreateBuku extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('daftarbuku');
        this.state = {
            kodebuku: '',
            nama: '',
            jenis: '',
            penulis: '',
            penerbit: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { kodebuku, nama, jenis, penulis, penerbit } = this.state;
        this.ref.add({
            kodebuku,
            nama,
            jenis,
            penulis,
            penerbit
        }).then((docRef) => {
            this.setState({
                kodebuku: '',
                nama: '',
                jenis: '',
                penulis: '',
                penerbit: ''
            });
            this.props.history.push("/listBuku")
            alert("Buku Berhasil ditambahkan")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
    }
    
    render() {
        // const { kodebuku, nama, jenis, penulis, penerbit } = this.state;
        return (
            <div>
                <div class="container">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                Tambah Data Buku
                            </h3>
                            <p><Link to={`/listBuku`}>List Buku</Link>/Tambah Data Buku</p>
                            <hr/>
                        </div>
                        <br></br>
                        <div class="card">
                            <div class="card-body">
                            <br/>
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-group row">
                                        <label for="kodebuku" class="col-sm-2 col-form-label">Kode Buku</label>
                                        <div class="col-sm-10">
                                            <input type="kodebuku" name="kodebuku" onChange={this.onChange} class="form-control" id="kodebuku" placeholder="Kode Buku" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="nama" class="col-sm-2 col-form-label">Nama Buku</label>
                                        <div class="col-sm-10">
                                            <input type="nama" name="nama" onChange={this.onChange} class="form-control" id="nama" placeholder="Nama Buku" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="jenis" class="col-sm-2 col-form-label">Jenis</label>
                                        <div class="col-sm-10">
                                            <input type="jenis" name="jenis" onChange={this.onChange} class="form-control" id="jenis" placeholder="Jenis Buku" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="penulis" class="col-sm-2 col-form-label">Penulis</label>
                                        <div class="col-sm-10">
                                            <input type="penulis" name="penulis" onChange={this.onChange} class="form-control" id="penulis" placeholder="Penulis" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-2 col-form-label">Penerbit</label>
                                        <div class="col-sm-10">
                                            <input type="penerbit" name="penerbit" onChange={this.onChange} class="form-control" id="penerbit" placeholder="Penerbit" />
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
export default CreateBuku;