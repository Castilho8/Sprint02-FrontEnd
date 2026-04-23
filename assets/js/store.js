let pendingItem = '';
let pendingCost = 0;

function openModal(item, cost) {
    pendingItem = item;
    pendingCost = cost;
    document.getElementById('modal-title').textContent = item;
    document.getElementById('modal-desc').textContent = `Esta ação consumirá ${cost} pontos do seu saldo.`;
    new bootstrap.Modal(document.getElementById('confirmModal')).show();
}

function confirmRedeem() {
    bootstrap.Modal.getInstance(document.getElementById('confirmModal')).hide();
    setTimeout(() => new bootstrap.Modal(document.getElementById('successModal')).show(), 300);
}

function filterCat(cat, btn) {
    document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('#rewards-grid > [data-cat]').forEach(col => {
        col.style.display = (cat === 'all' || col.dataset.cat === cat) ? '' : 'none';
    });
}
