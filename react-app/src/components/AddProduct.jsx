import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../constants";
import categories from "./CategoriesList";
import Header from "./Header";

function AddProduct() {

    const navigate = useNavigate();
    const [pname, setpname] = useState('');
    const [pdesc, setpdesc] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');
    const [pimage, setpimage] = useState('http://localhost:4000/uploads/pimage-1696526270474-101533743');
    const [pimage2, setpimage2] = useState('');


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [])

    const handleApi = () => {

        
            const formData = new FormData();
            formData.append('pname', pname)
            formData.append('pdesc', pdesc)
            formData.append('price', price)
            formData.append('category', category)
            formData.append('pimage', pimage)
            formData.append('pimage2', pimage2)
            formData.append('userId', localStorage.getItem('userId'))

            const url = API_URL + '/add-product';
            axios.post(url, formData)
                .then((res) => {
                    if (res.data.message) {
                        alert(res.data.message);
                        navigate('/')
                    }
                })
                .catch((err) => {
                    console.log("error"+err)
                })
        



    }

    return (
        <div>
            <Header />
            <div className="p-3">

                <h2> ADD YOUR ART HERE : </h2>
                <label> ART Name </label>
                <input className="form-control" type="text" value={pname}
                    onChange={(e) => { setpname(e.target.value) }} />
                <label> ART Description </label>
                <input className="form-control" type="text" value={pdesc}
                    onChange={(e) => { setpdesc(e.target.value) }} />
                <label> ART Price</label>
                <input className="form-control" type="text" value={price}
                    onChange={(e) => { setprice(e.target.value) }} />
                <label> ART Category </label>
                <select className="form-control" value={category}
                    onChange={(e) => { setcategory(e.target.value) }}>
                
                    {
                        categories && categories.length > 0 &&
                        categories.map((item, index) => {
                            return (
                                <option key={'option' + index}> {item} </option>
                            )
                        })
                    }
                </select>
                <label> ART Image </label>
                <input className="form-control" type="file"
                    files={pimage}
                    onChange={(e) => {
                        setpimage(e.target.files[0])
                    }} />

                <label> ART Second Image </label>
                <input className="form-control" type="file"
                    onChange={(e) => {
                        setpimage2(e.target.files[0])
                    }} />
                <button onClick={handleApi} className="btn btn-primary mt-3"> SUBMIT </button>
            </div>

        </div>
    )
}

export default AddProduct;