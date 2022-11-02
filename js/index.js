// javascript for index.html
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
    let url = "http://localhost:3000/groups?_sort=id&_order=desc";
    console.log(term)
    if (term) {
        url += `&q=${term}`;
    }
    const res = await fetch(url);
    const groups = await res.json();
    
    let template = '';
    groups.forEach(group =>{
        template += `
            <div class="group">
                <h2>${group.name}</h2>
                <p>${group.description}</p>
                <p>${group.members.length} members</p>
                <a href="/details.html?id=${group.id}">View more...</a>
            </div>
        `
    })
    document.getElementById('groups').innerHTML = template;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());