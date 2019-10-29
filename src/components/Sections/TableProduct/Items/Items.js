import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Items extends Component {
  // Hàm xóa
  onDelete = id => {
    this.props.onDelete(id);
    // console.log('Bạn đã xóa Sản phẩm với id là =>', id);
  };

  render() {
    let { product, index } = this.props;
    let statusName = product.status ? 'Còn hàng' : 'Hết hàng';
    let statusClass = product.status ? 'success' : 'danger';
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>$ {product.price}</td>
        <td>
          <button type="button" className={`btn btn-${statusClass}`}>
            {statusName}
          </button>
        </td>
        <td>
          <Link to={`/products/${product.id}/edit`}>
            <button type="button" className="btn btn-primary mr-2">
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Items;
