import './Author.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {url} from '../common/constants'
import Authorrow from '../components/Authorrow'

const Authors = () => {

const[authors,setAuthors]=useState([])


useEffect(() => {
    console.log(`Author component got loaded`)
    getAuthors()
  }, [])

const getAuthors = () => {
    axios.get(url + '/author/all').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setAuthors(result.data)
      } else {
        alert('error while loading list of artists')
      }
    })
  }


return(

<div> 
    
<h1>This is Author </h1>

<Link to="/Addauthor" type="button" class="btn btn-success" >Add Author
<button type="button" class="btn btn-success"></button>
</Link>

<Link to="/SearchAuthor" type="button" class="btn btn-success" >Search Author
<button type="button" class="btn btn-success"></button>
</Link>


<table className="table table-striped">
<thead>
<tr>
<th>  id   </th>
<th>   Name  </th>
<th>   Thumbnail  </th>
</tr>
    </thead>

<tbody>

{/* {authors.map((author) => {
            return <Authorrow author={author} />
          })} */}

</tbody>


</table>

</div>
)
    
}
export default Authors