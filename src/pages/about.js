import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage =  () => {
    return (
        <div>
            <Layout>
            <h1>Hakkımda</h1>
            <p>1944 yılında Ankara'da doğdum. İlk Orta Lise eğitimimi TED Ankara Kolejinde tamamladım. A.Ü. Fen.Fak. Doğa Bilimlerinde okudum, 1970 yılında ODTÜ Elektrik Mühendisliğini bitirdim. Askerlik sonrası IBM Türk Limited şirketinde pazarlama temsilcisi olarak iş yaşamına atıldım. 1985 yılında bu görevimden ayrılarak serbest danışman, eğitmen ve sistem kurucu olarak çalışmaya başladım.</p>
            <p>Günümüze dek yüze yakın Küçük Orta boy işletmelere sistemler kurdum, uygulamalarını yazdım, elemanlarını eğittim. Çeşitli Vakıf Üniversitelerinde dersler verdim.</p>
            <p>İlgi alanlarım: bilim/teknoloji, kişisel gelişim, spritüel çalışmalar, eğitim, doğa, genetik, davranış bilimi, sosyal/siyasal olaylar, ekonomi.</p>
            <p>Bana ulaşmak için <Link to="/contact">tıklayın</Link></p>
            </Layout>
        </div>
    )
}
export default AboutPage