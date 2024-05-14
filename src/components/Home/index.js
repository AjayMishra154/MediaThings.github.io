import './index.css'
import { Component } from 'react'
import Navbar from '../Navbar'
import ImageScroller from '../ImageScroller'

class Home extends Component {
    render() {
        const MailComponent = () => {
            const emailAddress = 'mediathings.pr@gmail.com'
            const mailtoLink = `mailto:${emailAddress}`
            return (
              <a href={mailtoLink} className='email-href'>mediathings.pr@gmail.com</a>
            )
        }
        const featuredImages = ['/getFeaturedImages/bombaytimes.png.webp', '/getFeaturedImages/cosmopolitan.png.webp', '/getFeaturedImages/healthshots.png.webp', '/getFeaturedImages/healthsite.png.webp', '/getFeaturedImages/Mid-Day.png.webp', '/getFeaturedImages/pinkvilla.png.webp', '/getfeaturedImages/thestatesman.png.webp', '/getFeaturedImages/vouge.png.webp']
        const tieUpCompanies = ['AICFB', 'bookmychef', 'BVC', 'galalite', 'Honey', 'intercont', 'Jetking', 'MHS', 'MUM', 'Richkardz', 'SA', 'Sde', 'SKS', 'tea-culture-world']
        const services = [
            {service: 'Press Release', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Press Conference', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Product Launch', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Product Review', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Wikipedia Page', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Advetorial', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Media Training', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Influencer Management', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Press Kit Training', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Media Tracking', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
            {service: 'Digital Marketing', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.'},
        ]
        const clientImages = ['AnkitMehra', 'debashi', 'kiran', 'madhu', 'shikha', 'shuti', 'Tina', 'Trishna', 'Twinkle']
        return (
            <>
              <div className='specialEffect'>
                <Navbar />
                <div className='heroClass'>
                    <div className='icons'>
                        <a className='icon instagram' href="https://www.instagram.com" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                        <br/>
                        <a className='icon linkedin' href="https://www.linkedin.in" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </div>
                    <div className='text'>
                        <h1>We Create</h1>
                        <h1>We Communicate</h1>
                        <h1>We Collaborate</h1>
                    </div>
                    <p className='email'>mediathings.pr@gmail.com</p>
                </div>
              </div>
              <div className='services'>
                <h1 className='serviceHeading'>Our Services</h1>
                <div className='cardsContainer'>
                    {services.map(eachService => (
                            <div className='card'>
                                <h3>{eachService.service}</h3>
                                <p>{eachService.serviceDescript}</p>
                            </div>
                    ))}
                </div>
              </div>
              <div className='whatWeOffer'>
                    <img src="/aboutUs.jpg" alt="about us" className='aboutUs' />
                    <div className='aboutText'>
                        <h1>What we offer</h1>
                        <h3 className='aboutHeading'>Little Story About Us</h3>
                        <p className='aboutDescript'>
                            Anshu Ahuja established Media Things in the year 2021 with an aim to bring her proactive attitude and innate affinity for everything "media" to the forefront of the public relations
                            landscape. She commenced her career working with various PR agencies, handling a diverse range of clients. Today, with over 12 years of experience, Anshu and her team are dedicated to
                            providing innovative and effective PR solutions. <br/><br/> Clients across various industries, including lifestyle, hospitality, pharmaceuticals, healthcare, logistics, and entertainment, recognize
                            her strengths in understanding their requirements and delivering creative and strategic PR approaches. With an unwavering commitment to excellence, Anshu, as a co-founder of Media Things,
                            effectively manages and facilitates clients' communication needs.
                        </p>
                    </div>
              </div>
              <div className='getFeaturedOn'>
                  <h1 className='heading'>Get Featured On</h1>
                  <ul className='featuredImages'>
                    {<ImageScroller images={featuredImages} />}
                  </ul>
              </div>
              <div className='tieupCompanies'>
                {
                    tieUpCompanies.map(eachCompany => (
                        <img src={process.env.PUBLIC_URL + `/tieupCompanies/${eachCompany}.png`} alt={eachCompany} className='tieupCompaniesImages' />
                    ))
                }
              </div>
              <div className='ourClients'>
                <h1 className='heading'>Our Clients</h1>
                    <div className='clientImagesContainer'>
                    {
                        clientImages.map(eachImage => (
                            <img src={process.env.PUBLIC_URL + `/clientImages/${eachImage}.png`} alt={eachImage} className='clientImages' />
                        ))
                    }
                    </div>
              </div>
              <div className='footer'>
                <div className='branding'>
                    <img src="/logo1.png" alt="" className='footerLogo' />
                    <div className='footerLinks'>
                        <a className='brandLogo instagram'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                        <a className='brandLogo linkedin'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </div>
                    <p className='copyright'>copyright @ 2024</p>
                </div>
                <div className='footer-services'>
                    <h1>Services</h1>
                    <ul>
                        <li>Press Release</li>
                        <li>Press Confirence</li>
                        <li>Product Launch</li>
                        <li>Media Training</li>
                        <li>Wikipedia Page</li>
                    </ul>
                </div>
                <div className='contact'>
                    <h1>Contact</h1>
                    <ul>
                        <li>+91 9987423546</li>
                        <li>{MailComponent()}</li>
                    </ul>
                </div>
              </div>
            </>
        )
    }
}

export default Home