
const IngredientList = [
    {
        name: "Aloe Ferox",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Aloe_Ferox_between_Cofimvaba_and_Ngcobo.jpg/440px-Aloe_Ferox_between_Cofimvaba_and_Ngcobo.jpg",
        text:"Commonly known as bitter aloe, cape aloe, red aloe, or tap aloe. It is a species of flowering plant indigenous to southern Africa."
    },
    {
        name: "Allspice",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pimenta_dioica_%28Allspice%29_W_IMG_2432.jpg/440px-Pimenta_dioica_%28Allspice%29_W_IMG_2432.jpg",
        text:"Also known as Jamaica pepper, myrtle pepper, pimenta, or pimento. It is the dried unripe berry of Pimenta dioica, a midcanopy tree native to the Greater Antilles, southern Mexico, and Central America,"
    },
    {
        name: "Angelica Root",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angelica_archangelica_%281118596627%29.jpg",
        text:"Angelica archangelica, commonly known as garden angelica, wild celery, and Norwegian angelica, is a biennial plant from the family Apiaceae, a subspecies of which is cultivated for its sweetly scented edible stems and roots."
    },
    {
        name: "Anise",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Aniseed_plant_%28Flora_of_Sindh%29.jpg/440px-Aniseed_plant_%28Flora_of_Sindh%29.jpg",
        text:"Also known as aniseed - it is a flowering plant in the family Apiaceae native to the eastern Mediterranean region and Southwest Asia. The flavor and aroma of its seeds have similarities with some other spices, such as star anise,[4] fennel, and liquorice. It is widely cultivated and used to flavor food, candy, and alcoholic drinks, especially around the Mediterranean."
    },
    {
        name: "Artichoke",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Artichoke_J1.jpg/440px-Artichoke_J1.jpg",
        text:"The artichoke is a variety of a species of thistle cultivated as a food. The edible portion of the plant consists of the flower buds before the flowers come into bloom. "
    },
    {
        name: "Bitter Orange",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Citrus_aurantium.jpg/440px-Citrus_aurantium.jpg",
        text:"Also known as the Seville orange, sour orange, bigarade orange, or marmalade orange. It is the citrus tree Citrus × aurantium and its fruit. It is native to Southeast Asia.",
    },
    {
        name: "Blessed Thistle",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cnicus_benedictus_flor.jpg/440px-Cnicus_benedictus_flor.jpg",
        text:"Also called St. Benedict's thistle, holy thistle, or spotted thistle. It is a thistle-like plant in the family Asteraceae, native to the Mediterranean region. "
    },
    {
        name: "Cardamom",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Elettaria_cardamomum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-057.jpg/440px-Elettaria_cardamomum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-057.jpg",
        text:"sometimes cardamon or cardamum,[1] is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. Both genera are native to the Indian subcontinent and Indonesia."
    },
    {
        name: "Cardoon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Costa_Vicentina_4.jpg/440px-Costa_Vicentina_4.jpg",
        text:"It is also called the artichoke thistle, is a thistle in the sunflower family. It is a naturally occurring species that also has many cultivated forms, including the globe artichoke. It is native to the western and central Mediterranean region, where it was domesticated in ancient times and still occurs as a wild plant"
    },
    {
        name: "Chamomile",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kamomillasaunio_%28Matricaria_recutita%29.JPG/340px-Kamomillasaunio_%28Matricaria_recutita%29.JPG",
        text:"It is the common name for several daisy-like plants of the family Asteraceae. Two of the species are commonly used to make herbal infusions for traditional medicine, and there is some evidence that chamomile has an effect on health"
    },
    {
        name: "Cinchona",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cinchona.pubescens01.jpg/440px-Cinchona.pubescens01.jpg",
        text:"Cinchona is a genus of flowering plants in the family Rubiaceae containing at least 23 species of trees and shrubs. All are native to the tropical Andean forests of western South America."
    },
    {
        name: "Cinnamon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cinnamomum_verum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-182.jpg/440px-Cinnamomum_verum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-182.jpg",
        text:"Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. The aroma and flavour of cinnamon derive from its essential oil and principal component, cinnamaldehyde, as well as numerous other constituents including eugenol."
    },
    {
        name: "Clove",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Syzygium_aromaticum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-030.jpg/440px-Syzygium_aromaticum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-030.jpg",
        text:"Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands (or Moluccas) in Indonesia, and are commonly used as a spice",
    },
    {
        name: "Coriander",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Coriandrum_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-193.jpg/440px-Coriandrum_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-193.jpg",
        text:"It is an annual herb in the family Apiaceae. It is also known as Chinese parsley, dhania or cilantro (/sɪˈlæntroʊ, -ˈlɑːn-/).[2] All parts of the plant are edible, but the fresh leaves and the dried seeds (as a spice) are the parts most traditionally used in cooking."
    },
    {
        name: "Eucalyptus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Eucalyptus_tereticornis_flowers%2C_capsules%2C_buds_and_foliage.jpeg/440px-Eucalyptus_tereticornis_flowers%2C_capsules%2C_buds_and_foliage.jpeg",
        text:"It is a genus of over seven hundred species of flowering trees, shrubs or mallees in the myrtle family. Most species are native to Australia."
    },
    {
        name: "Elderberry",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sambucus-berries.jpg/440px-Sambucus-berries.jpg",
        text:"Sambucus is a genus of flowering plants in the family Adoxaceae. The various species are commonly called elder or elderberry. Although the cooked berries (pulp and skin) of most species of Sambucus are edible,[7][8] the uncooked berries and other parts of plants from this genus are poisonous."
    },
    {
        name: "Galangal",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Alpinia_officinarum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-156.jpg/400px-Alpinia_officinarum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-156.jpg",
        text:"The word galangal, or its variant galanga, can refer in common usage to the aromatic rhizome of any of four plant species in the Zingiberaceae (ginger) family"
    },
    {
        name: "Honey",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Honey_comb.jpg/440px-Honey_comb.jpg",
        text:"Honey is a sweet, viscous food substance made by honey bees and some related insects. Bees produce honey from the sugary secretions of plants (floral nectar) or from secretions of other insects (such as honeydew), by regurgitation, enzymatic activity, and water evaporation. Bees store honey in wax structures called honeycombs."
    },
    {
        name: "Juniper",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Juniperus_osteosperma_1.jpg/440px-Juniperus_osteosperma_1.jpg",
        text:"Junipers are coniferous trees and shrubs in the genus Juniperus of the cypress family. "
    },
    {
        name: "Laraha",
        image: "https://curacaoliqueur.spin-cdn.com/46/1/518/ogimage/format_the_unique_laraha_orange_curacao_liqueur_5dae0e579f71b.jpg",
        text:"It is the name of a citrus tree that grows on the island of Curaçao, and also the fruit of this tree. A descendant of the bitter orange, the fruit of the laraha is too bitter and too fibrous to be considered edible."
    },
    {
        name: "Laurel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bay_leaf_pair443.jpg/440px-Bay_leaf_pair443.jpg",
        text:"Its common names include bay tree, bay laurel, sweet bay, true laurel, Grecian laurel, or simply laurel."
    },
    {
        name: "Licorice",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Illustration_Glycyrrhiza_glabra0.jpg/440px-Illustration_Glycyrrhiza_glabra0.jpg",
        text:"Liquorice or licorice is the common name of Glycyrrhiza glabra, a flowering plant of the bean family, from the root of which a sweet, aromatic flavouring can be extracted."
    },
    {
        name: "Mint",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Mint-leaves-2007.jpg/440px-Mint-leaves-2007.jpg",
        text:"Mentha is a genus of plants in the family Lamiaceae (mint family). The exact distinction between species is unclear; it is estimated that 13 to 24 species exist.["
    },
    {
        name: "Musk Yarrow",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Achillea_millefolium.jpg/440px-Achillea_millefolium.jpg",
        text:"Achillea is a group of flowering plants in the family Asteraceae, known colloquially as yarrows."
    },
    {
        name: "Myrrh",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Commiphora_myrrha_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-019.jpg",
        text:"Myrrh is a natural gum or resin extracted from a number of small, thorny tree species of the genus Commiphora. Myrrh resin has been used throughout history as a perfume, incense and medicine"
    },
    {
        name: "Orris Root",
        image: "data:image/jpeg;base64,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",
        text:"Orris Root is a term used for the roots of Iris germanica and Iris pallida. It had the common name of Queen Elizabeth Root."
    },
    {
        name: "Gentian",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Gentiana-verna2.jpg/440px-Gentiana-verna2.jpg",
        text:"Gentiana is a genus of flowering plants belonging to the gentian family (Gentianaceae), the tribe Gentianeae, and the monophyletic subtribe Gentianinae. With about 400 species it is considered a large genus. They are notable for their mostly large, trumpet-shaped flowers, which are often of an intense blue.["
    },
    {
        name: "Peppermint",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pfefferminze_natur_peppermint.jpg/440px-Pfefferminze_natur_peppermint.jpg",
        text:"Peppermint is a hybrid mint, a cross between watermint and spearmint. Indigenous to Europe and the Middle East,[3] the plant is now widely spread and cultivated in many regions of the world.["
    },
    {
        name: "Pomegranate",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Pomegranate02_edit.jpg/440px-Pomegranate02_edit.jpg",
        text:"The pomegranate (Punica granatum) is a fruit-bearing deciduous shrub in the family Lythraceae, subfamily Punicoideae, that grows between 5 and 10 m (16 and 33 ft) tall."
    },
    {
        name: "Quassia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Quassiaamara.jpg/450px-Quassiaamara.jpg",
        text:"Quassia amara, also known as amargo, bitter-ash, bitter-wood, or hombre grande[1] (spanish for big man)[2] is a species in the genus Quassia, with some botanists treating it as the sole species in the genus."
    },
    {
        name: "Rhubarb",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rheum_rhabarbarum.2006-04-27.uellue.jpg/440px-Rheum_rhabarbarum.2006-04-27.uellue.jpg",
        text:"It is a vegetable derived from cultivated plants in the genus Rheum in the family Polygonaceae.[2] The whole plant – a herbaceous perennial growing from short, thick rhizomes – is also called rhubarb."
    },
    {
        name: "Rue",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Die_Weinraute%2C_lat._Ruta_graveolens%2C_Pflanze_mit_den_gelben_Bl%C3%BCten.jpg/440px-Die_Weinraute%2C_lat._Ruta_graveolens%2C_Pflanze_mit_den_gelben_Bl%C3%BCten.jpg",
        text:"Rue is also known as common rue or herb-of-grace. It is a species of Ruta grown as an ornamental plant and herb. It is native to the Balkan Peninsula. "
    },
    {
        name: "Saffron",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Saffron8.jpg/440px-Saffron8.jpg",
        text:"Saffron is a spice derived from the flower of Crocus sativus, commonly known as the saffron crocus. The vivid crimson stigma and styles, called threads, are collected and dried for use mainly as a seasoning and colouring agent in food. Saffron has long been the world's most costly spice by weight."
    },
    {
        name: "Sage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Salvia_officinalis0.jpg/440px-Salvia_officinalis0.jpg",
        text:"Sage is a perennial, evergreen subshrub, with woody stems, grayish leaves, and blue to purplish flowers. It is a member of the mint family and native to the Mediterranean region,"
    },
    {
        name: "Sarsaparilla Root",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sarsaparilla-1271142_1920.jpg/440px-Sarsaparilla-1271142_1920.jpg",
        text:"This is  a perennial trailing vine with prickly stems that is native to Mexico and Central America. Common names include sarsaparilla, Honduran sarsaparilla, and Jamaican sarsaparilla."
    },
    {
        name: "Sweet Orange",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/OrangeBloss_wb.jpg/440px-OrangeBloss_wb.jpg",
        text:"The orange is the fruit of various citrus species in the family Rutaceae. The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata)."
    },
    {
        name: "Tamarind",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tamarindus_indica_pods.JPG/440px-Tamarindus_indica_pods.JPG",
        text:"Tamarind is a leguminous tree (family Fabaceae) bearing edible fruit that is indigenous to tropical Africa. The tamarind tree produces brown, pod-like fruits that contain a sweet, tangy pulp, which is used in cuisines around the world."
    },
    {
        name: "Vanilla",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Vanilla_planifolia_%286998639597%29.jpg/340px-Vanilla_planifolia_%286998639597%29.jpg",
        text:"Vanilla is a spice derived from orchids of the genus Vanilla, primarily obtained from pods of the Mexican species, flat-leaved vanilla. "
    },
    {
        name: "Violet Flower",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Viola_reichenbachiana_LC0128.jpg/440px-Viola_reichenbachiana_LC0128.jpg",
        text:"Viola is a genus of flowering plants in the violet family Violaceae. It is the largest genus in the family, containing between 525 and 600 species. Most species are found in the temperate Northern Hemisphere; however, some are also found in widely divergent areas such as Hawaii, Australasia, and the Andes."
    },
    {
        name: "Wormwood",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Artemisia_absinthium_P1210748.jpg/440px-Artemisia_absinthium_P1210748.jpg",
        text:"Artemisia absinthium (wormwood, grand wormwood, absinthe, absinthium, absinthe wormwood,[4] mugwort, wermout, wermud, wormit, wormod[5]) is a species of Artemisia native to temperate regions of Eurasia[6] and Northern Africa and widely naturalized in Canada and the northern United States. It is grown as an ornamental plant and is used as an ingredient in the spirit Absinthe as well as some other alcoholic beverages."
    },
    {
        name: "Zedoaria",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Curcuma_zedoaria_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-048.jpg",
        text:"Curcuma zedoaria (zedoary, white turmeric, or temu putih) is a perennial herb and member of the genus Curcuma, family Zingiberaceae. The plant is native to South Asia and Southeast Asia. The edible rhizome of zedoary has a white interior and a fragrance reminiscent of mango; however, its flavour is more similar to ginger, except with a very bitter aftertaste. In Indonesia, it is ground to a powder and added to make white curry pastes, whereas in India, it tends to be used fresh or in pickling. In Thai cuisine it is used raw and cut in thin strips in certain Thai salads."
    },
]

export default IngredientList