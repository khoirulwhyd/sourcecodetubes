import React, { Component } from 'react';
import Post from "./BlogPost/Buku";

export default class Book extends Component {
    state = {
        listBuku: [],
        insertBuku: {
            id: "",
            kode:"",
            judul:"",
            pengarang:"",
            penerbit:"",
            tahunTerbit:""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/buku')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listBuku: jsonHasilAmbilDariAPI
                })
            })
    }

    handleTambahBuku = (event) => {
        let formInsertBuku = {...this.state.insertBuku};
        let timestamp = new Date().getTime();
        formInsertBuku['id'] = timestamp;
        formInsertBuku[event.target.name] = event.target.value;
        this.setState({
            insertBuku: formInsertBuku
        });
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }
    
    handleTombolSimpan = () => {
        fetch('http://localhost:3001/buku', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertBuku)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
        })
    }

    handleHapusBuku = (data) => {
        fetch(`http://localhost:3001/buku/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleEditBuku = () => {
        const dataUpdate = this.state.insertBuku;
        const id = dataUpdate.id;
        fetch('http://localhost:3001/buku/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUpdate)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div>
                <h2>Book</h2>
                <div class="input-group">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-primary">search</button>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                <div className="card-body">
                                 <h2>Form Input Data Buku</h2>
                                    <div className="form-group">
                                        <label>Kode Buku</label>
                                        <input type="text" className="form-control" id="kode" name="kode" onChange={this.handleTambahBuku}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Judul Buku</label>
                                        <input type="text" className="form-control" id="judul" name="judul" onChange={this.handleTambahBuku}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nama Pengarang</label>
                                        <input type="text" className="form-control" id="pengarang" name="pengarang" onChange={this.handleTambahBuku}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Penerbit</label>
                                        <input type="text" className="form-control" id="penerbit" name="penerbit" onChange={this.handleTambahBuku}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Tahun Terbit</label>
                                        <input type="text" className="form-control" id="tahunTerbit" name="tahunTerbit" onChange={this.handleTambahBuku}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Input</button>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Daftar Buku</h2>
                {
                    this.state.listBuku.map(Buku=>{
                        return <Post 
                        key={Buku.id} 
                        id={Buku.id} 
                        kode={Buku.kode} 
                        judul={Buku.judul} 
                        pengarang={Buku.pengarang} 
                        penerbit={Buku.penerbit} 
                        tahunTerbit={Buku.tahunTerbit} 
                        hapusBuku={this.handleHapusBuku} 
                        editBuku={this.handleEditBuku}
                        />

                    })
                }
            </div>
        )
    }
}
