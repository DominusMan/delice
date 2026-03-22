import { useState } from 'react'
import './App.css'

function App() {
  const [showReservationModal, setShowReservationModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', date: '', guests: '' })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleReservation = (e: any) => {
    e.preventDefault()
    console.log('Réservation:', formData)
    setShowReservationModal(false)
    setFormData({ name: '', email: '', date: '', guests: '' })
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-premium">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="logo-icon">⚜</span>
            <span className="logo-text">DELICE</span>
            <span className="logo-subtitle">Restaurant Gastronomique</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#home" className="nav-link">Accueil</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">À propos</a></li>
            <li className="nav-item"><a href="#chef" className="nav-link">Chef</a></li>
            <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
            <li className="nav-item"><a href="#events" className="nav-link">Événements</a></li>
            <li className="nav-item"><a href="#reviews" className="nav-link">Avis</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            <button className="reserve-btn" onClick={() => setShowReservationModal(true)}>Réserver</button>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION - PREMIUM */}
      <section id="home" className="hero hero-premium">
        <div className="hero-particles"></div>
        <div className="hero-content hero-content-premium">
          <div className="hero-badge">★ RESTAURANT ÉTOILÉ ★</div>
          <h1 className="hero-title hero-title-premium">DELICE</h1>
          <p className="hero-subtitle hero-subtitle-premium">L'Excellence Culinaire Française</p>
          <p className="hero-description">Une expérience gastronomique d'exception dans une ambiance raffinée</p>
          <div className="hero-buttons">
            <button className="cta-button cta-primary" onClick={() => setShowReservationModal(true)}>
              Réserver une Table
            </button>
            <button className="cta-button cta-secondary" onClick={() => window.location.href = '#menu'}>
              Voir le Menu
            </button>
          </div>
        </div>
      </section>

      {/* INFORMATION SECTION 1 - PREMIUM */}
      <section id="about" className="info-section info-section-premium">
        <div className="info-container">
          <div className="section-header">
            <h2 className="section-title">Notre Histoire</h2>
            <div className="title-underline"></div>
          </div>
          <p className="section-description">
            Depuis 1998, Delice Restaurant incarne l'excellence culinaire française. Fondé par la famille Beaumont, 
            notre établissement s'est imposé comme une référence incontournable de la gastronomie à Paris.
          </p>
          <div className="info-cards-premium">
            <div className="info-card info-card-premium">
              <div className="card-icon">◆</div>
              <h3>Chef Étoilé</h3>
              <p>Plus de 30 ans d'expérience en cuisine française haute gamme. Disciple des grands maîtres.</p>
            </div>
            <div className="info-card info-card-premium">
              <div className="card-icon">✿</div>
              <h3>Ingrédients Premium</h3>
              <p>Sélection quotidienne des meilleurs producteurs locaux et artisans français.</p>
            </div>
            <div className="info-card info-card-premium">
              <div className="card-icon">◇</div>
              <h3>Sommelier Expert</h3>
              <p>Accords mets-vins exceptionnels par notre sommelier de renommée internationale.</p>
            </div>
            <div className="info-card info-card-premium">
              <div className="card-icon">◈</div>
              <h3>Reconnu Internationalement</h3>
              <p>Guide Michelin et autres classifications prestigieuses célèbrent notre excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHEF SECTION */}
      <section id="chef" className="chef-section">
        <div className="chef-container">
          <div className="chef-image">
            <div className="chef-avatar">◆</div>
          </div>
          <div className="chef-content">
            <div className="section-header">
              <h2 className="section-title">Le Chef</h2>
              <div className="title-underline"></div>
            </div>
            <p className="chef-title">Pierre Beaumont - Fondateur & Chef Exécutif</p>
            <p>
              Pierre Beaumont a consacré sa vie à l'art culinaire. Formé auprès des plus grands chefs étoilés, 
              il crée des mets où tradition et modernité s'entrelacent harmonieusement.
            </p>
            <p>
              Son philosophie : "Sublimer les produits locaux avec respect et passion pour révéler leur essence véritable."
            </p>
            <div className="chef-stats">
              <div className="chef-stat">
                <span className="stat-value">30+</span>
                <span className="stat-text">Années d'expérience</span>
              </div>
              <div className="chef-stat">
                <span className="stat-value">★★</span>
                <span className="stat-text">Étoiles Michelin</span>
              </div>
              <div className="chef-stat">
                <span className="stat-value">50+</span>
                <span className="stat-text">Créations signature</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION - PREMIUM */}
      <section id="menu" className="menu-section menu-section-premium">
        <div className="menu-container">
          <div className="section-header">
            <h2 className="section-title">Notre Menu</h2>
            <div className="title-underline"></div>
          </div>
          <p className="menu-subtitle">Découvrez nos créations gastronomiques hautement inspirées</p>
          
          <div className="menu-items">
            <div className="menu-category">
              <h3>◆ Entrées</h3>
              <div className="dishes">
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/salade.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Salade du Chef</span>
                      <span className="dish-price">16€</span>
                    </div>
                    <p className="dish-description">Laitue bio fraîche, tomates anciennes, œuf fermier et croutons artisanaux</p>
                    <span className="dish-highlight">★ Chef's Selection</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/foie-gras.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Foie Gras Poêlé</span>
                      <span className="dish-price">22€</span>
                    </div>
                    <p className="dish-description">Foie gras fermier poêlé, pain d'épices grillé, compotée de figues</p>
                    <span className="dish-highlight">✦ Spécialité de la maison</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/crevettes.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Crevettes Royales</span>
                      <span className="dish-price">20€</span>
                    </div>
                    <p className="dish-description">Crevettes sauvages sautées à l'ail blanc, persil frais et beurre demi-sel</p>
                    <span className="dish-highlight">✧ Produit de saison</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/huitre.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Huître Gratinée</span>
                      <span className="dish-price">18€</span>
                    </div>
                    <p className="dish-description">Huîtres charnues gratinées au beurre blanc et champagne, émulsion safran</p>
                    <span className="dish-highlight">≈ Délices de la Bretagne</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/gravlaxe.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Gravlax Maison</span>
                      <span className="dish-price">19€</span>
                    </div>
                    <p className="dish-description">Saumon gravlax à l'aneth et moutarde, blini et crème fraîche premium</p>
                    <span className="dish-highlight">◉ Classique Revisité</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/veloute-truffe.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Velouté Truffe</span>
                      <span className="dish-price">21€</span>
                    </div>
                    <p className="dish-description">Velouté de champignons des bois, lamelles de truffe noire, crème épaisse</p>
                    <span className="dish-highlight">♔ L'Élégance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-category">
              <h3>▲ Plats Principaux</h3>
              <div className="dishes">
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/filet-mignon.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Filet Mignon Premium</span>
                      <span className="dish-price">45€</span>
                    </div>
                    <p className="dish-description">Filet de bœuf fermier sauce béarnaise, légumes oubliés et réduction au vin rouge</p>
                    <span className="dish-highlight">♔ Signature du Chef</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/saumon.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Saumon Sauvage</span>
                      <span className="dish-price">38€</span>
                    </div>
                    <p className="dish-description">Filet de saumon sauvage croûte écossaise, sauce champagne et champignons des bois</p>
                    <span className="dish-highlight">≈ Délices de la mer</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/coq-vin.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Coq au Vin Classique</span>
                      <span className="dish-price">32€</span>
                    </div>
                    <p className="dish-description">Coq fermier braisé au Bourgogne rouge, lardons, champignons et oignons grelots</p>
                    <span className="dish-highlight">◆ Tradition française</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/homard.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Homard Thermidor</span>
                      <span className="dish-price">52€</span>
                    </div>
                    <p className="dish-description">Homard frais, sauce Thermidor, moutarde de Dijon, champagne et cognac</p>
                    <span className="dish-highlight">♔ Chef's Masterpiece</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/canard.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Canard aux Cerises</span>
                      <span className="dish-price">40€</span>
                    </div>
                    <p className="dish-description">Magret de canard rôti, sauce aux cerises noires, légumes caramélisés</p>
                    <span className="dish-highlight">✦ Saveurs Automnales</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/turbot.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Turbot Sauvage</span>
                      <span className="dish-price">48€</span>
                    </div>
                    <p className="dish-description">Turbot de ligne entier rôti, beurre blanc, nage de légumes de saison</p>
                    <span className="dish-highlight">≈ Roi des Mers</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/veau.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Côte de Veau Rôtie</span>
                      <span className="dish-price">42€</span>
                    </div>
                    <p className="dish-description">Côte de veau fermier, jus naturel réduit, champignons sauvages et thym</p>
                    <span className="dish-highlight">✧ Tendreté Absolue</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-category">
              <h3>● Desserts</h3>
              <div className="dishes">
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/tiramisu.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Tiramisu Artisanal</span>
                      <span className="dish-price">10€</span>
                    </div>
                    <p className="dish-description">Tiramisu italien préparé chaque jour, mascarpone crémeux et cacao de qualité</p>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/crème-brûlée.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Crème Brûlée</span>
                      <span className="dish-price">12€</span>
                    </div>
                    <p className="dish-description">Crème brûlée vanille Madagascar, sucre caramélisé à la torche</p>
                    <span className="dish-highlight">◈ L'incontournable</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/souffle.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Soufflé au Chocolat</span>
                      <span className="dish-price">14€</span>
                    </div>
                    <p className="dish-description">Soufflé au chocolat noir 70%, couleur fondante, sauce chocolat blanc</p>
                    <span className="dish-highlight">▲ Chef's Favorite</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/panna-cotta.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Panna Cotta Framboise</span>
                      <span className="dish-price">11€</span>
                    </div>
                    <p className="dish-description">Panna cotta vanille, coulis framboise frais, biscuit rose croquant</p>
                    <span className="dish-highlight">✿ Saveur Délicate</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/tarte-tatin.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Tarte Tatin</span>
                      <span className="dish-price">12€</span>
                    </div>
                    <p className="dish-description">Tarte Tatin classique, pommes caramélisées, crème fraîche et glace vanille</p>
                    <span className="dish-highlight">■ L'Iconique</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/mousse-passion.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Mousse Passion</span>
                      <span className="dish-price">10€</span>
                    </div>
                    <p className="dish-description">Mousse passion aérienne, coulis exotique, noix de coco grillée</p>
                    <span className="dish-highlight">◯ Tropical Delight</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/profiteroles.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Profiteroles Gourmandes</span>
                      <span className="dish-price">13€</span>
                    </div>
                    <p className="dish-description">Choux garnis crème pâtissière, sauce chocolat chaud, glace vanille</p>
                    <span className="dish-highlight">◉ Intemporel Plaisir</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/citron-meringuée.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Citron Meringué</span>
                      <span className="dish-price">11€</span>
                    </div>
                    <p className="dish-description">Tarte citron meringuée, jus frais citron Menton, sucre caramélisé</p>
                    <span className="dish-highlight">◯ Acidité Parfaite</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-category">
              <h3>◎ Spécialités Créoles</h3>
              <div className="dishes">
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/mofongo.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Mofongo Réinventé</span>
                      <span className="dish-price">24€</span>
                    </div>
                    <p className="dish-description">Mofongo aux plantains, crevettes sautées, sauce créole épicée et citron vert</p>
                    <span className="dish-highlight">◊ Saveur Caribéenne</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/dhal.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Dhal Rouge Créole</span>
                      <span className="dish-price">18€</span>
                    </div>
                    <p className="dish-description">Lentilles corail, noix de coco, épices créoles, riz parfumé au lait de coco</p>
                    <span className="dish-highlight">※ Tradition Antillaise</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/rougail.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Rougail Saucisse Gourmande</span>
                      <span className="dish-price">22€</span>
                    </div>
                    <p className="dish-description">Saucisses fermières, sauce rougail tomates épicées, riz créole et haricots</p>
                    <span className="dish-highlight">⚡ Piquant Authentique</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/accras.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Accras Poisson</span>
                      <span className="dish-price">16€</span>
                    </div>
                    <p className="dish-description">Beignets frits morue et poisson, sauce épicée, glaçage miel lime frais</p>
                    <span className="dish-highlight">» Apéritif Créole</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/poisson-creole.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Poisson à la Créole</span>
                      <span className="dish-price">35€</span>
                    </div>
                    <p className="dish-description">Poisson blanc entier, sauce créole tomate oignon, racines et christophines braisées</p>
                    <span className="dish-highlight">≈ Plat Royal Créole</span>
                  </div>
                </div>
                <div className="dish dish-premium">
                  <div className="dish-image" style={{backgroundImage: 'url(/images/colombo.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Colombo de Chèvre</span>
                      <span className="dish-price">28€</span>
                    </div>
                    <p className="dish-description">Chèvre tendre curry colombo, ananas rôti, riz aux pois d'Angole créole</p>
                    <span className="dish-highlight">※ Épice Généreuse</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-footer">
            <p>Nos menus changent selon les saisons. Disponibilité sujette aux produits locaux.</p>
            <button className="download-menu-btn">Télécharger le Menu Complet</button>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="events-section">
        <div className="events-container">
          <div className="section-header">
            <h2 className="section-title">Événements Spéciaux</h2>
            <div className="title-underline"></div>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">Mars 28</div>
              <h3>Soirée Grand Millésime</h3>
              <p>Dégustez une sélection exceptionnelle de vins français avec du foie gras et homard</p>
              <span className="event-price">85€ par personne</span>
            </div>
            <div className="event-card">
              <div className="event-date">Avril 15</div>
              <h3>Menu Dégustation Printemps</h3>
              <p>6 services révélant les saveurs nouvelles du printemps avec accords mets-vins</p>
              <span className="event-price">120€ par personne</span>
            </div>
            <div className="event-card">
              <div className="event-date">Mai 10</div>
              <h3>Brunch Élégant</h3>
              <p>Dimanche brunch gastronomique avec champagne, fruits de mer et spécialités</p>
              <span className="event-price">65€ par personne</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION - PREMIUM */}
      <section id="gallery" className="gallery-section gallery-section-premium">
        <div className="gallery-container">
          <div className="section-header">
            <h2 className="section-title">Galerie</h2>
            <div className="title-underline"></div>
          </div>
          <p className="gallery-subtitle">Découvrez l'atmosphère raffinée de notre restaurant</p>
          
          <div className="gallery-grid gallery-grid-premium">
            <div className="gallery-item gallery-item-premium">
              <div className="gallery-image">≈</div>
              <div className="gallery-overlay">
                <h3>Plats d'Exception</h3>
              </div>
            </div>
            <div className="gallery-item gallery-item-premium gallery-item-large">
              <div className="gallery-image">▭</div>
              <div className="gallery-overlay">
                <h3>Salle Principale</h3>
              </div>
            </div>
            <div className="gallery-item gallery-item-premium">
              <div className="gallery-image">◆</div>
              <div className="gallery-overlay">
                <h3>Cuisine Ouverte</h3>
              </div>
            </div>
            <div className="gallery-item gallery-item-premium">
              <div className="gallery-image">◇</div>
              <div className="gallery-overlay">
                <h3>Cave à Vins Premium</h3>
              </div>
            </div>
            <div className="gallery-item gallery-item-premium">
              <div className="gallery-image">●</div>
              <div className="gallery-overlay">
                <h3>Pâtisserie Fine</h3>
              </div>
            </div>
            <div className="gallery-item gallery-item-premium">
              <div className="gallery-image">|</div>
              <div className="gallery-overlay">
                <h3>Ambiance Intimiste</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="reviews-section">
        <div className="reviews-container">
          <div className="section-header">
            <h2 className="section-title">Avis de Nos Clients</h2>
            <div className="title-underline"></div>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Une soirée magique ! Le plat signature du chef était divin. Le service impeccable et l'ambiance tout simplement parfaite."</p>
              <p className="review-author">- Marie Dubois</p>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"L'excellence en assiette. Chaque détail est soigné, des accords mets-vins aux présentations artistiques. À faire et à refaire !"</p>
              <p className="review-author">- Jean Laurent</p>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Restaurant incontournable de Paris. Les produits frais, l'innovation, le respect de la tradition... un équilibre parfait."</p>
              <p className="review-author">- Sophie Martin</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2>Restez Informé</h2>
          <p>Recevez nos nouveaux menus, offres spéciales et événements exclusifs</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre email" required />
            <button type="submit" className="newsletter-btn">S'abonner</button>
          </form>
        </div>
      </section>

      {/* INFORMATION SECTION 2 - PREMIUM */}
      <section className="info-section info-section-2 info-section-2-premium">
        <div className="info-container">
          <div className="section-header">
            <h2 className="section-title">L'Expérience Delice</h2>
            <div className="title-underline"></div>
          </div>
          <div className="experience-content experience-content-premium">
            <div className="experience-text">
              <h3>Un Moment Inoubliable</h3>
              <p>
                Notre restaurant offre un cadre élégant et raffiné, idéal pour vos moments privilégiés. 
                Nos serveurs professionnels sauront anticiper vos désirs avec discrétion et attention.
              </p>
              <ul className="experience-list experience-list-premium">
                <li>✓ Réservation prioritaire pour groupes</li>
                <li>✓ Salons privés pour occasions spéciales</li>
                <li>✓ Menus personnalisés sur demande</li>
                <li>✓ Service de traiteur gastronomique</li>
                <li>✓ Parking réservé aux clients</li>
                <li>✓ Accès WiFi haut débit gratuit</li>
              </ul>
            </div>
            <div className="experience-stats experience-stats-premium">
              <div className="stat stat-premium">
                <span className="stat-number">25</span>
                <span className="stat-label">Années d'Excellence</span>
              </div>
              <div className="stat stat-premium">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Clients Satisfaits</span>
              </div>
              <div className="stat stat-premium">
                <span className="stat-number">150+</span>
                <span className="stat-label">Créations Gastronomiques</span>
              </div>
              <div className="stat stat-premium">
                <span className="stat-number">★★</span>
                <span className="stat-label">Étoiles Michelin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer footer-premium">
        <div className="footer-container">
          <div className="footer-section">
            <h4>DELICE Restaurant</h4>
            <p>L'excellence culinaire française depuis 1998. Un voyage gastronomique d'exception.</p>
          </div>
          
          <div className="footer-section">
            <h4>Horaires d'Ouverture</h4>
            <p><strong>Lundi - Vendredi:</strong> 11h30-14h / 19h-22h30</p>
            <p><strong>Samedi:</strong> 12h - 23h</p>
            <p><strong>Dimanche:</strong> 12h - 22h</p>
            <p><strong>Fermé:</strong> Lundi soir et jours fériés</p>
          </div>
          
          <div className="footer-section">
            <h4>Coordonnées</h4>
            <p>◉ 123 Rue de la Gastronomie, 75008 Paris</p>
            <p>◍ +33 (0)1 23 45 67 89</p>
            <p>◐ reservations@delice.fr</p>
            <p>◯ www.delice-restaurant.fr</p>
          </div>
          
          <div className="footer-section">
            <h4>Suivez-Nous</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 DELICE Restaurant. Tous droits réservés. Conception 10k€.</p>
          <div className="footer-links">
            <a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a> | <a href="#">Conditions d'utilisation</a>
          </div>
        </div>
      </footer>

      {/* RESERVATION MODAL */}
      {showReservationModal && (
        <div className="modal modal-open">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowReservationModal(false)}>✕</button>
            <h2>Réservez Votre Table</h2>
            <form onSubmit={handleReservation}>
              <input
                type="text"
                name="name"
                placeholder="Votre nom complet"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
              >
                <option value="">Nombre de convives</option>
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="3">3 personnes</option>
                <option value="4">4 personnes</option>
                <option value="5">5 personnes</option>
                <option value="6">6 personnes</option>
                <option value="7+">7 personnes ou plus</option>
              </select>
              <button type="submit" className="modal-submit-btn">Confirmer la Réservation</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default App
