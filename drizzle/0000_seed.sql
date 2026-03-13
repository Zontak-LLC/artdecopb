-- Create tables
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT,
  location TEXT,
  image_url TEXT,
  is_featured INTEGER DEFAULT 0,
  status TEXT DEFAULT 'upcoming',
  rsvp_email TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS art_deco_elements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS board_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS pages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  wants_updates INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS membership_tiers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  benefits TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- Seed Art Deco Elements
INSERT INTO art_deco_elements (name, description, sort_order) VALUES
('Eyebrows', 'Cantilevered window shades included in the building''s structure. Eyebrows look like a "shelf" placed above a window. They shade direct sunlight and keep interiors cool.', 1),
('Ziggurat or Stepped Pediment', 'Profiled like a staircase — up, down, up, down. Also known as "zig zag" or "lightning bolt." Ziggurats are seen on the roofline of buildings, recreating Egyptian motifs.', 2),
('Rounded Corners', 'Technology allowed for construction to be built with rounded corners. In the 1930s and 1940s, the design of airplanes, ships, trains, and automobiles influenced architecture. Rounded corners made buildings appear aerodynamic, fast, and sleek.', 3),
('Flat Roofs', 'Art Deco or Streamline buildings usually have a flat roof or multi-level flat roofs.', 4),
('Threes', 'In Art Deco, everything seems to come in threes: three windows, three bandings, three eyebrows, or three steps. This is probably due to the Egyptian influence of the pyramids — or just good design.', 5),
('Bandings or Racing Stripes', 'Horizontal bandings on the facades of buildings, which can be incised or applied in decorative materials such as tile. Bandings usually come in threes. This simplified ornamentation reinforces aerodynamic concepts of Streamline Moderne.', 6),
('Columns', 'Many Art Deco buildings feature either whole columns, which stand away from the building, or sliced columns attached to the front doorway facade acting as an archway.', 7),
('Glass Block', 'Cool, translucent squares of glass used instead of brick. Allows for light penetration while maintaining privacy — a hallmark of Streamline Moderne architecture.', 8),
('Other Elements', 'Ship-like features, porthole windows, Machine Age symbols, etched glass, relief sculptures, neon signage, terrazzo floors, and tropical motifs are all common Art Deco elements found throughout the Palm Beaches.', 9);

-- Seed Events
INSERT INTO events (title, description, date, time, location, is_featured, status, rsvp_email) VALUES
('Art Deco Afternoons — Free Lecture Series', 'Join us for our popular free lecture series exploring Art Deco architecture, design, and history in the Palm Beaches. Expert speakers share fascinating stories of our architectural heritage.', '2026-04-15', '2:00 PM', 'Cultural Council of Palm Beach County, 601 Lake Avenue, Lake Worth Beach, FL', 1, 'upcoming', 'Art@ArtDecoPB.org'),
('Keeping the ART in Art Deco — The Evolution of ICADS', 'Sharon Koskoff presents on the International Coalition of Art Deco Societies and the global preservation movement.', '2026-03-22', '3:00 PM', 'Cultural Council of Palm Beach County', 0, 'upcoming', 'Art@ArtDecoPB.org'),
('Walking Tour: Historic Downtown Lake Worth Beach', 'Explore the Art Deco gems of downtown Lake Worth Beach on a guided walking tour led by ADSPB President Sharon Koskoff. See ziggurats, eyebrows, racing stripes, and more.', '2026-04-05', '10:00 AM', 'Downtown Lake Worth Beach', 0, 'upcoming', 'Art@ArtDecoPB.org'),
('Plein Air Palm Beaches', 'Artists paint on location at historic Art Deco sites throughout the Palm Beaches. Watch artists capture the beauty of our architectural heritage.', '2026-05-10', '9:00 AM', 'Various locations', 0, 'upcoming', 'Art@ArtDecoPB.org'),
('Holiday Alive Art Deco 1925!', 'A spectacular holiday celebration featuring Art Deco style, music, fashion, and fun. Costumes encouraged!', '2025-12-14', '6:00 PM', 'Historic Palm Beach', 1, 'past', 'Art@ArtDecoPB.org'),
('Art In The Alley', 'A vibrant community art event featuring local artists, live painting, music, and Art Deco-inspired creativity in the heart of downtown.', '2026-06-01', '11:00 AM', 'Downtown Alley, Lake Worth Beach', 0, 'upcoming', 'Art@ArtDecoPB.org');

-- Seed Board Members
INSERT INTO board_members (name, role, bio, sort_order) VALUES
('Sharon Koskoff', 'President', 'Author of "Art Deco of the Palm Beaches" and cultural guardian dedicated to preserving Palm Beaches architecture. Sharon has led ADSPB since its founding and is recognized internationally for her preservation work.', 1),
('Zack Zacharias', 'Board Member', 'Active board member and advocate for Art Deco preservation in South Florida.', 2),
('Gary Lawrence', 'Music Education Coordinator', 'Brings the sounds of the Art Deco era to life through educational programs and events.', 3);

-- Seed Membership Tiers
INSERT INTO membership_tiers (name, price, benefits, sort_order) VALUES
('Individual', 35, '["Free admission to all lectures", "Newsletter subscription", "Walking tour discounts", "Invitations to member-only events"]', 1),
('Family', 50, '["All Individual benefits", "Admission for up to 4 family members", "Free children''s programs", "Family event priority registration"]', 2),
('Patron', 100, '["All Family benefits", "VIP seating at lectures", "Exclusive patron events", "Name recognition in publications", "Complimentary book: Art Deco of the Palm Beaches"]', 3),
('Benefactor', 250, '["All Patron benefits", "Private guided tours", "Invitation to annual gala", "Board meeting guest privileges", "Tax-deductible donation receipt"]', 4);

-- Seed Pages
INSERT INTO pages (slug, title, content) VALUES
('about', 'About ADSPB', '{"mission": "The Art Deco Society of the Palm Beaches promotes education, preservation and awareness of Twentieth Century Art, Architecture & Design in the Palm Beaches.", "founded": "1987", "type": "501(c)3 Historic Preservation Organization", "years": "39", "description": "For nearly four decades, the Art Deco Society of the Palm Beaches has been the leading voice for Art Deco preservation in South Florida. Through lectures, walking tours, publications, and community events, we educate the public about the rich architectural heritage of the Palm Beaches and advocate for the protection of our historic Art Deco buildings."}'),
('plein-air', 'Plein Air Palm Beaches', '{"description": "Artists paint on location at historic Art Deco sites throughout the Palm Beaches, capturing the beauty of our architectural heritage in real time. This program brings together the visual arts and historic preservation in a unique and engaging way."}'),
('walking-tours', 'Walking Tours', '{"description": "Explore the Art Deco architectural gems of the Palm Beaches on guided walking tours. Our knowledgeable guides point out the eyebrows, ziggurats, racing stripes, and other distinctive Art Deco elements that make our buildings special. Tours are available by appointment and for special events."}'),
('art-in-the-alley', 'Art In The Alley', '{"description": "A vibrant community art event featuring local artists, live painting, music, and Art Deco-inspired creativity. Art In The Alley transforms downtown spaces into open-air galleries celebrating the intersection of art and architecture."}');
