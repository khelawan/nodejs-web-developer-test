import React from 'react';
import styled from 'styled-components';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBInput,
    MDBBtn,
    MDBBreadcrumb
  } from 'mdb-react-ui-kit';

const Select = styled.select`
	
`;

const headerDiv = {
    backgroundColor : '#363636',
    zIndex:'999',
}
const inputstyle = {
    margin:'10px 10px 10px',
     float:'right',
     display: 'flex'
}
const headerTitle = {
    float:'right'
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			searchMedia: 'all',
		};
	}

	handleSearchTextChange = event =>
		this.setState({ searchText: event.target.value });

	handleSearchMediaChange = event =>
		this.setState({ searchMedia: event.target.value });

	render() {
		const { mediaTypes, startSearch } = this.props;
		const { searchText, searchMedia } = this.state;
		const mediaOptions = mediaTypes.map(media => (
			<option value={media} label={media} key={media} />
		));
		return (
            <div >
            <MDBNavbar light fixed bgColor='Dark' style={headerDiv} sticky>
                <MDBContainer>
                <MDBNavbarBrand href='#'>
                <img
                src='https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg'
                height='60'
                 alt=''
               />
               </MDBNavbarBrand>
              
               </MDBContainer>
               </MDBNavbar>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <MDBContainer className="justify-content-center" >
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <div style={inputstyle}>
                    <MDBInput    
						type="text"
						value={searchText}
						placeholder="Search"
						onChange={this.handleSearchTextChange}
					/>
					<Select value={searchMedia} onChange={this.handleSearchMediaChange}>
						{mediaOptions}
					</Select>
					<MDBBtn color="dark" className='me-2' type='button' onClick={() => startSearch(searchText, searchMedia)}>
						Search
					</MDBBtn>
                    </div>
                    </ol>
                    </nav>
                    </MDBContainer>
                </nav>
            </div>
		);
	}
}

export default Header;
