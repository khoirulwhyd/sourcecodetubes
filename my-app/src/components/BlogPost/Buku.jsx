import React from "react";

const buku = (props) => {
    return (
        <div className="buku">
            <div className="gambar-tumbnail">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail" />
            </div>
            <div className="list-buku">
                <div className="kode">{props.kode}</div>
                <div className="judul">{props.judul}</div>
                <div className="pengarang">{props.pengarang}</div>
                <div className="penerbit">{props.penerbit}</div>
                <div className="tahunTerbit">{props.tahunTerbit}</div>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusBuku(props.id)}>Hapus</button>
                <button className="btn btn-sm btn-warning" onClick={() => props.editBuku(props.id)}>Edit Buku</button>
            </div>
        </div>
    )
}

export default buku;