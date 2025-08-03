const form = document.querySelector("#productForm")

const body = document.querySelector('#cartTable').querySelector('tbody')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value
    const price = document.querySelector('#price').value
    const quantity = document.querySelector('#quantity').value

    // console.dir(`${name} - ${price}$ x${quantity}`)

    body.insertAdjacentHTML('beforeend',
        `
             <tr>
                <th>${name}</th>
                <th>${price}</th>
                <th>${quantity}</th>
                <th>${price*quantity}</th>
             </tr>
            `)
    updateCartValue(price*quantity)
    form.reset()
})

const totalCartValue = document.querySelector('#total')
let cartValue = 0

const updateCartValue = (tovar) => {
    cartValue += tovar
    // console.log(cartValue)
    console.dir(totalCartValue.textContent)
    totalCartValue.textContent = `Загальна сума: ${cartValue} грн`

}