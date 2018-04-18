BEGIN; 

DROP TABLE IF EXISTS images CASCADE;

CREATE TABLE images (
    id SERIAL PRIMARY UNIQUE,
    url VARCHAR(500) NOT NULL,
    caption VARCHAR(500)
);

INSERT INTO images (url, caption) VALUES
('https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2017/docatspurrwh.jpg', 'Check out my cat!!'),
('https://img.buzzfeed.com/buzzfeed-static/static/2017-04/25/4/enhanced/buzzfeed-prod-fastlane-01/enhanced-23831-1493109569-1.jpg', 'DOGGGGGSSSSS <3'),
('https://1.bp.blogspot.com/--UOFOYpSBOs/VeMERNfMLTI/AAAAAAAABAM/HYeD94p6Xek/s728/lizard-squad-arrests.jpg', 'Screw your guys, Lizards for life'),
('https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2017/docatspurrwh.jpg', 'Check out my cat!!'),
('https://img.buzzfeed.com/buzzfeed-static/static/2017-04/25/4/enhanced/buzzfeed-prod-fastlane-01/enhanced-23831-1493109569-1.jpg', 'DOGGGGGSSSSS <3'),
('https://1.bp.blogspot.com/--UOFOYpSBOs/VeMERNfMLTI/AAAAAAAABAM/HYeD94p6Xek/s728/lizard-squad-arrests.jpg', 'Screw your guys, Lizards for life')

COMMIT;