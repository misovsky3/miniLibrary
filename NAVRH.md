# Návrh projektu

1. Spíšete stručný obsah, čo by to malo robiť (jeden odstavec).

Projekt bude webová aplikácia, ktorá bude slúžiť ako knižničný systém.

2. Rozpíšte zoznam činností (6 – 10), ktoré bude program vedieť.
   V systéme sa budú uchovávať informácie o knihách v knižnici, skladoch, čitateľoch a ich pôžičkách a výpožičných dobách kníh.

Čitatelia budú môcť:

-   Rezervovať si knihu pomocou formulára
-   Vyhľadať knihu podľa názvu
-   Vyhľadať knihu podľa autora
-   Zobraziť upozornenia o zmene stavu jeho objednávok

Zamestnanci budú môcť:

-   Vytvoriť čitateľovi pôžičku na základe jeho rezervácie
-   Obsluhovať vrátenie knihy
-   Simulovať prevoz kníh z a do skladov, kam patria
-   Splatiť pozdlžností čitateľa
-   Vystavovanie upomienok za oneskorené vrátenie knihy

Ďaľej umožní z jednotlivých údajov zobraziť štatistiky.

3. Odhadnete čas pre naprogramovanie jednotlivých činností v hodinách.

**Návrh databázy a kódového základu** - 2h

**Rezervovať si knihu pomocou formulára** - 2h

**Vyhľadať knihu podľa názvu** - 1h

**Vyhľadať knihu podľa autora** - 1h

**Zobrazuje upozornenia o zmene stavu jeho objednávok** - 3h

**Vytvoriť čitateľovi pôžičku na základe jeho rezervácie** - 2h

**Obsluhovať vrátenie knihy** - 2h

**Simulovať prevoz kníh z a do skladov, kam patria** - 3h

**Splatiť pozdlžností čitateľa** - 2h

**Vystavovanie upomienok za oneskorené vrátenie knihy** - 2h

1)Vyberte si jazyk, operačný systém, cieľové prostredie.

Na prepojenie relačnej databázy s naším kódom v jazyku JavaScript budeme používať Prismu.
Budeme používať knižnicu Bootstrap, ktorá poskytuje ľahko použiteľnú knižnicu používateľského rozhrania.

Keďže to bude webová aplikácia, tak pobeží na všetkých bežných operačných systémoch (Linux, Windows, Mac, BSD ...),
avšak bude prispôsobená skôr na počítače ako na mobilné zariadenia.

2. Pre dané podmienky si vyberte vývojové prostredie.

Každý z nás bude používať Visual Studio Code a WebStorm, pretože každý z nás preferuje iné vývojové prostredie. Systém vývoja však zostáva rovnaký alebo aspoň veľmi podobný v oboch prostrediach.

3. Pre dané vývojové prostredie si nájdite unit tester.

Na testovanie budeme používať knižnicu [Jest](https://jestjs.io/).

4. Dohodnite si úložisko zdrojových kódov (git).

Úložiskom zdrojových kódov bude github.

5. Dohodnite si pravidlá pre integráciu.

Budeme využívať Trunk-Based Development (TBD).
V TBD všetci vývojári pracujú na rovnakej vetve kódu, ktorá sa nazýva "main" alebo "master".
Táto vetva je považovaná za hlavnú vetvu, kde sú zlúčené všetky zmeny kódu a kde vždy môžete nájsť najaktuálnejšiu verziu kódu.
