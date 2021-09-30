import { Link } from 'react-router-dom'
const Home = () => {
    return(

        <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Bookshop</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
          <Link to="/Author" type="button" class="btn btn-primary" >Author</Link>
          </li> 
      
          <li className="nav-item">
          <Link to="/Publisher" type="button" class="btn btn-primary" >Publisher</Link>
          </li> 
          
      
              <li class="nav-item">    
          <Link to="/Customer" type="button" class="btn btn-primary" >Customer</Link>
            </li>
            
            <li class="nav-item">
             
          <Link to="/Product" type="button" class="btn btn-primary"  >Product</Link>
          
              </li>
              <li class="nav-item">
             
             <Link to="/Location" type="button" class="btn btn-primary"  >Location</Link>
             
                 </li>
             
                 <li class="nav-item">
             
             <Link to="/Order" type="button" class="btn btn-primary"  >Orders</Link>
             
                 </li>
      
                 <li class="nav-item">
             
             <Link to="/Inventory" type="button" class="btn btn-primary"  >Inventory</Link>
             
                 </li>
      
                
            </ul>
          
          </div>
        </div>
      </nav>
</div>

    )
}


export default Home