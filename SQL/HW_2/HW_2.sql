### ============================================= SQL HOME WORK 2 ==========================================================

#############   1. +Вибрати усіх клієнтів, чиє ім''я має менше ніж 6 символів.
SELECT *
FROM bank.client
WHERE LENGTH(FirstName) < 6;

############# 2. +Вибрати львівські відділення банку.+

SELECT *
FROM bank.department
WHERE DepartmentCity = ''Lviv'';

############# 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.

SELECT *
FROM bank.client
WHERE Education = ''high''
ORDER BY LastName;

############# 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
### ============================================= SQL HOME WORK 2 ==========================================================

#############   1. +Вибрати усіх клієнтів, чиє ім''я має менше ніж 6 символів.
SELECT *
FROM bank.client
WHERE LENGTH(FirstName) < 6;

############# 2. +Вибрати львівські відділення банку.+

SELECT *
FROM bank.department
WHERE DepartmentCity = ''Lviv'';

############# 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.

SELECT *
FROM bank.client
WHERE Education = ''high''
ORDER BY LastName;

############# 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.

SELECT *
FROM bank.application
# WHERE idApplication <= 5
ORDER BY idApplication DESC
LIMIT 5;

############# 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.

SELECT *
FROM bank.client
WHERE LastName LIKE ''%ov''
   OR LastName LIKE ''%ova'';

############# 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.

SELECT *
FROM bank.client
WHERE Department_idDepartment
          IN (SELECT idDepartment FROM bank.department WHERE DepartmentCity = ''Kyiv'');

############# 7. +Вивести імена клієнтів та їхні номера телефону (паспорт), погрупувавши їх за іменами.

SELECT CONCAT(FirstName, '' '', LastName) AS FullName, Passport
FROM bank.client
GROUP BY FirstName;

############# 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.

SELECT *
FROM bank.client
         JOIN bank.application a on client.idClient = a.Client_idClient
WHERE a.CreditState = ''Not returned''
  AND a.Sum > 5000;

############# 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
# All
SELECT idDepartment, DepartmentCity, COUNT(c.idClient) AS ClientsCount
FROM bank.department AS bd
         JOIN bank.client c ON bd.idDepartment = c.Department_idDepartment
GROUP BY bd.idDepartment;

# Lviv

SELECT DepartmentCity, COUNT(c.idClient) AS ClientsCount
FROM bank.department AS bd
         JOIN bank.client c ON bd.idDepartment = c.Department_idDepartment
WHERE DepartmentCity = ''Lviv''
GROUP BY bd.DepartmentCity;

############# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.

SELECT CONCAT(bc.FirstName, '' '', bc.LastName) AS FullName,
       MAX(ba.Sum)                            AS MaxCredit,
       ba.Currency,
       ba.CreditState
FROM bank.client AS bc
         JOIN bank.application ba ON bc.idClient = ba.Client_idClient
GROUP BY ba.Client_idClient;

############# 11. Визначити кількість заявок на крдеит для кожного клієнта.

SELECT CONCAT(bc.FirstName, '' '', bc.LastName) AS FullName,
       COUNT(ba.idApplication)                AS CountCredits
FROM bank.client AS bc
         JOIN bank.application ba ON bc.idClient = ba.Client_idClient
GROUP BY ba.Client_idClient;

############# 12. Визначити найбільший та найменший кредити.

SELECT MIN(ba.Sum) AS MinCredit,
       MAX(ba.Sum) AS MaxCredit
FROM bank.application;

############# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.

SELECT CONCAT(bc.FirstName, '' '', bc.LastName) AS FullName,
       COUNT(ba.idApplication)                AS CountCredits
FROM bank.client AS bc
         JOIN bank.application ba ON bc.idClient = ba.Client_idClient
WHERE bc.Education = ''high''
GROUP BY ba.Client_idClient;

############# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.

SELECT *, AVG(ba.Sum) AS AvgSum
FROM bank.client AS bc
         JOIN bank.application ba ON bc.idClient = ba.Client_idClient
GROUP BY bc.idClient
ORDER BY AvgSum DESC
LIMIT 1;

############# 15. Вивести відділення, яке видало в кредити найбільше грошей

SELECT bd.idDepartment, bd.DepartmentCity, SUM(ba.Sum) AS Sum
FROM bank.client AS bc
         JOIN bank.application ba ON bc.idClient = ba.Client_idClient
         JOIN `bank`.department bd ON bc.Department_idDepartment = bd.idDepartment
GROUP BY bc.idClient
ORDER BY Sum DESC
LIMIT 1;

############# 16. Вивести відділення, яке видало найбільший кредит.

SELECT bd.idDepartment, bd.DepartmentCity, ba.Sum
FROM bank.client AS bc
         JOIN bank.application ba ON bc.idClient = ba.Client_idClient
         JOIN `bank`.department bd ON bc.Department_idDepartment = bd.idDepartment
ORDER BY ba.Sum DESC
LIMIT 1;

############# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.

UPDATE bank.application AS ba, bank.client AS bc
SET ba.Sum      = 6000,
    ba.Currency = ''Gryvnia''
WHERE bc.Education = ''high''
  AND ba.Client_idClient = bc.idClient;

SELECT *
FROM bank.application;

############# 18. Усіх клієнтів київських відділень пересилити до Києва.

UPDATE bank.client AS bc, bank.department AS bd
SET bc.City = ''Kyiv''
WHERE bc.Department_idDepartment = bd.idDepartment
  AND bd.DepartmentCity = ''Kyiv'';

SELECT *
FROM bank.client;

############# 19. Видалити усі кредити, які є повернені.

DELETE
FROM bank.application AS ba
WHERE ba.CreditState = ''Returned'';

SELECT *
FROM bank.application;

############# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.

DELETE
FROM bank.application
WHERE Client_idClient IN (SELECT DISTINCT bc.idClient
                          FROM (SELECT bc.idClient
                                FROM bank.application AS ba
                                         JOIN bank.client bc ON ba.Client_idClient = bc.idClient
                                WHERE REGEXP_LIKE(bc.LastName, ''^.[aeiouy].*$'')) AS bc);


SELECT *
FROM bank.application;

############# 21. Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000


























