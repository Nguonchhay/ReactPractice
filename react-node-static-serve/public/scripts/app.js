$(document).ready(function() {
    let products = [
        {
            "id": "1",
            "name": "iPhone 13",
            "unit_price": 1300,
            "qty_stock": 50
        },
        {
            "id": "2",
            "name": "iPhone X",
            "unit_price": 800,
            "qty_stock": 5
        },
        {
            "id": "3",
            "name": "Oppo Reno 5",
            "unit_price": 400,
            "qty_stock": 15
        }
    ];

    const addProductToTable = product => {
        const tableRow = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.unit_price}</td>
                <td>${product.qty_stock}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-success">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </td>
            </tr>
        `;
        $('#tableProduct tbody').append(tableRow);
    }

    // Load data to table
    const loadProductsToTable = productData => {
        const productTable = $('#tableProduct');
        productTable.children('tbody').html('');

        $.each(productData, function(ind, product) {
            addProductToTable(product);
        });
    };

    // Load product after page finished loading
    loadProductsToTable(products);
});