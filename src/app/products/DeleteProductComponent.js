import React from 'react'
import $ from 'jquery'

// component that contains the logic to delete a product
class DeleteProductComponent extends React.Component{

	constructor(props){
		super(props);
		
		this.state={
			id:0
		}
		this.onDelete=this.onDelete.bind(this);
	}

	// on mount, change header text
	componentDidMount() {
		var productId = this.props.productId;
		this.serverRequestProd = $.get("http://192.168.56.102/api/product/read_one.php?id=" + productId,
				function (product) {
					this.setState({id: product.id});
				}.bind(this));
		
		$('.page-header h1').text('Delete Product');
	}
	
	// handle single row deletion
	onDelete(e) {
 
		// product to delete
		var id = {id: this.state.id};
		// submit form data to api
		$.ajax({
			url: "http://192.168.56.102/api/product/delete.php",
			type : "POST",
			contentType : 'application/json',
			data : JSON.stringify(id),
			success : function(response) {
				this.props.changeAppMode('read');
			}.bind(this),
			error: function(xhr, resp, text){
				// show error in console
				console.log(xhr, resp, text);
			}
		});
		
		e.preventDefault();
	}
	
	render() {
		return (
			<div className='row'>
				<div className='col-md-3'></div>
				<div className='col-md-6'>
					<div className='panel panel-default'>
						<div className='panel-body text-align-center'>Are you sure?</div>
						<div className='panel-footer clearfix'>
							<div className='text-align-center'>
								<button onClick={this.onDelete}
									className='btn btn-danger m-r-1em'>Yes</button>
								<button onClick={() => this.props.changeAppMode('read')}
									className='btn btn-primary'>No</button>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-3'></div>
			</div>
		)
	}
}

export default DeleteProductComponent