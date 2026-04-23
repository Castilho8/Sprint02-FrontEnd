function switchTab(tab, btn) {
    document.querySelectorAll('.tab-profile').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    ['dados','saude','conquistas','privacidade'].forEach(t => {
        document.getElementById('tab-' + t).style.display = t === tab ? '' : 'none';
    });
}

function toggleEdit() {
    const view = document.getElementById('view-mode');
    const edit = document.getElementById('edit-mode');
    const isEditing = edit.style.display !== 'none';
    view.style.display = isEditing ? '' : 'none';
    edit.style.display = isEditing ? 'none' : '';
}

function saveEdit() {
    toggleEdit();
    const toast = document.createElement('div');
    toast.innerHTML = '<div style="position:fixed;bottom:24px;right:24px;background:#2e7d32;color:#fff;padding:14px 22px;border-radius:50px;font-size:0.85rem;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,0.2);z-index:9999;"><i class="bi bi-check-circle-fill me-2"></i>Dados salvos com sucesso!</div>';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function checkDelete() {
    const val = document.getElementById('delete-confirm-input').value;
    if (val.trim().toUpperCase() === 'CONFIRMAR') {
        bootstrap.Modal.getInstance(document.getElementById('deleteModal')).hide();
        setTimeout(() => alert('Conta excluída. Você será redirecionado.'), 300);
    } else {
        document.getElementById('delete-confirm-input').classList.add('is-invalid');
    }
}
