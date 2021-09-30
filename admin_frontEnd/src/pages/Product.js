import './Author.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {url} from '../common/constants'
import Productrow from '../components/Productrow'

const Products = () => {

const[products,setProducts]=useState([])


useEffect(() => {
    console.log(`Product component got loaded`)
    getProducts()
  }, [])

const getProducts = () => {
    axios.get(url + '/product/all').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setProducts(result.data)
      } else {
        alert('error while loading list of product')
      }
    })
  }


return(

<div> 
    
<h1> Products </h1>
<Link to="/AddProduct" type="button" class="btn btn-success" >Add Book
<button type="button" class="btn btn-success"></button>
</Link>

<Link to="/Homeadmin" type="button" class="btn btn-success" >Back
<button type="button" class="btn btn-success"></button>
</Link>

<table className="table table-striped">
<thead>
<tr>

<th>  Book_id   </th>
<th>   Book_name  </th>
<th>   ISBN  </th>
<th>   Price  </th>
<th>   Author_id  </th>
<th>   Thumbnail  </th>
<th>   Language  </th>
<th>   Description  </th>
<th>   Edition  </th>
<th>   Publisher  </th>
<th>   Genre  </th>
<th>  Delete   </th>
</tr>
    </thead>

<tbody>

{products.map((product_table) => {
            return <Productrow product_table={ product_table } />
          })}

</tbody>


</table>

</div>
)
    
}
export default Products