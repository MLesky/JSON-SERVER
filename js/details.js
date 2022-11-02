const id = new URLSearchParams(window.location.search).get('id');

const renderDetails = async () => {
    console.log(id);
    const res = await fetch('http://localhost:3000/groups/' + id);
    const group = await res.json();

/*     members = ''
    group.members.foreach(member => {
        if(member !== group.manager || member !== group.ass_manager)
            members += `<li>${member}</li>`
    }) */
 
    const template = `
        <h1>${group.name}</h1>
        <p>${group.description}</p>
        <h2>Group Members</h2>
        <ol>
            <li>${group.manager}: manager</li>
            <li>${group.ass_manager}: assistant manager</li>
            <li>${group.members} </li>
        </ol>
    `

    document.getElementById('details').innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());