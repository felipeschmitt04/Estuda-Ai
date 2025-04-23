function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        content.classList.remove('full-width');
    } else {
        sidebar.classList.add('hidden');
        content.classList.add('full-width');
    }
}
