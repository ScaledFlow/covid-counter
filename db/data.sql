
CREATE DATABASE sf_dashboard_test_db;

USE sf_dashboard_test_db;


CREATE TABLE covid_deaths_us_ter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME,
    covide_death_us_ter varchar(50) NOT NULL
);

INSERT INTO covid_cnt(created_at, created_at)
VALUES(Now(), 139000);


SELECT 
    *
FROM
    covid_cnt
ORDER BY
    DATE(created_at) = '2020-07-20',
    covid_deaths_us_ter desc;


SELECT 
    MAX(covide_death_us_ter)
FROM
    covid_cnt
WHERE
    DATE(created_at) = '2020-07-20';
