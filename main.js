// 获取搜索框和搜索按钮
const searchInput = document.getElementById('search-input');
const searchBtn = document.querySelector('.search-btn');

// 搜索功能
function doSearch() {
    const searchText = searchInput.value.trim();
    if (searchText) {
        // 跳转到百度搜索结果页
        window.location.href = `https://www.baidu.com/s?wd=${encodeURIComponent(searchText)}`;
    }
}

// 点击搜索按钮时搜索
searchBtn.addEventListener('click', doSearch);

// 按回车键时搜索
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        doSearch();
    }
});

// 页面加载完成后，让搜索框获得焦点
window.addEventListener('load', () => {
    searchInput.focus();
});
