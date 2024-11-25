// Jeffrey Goodman
function generateTable() {
    const minRow = parseInt(document.getElementById('minRow').value); // Get the values inputted
    const maxRow = parseInt(document.getElementById('maxRow').value);
    const minCol = parseInt(document.getElementById('minCol').value);
    const maxCol = parseInt(document.getElementById('maxCol').value);

    const tableContainer = document.getElementById('table-container');
    let table = tableContainer.querySelector('table');

    // Clear existing table if it exists
    if (table) {
        tableContainer.removeChild(table);
    }

    // Create a new table element
    table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Generate column headers in the thead section
    const headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th')); // Top-left corner cell
    for (let col = minCol; col <= maxCol; col++) {
        const th = document.createElement('th');
        th.innerText = col;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    // Generate rows with row headers and data cells in the tbody section
    for (let row = minRow; row <= maxRow; row++) {
        const tr = document.createElement('tr');

        // Row header (first column)
        const rowHeader = document.createElement('th');
        rowHeader.innerText = row;
        tr.appendChild(rowHeader);

        // Data cells
        for (let col = minCol; col <= maxCol; col++) {
            const td = document.createElement('td');
            td.innerText = row * col;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table); // Add the new table to the container
}
