<?php
// Email configuration
$admin_email = "info@tunasjayamotor.com"; // Ganti dengan email admin yang sebenarnya
$admin_name = "Tunas Jaya Motor";

// Set headers for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$form_data = json_decode(file_get_contents('php://input'), true);

if (!$form_data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid data received']);
    exit;
}

// Extract form data
$name = isset($form_data['name']) ? trim($form_data['name']) : '';
$email = isset($form_data['email']) ? trim($form_data['email']) : '';
$phone = isset($form_data['phone']) ? trim($form_data['phone']) : '';
$subject = isset($form_data['subject']) ? trim($form_data['subject']) : '';
$message = isset($form_data['message']) ? trim($form_data['message']) : '';
$form_type = isset($form_data['form_type']) ? trim($form_data['form_type']) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nama, email, dan pesan harus diisi']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Format email tidak valid']);
    exit;
}

// Set email subject based on form type
$email_subject = "Pesan Baru dari Website Tunas Jaya Motor";
switch ($form_type) {
    case 'penjualan':
        $email_subject = "Konsultasi Penjualan Motor - Tunas Jaya Motor";
        break;
    case 'sparepart':
        $email_subject = "Pesanan Sparepart - Tunas Jaya Motor";
        break;
    case 'service':
        $email_subject = "Booking Service - Tunas Jaya Motor";
        break;
    case 'asuransi':
        $email_subject = "Konsultasi Asuransi - Tunas Jaya Motor";
        break;
    case 'kredit':
        $email_subject = "Pengajuan Kredit - Tunas Jaya Motor";
        break;
    default:
        $email_subject = "Pesan Umum - Tunas Jaya Motor";
}

// Create email content
$email_content = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #e02b20; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #e02b20; }
        .value { margin-left: 10px; }
        .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Tunas Jaya Motor</h2>
            <p>Pesan Baru dari Website</p>
        </div>
        
        <div class='content'>
            <div class='field'>
                <span class='label'>Nama:</span>
                <span class='value'>$name</span>
            </div>
            
            <div class='field'>
                <span class='label'>Email:</span>
                <span class='value'>$email</span>
            </div>
            
            <div class='field'>
                <span class='label'>Telepon:</span>
                <span class='value'>$phone</span>
            </div>
            
            <div class='field'>
                <span class='label'>Subjek:</span>
                <span class='value'>$subject</span>
            </div>
            
            <div class='field'>
                <span class='label'>Jenis Form:</span>
                <span class='value'>$form_type</span>
            </div>
            
            <div class='field'>
                <span class='label'>Pesan:</span>
                <div class='value' style='margin-top: 10px; padding: 10px; background-color: white; border-left: 3px solid #e02b20;'>
                    " . nl2br(htmlspecialchars($message)) . "
                </div>
            </div>
        </div>
        
        <div class='footer'>
            <p>Pesan ini dikirim dari website Tunas Jaya Motor</p>
            <p>Jl. Raya Ciputat No. 123, Tangerang Selatan, Banten</p>
            <p>Telepon: (021) 1234-5678 | Email: info@tunasjayamotor.com</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $admin_name . ' <noreply@tunasjayamotor.com>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
);

// Send email to admin
$admin_sent = mail($admin_email, $email_subject, $email_content, implode("\r\n", $headers));

// Send confirmation email to customer
$customer_subject = "Terima Kasih - Tunas Jaya Motor";
$customer_content = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #e02b20; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Tunas Jaya Motor</h2>
            <p>Terima Kasih Telah Menghubungi Kami</p>
        </div>
        
        <div class='content'>
            <p>Halo <strong>$name</strong>,</p>
            
            <p>Terima kasih telah menghubungi Tunas Jaya Motor. Pesan Anda telah kami terima dan akan segera kami proses.</p>
            
            <p>Tim kami akan menghubungi Anda dalam waktu 1x24 jam kerja untuk memberikan informasi lebih lanjut.</p>
            
            <p>Berikut adalah detail pesan Anda:</p>
            <ul>
                <li><strong>Nama:</strong> $name</li>
                <li><strong>Email:</strong> $email</li>
                <li><strong>Telepon:</strong> $phone</li>
                <li><strong>Subjek:</strong> $subject</li>
            </ul>
            
            <p>Jika Anda memiliki pertanyaan mendesak, silakan hubungi kami di:</p>
            <ul>
                <li>Telepon: (021) 1234-5678</li>
                <li>Email: info@tunasjayamotor.com</li>
                <li>Alamat: Jl. Raya Ciputat No. 123, Tangerang Selatan, Banten</li>
            </ul>
            
            <p>Salam,<br>
            <strong>Tim Tunas Jaya Motor</strong></p>
        </div>
        
        <div class='footer'>
            <p>Tunas Jaya Motor - Dealer Resmi Honda</p>
            <p>Jl. Raya Ciputat No. 123, Tangerang Selatan, Banten</p>
            <p>Telepon: (021) 1234-5678 | Email: info@tunasjayamotor.com</p>
        </div>
    </div>
</body>
</html>
";

$customer_headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $admin_name . ' <noreply@tunasjayamotor.com>',
    'X-Mailer: PHP/' . phpversion()
);

$customer_sent = mail($email, $customer_subject, $customer_content, implode("\r\n", $customer_headers));

// Log the email (optional)
$log_entry = date('Y-m-d H:i:s') . " - Form: $form_type - From: $name ($email) - Subject: $subject\n";
file_put_contents('email_log.txt', $log_entry, FILE_APPEND | LOCK_EX);

// Return response
if ($admin_sent && $customer_sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Maaf, terjadi kesalahan dalam pengiriman email. Silakan coba lagi atau hubungi kami langsung.'
    ]);
}
?> 