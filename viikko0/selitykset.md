#### 0.4

Selain lähettää palvelimelle POST-pyynnön, ja tämän seurauksena palvelin lähettää uudelleenohjauspyynnön selaimelle. Tämän jälkeiset pyynnöt ovat samoja kuin ne, jotka aiheutuvat käyttäjän mennessä selaimella osoitteeseen.

#### 0.5

Kopioin tähän kuvaajan materiaalista, koska single page-sovellukseen meneminen selaimella aiheuttaa pyynnöt täysin saman kaavan mukaisesti kuin vastaavaan ei-single page-sovellukseen mentäessä.

#### 0.6
Uuden muistiinpanon lisääminen single page-sovelluksessa vaatii vain yhden POST-pyynnön, johon palvelin vastaa statuskoodilla 201 created. Javascript-koodi hoitaa tiedon päivittämisen selaimeen nettisivulle ja palvelimen tietokantaan.
