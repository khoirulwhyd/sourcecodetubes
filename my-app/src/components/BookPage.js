import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import { Button, button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Peminjaman from './Peminjaman';

import 'bootstrap/dist/css/bootstrap.min.css';

const BookPage = () => {
    return(
        <div className="container py-4 px-4 justify-content-center">
            <h2><strong><center>Halaman Tentang Buku</center></strong></h2>
                <br/>
        <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={2}
            spaceBetween={30}
            >
            <SwiperSlide>
                <br/>
                <div class="card text-center">
                    <div class="card-header">
                        Fitur 1
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">DAFTAR BUKU</h5>
                        <Button variant="primary" as={Link} to="/listBuku">Lihat Buku</Button>
                    </div>
                    <div class="card-footer text-muted">
                        perpuspoltek
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <br/>
                <div class="card text-center">
                    <div class="card-header">
                        Fitur 2
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">DAFTAR PENGEMBALIAN</h5>
                        <Button variant="primary" as={Link} to="/listpengembalian">Lihat Pengembalian</Button>
                    </div>
                    <div class="card-footer text-muted">
                        perpuspoltek
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <br/>
            <div class="card text-center">
                        <div class="card-header">
                            Fitur 3
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">PINJAM BUKU</h5>
                            <Button variant="primary" as={Link} to="/listpinjam">Peminjam Buku</Button>
                        </div>
                        <div class="card-footer text-muted">
                            perpuspoltek
                        </div>
                    </div>
            </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default BookPage;