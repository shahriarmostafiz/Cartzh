export function CapitalizeFirstWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
export function getCategoryValue(array = [], category) {
    if (array.length) {
        const categoryArray = array.filter(item => item.category.toLowerCase() === category)
        return categoryArray.length
    }
    return 0
}
export function countQuantity(array, id) {
    return array.reduce((count, obj) => {
        return obj.id === id ? count + 1 : count;
    }, 0);
}

export function getSum(array) {
    return array.reduce((count, product) => {
        return product.discountedPrice + count
    }, 0)
}
export function getQuantity(cartInfo, id) {
    // console.log(cartInfo, "was given");
    // console.log(id, "id was given");
    const value = cartInfo?.filter(item => item.productId === id)
    return value.length
}

export const generateEmailHtml = (orderData) => {
    return `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color:white; font-size: 30px; background-color: #de1846; text-align: center; padding: 10px; border-radius: 4px; ">Order Confirmation</h2>
        <p>Dear ${orderData.name},</p>
        <p>Thank you for your order! Here are the details:</p>
        
        <h3>Order Summary</h3>
        <ul>
          ${orderData.orderSummery.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h3>Shipping Address</h3>
        <p>
          ${orderData.shippingAddress.address}<br>
          ${orderData.shippingAddress.city}, ${orderData.shippingAddress.region}
        </p>
        
        <h3>Billing Address</h3>
        <p>
          ${orderData.billingAddress.address}<br>
          ${orderData.billingAddress.city}, ${orderData.billingAddress.region}
        </p>
        
        <h3>Order Details</h3>
        <p>Order ID: ${orderData.id}</p>
        <p>User ID: ${orderData.userId}</p>
        <p>Order Date: ${new Date(orderData.createdAt).toLocaleString()}</p>
        <p>Order Total: $${orderData.cost}</p>
        
        <p>If you have any questions or need further assistance, please feel free to contact us.</p>
        <p>Best regards,<br>Z-Cart</p>
      </body>
    </html>
  `;
};