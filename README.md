# Tunas Jaya Motor Website

Website resmi Tunas Jaya Motor - Dealer Resmi Honda dengan fitur pengiriman email yang berfungsi.

## 📁 Struktur File

```
Tunas jaya motor web/
├── index.html (Halaman Utama)
├── penjualan.html (Penjualan Unit Baru)
├── sparepart.html (Sparepart Original)
├── service.html (Service Berkala)
├── asuransi.html (Asuransi Kendaraan)
├── kredit.html (Kredit Motor)
├── style.css (Semua CSS)
├── script.js (Semua JavaScript)
├── send-email.php (Backend Email - Basic)
├── send-email-smtp.php (Backend Email - Advanced SMTP)
├── test-email.html (Halaman Test Email)
├── .htaccess (Konfigurasi Server)
├── email_log.txt (Log Email - otomatis dibuat)
└── README.md (Panduan ini)
```

## 📧 Setup Email Functionality

### 1. Konfigurasi Server
Pastikan server web Anda mendukung PHP dan fungsi `mail()`:

```bash
# Cek apakah PHP terinstall
php -v

# Cek apakah fungsi mail tersedia
php -m | grep mail
```

### 2. Konfigurasi Email di send-email.php

Edit file `send-email.php` dan ubah konfigurasi email:

```php
// Ganti dengan email admin yang sebenarnya
$admin_email = "info@tunasjayamotor.com";

// Ganti dengan nama perusahaan
$admin_name = "Tunas Jaya Motor";
```

### 3. Konfigurasi SMTP (Opsional)

Jika server tidak mendukung fungsi `mail()` bawaan PHP, Anda bisa menggunakan SMTP:

```php
// Tambahkan di send-email.php
ini_set("SMTP", "smtp.gmail.com");
ini_set("smtp_port", "587");
```

### 4. Testing Email

1. Upload semua file ke server web
2. Buka `test-email.html` di browser untuk testing email
3. Isi form test dan klik "Test Email"
4. Cek email admin dan customer
5. Cek file `email_log.txt` untuk log pengiriman

### 5. Troubleshooting Email

Jika email tidak terkirim:

1. **Cek PHP mail() function:**
   ```bash
   php -r "echo function_exists('mail') ? 'OK' : 'FAIL';"
   ```

2. **Cek SMTP configuration:**
   - Edit `send-email-smtp.php`
   - Uncomment SMTP settings
   - Masukkan kredensial SMTP yang valid

3. **Cek file permissions:**
   ```bash
   chmod 755 send-email.php
   chmod 755 send-email-smtp.php
   chmod 666 email_log.txt
   ```

4. **Cek error logs:**
   - Browser console untuk JavaScript errors
   - Server error logs untuk PHP errors
   - File `email_log.txt` untuk email status

## 🔧 Konfigurasi Email Server

### Untuk cPanel Hosting:
1. Login ke cPanel
2. Buka "Email Accounts"
3. Buat email account baru atau gunakan yang ada
4. Pastikan "Mail" service aktif

### Untuk VPS/Dedicated Server:
1. Install dan konfigurasi Postfix atau Sendmail
2. Konfigurasi DNS records (MX, SPF, DKIM)
3. Test pengiriman email

### Untuk Local Development:
1. Install XAMPP/WAMP/MAMP
2. Konfigurasi SMTP di php.ini
3. Gunakan Gmail SMTP untuk testing

## 📞 Support

Jika ada masalah dengan website atau email functionality:

1. Cek log error di browser console
2. Cek file `email_log.txt` untuk log email
3. Test pengiriman email manual
4. Hubungi developer untuk bantuan

## 📝 License

Website ini dibuat khusus untuk Tunas Jaya Motor. Semua hak dilindungi.

---

**Tunas Jaya Motor** - Dealer Resmi Honda  
Jl. Raya Ciputat No. 123, Tangerang Selatan, Banten  
Telepon: (021) 1234-5678 | Email: info@tunasjayamotor.com 
