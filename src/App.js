import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/search';
import ItemsList from './components/cardlist';
import styled from 'styled-components';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

const Content = styled.div`width: 100%;	height: 100%;`;
const mediaTypes = ['movie','podcast','music','musicVideo','audiobook','shortFilm','tvShow','software','ebook','all',];

async function itunesApiRequest(term, media = 'all') {const url = new URL('https://itunes.apple.com/search');
	const params = {country: 'IN',	lang: 'en_us',limit: 50, term,media,};
	try {
		url.search = new URLSearchParams(params);
		const response = await fetch(url);
		const data = await response.json();
		
        if(data.results.length == 0){
			alert("No data found");
		}
		return data;
	} catch (error) {
		console.error(error);
		

	}
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchResults: [] };
		this.updateSearch = this.updateSearch.bind(this);
	}
	async updateSearch(text, media) {
		const response = await itunesApiRequest(text, media);
		this.setState({ searchResults: response.results });
	}
	render() {
		const { searchResults } = this.state;
		return (
			<div>	
				<Content>
					<Header mediaTypes={mediaTypes} startSearch={this.updateSearch} />
          <MDBContainer>
          <MDBRow className='mb-3' >
					<ItemsList  items={searchResults} />
          </MDBRow>
          </MDBContainer>
				</Content>
			</div>
		);
	}
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App
