// Order Processing Workflow
// Order Received -> Payment Processed -> Order Packed -> Order Shipped 
// -> Order Delivered -> Order Completed -> Order Reviewed.

orderEvents.on('orderReceived', (order) => {
    console.log(`Order Received: ${order.id}`);
    orderEvents.emit('paymentProcessed', order);    
});