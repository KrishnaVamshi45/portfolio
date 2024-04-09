document.querySelector('.cross').style.display = 'none';
document.querySelector('.threeline').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.three-line').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.three-line').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
    }
})