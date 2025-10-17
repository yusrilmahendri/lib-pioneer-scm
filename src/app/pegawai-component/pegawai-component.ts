import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pegawai-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './pegawai-component.html',
  styleUrl: './pegawai-component.scss'
})
export class PegawaiComponent {
daftarBisnis = [
    {
      nama: 'Chickroll Yogyakarta',
      kategori: 'Kuliner',
      lokasi: 'Yogyakarta',
      tanggalMulai: '22/12/2024',
      status: 'Aktif',
      pendapatan: 'Rp. 10000.000',
      pengeluaran: 'Rp. 500.000',
    },
    {
      nama: 'GymRat Sleman',
      kategori: 'Jasa',
      lokasi: 'Yogyakarta',
      tanggalMulai: '12/02/2024',
      status: 'Aktif',
      pendapatan: 'Rp. 10000.000',
      pengeluaran: 'Rp. 500.000',
    },
    {
      nama: 'Usaha Baju Bekas',
      kategori: 'Fashion',
      lokasi: 'Yogyakarta',
      tanggalMulai: '04/01/2024',
      status: 'Nonaktif',
      pendapatan: 'Rp. 10000.000',
      pengeluaran: 'Rp. 500.000',  
    },
  ];
}
