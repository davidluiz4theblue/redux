import React, { Component } from 'react';



class ProductList extends Component {
  render() {
    return (
      // import Items from './../Items/Items';
      // {this.props.children}  = <Items/>
      <div>
        <table className="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mã SP</th>
              <th scope="col">Tên SP</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children} 
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;
