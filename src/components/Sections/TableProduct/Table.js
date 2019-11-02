import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList/ProductList';
import Items from './Items/Items';

// API call
// import apiCall from './../../../API/apiCaller';
// Redux
import { connect } from 'react-redux';
import {
  actFetchProductsRequest,
  actDeleteProductsRequest,
} from './../../../actions/index';

class Table extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: [],
  //   };
  // }
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }
  onDelete = id => {
    this.props.onDeleteProduct(id);
  };
  // componentDidMount() { //Thao tác ko có redux
  //   apiCall('products', 'GET', null).then(res => {
  //     // console.log(res);
  //     this.setState({
  //       products: res.data,
  //     });
  //   });
  // }

  // Hàm xóa
  // onDelete = id => {
  //   let { products } = this.state;
  //   apiCall(`products/${id}`, 'DELETE', null).then(res => {
  //     if (res.status === 200) {
  //       let index = this.findIndex(products, id);
  //       if (index !== -1) {
  //         products.splice(index, 1);
  //         this.setState({
  //           products: products,
  //         });
  //       }
  //     }
  //     // console.log(res);
  //   });
  // };

  render() {
    //  <==LẤY TRÊN STATE==>
    // let { products } = this.state;
    let { products } = this.props;
    console.log(products)
    return (
      <div className="container mt-4 col-lg-10">
        <Link to="/product/addproduct">
          <button type="button" className="btn btn-primary">
            Thêm Sản Phẩm mới
          </button>
        </Link>

        <h1>Danh sách sp </h1>

        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }

  showProducts(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Items
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: id => {
      dispatch(actDeleteProductsRequest(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Table);
