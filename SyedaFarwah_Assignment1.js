document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tableForm');
    form.addEventListener('submit', generateTable);
});

function generateTable(event) {
    event.preventDefault();

    const rows = Number(document.getElementById('rows').value);
    const columns = Number(document.getElementById('columns').value);
    const tableContainer = document.getElementById('tableContainer');

    // Clear any existing table
    tableContainer.innerHTML = '';

    const table = document.createElement('table');

    for (let i = 1; i <= rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= columns; j++) {
            const td = document.createElement('td');
            td.textContent = `Row ${i}, Col ${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
}
