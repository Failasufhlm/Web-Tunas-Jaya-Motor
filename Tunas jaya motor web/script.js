// Product Data
const products = [
  {
    id: 1,
    name: "Honda BeAT CBS",
    type: "matic",
    price: 18000000,
    priceText: "Rp 18.000.000",
    cc: 110,
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9a5f53e8-e58e-492d-9bc9-42fa0d3ea6cf.png",
    alt: "Honda BeAT warna merah dengan desain sporty dan modern",
    specs: {
      mesin: "110cc eSP",
      transmisi: "Otomatis",
      bahan_bakar: "Bensin",
      sistem_pengapian: "PGM-FI",
    },
    promo: "Gratis Helm Standar",
  },
  {
    id: 2,
    name: "Honda Vario 160",
    type: "matic",
    price: 26000000,
    priceText: "Rp 26.000.000",
    cc: 160,
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2475951b-3f8a-40d1-b2a3-40d783cbdfee.png",
    alt: "Honda Vario 160 warna hitam doff dengan aksen merah",
    specs: {
      mesin: "160cc eSP+",
      transmisi: "Otomatis",
      bahan_bakar: "Bensin",
      sistem_pengapian: "PGM-FI",
    },
    promo: "DP Ringan 1,5 Juta",
  },
  {
    id: 3,
    name: "Honda CBR150R",
    type: "sport",
    price: 35000000,
    priceText: "Rp 35.000.000",
    cc: 150,
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6b7b2e2-36bb-45e1-bc02-2108cbbfa185.png",
    alt: "Honda CBR150R warna merah bergaris dengan desang sportbike tajam",
    specs: {
      mesin: "150cc DOHC",
      transmisi: "6 Speed",
      bahan_bakar: "Bensin",
      sistem_pengapian: "PGM-FI",
    },
    promo: "Cashback Rp 1 Juta",
  },
  {
    id: 4,
    name: "Honda Scoopy",
    type: "matic",
    price: 22000000,
    priceText: "Rp 22.000.000",
    cc: 110,
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5787660-b2e8-4546-aaa1-a017e7a8192d.png",
    alt: "Honda Scoopy warna putih pastel dengan aksen vintage",
    specs: {
      mesin: "110cc eSP",
      transmisi: "Otomatis",
      bahan_bakar: "Bensin",
      sistem_pengapian: "PGM-FI",
    },
    promo: "Gratis Box Depan",
  },
  {
    id: 5,
    name: "Honda CB150R",
    type: "cb",
    price: 32000000,
    priceText: "Rp 32.000.000",
    cc: 150,
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69b5cc66-26d0-4ea3-abad-77ed4544b479.png",
    alt: "Honda CB150R warna hitam dengan desain cafe racer modern",
    specs: {
      mesin: "150cc DOHC",
      transmisi: "6 Speed",
      bahan_bakar: "Bensin",
      sistem_pengapian: "PGM-FI",
    },
    promo: "Potongan DP 500rb",
  },
  {
    id: 6,
    name: "Honda Genio",
    type: "matic",
    price: 19000000,
    priceText: "Rp 19.000.000",
    cc: 110,
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/86ce0992-6a76-4d05-9604-b05a2f9a9fb5.png",
    alt: "Honda Genio warna biru muda dengan desain minimalis dan stylish",
    specs: {
      mesin: "110cc eSP",
      transmisi: "Otomatis",
      bahan_bakar: "Bensin",
      sistem_pengapian: "PGM-FI",
    },
    promo: "Free Servis Pertama",
  },
];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Load products if products container exists
  const productsContainer = document.getElementById("productsContainer");
  if (productsContainer) {
    loadProducts(products);
  }

  // Form submission handlers
  const messageForm = document.getElementById("messageForm");
  if (messageForm) {
    messageForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendEmail(this, 'umum');
    });
  }

  const consultationForm = document.getElementById("consultationForm");
  if (consultationForm) {
    consultationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendEmail(this, 'penjualan');
    });
  }

  const sparepartForm = document.getElementById("sparepartForm");
  if (sparepartForm) {
    sparepartForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendEmail(this, 'sparepart');
    });
  }

  const serviceForm = document.getElementById("serviceForm");
  if (serviceForm) {
    serviceForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendEmail(this, 'service');
    });
  }

  const insuranceForm = document.getElementById("insuranceForm");
  if (insuranceForm) {
    insuranceForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendEmail(this, 'asuransi');
    });
  }

  const creditForm = document.getElementById("creditForm");
  if (creditForm) {
    creditForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendEmail(this, 'kredit');
    });
  }

  const creditCalculator = document.getElementById("creditCalculator");
  if (creditCalculator) {
    creditCalculator.addEventListener("submit", function (e) {
      e.preventDefault();
      calculateCredit();
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Load products to the page
function loadProducts(productsToLoad) {
  const container = document.getElementById("productsContainer");
  if (!container) return;
  
  container.innerHTML = "";

  productsToLoad.forEach((product) => {
    const productEl = document.createElement("div");
    productEl.className = "product-card";
    productEl.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${
      product.alt
    }" onerror="this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/447cd35b-a094-46f0-b77f-667c3955eaeb.png'">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="price">${product.priceText}</div>
        <div class="specs">
          <div class="spec-item">
            <span>Tipe</span>
            <span>${getTypeName(product.type)}</span>
          </div>
          <div class="spec-item">
            <span>Mesin</span>
            <span>${product.specs.mesin}</span>
          </div>
          <div class="spec-item">
            <span>Transmisi</span>
            <span>${product.specs.transmisi}</span>
          </div>
        </div>
        <div class="product-actions">
          <button class="btn" onclick="openModal(${
            product.id
          })">Detail</button>
          <button class="btn btn-secondary" onclick="testRide(${
            product.id
          })">Test Ride</button>
        </div>
      </div>
    `;
    container.appendChild(productEl);
  });
}

// Filter products
function filterProducts() {
  const type = document.getElementById("type").value;
  const price = document.getElementById("price").value;
  const cc = document.getElementById("cc").value;

  let filtered = products;

  if (type !== "all") {
    filtered = filtered.filter((p) => p.type === type);
  }

  if (price !== "all") {
    if (price === "1") {
      filtered = filtered.filter((p) => p.price <= 20000000);
    } else if (price === "2") {
      filtered = filtered.filter(
        (p) => p.price > 20000000 && p.price <= 25000000
      );
    } else if (price === "3") {
      filtered = filtered.filter((p) => p.price > 25000000);
    }
  }

  if (cc !== "all") {
    filtered = filtered.filter((p) => p.cc == cc);
  }

  loadProducts(filtered);
}

// Get type name
function getTypeName(type) {
  switch (type) {
    case "bebek":
      return "Bebek";
    case "sport":
      return "Sport";
    case "matic":
      return "Matic";
    case "cb":
      return "CB";
    default:
      return type;
  }
}

// Open product modal
function openModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Create modal if it doesn't exist
  let modal = document.getElementById("productModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "productModal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3 id="modalTitle">Detail Produk</h3>
          <button class="close-btn" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body" id="modalBody">
          <!-- Modal content will be loaded here -->
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById("modalTitle").textContent = product.name;

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div class="product-modal">
      <div class="product-modal-image">
        <img src="${product.image}" alt="${
    product.alt
  }" onerror="this.src='https://placehold.co/600x400/F8F9FA/333?text=Motor+Honda'">
      </div>
      <div class="product-modal-info">
        <h2>${product.name}</h2>
        <div class="product-modal-price">${
          product.priceText
        }</div>
        
        <div class="promo-badge">
          <p><strong>Promo:</strong> ${product.promo}</p>
        </div>
        
        <div class="product-modal-specs">
          ${Object.entries(product.specs)
            .map(
              ([key, value]) => `
              <div class="spec-row">
                <span class="spec-label">${key
                  .replace("_", " ")
                  .toUpperCase()}</span>
                <span class="spec-value">${value}</span>
              </div>
          `
            )
            .join("")}
        </div>
        
        <div class="product-modal-actions">
          <button class="btn" onclick="checkStock(${
            product.id
          })">Cek Stok</button>
          <button class="btn btn-secondary" onclick="testRide(${
            product.id
          })">Jadwalkan Test Ride</button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = "block";
}

// Close modal
function closeModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Test ride function
function testRide(productId) {
  const product = products.find((p) => p.id === productId);
  alert(
    `Anda telah menjadwalkan test ride untuk ${product.name}. Sales kami akan segera menghubungi Anda.`
  );
  closeModal();
}

// Check stock function
function checkStock(productId) {
  const product = products.find((p) => p.id === productId);
  alert(
    `Stok ${product.name} saat ini tersedia. Silakan datang ke showroom kami untuk melihat unit.`
  );
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("productModal");
  if (event.target == modal) {
    closeModal();
  }
};

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Send Email Function
async function sendEmail(form, formType) {
  // Get form data
  const formData = new FormData(form);
  const inputs = form.querySelectorAll('input, select, textarea');
  
  let emailData = {
    form_type: formType,
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  // Extract form data
  inputs.forEach(input => {
    if (input.name || input.id) {
      const fieldName = input.name || input.id;
      const value = input.value.trim();
      
      if (fieldName.includes('nama') || fieldName.includes('name')) {
        emailData.name = value;
      } else if (fieldName.includes('email')) {
        emailData.email = value;
      } else if (fieldName.includes('telepon') || fieldName.includes('phone') || fieldName.includes('tel')) {
        emailData.phone = value;
      } else if (fieldName.includes('subjek') || fieldName.includes('subject')) {
        emailData.subject = value;
      } else if (fieldName.includes('pesan') || fieldName.includes('message')) {
        emailData.message = value;
      }
    }
  });

  // If no specific subject, use form type
  if (!emailData.subject) {
    switch (formType) {
      case 'penjualan':
        emailData.subject = 'Konsultasi Penjualan Motor';
        break;
      case 'sparepart':
        emailData.subject = 'Pesanan Sparepart';
        break;
      case 'service':
        emailData.subject = 'Booking Service';
        break;
      case 'asuransi':
        emailData.subject = 'Konsultasi Asuransi';
        break;
      case 'kredit':
        emailData.subject = 'Pengajuan Kredit';
        break;
      default:
        emailData.subject = 'Pesan Umum';
    }
  }

  // Validate required fields
  if (!emailData.name || !emailData.email || !emailData.message) {
    alert('Mohon lengkapi nama, email, dan pesan Anda.');
    return;
  }

  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Mengirim...';
  submitButton.disabled = true;

  try {
    // Send email using fetch
    const response = await fetch('send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);
      form.reset();
    } else {
      alert('Maaf, terjadi kesalahan: ' + result.message);
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Maaf, terjadi kesalahan dalam pengiriman email. Silakan coba lagi atau hubungi kami langsung.');
  } finally {
    // Restore button state
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
}

// Credit Calculator Function
function calculateCredit() {
  const motorType = document.getElementById("motorType").value;
  const dpAmount = parseFloat(document.getElementById("dpAmount").value);
  const tenure = parseInt(document.getElementById("tenure").value);

  if (!motorType || !dpAmount || !tenure) {
    alert("Silakan lengkapi semua data untuk menghitung kredit.");
    return;
  }

  // Motor prices
  const motorPrices = {
    beat: 18000000,
    vario: 26000000,
    scoopy: 22000000,
    cbr: 35000000,
    cb: 32000000
  };

  const motorNames = {
    beat: "Honda Beat",
    vario: "Honda Vario 160",
    scoopy: "Honda Scoopy",
    cbr: "Honda CBR150R",
    cb: "Honda CB150R"
  };

  const price = motorPrices[motorType];
  const dp = price * dpAmount;
  const loanAmount = price - dp;
  const interestRate = 0.015; // 1.5% per month
  const monthlyInterest = interestRate * loanAmount;
  const monthlyPayment = (loanAmount / tenure) + monthlyInterest;
  const totalPayment = monthlyPayment * tenure;
  const totalInterest = totalPayment - loanAmount;

  const resultDiv = document.getElementById("calculatorResult");
  resultDiv.innerHTML = `
    <h3>Hasil Perhitungan</h3>
    <div class="result-content">
      <div class="result-item">
        <span>Motor:</span>
        <span>${motorNames[motorType]}</span>
      </div>
      <div class="result-item">
        <span>Harga Motor:</span>
        <span>Rp ${price.toLocaleString('id-ID')}</span>
      </div>
      <div class="result-item">
        <span>Uang Muka (DP):</span>
        <span>Rp ${dp.toLocaleString('id-ID')}</span>
      </div>
      <div class="result-item">
        <span>Jumlah Pinjaman:</span>
        <span>Rp ${loanAmount.toLocaleString('id-ID')}</span>
      </div>
      <div class="result-item">
        <span>Jangka Waktu:</span>
        <span>${tenure} Bulan</span>
      </div>
      <div class="result-item">
        <span>Cicilan per Bulan:</span>
        <span>Rp ${Math.round(monthlyPayment).toLocaleString('id-ID')}</span>
      </div>
      <div class="result-item">
        <span>Total Bunga:</span>
        <span>Rp ${Math.round(totalInterest).toLocaleString('id-ID')}</span>
      </div>
      <div class="result-item">
        <span>Total Pembayaran:</span>
        <span>Rp ${Math.round(totalPayment).toLocaleString('id-ID')}</span>
      </div>
    </div>
  `;
} 