// config.js — FAIL KHAS CLIENT INI SAHAJA.
//
// index.html (fail utama) DIKONGSI SAMA untuk semua client PASTI — jangan
// edit terus, copy versi terkini dari repo master bila Dr Ruz kemaskini
// fitur/fix bug. Fail config.js ni TIDAK akan tertimpa oleh proses copy
// tu (ia bukan sebahagian index.html), jadi client tetap kekal guna URL
// Apps Script sendiri walaupun index.html diganti dengan versi terbaru.
//
// Client baharu: tukar URL di bawah ke URL Web App DARI DEPLOYMENT
// setupSistemPASTI() client tu sendiri (rujuk DEPLOYMENT-GUIDE.md
// bahagian "Setup Client Baharu"). JANGAN kongsi satu URL Apps Script
// merentas client berlainan — setiap client mesti ada Sheet + deployment
// Apps Script SENDIRI (isolation penuh, rujuk keputusan Fasa 1).

// window.X (bukan const/let) sengaja — jamin visible merentas <script> tag
// lain dalam page yang sama tanpa ambil risiko dengan kelakuan scope
// top-level let/const yang kurang biasa dipakai untuk tujuan ni.
window.APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkyhBbFkY1YwC1YmHY8M0sZpYQCWqLmEaelTBXQ1f9OMlE_7qf7XyTXlpyInQJYxyd/exec';
