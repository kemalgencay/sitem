import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'



const IndexPage = () => {
    return (
        <Layout>
            <h2>Merhaba</h2>
            <h5
            >Ben Kemal, 1967'den beri <i>computer* </i>üstünde yenilikleri izliyor ve uyguluyorum.</h5
            >
            <p>Çeşitli konulardaki görüşlerimi, deneyimlerimi, özlü sözleri, burada paylaşmaktayım. Çizgim Atatürk çizgisidir, ikinci vazifemiz devrimleri Anadolu'ya yaymaktır.</p>
            <p>Geliştirici gereksiniminiz mi var?  <Link to="/contact">Bana ulaşın</Link></p>
            <p> *bilgisayar değil, bilgi souyttur sayılamaz!</p>
        </Layout>
    )
        
    
}
export default IndexPage

