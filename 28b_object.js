const mataPelajaran = [
    { nama: 'Pemrograman Dasar', jam: '10:00' },
    { nama: 'Algoritma dan Struktur Data', jam: '12:00' },
    { nama: 'Basis Data', jam: '14:00' },
   ];
   function tampilkanMataPelajaran(mataPelajaran) {
    return mataPelajaran.map(mk => `${mk.nama} - ${mk.jam}`).join('\n');
   }
   function tampilkanSemuaMataPelajaran() {
    console.log('Jadwal Mengajar:');
    console.log(tampilkanMataPelajaran(mataPelajaran));
   }
   tampilkanSemuaMataPelajaran();