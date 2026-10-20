import { useState } from 'react'
import './Component/KartuMenu.jsx'
import './Component/LabelHarga.jsx'
import './Component/Panel.jsx'
import './App.css'

const nama_panggilan = "Nabil"
const N = 18

const gayaJudul = {
  color: '1F3A5F', fontsize: '28px', fontwide: '700', letterSpacing: '0.5px'

}

function App() {
  const jam = 9
  return (

    <>
      <h1 className="judul" style={gayaJudul}>kantin {nama_panggilan}</h1>
      <p>{jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
      <p>Saldo Awal Kartu Kantin : Rp {(N * 1000).toLocaleString('id-ID')}</p>
      <button disabled> Bayar</button> 
     

    </>
  )




}

export default App
