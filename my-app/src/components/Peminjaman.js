import React, { Component } from 'react';

export default class Peminjaman extends Component {
    state = {
        listPeminjaman: [],
        insertPeminjaman: {
            id: 1,
            noIdentitas:"",
            status:"",
            nama:"",
            alamat:"",
            noTelp:"",
            judulBuku:"",
            tanggalPinjam: 1,
            tanggalKembali: 1
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/peminjaman')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listPeminjaman: jsonHasilAmbilDariAPI
                })
            })
    }

    handleTambahPeminjaman = (event) => {
        let formInsertPeminjaman = {...this.state.insertPeminjaman};
        let timestamp = new Date().getTime();
        formInsertPeminjaman['id'] = timestamp;
        formInsertPeminjaman[event.target.id] = event.target.value;
        this.setState({
            insertBuku: formInsertPeminjaman
        });
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }
    
    handleTombolSimpan = () => {
        fetch('http://localhost:3001/peminjaman', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertPeminjaman)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
        })
    }
    
    render() {
        return (
            <div>
                <h2>Book</h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                <div className="card-body">
                                 <h2>Form Peminjaman Buku</h2>
                                    <div className="form-group">
                                        <label>No Identitas</label>
                                        <input type="text" className="form-control" id="noIdentitas" name="noIdentitas" onChange={this.handleTambahPeminjaman}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Status</label>
                                        <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahPeminjaman}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nama</label>
                                        <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahPeminjaman}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat</label>
                                        <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahPeminjaman}/>
                                    </div>
                                    <div className="form-group">
                                        <label>No Telp</label>
                                        <input type="text" className="form-control" id="noTelp" name="noTelp" onChange={this.handleTambahPeminjaman}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Buku</label>
                                        <input type="text" className="form-control" id="judulBuku" name="judulBuku" onChange={this.handleTambahPeminjaman}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Tanggal Peminjaman</label>
                                        <input type="date" className="form-control" id="tanggalPinjam" name="tanggalKembali" onChange={this.handleTambahPeminjaman}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Tanggal Kembali</label>
                                        <input type="date" className="form-control" id="tanggalKembali" name="tanggalKembali" onChange={this.handleTambahPeminjaman}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Input</button>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}