import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monitoring-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './monitoring-product.html',
  styleUrl: './monitoring-product.scss'
})
export class MonitoringProduct {
daftarBisnis = [
    {
      nama: 'Chickroll Yogyakarta',
      kategori: 'Kuliner',
      lokasi: 'Yogyakarta',
      tanggalMulai: '22/12/2024',
      status: 'Aktif',
    },
    {
      nama: 'GymRat Sleman',
      kategori: 'Jasa',
      lokasi: 'Yogyakarta',
      tanggalMulai: '12/02/2024',
      status: 'Aktif',
    },
    {
      nama: 'Usaha Baju Bekas',
      kategori: 'Fashion',
      lokasi: 'Yogyakarta',
      tanggalMulai: '04/01/2024',
      status: 'Nonaktif',
    },
  ];
}