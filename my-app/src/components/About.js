import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <h2><strong>Halaman About</strong></h2>
                <hr/>
                <div class="row gx-4 gx-lg-5 align-items-center my-5">
                    <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="./images/ilustrasi-buku.png" alt="..." /></div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light"><strong>Perpustakaan Politeknik Negeri Malang</strong></h1>
                        <hr/>
                        <p>Perpustakaan Politeknik Negeri terletak di lantai 2 Graha Polinema.
                            Didalam Perpustakaan ini tersedia beberapa jenis buku dan pastinya
                            hampir lengkap </p>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="container">
                        <div className="row">
                            {/* Column1 */}
                            <div className="col">
                                <h4><b>PERPUSTAKAAN</b></h4>
                                <ui className="list-unstyled">
                                    <li>Politeknik Negeri Malang</li>
                                    <li>Malang, Jawa Timur</li>
                                    <li>JL. Soekarno Hatta No. 25 Kota Malang</li>
                                </ui>
                            </div>
                            {/* Column2 */}
                            <div className="col">
                                <h4><strong>Fitur</strong></h4>
                                <ui className="list-unstyled">
                                    <li>TAMBAH BUKU</li>
                                    <li>EDIT BUKU</li>
                                    <li>PINJAM DAN KEMBALIKAN BUKU</li>
                                </ui>
                            </div>
                            {/* Column3 */}
                            <div className="col">
                                <h4><strong>Fitur Lainnya</strong></h4>
                                <ui className="list-unstyled">
                                    <li>HOME</li>
                                    <li>ABOUT</li>
                                    <li>TENTANG BUKU</li>
                                </ui>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} PERPUSTAKAAN | All rights reserved |
                                Terms Of Service | Privacy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}