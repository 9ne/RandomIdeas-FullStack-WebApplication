import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal';
import IdeaForm from './components/IdeaFrom';
import IdeaList from './components/IdeaList';
import './css/style.css';

const modal = new Modal();
const ideaForm = new IdeaForm();
const ideaList = new IdeaList();

ideaList.render();
ideaForm.render();


