import { useState } from 'react'
import './App.css'

function App() {
  const [showReservationModal, setShowReservationModal] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-premium">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">Delice Restaurant</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#home" className="nav-link">Accueil</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">À propos</a></li>
            <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
            <li className="nav-item"><a href="#gallery" className="nav-link">Galerie</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenue à Delice</h1>
          <p className="hero-subtitle">Dégustez une expérience culinaire inoubliable</p>
          <button className="cta-button">Réserver une table</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* INFORMATION SECTION 1 */}
      <section id="about" className="info-section">
        <div className="info-container">
          <h2>Notre Histoire</h2>
          <p>
            Depuis plus de 20 ans, Delice Restaurant offre une expérience gastronomique exceptionnelle. 
            Notre chef passionné et son équipe dévouée créent des plats délicieux en utilisant les 
            meilleurs ingrédients frais et locaux. Nous vous accueillons dans une ambiance chaleureuse 
            et élégante pour moments inoubliables.
          </p>
          <div className="info-cards">
            <div className="info-card">
              <div className="card-icon">👨‍🍳</div>
              <h3>Chef Expérimenté</h3>
              <p>Plus de 20 ans d'expérience en cuisine française</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🌿</div>
              <h3>Ingrédients Frais</h3>
              <p>Produits locaux et biologiques sélectionnés</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🍷</div>
              <h3>Vins Sélectionnés</h3>
              <p>Accords mets-vins de notre sommelier</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="menu-section">
        <div className="menu-container">
          <h2>Notre Menu</h2>
          
          <div className="menu-items">
            <div className="menu-category">
              <h3>🥗 Entrées</h3>
              <div className="dishes">
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Salade du Chef</span>
                      <span className="dish-price">12€</span>
                    </div>
                    <p className="dish-description">Laitue fraîche, tomates, oeufs et croutons</p>
                  </div>
                </div>
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Foie Gras</span>
                      <span className="dish-price">18€</span>
                    </div>
                    <p className="dish-description">Foie gras poêlé avec pain grillé</p>
                  </div>
                </div>
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Crevettes Sauvages</span>
                      <span className="dish-price">16€</span>
                    </div>
                    <p className="dish-description">Crevettes sautées à l'ail et persil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-category">
              <h3>🍖 Plats Principaux</h3>
              <div className="dishes">
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #8b4513 0%, #5c2e0f 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Filet Mignon</span>
                      <span className="dish-price">32€</span>
                    </div>
                    <p className="dish-description">Filet mignon sauce béarnaise avec légumes</p>
                  </div>
                </div>
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Saumon à la Normande</span>
                      <span className="dish-price">28€</span>
                    </div>
                    <p className="dish-description">Filet de saumon sauce crème et champignons</p>
                  </div>
                </div>
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #a0522d 0%, #704214 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Coq au Vin</span>
                      <span className="dish-price">24€</span>
                    </div>
                    <p className="dish-description">Coq braisé au vin rouge avec petits légumes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-category">
              <h3>🍰 Desserts</h3>
              <div className="dishes">
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #8b7355 0%, #5d4e37 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Tiramisu</span>
                      <span className="dish-price">8€</span>
                    </div>
                    <p className="dish-description">Tiramisu italien traditionnel</p>
                  </div>
                </div>
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #f4a460 0%, #daa520 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Crème Brûlée</span>
                      <span className="dish-price">9€</span>
                    </div>
                    <p className="dish-description">Crème brûlée vanille avec sucre caramélisé</p>
                  </div>
                </div>
                <div className="dish">
                  <div className="dish-image" style={{background: 'linear-gradient(135deg, #4a3728 0%, #2a2218 100%)'}}></div>
                  <div className="dish-content">
                    <div className="dish-header">
                      <span className="dish-name">Soufflé au Chocolat</span>
                      <span className="dish-price">10€</span>
                    </div>
                    <p className="dish-description">Soufflé au chocolat noir servi chaud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>Galerie</h2>
          <p className="gallery-subtitle">Découvrez l'ambiance de notre restaurant</p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image">🍝</div>
              <h3>Pâtes Fraîches</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">🍝</div>
              <h3>Salle de Restaurant</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">👨‍🍳</div>
              <h3>Cuisine Ouverte</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">🍷</div>
              <h3>Cave à Vins</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">🎂</div>
              <h3>Pâtisserie</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">🍽️</div>
              <h3>Service Premium</h3>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION SECTION 2 */}
      <section className="info-section info-section-2">
        <div className="info-container">
          <h2>Vivez l'Expérience Delice</h2>
          <div className="experience-content">
            <div className="experience-text">
              <h3>Une Ambiance Exceptionnelle</h3>
              <p>
                Notre restaurant offre un cadre élégant et intime, parfait pour les occasions spéciales, 
                repas en famille ou soirées entre amis. Nos serveurs attentionnés sauront vous conseiller 
                pour les meilleurs accords mets-vins.
              </p>
              <ul className="experience-list">
                <li>✓ Réservation recommandée</li>
                <li>✓ Salons privés disponibles</li>
                <li>✓ Menus personnalisés</li>
                <li>✓ Service de traiteur</li>
              </ul>
            </div>
            <div className="experience-stats">
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Années d'Excellence</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Clients Satisfaits</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Plats Signatures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>À propos</h4>
            <p>Delice Restaurant est un établissement gastronomique de prestige depuis 2004.</p>
          </div>
          
          <div className="footer-section">
            <h4>Horaires</h4>
            <p>Lundi - Vendredi: 11h30 - 14h / 19h - 22h30</p>
            <p>Samedi - Dimanche: 12h - 23h</p>
            <p>Fermé les lundis</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📍 123 Rue de la Gastronomie</p>
            <p>📱 +33 (0)1 23 45 67 89</p>
            <p>✉️ contact@delice.fr</p>
          </div>
          
          <div className="footer-section">
            <h4>Réseaux Sociaux</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Delice Restaurant. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}

export default App
