function generateTable() {
    const minRow = parseInt(document.getElementById('minRow').value); // Get the values inputted
    const maxRow = parseInt(document.getElementById('maxRow').value);
    const minCol = parseInt(document.getElementById('minCol').value);
    const maxCol = parseInt(document.getElementById('maxCol').value);
    const errorMessage = document.getElementById('error-message'); // Access error message div
    errorMessage.innerHTML = ''; // Clear any previous error messages
    // validate inputs to ensure they are numbers within the range and valid minimum-maximum relationships
    if (isNaN(minRow) || isNaN(maxRow) || isNaN(minCol) || isNaN(maxCol) ||
        minRow > maxRow || minCol > maxCol) {
            errorMessage.innerHTML = ' Minimum values cannot exceed maximum values.'; // Display error messageg
        return;
    }
    if (minCol < -50 || minRow < -50 || maxCol > 50 || maxRow > 50) {
        errorMessage.innerHTML = 'Please enter valid numeric ranges (between -50 and 50).';
        return;
    }
    errorMessage.innerHTML = '';
    // access the table container and the existing table elements
    const tableContainer = document.getElementById('table-container');
    const table = tableContainer.querySelector('table');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    // Clear any existing content in thead and tbody before generating a new table
    thead.innerHTML = '';
    tbody.innerHTML = '';

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

        // Row header (first column, sticky)
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
}
