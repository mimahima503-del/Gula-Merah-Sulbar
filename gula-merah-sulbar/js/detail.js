http://detail.html
document.addEventListener("DOMContentLoaded", ()=>{
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const produk = produkGula.find(p => p.id == id);
  const container = document.getElementById("detail");
  if(produk){
    container.innerHTML = `
      <div class="row">
        <div class="col-md-6"><img src="${produk.gambar}" class="img-fluid rounded"></div>
        <div class="col-md-6">
          <h2>${produk.nama}</h2>
          <span class="badge bg-success">${produk.asal}</span>
          <h4 class="text-danger my-3">${produk.harga}</h4>
          <p>${produk.deskripsi}</p>
          <p><b>Stok:</b> ${produk.stok}</p>
          <a href="produk.html" class="btn btn-secondary">Kembali</a>
          <a href="login.html" class="btn btn-gula">Pesan Sekarang</a>
        </div>
      </div>`;
  }
});