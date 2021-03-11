import { Component } from 'react';
import carros from '../carros.svg';

class CartWidget extends Component {
    render() {
        return (
    <div>
        <a className="navbar-brand" href="s">
      <img src={carros} alt="" width="30" height="24"></img>
    </a>
    </div>
    )
}
}

export default CartWidget;