import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Project } from './components/Project/Project';
import { NAME } from './constants';

function App() {
	return (
		<div className='container mx-auto pt-5 h-screen'>
			<Header />
			<Project />
			<Footer name={NAME} />
		</div>
	);
}

export default App;
