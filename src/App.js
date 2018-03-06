import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
        <p><img src={require('./picture/padoru kurze2.jpg') }  id="user"/></p>
        <h1>Stanley Purwahariyanto</h1>
        <hr/>
        <p> <a href="https://Facebook.com"><img src={require('./picture/facebook.png') } className="icon" id="facebook"/></a> <a href="https://tumblr.com"><img src={require('./picture/Tumblr_Icon.png') } className="icon" id="tumblr"/></a> <a href="https://discord.com"><img src={require('./picture/Discord_icon.svg') } className="icon" id="discord"/></a></p>            
        </nav>
        <div id="content">
        <div ref="contentBiodata" className="isi">
                <h1>Biodata</h1>
                <p>Nama: Stanley Purwahariyanto</p>
                <p>Tanggal Lahir: 17 Mei 1995</p>
                <p>Jenis Kelamin: Pria</p>
                <p>Alamat: Taman Modern Blok A6 no.8</p>
        </div>
        <div ref="contentPendidikan" className="isi">
                <h1>Pendidikan</h1>
                <p>SMP: Harapan Bunda</p>
                <p>SMK: Dharma Paramitha</p>
                <p>Kuliah: Purwadhika IT Entrepreneur School</p>
        </div>
        <div ref="contentPengalaman" className="isi">
                <h1>Pengalaman Kerja</h1>
                <ol>
                    <li>Purchasing di Hotel Horizon selama 3 tahun</li>
                    <li>Game Developer & Art Design di Stdio95 selama 3 tahun</li>
                </ol>
        </div>
        
    </div>
      </div>
      
    );
  }
}

export default App;
