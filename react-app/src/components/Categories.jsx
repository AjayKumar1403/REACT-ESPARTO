import { Link, useNavigate } from 'react-router-dom';
import categories from './CategoriesList';
import './Header.css';

function Categories(props) {

    const navigate = useNavigate();

    return (
        <div className='cat-container'>
            <div>
                <Link className='links' to="/"> <span className='pr-3'>HOME</span> </Link>
                {categories && categories.length > 0 &&
                    categories.map((item, index) => {
                        return (
                            <span onClick={() => navigate('/category/' + item)} key={index} className='category'> {item} </span>
                        )
                    })}
            </div>
        </div>
    )
}


export default Categories;