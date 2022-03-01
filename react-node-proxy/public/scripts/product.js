$(document).ready(function() {
    const addProductItemToList = product => {
        return `
            <div class="col-sm-3 mt-3">
                <div class="card" style="width: 18rem;">
                    <img src="${product.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Prce: ${product.unit_price}</p>
                    <a href="#" class="btn btn-primary">Add To Card</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Load data to table
    const loadProductsToList = () => {
        // Call product list API
        $.ajax({
            url: "http://localhost:3003/api/products"
        }).done(function(data) {
            $('#products').html('');
            let productsString = '';
            $.each(data, function(ind, product) {
                productsString = productsString + addProductItemToList(product);
            });
            $('#products').html(productsString);
        });
    };

    // Load product after page finished loading
    loadProductsToList();
});