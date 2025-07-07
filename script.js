const images = [
    { url: 'https://oyla.us/wp-content/uploads/2023/08/forest1.jpg', category: 'nature', tag: 'forest' },
    { url: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-1400x850.jpg', category: 'nature', tag: 'mountain' },
    { url: 'https://picsum.photos/id/1025/400/300', category: 'animal', tag: 'dog' },
    { url: 'https://t4.ftcdn.net/jpg/05/13/74/25/360_F_513742569_LLeI88QTirsf7erCeVnbUDgL5GaiVooD.jpg', category: 'animal', tag: 'bird' },
    { url: 'https://cdn.britannica.com/37/100537-050-910FC8A3/computer.jpg', category: 'tech', tag: 'computer' },
    { url: 'https://www.r-go-tools.com/wp-content/uploads/2022/11/ergonomic-working-with-ergonomic-keyboard-compact.jpg.webp', category: 'tech', tag: 'keyboard' },
    { url: 'https://primaryleap.co.uk/images/wikileap/post_levels/thumb_large/32d419f896ca782505b2d256a1ee902db75a5ba7iY.jpg', category: 'nature', tag: 'river' },
    { url: 'https://www.catsan.co.uk/cdn-cgi/image/height=617,f=auto,quality=90/sites/g/files/fnmzdf6076/files/2024-09/the-new-kitten-checklist-top-tips-for-bringing-a-new-kitten-home-xl_1655281961571_0.jpeg', category: 'animal', tag: 'cat' },
    { url: 'https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg', category: 'tech', tag: 'laptop' }
];

function loadImages(imagesToLoad) {
    const container = document.getElementById('imageContainer');
    container.innerHTML = '';
    imagesToLoad.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.src = img.url;
        imageElement.alt = img.tag;
        container.appendChild(imageElement);
    });
}

function filterImages(category) {
    if (category === 'all') {
        loadImages(images);
    } else {
        const filtered = images.filter(img => img.category === category);
        loadImages(filtered);
    }
}

function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filtered = images.filter(img => img.tag.toLowerCase().includes(input));
    loadImages(filtered);
}

// Load all images on page load
window.onload = () => {
    loadImages(images);
};
