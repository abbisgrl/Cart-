import React from 'react';
import Cart from './Cart';
import Navbar from './navbars';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://m.media-amazon.com/images/I/81nC4u9eYfL._UY445_.jpg',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'data:image/jpeg;base64,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',
          id: 2
        },
        {
          price: 30000,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ { fontSize: 25,color: 'red' } }>TOTAL :  {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
