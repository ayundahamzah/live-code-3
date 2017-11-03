- Telah disediakan movie.db dimana terdapat tabel Movies dan ProductionHouses yang memiliki ketentuan satu ProductionHouse dapat memproduksi lebih dari satu film dan satu film hanya dapat memiliki satu ProductionHouse.

- Buatlah folder db dan letakkan file movie.db di dalam folder tersebut


Sesi 2 (30 menit)
- Tampilkan data prodHouse yang terdapat pada database movie.db, tuliskan di halaman prodHouse yang telah kamu buat sebelumnya dalam bentuk tabel. Tampilkan data nama, city.

- Tampilkan data Movies yang terdapat pada database movie.db, tuliskan di halaman Movie yang telah kamu buat sebelumnya dalam bentuk tabel. Tampilkan data Movie, Released Year, Genre, Production House (Gunakan Left Join atau tanpa Join dengan melakukan manipulasi objek)

- Pada masing-masing record di halaman Movie sediakanlah link untuk melakukan edit. Dimana ketika memilih link tersebut user akan diarahkan ke halaman/route 'localhost:3000/movies/edit/:id'

- Di halaman Edit Movie: (data harus ter-populate)
  * field movie berupa input text
  * field released year berupa input text
  * field genre berupa select-option, dimana data optionnya hard code action,comedy,drama,horor  
  * field Production House berupa select-option, dimana data optionnya didapatkan dari melakukan pengambilan data pada tabel Production House
  
- Pada saat user menekan tombol save pada halaman edit, perubahan yang dilakukan oleh user harus tersimpan ke database
