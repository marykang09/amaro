const CocktailList = [
    {
        name: "Amaro Sour",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounce amaro, 3/4 ounce bourbon, 1 ounce freshly squeezed lemon juice, 1/4 ounce simple syrup, 1 egg white, garnish: lemon zest and cocktail cherry",
        instructions: "Combine all the ingredients in a cocktail shaker and dry shake without ice for at least 10 seconds to fully incorporate the egg white. Add ice and continue shaking until chilled and strain into a double old-fashioned glass filled with ice. Garnish with the lemon zest and cocktail cherry."
    },
    {
        name: "Americano",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Campari, 1.5 ounces sweet vermouth, soda water, garnish:orange half-wheel or orange zest",
        instructions: "Mix the Campari and sweet vermouth in a glass filled with ice. Top with soda water. Stir, then garnish with orange."
    },
    {
        name: "Aperol Spritz",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "3 ounces Prosecco or sparkling wine, 2 ounces Aperol, 1 ounce soda water, garnish: orange slice",
        instructions: "Build the Campari in a glass filled with ice. Top off with soda water. Stir and garnish with orange slice."
    },
    {
        name: "Averna Smash",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1/2 teaspoon walnut oil, 1 brandied cherry, 1 orange slice, 2 ounces bourbon (preferably Knob Creek), 1 ounce Averna, Fever-Tree bitter lemon soda, garnish: orange zest and cocktail cherry",
        instructions: "Combine the walnut oil, brandied cherry, and orange slice in a cocktail shaker and gently muddle until the fruit is just broken up. Add the bourbon and Averna and fill with ice. Shake until chilled and double-strain into a double old-fashioned glass filled with ice. Top off with the bitter lemon soda. Garnish with the orange zest and cocktail cherry."
    },
    {
        name: "Bitter Giuseppe",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "2 ounces Cynar, 1 ounce Carpano Antica Formula sweet vermouth, 1/4 ounce freshly squeezed lemon juice, 6 dashes Regans' Orange Bitters No. 6, garnish: lemon",
        instructions: "Combine the Cynar, vermouth, lemon juice, and bitters in a mixing glass filled with ice. Stir until chilled and strain into a double old-fashioned glass over a large ice cube. Garnish with the lemon zest."
    },
    {
        name: "The Bitter Swagger",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.25 ounces Amaro Nardini, 3/4 ounce pisco, 1/4 ounce Cocchi Americano, 1/2 ounce freshly squeezed lemon juice, 1 egg white",
        instructions: "Combine all the ingredients in a cocktail shaker and dry shake (without ice) for at least 10 seconds to full incorporate the egg white. Add ice and continue shaking until chilled and then double-strain into a chilled glass."
    },
    {
        name: "Black Manhattan",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "2 ounces bourbon, 1 ounce Averna, 1 dash Angostura bitters, 1 dash orange bitters, garnish: cocktail cherry",
        instructions: "Combine all the ingredients in a mixing glass filled with ice. Stir until chilled and strain into a chilled glaass. Garnish with the cocktial cherry."
    },
    {
        name: "Boulevardier",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces bourgon, 3/4 ounce Campari, 3/4 ounce sweet vermouth, garnish: orange zest",
        instructions: "Combine the bourbon, Campari, and sweet vermouth in a mixing glass filled with ice. Stir until chilled and strain into a double old-fashioned glass over a large ice cube or into a chilled coupe or cocktail glass. Garnish with the orange zest."
    },
    {
        name: "The Brunch Box",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1 ounce Amaro Montenegro, 1 ounce freshly squeezed chilled grapefruit juice, 5 ounces chilled beer (preferably lager)",
        instructions: "Build the Amaro Montenegro and grapefruit juice in a chilled collins glass. Top with beer."
    },
    {
        name: "Cantina Band",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Fernet-Branca, 1/2 ounce gin, 3/4 ounce simple syrup, 3 cucumber slices, ginger beer, garnish: cucumber slice or ribbon",
        instructions: "Combine the Fernet-Branca, gin, simple syrup, and cucumber slices in a cocktail shaker filled with ice. Shake until chilled and strain into a collins glass filled with ice. Top off with ginger beer. Garnish with the cucumber slice or ribbon."
    },
    {
        name: "Cynara",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces bourbon (preferably Buffalo Trace), 1/2 ounce Cynar, 1/2 ounce Aperol, bitters ice cube, garnish: orange zest",
        instructions: "Build the bourbon, Cynar, and Aperol in a double old-fashioned glass. Add the bitters ice cube. Garnish with the orange zest."
    },
    {
        name: "Eeyore's Requiem",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Campari, 1 ounce Dolin Blanc vermouth, 1/2 ounce Tanqueray gin, 1/4 ounce Cynar, 1/4 ounce Fernet-Branca, 2 dashes orange bitters, garnish: 3 orange twists",
        instructions: "Combine all of the ingredients in a mixing glass filled with ice. Stir until chilled and strain into a chilled coupe glass. Express the tree orange twists over the surface of the drink, discarding the first two, and saving the third for garnish."
    },
    {
        name: "Embittered Garibaldi",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "2 ounces Amaro Braulio, 1 ounce Amaro Montenegro, 2 pinches kosher salt, garnish: lemon zest",
        instructions: "Combine the Amaro Braulio, Amaro Montenegro, and salt in a mixing glass filled with ice. Stir until chilled and strain into a double old-fashioned glass over a large ice cube. Garnish with the lemon zest."
    },
    {
        name: "Exit Strategy",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Amaro Nonino Quintessentia, 3/4 ounce Germain-Robin Craft Method Brandy, 1/4 ounce Amaro Meletti, pinch of kosher salt, garnish: orange twist",
        instructions: "Combine the ingredients in a mixing glass filled with ice. Stir until chilled and strain into a double old-fashioned glass over a large ice cube. Garnish with the orange twist."
    },
    {
        name: "Fields Forever",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1 strawberry, 1 ounce Foro Amaro Speciale, 3/4 ounce Aperol, 1/4 ounce Campari, 3/4 ounce freshly squeezed lemon juice, 1/2 ounce simple syrup, 1 egg white, 3-5 drops Peychaud's Bitters",
        instructions: "Cut off the top of the strawberry, place it into a cocktail shaker, and muddle until lightly smashed. Add the amaro, Aperol, Campari, lemon juice, simple syrup, and egg white and dry shake (without ice) for at least 10 seconds to fully incorporate the egg white. Add ice and continue shaking until chilled and double-strain into a chilled glass. After the egg white foam settles, add drops of Peychaud's Bitters and gently twist the stem to swirl."
    },
    {
        name: "Foregone Conclusion",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1 ounce rye whiskey, 1 ounce Grand Classico Bitter, 1/2 ounce Amaro Sibilla, 1/2 ounce Baska Snaps med Malort, garnish: orange zest",
        instructions: "Combine all the ingredients in a mixing glass filled with ice. Stir until chilled and strain into a chilled glass. Garnish with orange zest."
    },
    {
        name: "Friul Libar",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Amaro Nonino Quintessentia, 1/2 ounce navy strength gin (preferably Genius Navy), 1/2 ounce freshly squeezed lemon juice, 1/4 ounce Demerara syrup, 2 dashes Peychaud's Bitters, garnish: lemon zest",
        instructions: "Combine all of the ingredients in a cocktail shaker filled with ice. Shake until chilled and double-strain into a chilled glass. Express the lemon peel over the surface of the drink, then garnish."
    },
    {
        name: "Garibaldi",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Campari, 4 ounces freshly squeezed orange juice, garnish: orange slice",
        instructions: "Build the Campari and orange juice in a glass filled with ice. Stir and garnish with the orange slice."
    },
    {
        name: "Gato Amargo",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1 strawberry, 1 ounce blanco tequila, 1 ounce Amaro Montenegro, 1/2 ounce freshly squeezed lemon juice, 3 ounces orange Fanta, garnish: orange slice",
        instructions: "Place ths strawberry in a cocktail shaker and muddle until lightly smashed. Add the tequila, amaro, and lemon juice. Add ice and shake until chilled. Strain into a highball glass filled with crushed ice. Topp off with Fanta and stir to incorporate. Garnish with the orange slice."
    },
    {
        name: "Hanky Panky",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces gin, 1.5 ounces sweet vermouth, 2 dashes Fernet-Branca, garnish: orange zest",
        instructions: "Combine the gin, sweet vermouth, and Fernet-Branca in a mixing glass filled with ice. Stir until chilled and strain into a chilled coupe or cocktail glass. Garnish with the orange zest."
    },
    {
        name: "Italian Buck",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Cynar, 1.5 ounces Amaro Montenegro, 3/4 ounce freshly squeezed lime juice, 3 ounces ginger beer, garnish: lime wheel",
        instructions: "Combine all of the ingredients in a cocktail shaker filled with ice. Shake until chilled and strain into a chilled collins glass. Garnish with lime wheel."
    },
    {
        name: "Jungle Bird",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces blackstrap rum, 1.5 ounces freshly squeezed pineapple juice, 3/4 ounce Campari, 1/2 ounce freshly squeezed lime juice, 1/2 ounce simple syrup, garnish: pineapple chunk and/or pineapple leaf",
        instructions: "Combine all ingredients into a cocktail shaker filled with ice. Shake until chilled and strain into a double old-fashioned glass over a large ice cube. Garnish wit hthe pineapple chucnk or leaf."
    },
    {
        name: "Little Italy",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "2 ounces rye whiskey, 1/2 ounce Cynar, 3/4 ounce sweet vermouth, garnish: 3 cocktail cherries",
        instructions: "Combine the rye, Cynar, and sweet vermouth in a mixing glass filled with ice. Stir until chilled and strain into a chilled coupe or cocktail glass. Garnish with the skewered cherries."
    },
    {
        name: "M&M",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1 ounce Amaro Meletti, 1 ounce Meletti 1870 Bitter, 4 dashes Angosutra bitters, garnish: orange slice",
        instructions: "Combine ingredients in a mixing glass filled with ice. Stir until chilled and strain into a glass over crushed ice. Garnish with the orange slice."
    },
    {
        name: "Mustache Ride",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces bourbon (preferably Bulleit), 1/2 ounce Cynar, 3/4 ounce freshly squeezed lemon juice, 1/2 ounce Joey Sunshine's Maple Simple Syrup, 1/2 ounce St. Elizabeth Allspice Dram, garnish: lemon twist and cocktail cherry",
        instructions: "Combine ingredients in a cocktail shaker filled with ice. Shake until chilled and strain into a chilled double old-fashioned glass. Garnish with the lemon twist and cocktail cherry."
    },
    {
        name: "Negroni",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "",
        instructions: "Combine all ingredients into a cocktail shaker filled with ice. Shake until chilled and strain into a double old-fashioned glass over a large ice cube. Garnish wit hthe pineapple chucnk or leaf."
    },    
    {
        name: "Negroni Sbagliato",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1 ounce Campari, 1 ounce sweet vermouth, 1 ounce Prosecco or sparkling wine, garnish: orange slice or orange zest",
        instructions: "Build the Campari, vermouth, and Prosecco in a glass filled with ice. Stir and garnish with the orange slice or orange zest."
    },
    {
        name: "Old Pal",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces rye whiskey, 3/4 ounce Campari, 3/4 ounce dry vermouth, garnish: lemon zest",
        instructions: "Combine the rye, Campari, and dry vermouth in a mixing glass filled with ice. Stir until chilled and strain into a chilled glass. Garnish with the lemon zest."
    },
    {
        name: "Paper Plane",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "3/4 ounce bouron, 3/4 ounce Aperol, 3/4 ounce Amaro Nonino Quintessentia, 3/4 ounce freshly squeezed lemon juice",
        instructions: "Combine the ingredients in a cocktail shaker filled with ice. Shake until chilled and strain into a chilled glass."
    },
    {
        name: "Paper Plane",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "3/4 ounce bouron, 3/4 ounce Aperol, 3/4 ounce Amaro Nonino Quintessentia, 3/4 ounce freshly squeezed lemon juice",
        instructions: "Combine the ingredients in a cocktail shaker filled with ice. Shake until chilled and strain into a chilled glass."
    },
    {
        name: "Red Hook Criterium",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Zucca Rabarbaro Amaro, 1/2 ounce gin, 1.5 ounces freshly squeezed grapefruit juice, 1/2 ounce freshly squeezed lemon juice, 1/2 ounce simple syrup, soda water, garnish: grapefruit twist",
        instructions: "Combine all ingredients except the soda water and garnish in a cocktail shaker filled with ice. Shake until chilled and strain into a highball glass filled with ice. Top off with soda water. Garnish with the grapefruit twist."
    },
    {
        name: "Rickey Ramazzotti",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "6 cherries, pitted, 2 lime wedges, 1/2 ounce simple syrup, 1 ounce bourbon, 1 ounce Amaro Ramazzotti, soda water, garnish: lime wedge and 2 cherries",
        instructions: "Place the cherries, lime wedges, and simple syrup in a cocktail shaker and muddle until the fruit is just broken up. Add the bourbon and Amaro Ramazzotti and fill with ice. Shake until chilled and double-strain into a double old-fashioned glass filled with ice. Top off with soda water. Garnish with the limde wedge and 2 cherries."
    },
    {
        name: "San Francisco Treat",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1 ounce Fernet-Branca, 1 ounce Averna, 1 ounce Dolin Blanc vermouth, garnish: flamed orange zest",
        instructions: "Combine the Fernet-Branca, Averna, and vermouth in a mixing glass filled with ice. Stir until chilled and strain into a chilled double old-fashioned glass. Garnish with the flamed orange zest."
    },
    {
        name: "Smithstreeter",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1 ounce rye whiskey, 3/4 ounce Amaro Lucano, 1/2 ounce cold brew coffee, 1/4 ounce Demerara syrup, 2 dashes orange bitters, tonic water, garnish: lemon zest",
        instructions: "Combine the rye, amaro, cold brew coffee, Demerara syrup, and orange bitters in a mixing glass filled with ice. Stir until chilled and strain into a highball glass filled with crushed ice. Top off with tonic water. Add more crushed ice if needed. Garnish with the lemon zest."
    },
    {
        name: "Summer Babe",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "1.5 ounces Mount Gay Black Barrel rum, 1 ounce Amaro Ramazzotti, 6 blackberries, 1/2 ounce freshly squeezed lime juice, 1/4 ounce Demerara syrup, ginger beer, garnish: lime wedge and 2 blackberries",
        instructions: "Combine the rum, amaro, blackberries, lime juice, and Demerara syrup in a cocktail shaker filled with ice. Shake until chilled and double-strain into a double old-fashioned glass filled with ice or over a large ice cube. Top off with ginger beer and garnish with a lime wedge and blackberries."
    },
    {
        name: "Toronto",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "2 ounces rye or Canadian whiskey, 1/4 ounce Fernet-Branca, 1/4 ounce Demerara syrup, 2 dashes Angostura bitters, garnish: orange twist",
        instructions: "Combine all the ingredients in a mixing glass filled with ice. Stir until chilled and strain into a chilled glass. Garnish with the orange twist."
    },
    {
        name: "The Waterfront",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "2 ounces Fernet-Branca, 1 ounce Branca Menta, 1/2 ounce freshly squeezed lime juice, ginger beer, garnish: lime wedge and mint sprig",
        instructions: "Build the Fernet-Branca, Branca Menta, and lime juice in a highball glass filled with ice. Top off with ginger beer and stir. Garnish with the lime wedge and mint sprig."
    },
    {
        name: "White Negroni",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "2 ounces London dry gin, 1 ounce Lillet Blanc, 3/4 ounce Suze, garnish: lemon zest",
        instructions: "Combine the gin, Lillet, and Suze in a mixing glass filled with ice. Stir until chilled and strain into an old-fashioned glass filled with ice or a chilled glass. Garnish with the lemon zest."
    },
    {
        name: "Yesterday, Today, and Amaro",
        image: "https://cdn.diffords.com/contrib/stock-images/2019/09/5d8229a30e792.jpg",
        ingredients: "2 ounces Wild Turkey 101 rye, 1/2 ounce Cynar, 1/4 ounce Averna, 1/4 ounce Benedictine, lemon zest",
        instructions: "Combine all the ingredients in a mixing glass filled with ice. Stir until chilled and strain into a chilled glass. Express the lmeon zest over the surface of the drink and discard."
    },
]

export default CocktailList