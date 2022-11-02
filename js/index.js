// javascript for index.html
const renderPosts = async () => {
    let url = "http://localhost:3000/groups?"
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

window.addEventListener('DOMContentLoaded', () => renderPosts());