import React from 'react'
import ReadProductsComponent from './products/ReadProductsComponent'
import ReadOneProductComponent from './products/ReadOneProductComponent'
import CreateProductComponent from './products/CreateProductComponent'
import UpdateProductComponent from './products/UpdateProductComponent'
import DeleteProductComponent from './products/DeleteProductComponent'

// component that decides which main component to load: read or create/update
class MainApp extends React.Component{
 
    // initial mode is 'read' mode
    constructor(props){
		super(props);
		this.state={
            currentMode: 'read',
            productId: null,
		};
		this.changeAppMode=this.changeAppMode.bind(this);
    }
 
    // used when use clicks something that changes the current mode
    changeAppMode(newMode, productId) {
        this.setState({currentMode: newMode});
            if(productId !== undefined){
            this.setState({productId: productId});
        }
    }
 
    // render the component based on current or selected mode
    render() {
 
        var modeComponent =
            <ReadProductsComponent
            changeAppMode={this.changeAppMode} />;
 
        switch(this.state.currentMode){
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
 
        return modeComponent;
    }
}

export default MainApp
 
