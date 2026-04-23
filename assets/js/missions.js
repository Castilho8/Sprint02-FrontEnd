function toggleMission(card) {
    const check = card.querySelector('.mission-check');
    if (!check) return;
    check.classList.toggle('done');
    card.classList.toggle('completed');
}

function switchTab(tab, btn) {
    document.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active-tab'));
    btn.classList.add('active-tab');
    const fisica = document.getElementById('section-fisica');
    const mental = document.getElementById('section-mental');
    if (tab === 'all') { fisica.style.display=''; mental.style.display=''; }
    else if (tab === 'fisica') { fisica.style.display=''; mental.style.display='none'; }
    else if (tab === 'mental') { fisica.style.display='none'; mental.style.display=''; }
    else if (tab === 'done') {
        fisica.style.display=''; mental.style.display='';
        document.querySelectorAll('.mission-card:not(.completed)').forEach(c => c.style.display='none');
        document.querySelectorAll('.mission-card.completed').forEach(c => c.style.display='');
        return;
    }
    document.querySelectorAll('.mission-card').forEach(c => c.style.display='');
}
