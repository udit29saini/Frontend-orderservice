import React from "react";

class OrderPage extends React.Component {
  state = {
    name: "",
    billingAddress: "",
    shippingAddress:"",
    paymentInformation:"",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.billingAddress==="" || this.state.shippingAddress==="" || this.state.paymentInformation==="") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", billingAddress:"",shippingAddress:"",paymentInformation:""});
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Order</h2>
        <form className="ui form" onSubmit={this.add}>
        <div class="three fields">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          </div>
          <div className="field">
            <label>Billing Address</label>
            <input
              type="text"
              name="billingAddress"
              placeholder="Billing Address"
              value={this.state.billingAddress}
              onChange={(e) => this.setState({ billingAddress: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Shipping Address</label>
            <input
              type="text"
              name="shippingAddress"
              placeholder="shippingAddress"
              value={this.state.shippingAddress}
              onChange={(e) => this.setState({ shippingAddress: e.target.value })}
            />
          </div>
          <div class="field">

            </div>

            <div class="three fields">    
          <div className="field">
            <label>Payment Information</label>
            <input
              type="text"
              name="paymentInformation"
              placeholder="Payment Information"
              value={this.state.paymentInformation}
              onChange={(e) => this.setState({ paymentInformation: e.target.value })}
            />
          </div>
          </div>

          <div class="two fields">
        <div class="field">
            <label>Product</ label>
          <select class="ui fluid search dropdown" name="card[expire-month]">
            <option value="">P1</option>
            <option value="1">P2</option>
            <option value="2">P3</option>
            <option value="3">P4</option>
            <option value="4">P5</option>
            <option value="5">P6</option>

          </select>
        </div>
        </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default OrderPage;
