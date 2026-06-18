document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;
    window.open(`https://wa.me/5531972448607?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20aluguel%20de%20caçamba.%20Nome:%20${name}%20Telefone:%20${phone}%20Endereço:%20${address}%20Quantidade:%20${quantity}%20Data:%20${date}.`);
});