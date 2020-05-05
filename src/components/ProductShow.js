import React, {Component} from 'react';

class ProductShow extends Component{
    constructor(props){
        super(props)
        this.state = {
            itemDetails : props.name
        }
    }

    render(){
        const itemDetails = this.props.details
        return (
            <div className="col-sm-4">
             
            </div>
          );
    }
        
}
export default ProductShow;