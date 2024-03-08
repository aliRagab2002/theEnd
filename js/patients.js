let buffer = [];
async function getData() {
    try {
        let api = await fetch('http://localhost:5000/api/addpatient', { method: 'GET' });

        if (!api.ok) {
            throw new Error(`HTTP error! Status: ${api.status}`);
        }

        let data = await api.json();
        buffer = data.data.patients;
        console.log(data);
        show();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData()

function show() {
    const tableBody = document.getElementById('tableBody');
    let tableRows = '';

    buffer.forEach((item, index) => {
        tableRows += `
        <td>#${index + 1}</td>
        <td>${buffer[index].FullName}</td>
        <td>${buffer[index].age}</td>
        <td>${buffer[index].email}</td>
        <td>${buffer[index].gender}</td>
        <td>
            <div class="actions">
                <span class="lab la-telegram-plane"></span>
                <span class="las la-eye"></span>
                <span class="las la-ellipsis-v"></span>
            </div>
        </td>
    </tr>
        `;
    });

    tableBody.innerHTML = tableRows;
}
