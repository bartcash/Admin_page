import './product.css'
import { Sidebar, DailyProduct, Topbar } from '../../components'
import { dailyProduct } from '../../constants/dummyData'
import { Link } from 'react-router-dom'


const Product = ({title}) => {
  return (
    <main className='product'>
      <Sidebar/>
      <section className='product__cont'>
        <Topbar title={title}/>
            <div className='product__top'>
                <h3>Today</h3>

                <Link to='/products' className='link'>
                   <p>SEE MORE</p>
                </Link>
            </div>
          <section className='product__list'>
          {
            dailyProduct.map((products) => (
              <DailyProduct products={products} key={products.id}/>
            ))
          }
            </section>

          <hr/>

          <div className='product__top'>
                <h3>Yesterday</h3>

                <Link to='/products' className='link'>
                  <p>SEE MORE</p>
                </Link>
            </div>
          <section className='product__list'>
          {
            dailyProduct.map((products) => (
              <DailyProduct products={products} key={products.id}/>
            ))
          }
            </section>
      </section>
    </main>
  )
}

export default Product
