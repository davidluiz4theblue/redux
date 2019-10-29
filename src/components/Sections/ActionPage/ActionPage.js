import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import apiCall from './../../../API/apiCaller';
import { Link } from 'react-router-dom';

class ActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: '',
    };
  }
  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      apiCall(`products/${id}`, 'GET', null).then(res => {
        let data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status,
        });
        // console.log(res.data);
      });
      // console.log(id);
    }
  }

  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = event => {
    event.preventDefault();
    let { id, txtName, txtPrice, chkbStatus } = this.state;
    let { history } = this.props;
    if (id) {
      // update => HTTP method = 'PUT'
      apiCall(`products/${id}`, 'PUT', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then(res => {
        history.goBack();
      });
    } else {
      apiCall('products', 'POST', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then(res => {
        history.goBack();
        // console.log(res);
      });
      //Các trường bên trái phải giống các key bên API
      // console.log(this.state);
    }
  };
  render() {
    let { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSave} className="container col-lg-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Giá</label>
            <input
              type="text"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="chkbStatus"
              value={chkbStatus}
              onChange={this.onChange}
              checked={chkbStatus}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Còn hàng
            </label>
          </div>
          <Link className="btn btn-danger mr-2" to="/">
            Quay lại
          </Link>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};
export default connect(
  mapStateToProps,
  null
)(ActionPage);
