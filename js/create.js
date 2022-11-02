const form = document.querySelector('form');

const createGroup = async (e) => {
    e.preventDefault();

    const doc = {
        name: form.title.value,
        description: form.description.value,
        manager: "John",
        ass_manager: "",
        members: ["John"],
    }

    await fetch('http://localhost:3000/groups', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json'}
    });

    window.location.replace('/index.html')
}

form.addEventListener('submit', createGroup);