import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CrudHome extends Component {
    render() {
        return (
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  LIST Buku
                </h3>
              </div>
              <div class="panel-body">
                {/* <h4><Link to="/create" class="btn btn-primary">Add Mahasiswa</Link></h4> */}
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>Kode Buku</th>
                      <th>Judul Buku</th>
                      <th>Nama Pengarang</th>
                      <th>Penerbit</th>
                      <th>Tahun Terbit</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
}
export default CrudHome;