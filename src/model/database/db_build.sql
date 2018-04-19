BEGIN;
    DROP TABLE IF EXISTS photos
    CASCADE;
CREATE TABLE photos
(
    id SERIAL PRIMARY KEY,
    url VARCHAR(500) NOT NULL,
    caption VARCHAR(500)
);
INSERT INTO photos
    (url, caption)
VALUES
    ('http://www.theparisreview.org/blog/wp-content/uploads/2016/09/3.jpeg', 'Cy Twombly'),
    ('https://i.pinimg.com/564x/c1/88/6f/c1886f41c67fbec3fe4ee88c258cce5d.jpg', 'another... '),
    ('http://museubispodorosario.com/wp-content/uploads/2015/03/bispo_01.jpg', 'Arthur Rosario de Bispo'),
    ('https://i.pinimg.com/564x/22/58/ab/2258ab82d5b080026e4ae7ad1456d612.jpg', 'yes matee'),
    ('http://www.museum-brandhorst.de/typo3temp/pics/e2c0fff0a4.jpg', 'Cy again'),
    ('https://i.ytimg.com/vi/sgYTlhGc-E8/maxresdefault.jpg', 'Arthur Ganson'),
    ('https://i.pinimg.com/564x/33/ba/26/33ba265d297950c48159cdf0a41ecf7f.jpg', 'Peter Lanyons'),
    ('http://www.theparisreview.org/blog/wp-content/uploads/2016/09/3.jpeg', 'Cy Twombly'),
    ('https://i.pinimg.com/564x/c1/88/6f/c1886f41c67fbec3fe4ee88c258cce5d.jpg', 'another... '),
    ('http://museubispodorosario.com/wp-content/uploads/2015/03/bispo_01.jpg', 'Arthur Rosario de Bispo'),
    ('http://www.museum-brandhorst.de/typo3temp/pics/e2c0fff0a4.jpg', 'Cy again'),
    ('https://i.ytimg.com/vi/sgYTlhGc-E8/maxresdefault.jpg', 'Arthur Ganson'),
    ('https://i.pinimg.com/564x/33/ba/26/33ba265d297950c48159cdf0a41ecf7f.jpg', 'Peter Lanyons');
COMMIT;