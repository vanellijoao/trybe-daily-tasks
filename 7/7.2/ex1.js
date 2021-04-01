const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    
    console.log(

    `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}`

    )
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    
    // Altera o nome    
    order.name = 'Luiz Silva';

    // Apaga o pedido de pizzas
    order.order.pizza = {};
    
    // Cria a pizza de muzzarella
    const muzzarella = { muzzarella: {
        amount:1,
        price:20,
    }}

    Object.assign(order.order.pizza, muzzarella);

    // Cria a pizza de calabresa de foram diferente
    const calabresa = { 
        amount:1,
        price:20
    }

    order.order.pizza.calabresa = calabresa;

    // Cria uma constante para pegar os nomes das pizzas
    const pizzas = Object.keys(order.order.pizza)


    // Apresenta o resultado no console
    console.log(

        `Olá ${order.name}, o total do seu pedido ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${order.order.pizza.muzzarella.price + order.order.pizza.calabresa.price + order.order.drinks.coke.price},00`
    
        )
  
  }
  
  orderModifier(order);

