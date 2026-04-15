/* ================================================================
   i18n.js — English / Spanish translations
   Loaded at end of <body> on every page.
   Usage: add data-i18n="key" to any element to translate it.
         add data-i18n-placeholder="key" to inputs for placeholder.
================================================================ */

const LANG = {

  /* ── ENGLISH ─────────────────────────────────────────────── */
  en: {

    // NAV (shared)
    'nav.home':         'Home',
    'nav.properties':   'Properties',
    'nav.about':        'About',
    'nav.contact':      'Contact',
    'nav.contact_us':   'Contact Us',

    // FOOTER (shared)
    'footer.tagline':      'Curated locally. Updated often.<br />Homes &middot; Land &middot; Investment<br /><br />Specializing in luxury coastal properties across El Pescadero, Cerritos, Todos Santos, and the greater Los Cabos area of Baja California Sur, Mexico.',
    'footer.stay_updated': 'Stay Updated',
    'footer.navigate':     'Navigate',
    'footer.events':       'Events',
    'footer.contact':      'Contact',
    'footer.copyright':    '&copy; 2026 Kenneth Gehlhoff | <a href="/">RE/MAX Cabo Sanctuary</a>. Each office independently owned and operated.',

    // SHARED FORM
    'subscribe':         'Subscribe',
    'email_placeholder': 'Your email address',

    // SHARED STATS (index + businesscard)
    'stats.years_baja':   'Years in Baja',
    'stats.years_estate': 'Years in Real Estate',
    'stats.closed_2025':  'Closed in 2025',

    // ── INDEX PAGE ──────────────────────────────────────────
    'index.hero.title':        'LUXURY<br>OCEANVIEW<br>REAL ESTATE',
    'index.hero.scroll':       'Scroll',
    'index.hero.view_props':   'View Properties',
    'index.search.placeholder':'Search by Address or Area',
    'index.search.book':       'Book an Appointment',

    'index.carousel.featured':     'Featured',
    'index.carousel.land':         'Land',
    'index.carousel.view_listing': 'View Listing',

    'index.carousel.sol_luna.d1':  'Gavilan &nbsp;&middot;&nbsp; 1,800 m&sup2; &nbsp;&middot;&nbsp; 180&deg; Views',
    'index.carousel.sol_luna.d2':  'Casitas &nbsp;&middot;&nbsp; Endless Pool &nbsp;&middot;&nbsp; Sunset Studio',
    'index.carousel.pacific.d2':   '1,500 m&sup2; &nbsp;&middot;&nbsp; Ocean &amp; Mountain Views',
    'index.carousel.costa.d2':     'Steps to South Cerritos Beach',
    'index.carousel.heights.d2':   'Elevated &nbsp;&middot;&nbsp; Pacific Ocean Views',
    'index.carousel.nirvana.d2':   'Private Homesite',

    'index.listing.sol_luna.details': '1,800 m&sup2; &nbsp;&middot;&nbsp; 180&deg; Ocean Views &nbsp;&middot;&nbsp; Endless Pool &nbsp;&middot;&nbsp; Casitas',

    'index.gallery.cerritos.sub':     'Beachfront Lifestyle',
    'index.gallery.todos_santos.sub': 'Luxury Villas',
    'index.gallery.pescadero.sub':    'Private Estates',
    'index.gallery.view_all.title':   'View All Listings',
    'index.gallery.view_all.sub':     'See Full Portfolio',

    'index.about.title':   'Your Baja Real Estate Expert',
    'index.about.pretitle':'About Kenneth',
    'index.about.body1':   'With years of experience in the Todos Santos and Cerritos corridor, Kenneth helps clients navigate Baja real estate with clarity, confidence, and trusted local expertise. From private villas to income properties and beachfront homes, Kenneth curates every transaction with care and deep knowledge of the region.',
    'index.about.body2':   'Whether you are looking for your dream oceanview retreat or an investment property in Baja California Sur, Kenneth brings insider knowledge and a commitment to exceptional service to every deal.',
    'index.about.whatsapp':'WhatsApp Kenneth',

    'index.stats.pending_year': 'Pending This Year',
    'index.stats.cta':          'Schedule a Consultation',

    'index.featured.title': 'Featured Properties',
    'index.listing.view':         'View Listing',
    'index.listing.sale_pending': 'Sale Pending',
    'index.listing.all':          'View All Properties',

    'index.listing.casa_sol.desc':     'Where the desert meets the sea. Casa Sol y Luna sits on an 1,800 m&sup2; lot with 180&deg; views, casitas, an endless pool, and an upstairs sunset studio.',
    'index.listing.pescadero.desc':    'Beachside resort compound with sweeping Pacific views and resort-quality amenities.',
    'index.listing.pacific_dream.desc':'Ocean-view living in the desirable Gavilan enclave, just minutes from Cerritos Beach.',
    'index.listing.casa_vista.desc':   'Stunning views and generous living space in the heart of Cerritos.',
    'index.listing.luna_villa.desc':   'A charming villa in El Centro, perfectly positioned for the Pescadero lifestyle.',

    'index.area.title': "We're Living The Dream &mdash;<br>Come Join Us",
    'index.area.body':  "The Todos Santos and Cerritos corridor is one of the most beautiful and sought-after stretches of coastline in Mexico. Discover your perfect piece of paradise with a trusted local guide.",

    'index.events.title':          'Upcoming Events',
    'index.events.music.date':     'Live Music',
    'index.events.music.name':     'Evenings in Baja',
    'index.events.music.loc':      'Music Calendar',
    'index.events.community.date': 'Community',
    'index.events.community.name': 'No Bad Days',
    'index.events.community.loc':  'Event Calendar',
    'index.events.regional.date':  'Regional',
    'index.events.regional.name':  'Official Events',
    'index.events.regional.loc':   'Official Calendar',

    'index.contact.title':           'Contact Me Today',
    'index.contact.phone_label':     'Phone / WhatsApp',
    'index.contact.service_area':    'Service Area',
    'index.contact.service_area_value': 'Cerritos &nbsp;&middot;&nbsp; Todos Santos &nbsp;&middot;&nbsp; Pescadero<br>Baja California Sur, Mexico',
    'index.contact.brokerage':       'Brokerage',
    'index.contact.brokerage_value': 'RE/MAX Cabo Sanctuary<br>Each office independently owned and operated',
    'index.contact.whatsapp':        'WhatsApp Kenneth',
    'index.contact.card':            'Full Contact Card',
    'index.contact.news':            'Local News',

    // ── LISTINGS PAGE ────────────────────────────────────────
    'listings.hero.pretitle': 'Browse our current listings or contact us to schedule a private showing',
    'listings.hero.title':    'Current Listings',
    'listings.hero.subtitle': 'Curated for lifestyle, location, and value',
    'listings.hero.body':     "RE/MAX Cabo Sanctuary represents discerning buyers and sellers across El Pescadero, Todos Santos, and the greater Los Cabos region \u2014 specializing in oceanview homes, coastal land, and investment properties along Baja California Sur\u2019s Pacific coast.",

    'listings.featured.eyebrow': 'Featured Property',
    'listings.featured.desc':    "A stunning beachside resort compound set in the heart of El Pescadero. This exceptional five-bedroom, five-bathroom property offers sweeping Pacific Ocean views, generous indoor-outdoor living spaces, and resort-quality amenities \u2014 an unrivaled opportunity for luxury living or high-performing investment in one of Baja\u2019s most coveted coastal communities.",
    'listings.view_property':    'View Property',

    'listings.all.title':      'All Properties',
    'listings.divider.homes':  'Homes',
    'listings.divider.land':   'Land',
    'listings.for_sale':       'For Sale',
    'listings.sale_pending':   'Sale Pending',

    // ── BUSINESS CARD PAGE ───────────────────────────────────
    'bc.agent.title': 'Real Estate Agent &nbsp;&middot;&nbsp; RE/MAX Cabo Sanctuary',
    'bc.agent.bio':   "Kenneth\u2019s approach to real estate is rooted in genuine community knowledge and a passion for helping clients find their perfect piece of Baja. Whether buying, selling, or investing, his 15 years of experience and deep local roots ensure you\u2019re in the best hands on the peninsula.",

    // ── INDIVIDUAL LISTING PAGES ─────────────────────────────
    'listing.eyebrow':            'Property Listing',
    'listing.eyebrow.land':       'Land Listing',
    'listing.eyebrow.sale_pending':'SALE PENDING',
    'listing.sale_pending':       'SALE PENDING',

    'listing.loc.home':   'Residential Home &middot; Baja California Sur, Mexico',
    'listing.loc.land':   'Land &middot; Baja California Sur, Mexico',
    'listing.loc.lot_rc': 'Residential / Commercial Lot &middot; Baja California Sur, Mexico',
    'listing.loc.lot_r':  'Residential Lot &middot; Baja California Sur, Mexico',
    'listing.loc.house':  'House &middot; El Pescadero',

    'listing.pescadero_resort.desc': '<p>Stunning Pescadero Resort for sale on a 2.4-acre oasis (about 1 hectare) in the heart of El Pescadero \u2014 just steps from the beach.</p><p>Currently operating as a vacation resort with RV accommodations, Airbnb rentals, and strong development potential.</p><p>Main house + multiple guest accommodations with outdoor entertaining areas, patios, and resort-style amenities \u2014 built for lifestyle and income potential.</p>',

    'listing.casa_sol.desc': '<p>Where the desert meets the sea, and the sun meets the moon. Casa Sol y Luna is a unique Baja property sitting on a 1,800 m\u00b2 lot above Playa Los Cerritos between two iconic surf breaks where sunsets paint the sky year-round.</p><p>Featuring three independent casitas surrounded by native gardens, the property includes a pool and multiple outdoor living areas designed to take full advantage of Baja\u2019s climate and natural setting.</p><p>Located minutes from Cerritos Beach and close to Todos Santos and El Pescadero, Casa Sol y Luna offers privacy, elevation, and a relaxed coastal lifestyle.</p>',

    'listing.casa_costa.desc': '<p>Introducing Casa Costa \u2014 a newer 2 bed, 2 bath home on a 2,007 m\u00b2 lot, just steps from the Pacific Ocean and South Cerritos Beach. Bright, open, and airy, with red brick accents and large sliding doors that open to two terraces facing the ocean views.</p><p>The home features a sparkling saltwater swimming pool with an infinity edge, plus a modern kitchen with a gas range, double sinks, and a pantry built for real storage. Main-floor laundry includes a washer and dryer.</p><p>The layout is dialed in: a generous main-floor bedroom with sliding patio doors to the covered terrace and a full ensuite bath, plus an upstairs master suite with a private exterior entrance, an expansive covered terrace with ocean views, a large walk-in closet, and a luxurious ensuite bath.</p>',

    'listing.casa_pacific.desc': '<p>Perched high in Gavil\u00e1n Hills, Casa Pacific Dream is a 3-bedroom residence with an office, dipping pool, and garage \u2014 positioned for sweeping ocean views over Pescadero Beach and the Pacific.</p><p>Designed for easy full-time living and strong rental potential, the property offers space to gather, unwind, and expand. The setting delivers that rare combo: privacy, dramatic vistas, and quick access to the best of the Pescadero/Cerritos corridor.</p><p>Minutes from nearby restaurants, boutique hotels, and world-class wellness retreats \u2014 including Modern Elders Academy \u2014 you\u2019re also a short drive from Cerritos Beach for surfing, dining, and the area\u2019s most family-friendly swimming on the Pacific side.</p><p>With Cabo roughly an hour away and the airport about 1 hour 15 minutes, this is a standout opportunity to own a view-forward home in one of the most sought-after neighborhoods in the region.</p>',

    'listing.casa_vista.desc': '<p>Only 3 minutes from Cerritos beach escape to this private 5-bedroom villa. Set behind a 7-ft security wall with storm shutters and solar power. The property offers peace of mind and eco-friendly comfort.</p><p>The main house features two bedrooms and a garage, while the attached guest casitas includes their own bedrooms, bathrooms, and kitchens \u2014 perfect for privacy within your group. Thoughtfully designed with modern finishes. Open concept living with stunning views.</p><p>Main Home: 2 spacious bedrooms 2 full bathrooms 1 full kitchen. Guest Casita 1: 1 Bedroom 1 Bathroom 1 kitchen. Guest Casita 2: 2 Bedrooms 1 Bathroom 1 kitchen. Enjoy ocean and mountain views from the pool or gather around the firepit under Baja\u2019s starry skies.</p>',

    'listing.casa_molusco.desc': '<p>Spacious 3-Bedroom Unfurnished Home in Quiet Neighborhood. Welcome to your new home! This beautifully 3-bedroom, 2-bathroom house offers generous space, natural light, and the perfect blank canvas to make it your own.</p><p>Located in a peaceful residential of Las Tunas neighborhood, this property blends comfort with convenience. Key Features: Unfurnished \u2014 Move in with your own furniture and decor to create a space that truly reflects your style. Create your own personal kitchen design.</p><p>Open-concept living and dining area with large windows for plenty of natural light. Laundry room with washer/dryer hookups. Covered parking/garage and additional storage space. Located just minutes from schools, shops, restaurants. This home is ideal for families or professionals.</p>',

    'listing.cerritos_lot.desc': '<p>A rare opportunity to build your dream home or investment property on an exceptional 2,000 m\u00b2 lot in the heart of Central Cerritos. Tucked into a peaceful cul-de-sac, this spacious parcel delivers privacy, tranquility, and convenience.</p><p>Just steps from world-famous Cerritos Beach, you\u2019ll have quick access to Baja\u2019s premier surf destinations \u2014 ideal for beginners and experienced surfers alike. With ocean and mountain views, the setting is pure Cerritos: laid-back, beautiful, and walkable.</p><p>The lot is flat and positioned to capture the coastal breezes \u2014 perfect for a full-time residence, a vacation getaway, or a rental income property. Infrastructure notes: electricity via CFE, water is trucked, and sewage is septic.</p><p>Potential use includes residential or commercial development. Short walk to the beach and community.</p>',

    'listing.tierra_nirvana.desc': '<p>Tierra Nirvana is a 2,000 m\u00b2 homesite in Tierra Nativa near Cerritos, offering space, privacy, and a clean canvas to build.</p><p>Ideal for a one level home or a two story build to maximize views and capture the full Baja lifestyle.</p>',

    'listing.ocean_summit.desc': '<p>Corner lot with panoramic ocean and mountain views in Cerritos. Ready for your dream build. Enjoy your unobstructed views at this prime location.</p><p>Electricity is nearby (distance to CFE: ~1 meter). Water is trucked. Title is escritura.</p><p>A prime residential lot in the Cerritos corridor \u2014 quiet, scenic, and positioned for wide-open vistas.</p><p>Short drive to Cerritos Beach for surfing, dining, and the most family-friendly swimming in the area.</p>',

    'listing.gavilan_heights.desc': '<p>This elevated homesite with Pacific views sits above the coastline in an established neighborhood with modern homes nearby.</p><p>Build one level or two \u2014 a second story captures a wider ocean panorama. CFE electricity is within approximately one meter of the property line, keeping your utility hookup simple.</p>',

    'listing.luna_villa.desc': '<p>Luna Villa in El Pescadero offers clean, modern Pacific-side living set between Cerritos and Todos Santos.</p><p>First floor includes the master bedroom with walk-in closet and full bath, plus two guest bedrooms, storage, and terrace.</p><p>Upstairs features the living room, kitchen and dining area, laundry, balconies/terraces, and rooftop access \u2014 finished with a rooftop pool, BBQ area, and pergola dining space.</p>',

    'listing.new_villa.desc': '<p>New Villa at Luna in El Pescadero offers a compact two level layout with a first floor primary suite, two upstairs bedrooms, and a rooftop garden above the main living footprint.</p><p>The first floor includes the living room, dining room, kitchen, laundry, storage, a guest powder room, and the primary bedroom with walk in closet and full bathroom.</p><p>Upstairs includes bedroom 2, bedroom 3, one full bathroom, and a kitchen or breakfast area, for a total construction area of 142.56 m\u00b2 or 1,534.5 ft\u00b2.</p>',

    // ── LISTING HERO SUBS ───────────────────────────────────────
    'listing.casa_sol.sub':         '5 Bedrooms \u00b7 5 Bathrooms \u00b7 Gavilan above Cerritos / El Pescadero',
    'listing.pescadero_resort.sub': '5 Bedrooms \u00b7 5 Bathrooms \u00b7 5,918 ft\u00b2 \u00b7 El Pescadero',
    'listing.casa_costa.sub':       '2 Bedrooms \u00b7 2 Bathrooms \u00b7 Cerritos / South Cerritos Beach',
    'listing.casa_pacific.sub':     '3 Bedrooms \u00b7 2 Bathrooms \u00b7 Gavil\u00e1n Hills \u00b7 Ocean &amp; Mountain Views',
    'listing.casa_vista.sub':       '5 Bedrooms \u00b7 4 Bathrooms \u00b7 Cerritos / Pacific',
    'listing.casa_molusco.sub':     '3 Bedrooms \u00b7 2 Bathrooms \u00b7 Las Tunas / Pacific',
    'listing.luna_villa.sub':       '3 Bedrooms \u00b7 2 Bath \u00b7 El Pescadero',
    'listing.new_villa.sub':        '3 Bedrooms \u00b7 2 Bath \u00b7 El Pescadero',
    'listing.cerritos_lot.sub':     '2,000 m\u00b2 \u00b7 Ocean View \u00b7 Mountain View \u00b7 Peaceful Cul-de-Sac \u00b7 Central Cerritos',
    'listing.ocean_summit.sub':     '2,000 m\u00b2 Lot \u00b7 Cerritos \u00b7 Ocean &amp; Mountain Views',
    'listing.gavilan_heights.sub':  '1,500 m\u00b2 \u00b7 Pacific Ocean Views \u00b7 Cerritos',
    'listing.tierra_nirvana.sub':   '2,000 m\u00b2 \u00b7 Tierra Nativa \u00b7 Cerritos',

    // ── STAT PILLS ──────────────────────────────────────────────
    'pill.bedrooms':                 'Bedrooms',
    'pill.bathrooms':                'Bathrooms',
    'pill.bath':                     'Bath',
    'pill.lot':                      'Lot',
    'pill.pool':                     'Pool',
    'pill.three_casitas':            'Three Independent Casitas',
    'pill.cerritos_area':            'Cerritos Area',
    'pill.residential_homesite':     'Residential Homesite',
    'pill.build_ready':              'Build Ready',
    'pill.seller_financing':         'Seller Financing',
    'pill.steps_to_beach':           'Steps to Beach',
    'pill.infinity_pool':            'Infinity-Edge Saltwater Pool',
    'pill.ocean_terraces':           'Ocean-View Terraces',
    'pill.ocean_view':               'Ocean View',
    'pill.mountain_view':            'Mountain View',
    'pill.cul_de_sac':               'Cul-de-Sac',
    'pill.flat_topo':                'Flat Topography',
    'pill.cfe_power':                'CFE Power',
    'pill.ocean_mountain_view':      'Ocean \u00b7 Mountain View',
    'pill.ocean_mountain_views':     'Ocean + Mountain Views',
    'pill.pool_office_garage':       'Pool \u00b7 Office \u00b7 Garage',
    'pill.pacific_views':            'Pacific Ocean Views',
    'pill.established_neighborhood': 'Established Neighborhood',
    'pill.residential_lot':          'Residential Lot',
    'pill.cfe_power_1m':             'CFE Power Within ~1 Meter',
    'pill.guest_casitas_2':          '2 Guest Casitas',
    'pill.pool_fire_pit':            'Pool + Fire Pit',
    'pill.rooftop_pool':             'Rooftop Pool',
    'pill.bbq_pergola':              'BBQ + Pergola',
    'pill.primary_suite_down':       'Primary Suite Downstairs',
    'pill.roof_garden':              'Roof Garden',
    'pill.gentle_slope':             'Gentle Slope',

    // ── CARD ABBREVIATIONS & LABELS ─────────────────────────────
    'abbr.bd':    'BD',
    'abbr.ba':    'BA',
    'card.land':  'Land',

    // ── NEWS FEED ────────────────────────────────────────────────
    'news.loading':     'Loading...',
    'news.no_articles': 'No articles found.',
    'news.error':       'Unable to load feed.',
  },


  /* ── SPANISH ─────────────────────────────────────────────── */
  es: {

    // NAV
    'nav.home':        'Inicio',
    'nav.properties':  'Propiedades',
    'nav.about':       'Acerca',
    'nav.contact':     'Contacto',
    'nav.contact_us':  'Cont\u00e1ctenos',

    // FOOTER
    'footer.tagline':      'Curado localmente. Actualizado con frecuencia.<br />Casas &middot; Terrenos &middot; Inversi\u00f3n<br /><br />Especializados en propiedades costeras de lujo en El Pescadero, Cerritos, Todos Santos y la regi\u00f3n de Los Cabos, Baja California Sur, M\u00e9xico.',
    'footer.stay_updated': 'Mant\u00e9nte Informado',
    'footer.navigate':     'Navegar',
    'footer.events':       'Eventos',
    'footer.contact':      'Contacto',
    'footer.copyright':    '&copy; 2026 Kenneth Gehlhoff | <a href="/">RE/MAX Cabo Sanctuary</a>. Cada oficina opera de forma independiente.',

    // FORM
    'subscribe':         'Suscribirse',
    'email_placeholder': 'Tu correo electr\u00f3nico',

    // STATS
    'stats.years_baja':   'A\u00f1os en Baja California Sur',
    'stats.years_estate': 'A\u00f1os en Bienes Ra\u00edces',
    'stats.closed_2025':  'Cerrado en 2025',

    // ── INDEX PAGE ──────────────────────────────────────────
    'index.hero.title':        'BIENES RA\u00cdCES<br>DE LUJO<br>VISTA AL MAR',
    'index.hero.scroll':       'Desplazar',
    'index.hero.view_props':   'Ver Propiedades',
    'index.search.placeholder':'Buscar por Direcci\u00f3n o Zona',
    'index.search.book':       'Reservar una Cita',

    'index.carousel.featured':     'Destacado',
    'index.carousel.land':         'Terreno',
    'index.carousel.view_listing': 'Ver Propiedad',

    'index.carousel.sol_luna.d1':  'Gavilan &nbsp;&middot;&nbsp; 1,800 m&sup2; &nbsp;&middot;&nbsp; Vistas 180&deg;',
    'index.carousel.sol_luna.d2':  'Casitas &nbsp;&middot;&nbsp; Alberca sin Fin &nbsp;&middot;&nbsp; Estudio al Atardecer',
    'index.carousel.pacific.d2':   '1,500 m&sup2; &nbsp;&middot;&nbsp; Vistas al Oc\u00e9ano y la Sierra',
    'index.carousel.costa.d2':     'A pasos de Playa South Cerritos',
    'index.carousel.heights.d2':   'Elevado &nbsp;&middot;&nbsp; Vistas al Oc\u00e9ano Pac\u00edfico',
    'index.carousel.nirvana.d2':   'Lote Privado',

    'index.listing.sol_luna.details': '1,800 m&sup2; &nbsp;&middot;&nbsp; Vistas al Oc\u00e9ano 180&deg; &nbsp;&middot;&nbsp; Alberca sin Fin &nbsp;&middot;&nbsp; Casitas',

    'index.gallery.cerritos.sub':     'Vida en la Playa',
    'index.gallery.todos_santos.sub': 'Villas de Lujo',
    'index.gallery.pescadero.sub':    'Fincas Privadas',
    'index.gallery.view_all.title':   'Ver Todas las Propiedades',
    'index.gallery.view_all.sub':     'Ver Portafolio Completo',

    'index.about.title':   'Tu Experto en Bienes Ra\u00edces de Baja California Sur',
    'index.about.pretitle':'Acerca de Kenneth',
    'index.about.body1':   'Con a\u00f1os de experiencia en el corredor de Todos Santos y Cerritos, Kenneth ayuda a sus clientes a navegar el mercado inmobiliario de Baja California Sur con claridad, confianza y experiencia local de confianza. Desde villas privadas hasta propiedades de inversi\u00f3n y casas frente al mar, Kenneth cuida cada transacci\u00f3n con esmero y profundo conocimiento de la regi\u00f3n.',
    'index.about.body2':   'Ya sea que est\u00e9s buscando tu retiro so\u00f1ado con vista al mar o una propiedad de inversi\u00f3n en Baja California Sur, Kenneth aporta conocimiento interno y un compromiso con el servicio excepcional en cada operaci\u00f3n.',
    'index.about.whatsapp':'WhatsApp a Kenneth',

    'index.stats.pending_year': 'Pendiente Este A\u00f1o',
    'index.stats.cta':          'Programar una Consulta',

    'index.featured.title': 'Propiedades Destacadas',
    'index.listing.view':         'Ver Propiedad',
    'index.listing.sale_pending': 'Venta Pendiente',
    'index.listing.all':          'Ver Todas las Propiedades',

    'index.listing.casa_sol.desc':     'Donde el desierto se encuentra con el mar. Casa Sol y Luna se asienta en un terreno de 1,800 m&sup2; con vistas de 180&deg;, casitas, una piscina infinita y un estudio de atardecer en el piso superior.',
    'index.listing.pescadero.desc':    'Complejo resort frente al mar con impresionantes vistas al Pac\u00edfico y amenidades de nivel resort.',
    'index.listing.pacific_dream.desc':'Vida con vista al mar en el codiciado enclave de Gavil\u00e1n, a solo minutos de Cerritos Beach.',
    'index.listing.casa_vista.desc':   'Impresionantes vistas y generoso espacio de vida en el coraz\u00f3n de Cerritos.',
    'index.listing.luna_villa.desc':   'Una encantadora villa en El Centro, perfectamente ubicada para el estilo de vida de Pescadero.',

    'index.area.title': 'Estamos Viviendo el Sue\u00f1o &mdash;<br>\u00danete a Nosotros',
    'index.area.body':  'El corredor de Todos Santos y Cerritos es uno de los tramos de costa m\u00e1s hermosos y codiciados de M\u00e9xico. Descubre tu rinc\u00f3n perfecto del para\u00edso con un gu\u00eda local de confianza.',

    'index.events.title':          'Pr\u00f3ximos Eventos',
    'index.events.music.date':     'M\u00fasica en Vivo',
    'index.events.music.name':     'Noches en Baja California Sur',
    'index.events.music.loc':      'Calendario Musical',
    'index.events.community.date': 'Comunidad',
    'index.events.community.name': 'Sin D\u00edas Malos',
    'index.events.community.loc':  'Calendario de Eventos',
    'index.events.regional.date':  'Regional',
    'index.events.regional.name':  'Eventos Oficiales',
    'index.events.regional.loc':   'Calendario Oficial',

    'index.contact.title':           'Cont\u00e1ctame Hoy',
    'index.contact.phone_label':     'Tel\u00e9fono / WhatsApp',
    'index.contact.service_area':    '\u00c1rea de Servicio',
    'index.contact.service_area_value': 'Cerritos &nbsp;&middot;&nbsp; Todos Santos &nbsp;&middot;&nbsp; Pescadero<br>Baja California Sur, M\u00e9xico',
    'index.contact.brokerage':       'Corredor\u00eda',
    'index.contact.brokerage_value': 'RE/MAX Cabo Sanctuary<br>Cada oficina opera de forma independiente',
    'index.contact.whatsapp':        'WhatsApp a Kenneth',
    'index.contact.card':            'Tarjeta de Contacto',
    'index.contact.news':            'Noticias Locales',

    // ── LISTINGS PAGE ────────────────────────────────────────
    'listings.hero.pretitle': 'Explora nuestras propiedades actuales o cont\u00e1ctanos para una visita privada',
    'listings.hero.title':    'Propiedades Actuales',
    'listings.hero.subtitle': 'Seleccionadas por estilo de vida, ubicaci\u00f3n y valor',
    'listings.hero.body':     'RE/MAX Cabo Sanctuary representa a compradores y vendedores exigentes en El Pescadero, Todos Santos y la regi\u00f3n de Los Cabos \u2014 especializados en casas con vista al mar, terrenos costeros y propiedades de inversi\u00f3n a lo largo de la costa del Pac\u00edfico de Baja California Sur.',

    'listings.featured.eyebrow': 'Propiedad Destacada',
    'listings.featured.desc':    'Un impresionante complejo resort frente al mar en el coraz\u00f3n de El Pescadero. Esta excepcional propiedad de cinco habitaciones y cinco ba\u00f1os ofrece amplias vistas al Oc\u00e9ano Pac\u00edfico, generosos espacios de vida interior-exterior y amenidades de nivel resort \u2014 una oportunidad inigualable para vida de lujo o inversi\u00f3n de alto rendimiento en una de las comunidades costeras m\u00e1s codiciadas de Baja California Sur.',
    'listings.view_property':    'Ver Propiedad',

    'listings.all.title':     'Todas las Propiedades',
    'listings.divider.homes': 'Casas',
    'listings.divider.land':  'Terrenos',
    'listings.for_sale':      'En Venta',
    'listings.sale_pending':  'Venta Pendiente',

    // ── BUSINESS CARD PAGE ───────────────────────────────────
    'bc.agent.title': 'Agente Inmobiliario &nbsp;&middot;&nbsp; RE/MAX Cabo Sanctuary',
    'bc.agent.bio':   'El enfoque de Kenneth en bienes ra\u00edces est\u00e1 arraigado en el conocimiento genuino de la comunidad y en la pasi\u00f3n de ayudar a sus clientes a encontrar su rinc\u00f3n perfecto de Baja California Sur. Ya sea comprando, vendiendo o invirtiendo, sus 15 a\u00f1os de experiencia y sus profundas ra\u00edces locales garantizan que est\u00e1s en las mejores manos de la pen\u00ednsula.',

    // ── INDIVIDUAL LISTING PAGES ─────────────────────────────
    'listing.eyebrow':             'Propiedad en Venta',
    'listing.eyebrow.land':        'Terreno en Venta',
    'listing.eyebrow.sale_pending':'VENTA PENDIENTE',
    'listing.sale_pending':        'VENTA PENDIENTE',

    'listing.loc.home':   'Casa Residencial &middot; Baja California Sur, M\u00e9xico',
    'listing.loc.land':   'Terreno &middot; Baja California Sur, M\u00e9xico',
    'listing.loc.lot_rc': 'Terreno Residencial / Comercial &middot; Baja California Sur, M\u00e9xico',
    'listing.loc.lot_r':  'Terreno Residencial &middot; Baja California Sur, M\u00e9xico',
    'listing.loc.house':  'Casa &middot; El Pescadero',

    'listing.pescadero_resort.desc': '<p>Impresionante Pescadero Resort en venta en un oasis de 2.4 acres (aproximadamente 1 hect\u00e1rea) en el coraz\u00f3n de El Pescadero \u2014 a solo pasos de la playa.</p><p>Actualmente en operaci\u00f3n como resort vacacional con hospedaje para casas rodantes, alquileres en Airbnb y un fuerte potencial de desarrollo.</p><p>Casa principal + m\u00faltiples alojamientos para hu\u00e9spedes con \u00e1reas de entretenimiento al aire libre, patios y amenidades estilo resort \u2014 construido para el estilo de vida y el potencial de ingresos.</p>',

    'listing.casa_sol.desc': '<p>Donde el desierto se encuentra con el mar, y el sol con la luna. Casa Sol y Luna es una propiedad \u00fanica de Baja California Sur ubicada en un terreno de 1,800 m\u00b2 sobre Playa Los Cerritos, entre dos ic\u00f3nicas rompientes donde los atardeceres pintan el cielo durante todo el a\u00f1o.</p><p>Con tres casitas independientes rodeadas de jardines nativos, la propiedad incluye una piscina y m\u00faltiples \u00e1reas de vida al aire libre dise\u00f1adas para aprovechar al m\u00e1ximo el clima y el entorno natural de Baja California Sur.</p><p>Ubicada a minutos de Cerritos Beach y cerca de Todos Santos y El Pescadero, Casa Sol y Luna ofrece privacidad, elevaci\u00f3n y un relajado estilo de vida costero.</p>',

    'listing.casa_costa.desc': '<p>Presentamos Casa Costa \u2014 una nueva casa de 2 habitaciones y 2 ba\u00f1os en un terreno de 2,007 m\u00b2, a solo pasos del Oc\u00e9ano Pac\u00edfico y la Playa Sur de Cerritos. Luminosa, abierta y aireada, con acentos de ladrillo rojo y amplias puertas corredizas que se abren a dos terrazas con vista al mar.</p><p>La casa cuenta con una refrescante piscina de agua salada con borde infinito, adem\u00e1s de una cocina moderna con estufa de gas, fregadero doble y despensa. El lavadero principal incluye lavadora y secadora.</p><p>El dise\u00f1o es perfecto: una generosa habitaci\u00f3n en planta baja con puertas corredizas al patio cubierto y ba\u00f1o propio, m\u00e1s una suite principal en el piso superior con entrada exterior privada, amplia terraza cubierta con vistas al oc\u00e9ano, gran vestidor y lujoso ba\u00f1o en suite.</p>',

    'listing.casa_pacific.desc': '<p>Ubicada en lo alto de las Colinas de Gavil\u00e1n, Casa Pacific Dream es una residencia de 3 habitaciones con oficina, piscina peque\u00f1a y garaje \u2014 posicionada para impresionantes vistas al oc\u00e9ano sobre la Playa de Pescadero y el Pac\u00edfico.</p><p>Dise\u00f1ada para una vida cotidiana c\u00f3moda y un fuerte potencial de renta, la propiedad ofrece espacio para reunirse, descansar y expandirse. El entorno ofrece esa combinaci\u00f3n \u00fanica: privacidad, vistas dram\u00e1ticas y acceso r\u00e1pido a lo mejor del corredor Pescadero/Cerritos.</p><p>A minutos de restaurantes cercanos, hoteles boutique y retiros de bienestar de clase mundial \u2014 incluida la Modern Elders Academy \u2014 tambi\u00e9n est\u00e1s a un corto trayecto de Cerritos Beach para surf, gastronom\u00eda y la nataci\u00f3n m\u00e1s familiar del lado del Pac\u00edfico.</p><p>Con Cabo a aproximadamente una hora y el aeropuerto a unas 1 hora 15 minutos, esta es una destacada oportunidad de poseer una casa con vista privilegiada en uno de los vecindarios m\u00e1s codiciados de la regi\u00f3n.</p>',

    'listing.casa_vista.desc': '<p>A solo 3 minutos de la playa de Cerritos, esc\u00e1pate a esta villa privada de 5 habitaciones. Ubicada detr\u00e1s de un muro de seguridad de 7 pies con persianas contra tormentas y energ\u00eda solar. La propiedad ofrece tranquilidad y comodidad ecol\u00f3gica.</p><p>La casa principal cuenta con dos habitaciones y garaje, mientras que las casitas para hu\u00e9spedes adjuntas tienen sus propias habitaciones, ba\u00f1os y cocinas \u2014 perfectas para la privacidad del grupo. Dise\u00f1ada meticulosamente con acabados modernos. Concepto abierto con impresionantes vistas.</p><p>Casa Principal: 2 amplias habitaciones, 2 ba\u00f1os completos, 1 cocina completa. Casita para hu\u00e9spedes 1: 1 Habitaci\u00f3n, 1 Ba\u00f1o, 1 cocina. Casita para hu\u00e9spedes 2: 2 Habitaciones, 1 Ba\u00f1o, 1 cocina. Disfruta las vistas al oc\u00e9ano y a la monta\u00f1a desde la piscina o re\u00fanete alrededor de la fogata bajo el cielo estrellado de Baja California Sur.</p>',

    'listing.casa_molusco.desc': '<p>Espaciosa casa de 3 habitaciones sin amueblar en vecindario tranquilo. \u00a1Bienvenido a tu nuevo hogar! Esta hermosa casa de 3 habitaciones y 2 ba\u00f1os ofrece espacio generoso, luz natural y el lienzo perfecto para hacerla tuya.</p><p>Ubicada en el tranquilo vecindario residencial de Las Tunas, esta propiedad combina comodidad con conveniencia. Caracter\u00edsticas principales: Sin amueblar \u2014 entra con tus propios muebles y decoraci\u00f3n para crear un espacio que refleje tu estilo. Dise\u00f1a tu propia cocina personalizada.</p><p>Sala y comedor en concepto abierto con grandes ventanas para abundante luz natural. Cuarto de lavado con conexiones para lavadora y secadora. Estacionamiento cubierto/garaje y espacio de almacenamiento adicional. Ubicada a pocos minutos de escuelas, tiendas y restaurantes. Este hogar es ideal para familias o profesionales.</p>',

    'listing.cerritos_lot.desc': '<p>Una oportunidad \u00fanica para construir tu casa so\u00f1ada o propiedad de inversi\u00f3n en un excepcional terreno de 2,000 m\u00b2 en el coraz\u00f3n de Central Cerritos. Ubicado en un tranquilo callej\u00f3n sin salida, esta amplia parcela ofrece privacidad, tranquilidad y comodidad.</p><p>A pocos pasos de la mundialmente famosa Playa Cerritos, tendr\u00e1s acceso r\u00e1pido a los mejores destinos de surf de Baja California Sur \u2014 ideal tanto para principiantes como para surfistas experimentados. Con vistas al oc\u00e9ano y a la monta\u00f1a, el entorno es puro Cerritos: relajado, hermoso y caminable.</p><p>El terreno es plano y est\u00e1 posicionado para capturar las brisas costeras \u2014 perfecto para residencia permanente, escapada vacacional o propiedad de renta. Infraestructura: electricidad v\u00eda CFE, agua por cami\u00f3n y drenaje s\u00e9ptico.</p><p>Uso potencial incluye desarrollo residencial o comercial. A poca distancia caminando de la playa y la comunidad.</p>',

    'listing.tierra_nirvana.desc': '<p>Tierra Nirvana es un terreno de 2,000 m\u00b2 en Tierra Nativa cerca de Cerritos, que ofrece espacio, privacidad y un lienzo limpio para construir.</p><p>Ideal para una casa de un nivel o una construcci\u00f3n de dos pisos para maximizar las vistas y capturar el estilo de vida de Baja California Sur en su totalidad.</p>',

    'listing.ocean_summit.desc': '<p>Terreno esquinero con vistas panor\u00e1micas al oc\u00e9ano y a la monta\u00f1a en Cerritos. Listo para tu construcci\u00f3n so\u00f1ada. Disfruta de vistas sin obstrucciones en esta ubicaci\u00f3n privilegiada.</p><p>La electricidad est\u00e1 cerca (distancia a CFE: ~1 metro). El agua es por cami\u00f3n. El t\u00edtulo es escritura.</p><p>Un terreno residencial de primera en el corredor de Cerritos \u2014 tranquilo, pintoresco y posicionado para amplias vistas abiertas.</p><p>A corta distancia de Cerritos Beach para surf, gastronom\u00eda y la nataci\u00f3n m\u00e1s familiar de la zona.</p>',

    'listing.gavilan_heights.desc': '<p>Este terreno elevado con vistas al Pac\u00edfico se ubica por encima de la costa en un vecindario consolidado con casas modernas cercanas.</p><p>Construye uno o dos niveles \u2014 un segundo piso captura un panorama oce\u00e1nico m\u00e1s amplio. La electricidad CFE est\u00e1 a aproximadamente un metro del l\u00edmite de la propiedad, facilitando la conexi\u00f3n de servicios.</p>',

    'listing.luna_villa.desc': '<p>Luna Villa en El Pescadero ofrece una vida moderna y limpia frente al Pac\u00edfico, ubicada entre Cerritos y Todos Santos.</p><p>El primer piso incluye la habitaci\u00f3n principal con vestidor y ba\u00f1o completo, m\u00e1s dos habitaciones para hu\u00e9spedes, almacenamiento y terraza.</p><p>En el segundo piso encontrar\u00e1s la sala, cocina y comedor, lavander\u00eda, balcones/terrazas y acceso a la azotea \u2014 terminada con piscina en azotea, \u00e1rea de asador y espacio de comedor con p\u00e9rgola.</p>',

    'listing.new_villa.desc': '<p>New Villa en Luna en El Pescadero ofrece una distribuci\u00f3n compacta de dos niveles con suite principal en el primer piso, dos habitaciones en el piso superior y jard\u00edn en azotea sobre la huella principal de vida.</p><p>El primer piso incluye sala, comedor, cocina, lavander\u00eda, almacenamiento, un medio ba\u00f1o para hu\u00e9spedes y la habitaci\u00f3n principal con vestidor y ba\u00f1o completo.</p><p>El segundo piso incluye habitaci\u00f3n 2, habitaci\u00f3n 3, un ba\u00f1o completo y una cocina o \u00e1rea de desayunador, para un \u00e1rea total de construcci\u00f3n de 142.56 m\u00b2 o 1,534.5 ft\u00b2.</p>',

    // ── LISTING HERO SUBS ───────────────────────────────────────
    'listing.casa_sol.sub':         '5 Rec\u00e1maras \u00b7 5 Ba\u00f1os \u00b7 Gavil\u00e1n sobre Cerritos / El Pescadero',
    'listing.pescadero_resort.sub': '5 Rec\u00e1maras \u00b7 5 Ba\u00f1os \u00b7 5,918 ft\u00b2 \u00b7 El Pescadero',
    'listing.casa_costa.sub':       '2 Rec\u00e1maras \u00b7 2 Ba\u00f1os \u00b7 Cerritos / Playa Sur de Cerritos',
    'listing.casa_pacific.sub':     '3 Rec\u00e1maras \u00b7 2 Ba\u00f1os \u00b7 Colinas de Gavil\u00e1n \u00b7 Vista al Mar y Monta\u00f1a',
    'listing.casa_vista.sub':       '5 Rec\u00e1maras \u00b7 4 Ba\u00f1os \u00b7 Cerritos / Pac\u00edfico',
    'listing.casa_molusco.sub':     '3 Rec\u00e1maras \u00b7 2 Ba\u00f1os \u00b7 Las Tunas / Pac\u00edfico',
    'listing.luna_villa.sub':       '3 Rec\u00e1maras \u00b7 2 Ba\u00f1os \u00b7 El Pescadero',
    'listing.new_villa.sub':        '3 Rec\u00e1maras \u00b7 2 Ba\u00f1os \u00b7 El Pescadero',
    'listing.cerritos_lot.sub':     '2,000 m\u00b2 \u00b7 Vista al Mar \u00b7 Vista a la Monta\u00f1a \u00b7 Cul-de-Sac Tranquilo \u00b7 Cerritos Central',
    'listing.ocean_summit.sub':     'Terreno de 2,000 m\u00b2 \u00b7 Cerritos \u00b7 Vista al Mar y Monta\u00f1a',
    'listing.gavilan_heights.sub':  '1,500 m\u00b2 \u00b7 Vistas al Oc\u00e9ano Pac\u00edfico \u00b7 Cerritos',
    'listing.tierra_nirvana.sub':   '2,000 m\u00b2 \u00b7 Tierra Nativa \u00b7 Cerritos',

    // ── STAT PILLS ──────────────────────────────────────────────
    'pill.bedrooms':                 'Rec\u00e1maras',
    'pill.bathrooms':                'Ba\u00f1os',
    'pill.bath':                     'Ba\u00f1os',
    'pill.lot':                      'Terreno',
    'pill.pool':                     'Alberca',
    'pill.three_casitas':            'Tres Casitas Independientes',
    'pill.cerritos_area':            'Zona Cerritos',
    'pill.residential_homesite':     'Lote Residencial',
    'pill.build_ready':              'Listo para Construir',
    'pill.seller_financing':         'Financiamiento del Vendedor',
    'pill.steps_to_beach':           'A Pasos de la Playa',
    'pill.infinity_pool':            'Alberca de Borde Infinito con Agua Salada',
    'pill.ocean_terraces':           'Terrazas con Vista al Mar',
    'pill.ocean_view':               'Vista al Mar',
    'pill.mountain_view':            'Vista a la Monta\u00f1a',
    'pill.cul_de_sac':               'Cul-de-Sac',
    'pill.flat_topo':                'Topograf\u00eda Plana',
    'pill.cfe_power':                'Electricidad CFE',
    'pill.ocean_mountain_view':      'Vista al Mar \u00b7 Vista a la Monta\u00f1a',
    'pill.ocean_mountain_views':     'Vista al Mar y Monta\u00f1a',
    'pill.pool_office_garage':       'Alberca \u00b7 Oficina \u00b7 Garaje',
    'pill.pacific_views':            'Vistas al Oc\u00e9ano Pac\u00edfico',
    'pill.established_neighborhood': 'Vecindario Consolidado',
    'pill.residential_lot':          'Terreno Residencial',
    'pill.cfe_power_1m':             'Electricidad CFE a ~1 Metro',
    'pill.guest_casitas_2':          '2 Casitas para Hu\u00e9spedes',
    'pill.pool_fire_pit':            'Alberca + Fog\u00f3n',
    'pill.rooftop_pool':             'Alberca en Azotea',
    'pill.bbq_pergola':              'Asador + P\u00e9rgola',
    'pill.primary_suite_down':       'Suite Principal en Planta Baja',
    'pill.roof_garden':              'Jard\u00edn en Azotea',
    'pill.gentle_slope':             'Pendiente Suave',

    // ── CARD ABBREVIATIONS & LABELS ─────────────────────────────
    'abbr.bd':    'Rec',
    'abbr.ba':    'Ba\u00f1',
    'card.land':  'Terreno',

    // ── NEWS FEED ────────────────────────────────────────────────
    'news.loading':     'Cargando...',
    'news.no_articles': 'No se encontraron art\u00edculos.',
    'news.error':       'No se pudo cargar el feed.',
  }
};


/* ── APPLY TRANSLATIONS ──────────────────────────────────────── */
function applyLang(lang) {
  const t = LANG[lang];
  if (!t) return;

  // Translate innerHTML of all tagged elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Translate input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update toggle button label
  var btn = document.getElementById('langBtn');
  if (btn) btn.textContent = (lang === 'es') ? 'EN' : 'ES';

  // Update <html lang="">
  document.documentElement.lang = lang;
}

/* ── TOGGLE ──────────────────────────────────────────────────── */
function toggleLang() {
  var current = localStorage.getItem('lang') || 'en';
  var next = (current === 'en') ? 'es' : 'en';
  localStorage.setItem('lang', next);
  applyLang(next);
}

/* ── INIT (script is at end of <body>, DOM is ready) ─────────── */
(function() {
  var lang = localStorage.getItem('lang') || 'en';
  applyLang(lang);
})();
