import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import Board from "./pages/Board/Board";
import Backlog from "./pages/Backlog/Backlog";
import "./App.css";

const AppWrapper = styled.div`
	text-align: center;
`;

const GlobalStyle = createGlobalStyle`
 body {
 margin: 0;
 font-family: -apple-system, BlinkMacSystemFont,
'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
'Cantarell', 'Fira Sans', 'Droid Sans',
'Helvetica Neue', sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 }
 `;

function App() {
	return (
		<>
			<GlobalStyle />
			<AppWrapper>
				<Header />
				<Board />
				<Backlog />
			</AppWrapper>
		</>
	);
}

export default App;
