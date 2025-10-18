import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HighchartsChartComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  Highcharts: typeof Highcharts = Highcharts;

  // === BAR CHART ===
  barChartOptions: Highcharts.Options = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: 'Pemasukan & Pengularan Per Bisnis', align: 'left', style: { fontSize: '16px', fontWeight: 'bold' } },
    xAxis: {
      categories: ['Chickroll Yogyakarta', 'GymRat Sleman', 'Usaha Baju Bekas'],
      crosshair: true,
      labels: { style: { fontSize: '12px' } },
    },
    yAxis: {
      min: 0,
      title: { text: 'Juta', style: { fontSize: '12px' } },
      labels: { formatter: function () { return this.value + ' Juta'; } },
    },
    tooltip: {
      shared: true,
      backgroundColor: '#e9f0ff',
      borderColor: '#bcd0ff',
      borderRadius: 8,
      formatter: function () {
        return `
          <b>Bulan:</b> Januari<br/>
          <b>Total Pemasukan:</b> ${this.points?.[0].y} Juta<br/>
          <b>Total Pengeluaran:</b> ${this.points?.[1].y} Juta
        `;
      },
    },
    plotOptions: {
      column: { borderRadius: 6, pointPadding: 0.2, borderWidth: 0 },
    },
    series: [
      { name: 'Pemasukan', type: 'column', color: '#3366cc', data: [56, 65, 20] },
      { name: 'Pengeluaran', type: 'column', color: '#e74c3c', data: [25, 40, 10] },
    ],
    credits: { enabled: false },
  };

  // === LINE CHART ===
  lineChartOptions: Highcharts.Options = {
    chart: { type: 'line', backgroundColor: 'transparent' },
    title: { text: 'Tren Pendapatan Tahunan Semua Bisnis', align: 'left', style: { fontSize: '16px', fontWeight: 'bold' } },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
      labels: { style: { fontSize: '12px' } },
    },
    yAxis: {
      title: { text: 'Juta' },
      labels: { formatter: function () { return this.value + ' Juta'; } },
    },
    tooltip: {
      backgroundColor: '#e9f0ff',
      borderColor: '#bcd0ff',
      borderRadius: 8,
      formatter: function () {
        return `
          <b>Bulan:</b> Juni<br/>
          <b>Total Pemasukan:</b> 56 Juta<br/>
          <b>Total Pengeluaran:</b> 25 Juta
        `;
      },
    },
    series: [
      {
        name: 'Pendapatan',
        type: 'line',
        color: '#3366cc',
        data: [0, 15, 10, 5, 8, 12, 45, 60, 40, 100, 90, 110],
      },
    ],
    credits: { enabled: false },
  };


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
