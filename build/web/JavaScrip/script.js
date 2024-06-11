document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.image-section div');
    gridItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('loaded');
        }, index * 100);
    });
});
