const windowProducts = [
    {
        "id": "afeef",
        "name": "Afeef",
        "brand": "Lattafa",
        "category": "Amadeirado",
        "coverImage": "./Assets/afeef_ai_nobg.png",
        "modalImage": "./Assets/afeef_ai_nobg.png",
        "glowColor": "rgba(212,154,137,0.3)",
        "description": "Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.",
        "notes": {
            "top": [
                "Bergamota",
                "Limão",
                "Aldeídos"
            ],
            "heart": [
                "Flor Branca",
                "Tuberosa",
                "Rosa"
            ],
            "base": [
                "Almíscar",
                "Amadeirado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "yara",
        "name": "Yara Pink",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/yara_ai_nobg.png",
        "modalImage": "./Assets/yara_ai_nobg.png",
        "glowColor": "rgba(201,122,126,0.3)",
        "description": "Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.",
        "notes": {
            "top": [
                "Pêssego",
                "Frutas Tropicais",
                "Lichia"
            ],
            "heart": [
                "Flor de Laranjeira",
                "Baunilha",
                "Rosa"
            ],
            "base": [
                "Almíscar Branco",
                "Atalcado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "asad",
        "name": "Asad",
        "brand": "Lattafa",
        "category": "Amadeirado",
        "coverImage": "./Assets/asad_ai_nobg.png",
        "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": [
                "Canela",
                "Pimenta Preta",
                "Cardamomo"
            ],
            "heart": [
                "Âmbar",
                "Oud",
                "Rosa"
            ],
            "base": [
                "Baunilha",
                "Madeira de Cedro",
                "Almíscar"
            ]
        }
    },
    {
        "id": "dalal",
        "name": "Dalal",
        "brand": "Al Rehab",
        "category": "Doce",
        "coverImage": "./Assets/dalal_ai_nobg.png",
        "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": [
                "Cítrico",
                "Laranja",
                "Bergamota"
            ],
            "heart": [
                "Caramelo",
                "Baunilha",
                "Doce"
            ],
            "base": [
                "Almíscar",
                "Âmbar",
                "Sândalo"
            ]
        }
    },
    {
        "id": "khamrah",
        "name": "Khamrah",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/Khamram_nobg.png",
        "modalImage": "./Assets/Khamram_nobg.png",
        "glowColor": "rgba(184, 115, 51, 0.3)",
        "description": "Uma indulgência luxuosa que combina a doçura das tâmaras com especiarias quentes e madeiras nobres.",
        "notes": {
            "top": ["Canela", "Noz-moscada", "Bergamota"],
            "heart": ["Tâmara", "Pralinê", "Tuberosa", "Mahonial"],
            "base": ["Baunilha", "Fava Tonka", "Madeira de Âmbar", "Mirra"]
        }
    },
    {
        "id": "fakhar",
        "name": "Fakhar",
        "brand": "Lattafa",
        "category": "Floral",
        "coverImage": "./Assets/FakharLattafa_nobg.png",
        "modalImage": "./Assets/FakharLattafa_nobg.png",
        "glowColor": "rgba(255, 182, 193, 0.3)",
        "description": "Uma celebração da feminilidade luminosa. Flores brancas elegantes envolvidas em uma doçura sedutora.",
        "notes": {
            "top": ["Flor de Laranjeira", "Pêssego", "Maçã", "Pêra"],
            "heart": ["Jasmim", "Tuberosa", "Rosa"],
            "base": ["Sândalo", "Baunilha", "Patchouli"]
        }
    },
    {
        "id": "ameerati",
        "name": "Ameerati",
        "brand": "Al Wataniah",
        "category": "Amadeirado",
        "coverImage": "./Assets/Ameerati_nobg.png",
        "modalImage": "./Assets/Ameerati_nobg.png",
        "glowColor": "rgba(212, 175, 55, 0.3)",
        "description": "A essência da realeza árabe. Uma mistura hipnotizante de almíscar e notas cítricas cintilantes.",
        "notes": {
            "top": ["Cítricos", "Notas Verdes", "Almíscar"],
            "heart": ["Notas Amadeiradas", "Notas Herbais"],
            "base": ["Notas Especiadas", "Pó"]
        }
    },
    {
        "id": "choco_overdose",
        "name": "Choco Overdose",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/ChocoOverdoseLattafa_nobg.png",
        "modalImage": "./Assets/ChocoOverdoseLattafa_nobg.png",
        "glowColor": "rgba(101, 67, 33, 0.3)",
        "description": "Uma sobremesa em forma de perfume. Chocolate rico e viciante com um toque de especiarias quentes.",
        "notes": {
            "top": ["Chocolate Amargo", "Cacau"],
            "heart": ["Caramelo", "Baunilha"],
            "base": ["Almíscar", "Âmbar", "Madeiras"]
        }
    },
    {
        "id": "dimmah",
        "name": "Dimmah",
        "brand": "Al Wataniah",
        "category": "Floral",
        "coverImage": "./Assets/Dimmah_nobg.png",
        "modalImage": "./Assets/Dimmah_nobg.png",
        "glowColor": "rgba(168, 50, 121, 0.3)",
        "description": "Feminilidade exótica e cativante. Flores exuberantes banhadas em uma aura misteriosa.",
        "notes": {
            "top": ["Limão", "Laranja", "Maçã"],
            "heart": ["Rosa", "Jasmim", "Madeira de Cedro"],
            "base": ["Almíscar", "Baunilha", "Pralinê"]
        }
    },
    {
        "id": "haya",
        "name": "Haya",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/Haya_nobg.png",
        "modalImage": "./Assets/Haya_nobg.png",
        "glowColor": "rgba(255, 105, 180, 0.3)",
        "description": "Doçura e charme inegáveis. Uma composição efervescente de frutas tropicais e baunilha.",
        "notes": {
            "top": ["Morango", "Laranja Sanguínea", "Rosa"],
            "heart": ["Jasmim", "Orquídea", "Mel"],
            "base": ["Sândalo", "Baunilha", "Almíscar"]
        }
    },
    {
        "id": "milena",
        "name": "Milena",
        "brand": "Árabe Clássico",
        "category": "Floral",
        "coverImage": "./Assets/Milena_nobg.png",
        "modalImage": "./Assets/Milena_nobg.png",
        "glowColor": "rgba(221, 160, 221, 0.3)",
        "description": "Um buquê floral oriental sofisticado e atemporal para momentos inesquecíveis.",
        "notes": {
            "top": ["Bergamota", "Pêra"],
            "heart": ["Tuberosa", "Flor de Laranjeira"],
            "base": ["Patchouli", "Vetiver", "Baunilha"]
        }
    },
    {
        "id": "musamam",
        "name": "Musamam",
        "brand": "Lattafa",
        "category": "Amadeirado",
        "coverImage": "./Assets/Musamam_nobg.png",
        "modalImage": "./Assets/Musamam_nobg.png",
        "glowColor": "rgba(139, 69, 19, 0.3)",
        "description": "Força e nobreza em essência pura. Madeiras preciosas combinadas com couro sensual.",
        "notes": {
            "top": ["Mandarina Italiana", "Lavanda", "Açafrão"],
            "heart": ["Gerânio do Egito", "Madeira de Cedro", "Âmbar"],
            "base": ["Incenso da Somália", "Akigalawood", "Cisto Concreto"]
        }
    },
    {
        "id": "royal_amber",
        "name": "Royal Amber",
        "brand": "Orientica",
        "category": "Amadeirado",
        "coverImage": "./Assets/RoyalAmber_nobg.png",
        "modalImage": "./Assets/RoyalAmber_nobg.png",
        "glowColor": "rgba(255, 191, 0, 0.3)",
        "description": "Uma obra-prima reluzente. Âmbar aquecido envolto em notas frutadas e cremosas exuberantes.",
        "notes": {
            "top": ["Bergamota", "Verde"],
            "heart": ["Melão", "Abacaxi", "Gourmand"],
            "base": ["Madeiras", "Baunilha", "Almíscar"]
        }
    },
    {
        "id": "sabah_al_ward",
        "name": "Sabah Al Ward",
        "brand": "Al Wataniah",
        "category": "Floral",
        "coverImage": "./Assets/SabahAlWard_nobg.png",
        "modalImage": "./Assets/SabahAlWard_nobg.png",
        "glowColor": "rgba(255, 20, 147, 0.3)",
        "description": "O frescor de um jardim oriental ao amanhecer. Pétalas de rosa orvalhadas em profusão.",
        "notes": {
            "top": ["Pimenta Rosa", "Mandarina"],
            "heart": ["Cacau", "Flor de Laranjeira", "Jasmim Sambac"],
            "base": ["Baunilha", "Fava Tonka", "Patchouli"]
        }
    },
    {
        "id": "prod_14",
        "name": "Choco Musk",
        "brand": "Al Rehab",
        "category": "Doce",
        "coverImage": "./Assets/asad_ai_nobg.png",
        "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": [
                "Canela",
                "Pimenta Preta",
                "Cardamomo"
            ],
            "heart": [
                "Âmbar",
                "Oud",
                "Rosa"
            ],
            "base": [
                "Baunilha",
                "Madeira de Cedro",
                "Almíscar"
            ]
        }
    },
    {
        "id": "prod_15",
        "name": "Soft",
        "brand": "Al Rehab",
        "category": "Doce",
        "coverImage": "./Assets/dalal_ai_nobg.png",
        "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": [
                "Cítrico",
                "Laranja",
                "Bergamota"
            ],
            "heart": [
                "Caramelo",
                "Baunilha",
                "Doce"
            ],
            "base": [
                "Almíscar",
                "Âmbar",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_16",
        "name": "Silver",
        "brand": "Al Rehab",
        "category": "Cítrico",
        "coverImage": "./Assets/afeef_ai_nobg.png",
        "modalImage": "./Assets/afeef_ai_nobg.png",
        "glowColor": "rgba(212,154,137,0.3)",
        "description": "Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.",
        "notes": {
            "top": [
                "Bergamota",
                "Limão",
                "Aldeídos"
            ],
            "heart": [
                "Flor Branca",
                "Tuberosa",
                "Rosa"
            ],
            "base": [
                "Almíscar",
                "Amadeirado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_17",
        "name": "Avenue",
        "brand": "Al Rehab",
        "category": "Amadeirado",
        "coverImage": "./Assets/yara_ai_nobg.png",
        "modalImage": "./Assets/yara_ai_nobg.png",
        "glowColor": "rgba(201,122,126,0.3)",
        "description": "Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.",
        "notes": {
            "top": [
                "Pêssego",
                "Frutas Tropicais",
                "Lichia"
            ],
            "heart": [
                "Flor de Laranjeira",
                "Baunilha",
                "Rosa"
            ],
            "base": [
                "Almíscar Branco",
                "Atalcado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_18",
        "name": "Sultan",
        "brand": "Al Rehab",
        "category": "Amadeirado",
        "coverImage": "./Assets/asad_ai_nobg.png",
        "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": [
                "Canela",
                "Pimenta Preta",
                "Cardamomo"
            ],
            "heart": [
                "Âmbar",
                "Oud",
                "Rosa"
            ],
            "base": [
                "Baunilha",
                "Madeira de Cedro",
                "Almíscar"
            ]
        }
    },
    {
        "id": "prod_19",
        "name": "Blanc",
        "brand": "Al Rehab",
        "category": "Floral",
        "coverImage": "./Assets/dalal_ai_nobg.png",
        "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": [
                "Cítrico",
                "Laranja",
                "Bergamota"
            ],
            "heart": [
                "Caramelo",
                "Baunilha",
                "Doce"
            ],
            "base": [
                "Almíscar",
                "Âmbar",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_20",
        "name": "Cherry Flower",
        "brand": "Al Rehab",
        "category": "Floral",
        "coverImage": "./Assets/afeef_ai_nobg.png",
        "modalImage": "./Assets/afeef_ai_nobg.png",
        "glowColor": "rgba(212,154,137,0.3)",
        "description": "Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.",
        "notes": {
            "top": [
                "Bergamota",
                "Limão",
                "Aldeídos"
            ],
            "heart": [
                "Flor Branca",
                "Tuberosa",
                "Rosa"
            ],
            "base": [
                "Almíscar",
                "Amadeirado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_21",
        "name": "Bakhour",
        "brand": "Al Rehab",
        "category": "Amadeirado",
        "coverImage": "./Assets/yara_ai_nobg.png",
        "modalImage": "./Assets/yara_ai_nobg.png",
        "glowColor": "rgba(201,122,126,0.3)",
        "description": "Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.",
        "notes": {
            "top": [
                "Pêssego",
                "Frutas Tropicais",
                "Lichia"
            ],
            "heart": [
                "Flor de Laranjeira",
                "Baunilha",
                "Rosa"
            ],
            "base": [
                "Almíscar Branco",
                "Atalcado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_22",
        "name": "Saat Safa",
        "brand": "Al Rehab",
        "category": "Amadeirado",
        "coverImage": "./Assets/asad_ai_nobg.png",
        "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": [
                "Canela",
                "Pimenta Preta",
                "Cardamomo"
            ],
            "heart": [
                "Âmbar",
                "Oud",
                "Rosa"
            ],
            "base": [
                "Baunilha",
                "Madeira de Cedro",
                "Almíscar"
            ]
        }
    },
    {
        "id": "prod_23",
        "name": "Classic",
        "brand": "Al Rehab",
        "category": "Amadeirado",
        "coverImage": "./Assets/dalal_ai_nobg.png",
        "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": [
                "Cítrico",
                "Laranja",
                "Bergamota"
            ],
            "heart": [
                "Caramelo",
                "Baunilha",
                "Doce"
            ],
            "base": [
                "Almíscar",
                "Âmbar",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_24",
        "name": "Oud Modest 2",
        "brand": "Lattafa",
        "category": "Amadeirado",
        "coverImage": "./Assets/afeef_ai_nobg.png",
        "modalImage": "./Assets/afeef_ai_nobg.png",
        "glowColor": "rgba(212,154,137,0.3)",
        "description": "Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.",
        "notes": {
            "top": [
                "Bergamota",
                "Limão",
                "Aldeídos"
            ],
            "heart": [
                "Flor Branca",
                "Tuberosa",
                "Rosa"
            ],
            "base": [
                "Almíscar",
                "Amadeirado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_25",
        "name": "Khamrah 2",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/yara_ai_nobg.png",
        "modalImage": "./Assets/yara_ai_nobg.png",
        "glowColor": "rgba(201,122,126,0.3)",
        "description": "Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.",
        "notes": {
            "top": [
                "Pêssego",
                "Frutas Tropicais",
                "Lichia"
            ],
            "heart": [
                "Flor de Laranjeira",
                "Baunilha",
                "Rosa"
            ],
            "base": [
                "Almíscar Branco",
                "Atalcado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_26",
        "name": "Fakhar 2",
        "brand": "Lattafa",
        "category": "Floral",
        "coverImage": "./Assets/asad_ai_nobg.png",
        "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": [
                "Canela",
                "Pimenta Preta",
                "Cardamomo"
            ],
            "heart": [
                "Âmbar",
                "Oud",
                "Rosa"
            ],
            "base": [
                "Baunilha",
                "Madeira de Cedro",
                "Almíscar"
            ]
        }
    },
    {
        "id": "prod_27",
        "name": "Ameer Al Oudh 2",
        "brand": "Lattafa",
        "category": "Amadeirado",
        "coverImage": "./Assets/dalal_ai_nobg.png",
        "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": [
                "Cítrico",
                "Laranja",
                "Bergamota"
            ],
            "heart": [
                "Caramelo",
                "Baunilha",
                "Doce"
            ],
            "base": [
                "Almíscar",
                "Âmbar",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_28",
        "name": "Bade'e Al Oud 2",
        "brand": "Lattafa",
        "category": "Amadeirado",
        "coverImage": "./Assets/afeef_ai_nobg.png",
        "modalImage": "./Assets/afeef_ai_nobg.png",
        "glowColor": "rgba(212,154,137,0.3)",
        "description": "Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.",
        "notes": {
            "top": [
                "Bergamota",
                "Limão",
                "Aldeídos"
            ],
            "heart": [
                "Flor Branca",
                "Tuberosa",
                "Rosa"
            ],
            "base": [
                "Almíscar",
                "Amadeirado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_29",
        "name": "Nebras 2",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/yara_ai_nobg.png",
        "modalImage": "./Assets/yara_ai_nobg.png",
        "glowColor": "rgba(201,122,126,0.3)",
        "description": "Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.",
        "notes": {
            "top": [
                "Pêssego",
                "Frutas Tropicais",
                "Lichia"
            ],
            "heart": [
                "Flor de Laranjeira",
                "Baunilha",
                "Rosa"
            ],
            "base": [
                "Almíscar Branco",
                "Atalcado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_30",
        "name": "Maahir 2",
        "brand": "Lattafa",
        "category": "Floral",
        "coverImage": "./Assets/asad_ai_nobg.png",
        "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": [
                "Canela",
                "Pimenta Preta",
                "Cardamomo"
            ],
            "heart": [
                "Âmbar",
                "Oud",
                "Rosa"
            ],
            "base": [
                "Baunilha",
                "Madeira de Cedro",
                "Almíscar"
            ]
        }
    },
    {
        "id": "prod_31",
        "name": "Qaa'ed 2",
        "brand": "Lattafa",
        "category": "Amadeirado",
        "coverImage": "./Assets/dalal_ai_nobg.png",
        "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": [
                "Cítrico",
                "Laranja",
                "Bergamota"
            ],
            "heart": [
                "Caramelo",
                "Baunilha",
                "Doce"
            ],
            "base": [
                "Almíscar",
                "Âmbar",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_32",
        "name": "Raghba 2",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/afeef_ai_nobg.png",
        "modalImage": "./Assets/afeef_ai_nobg.png",
        "glowColor": "rgba(212,154,137,0.3)",
        "description": "Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.",
        "notes": {
            "top": [
                "Bergamota",
                "Limão",
                "Aldeídos"
            ],
            "heart": [
                "Flor Branca",
                "Tuberosa",
                "Rosa"
            ],
            "base": [
                "Almíscar",
                "Amadeirado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_33",
        "name": "Ana Abiyedh 2",
        "brand": "Lattafa",
        "category": "Floral",
        "coverImage": "./Assets/yara_ai_nobg.png",
        "modalImage": "./Assets/yara_ai_nobg.png",
        "glowColor": "rgba(201,122,126,0.3)",
        "description": "Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.",
        "notes": {
            "top": [
                "Pêssego",
                "Frutas Tropicais",
                "Lichia"
            ],
            "heart": [
                "Flor de Laranjeira",
                "Baunilha",
                "Rosa"
            ],
            "base": [
                "Almíscar Branco",
                "Atalcado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_34",
        "name": "Choco Musk 2",
        "brand": "Al Rehab",
        "category": "Doce",
        "coverImage": "./Assets/asad_ai_nobg.png",
        "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": [
                "Canela",
                "Pimenta Preta",
                "Cardamomo"
            ],
            "heart": [
                "Âmbar",
                "Oud",
                "Rosa"
            ],
            "base": [
                "Baunilha",
                "Madeira de Cedro",
                "Almíscar"
            ]
        }
    },
    {
        "id": "prod_35",
        "name": "Soft 2",
        "brand": "Al Rehab",
        "category": "Doce",
        "coverImage": "./Assets/dalal_ai_nobg.png",
        "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": [
                "Cítrico",
                "Laranja",
                "Bergamota"
            ],
            "heart": [
                "Caramelo",
                "Baunilha",
                "Doce"
            ],
            "base": [
                "Almíscar",
                "Âmbar",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_36",
        "name": "Silver 2",
        "brand": "Al Rehab",
        "category": "Cítrico",
        "coverImage": "./Assets/afeef_ai_nobg.png",
        "modalImage": "./Assets/afeef_ai_nobg.png",
        "glowColor": "rgba(212,154,137,0.3)",
        "description": "Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.",
        "notes": {
            "top": [
                "Bergamota",
                "Limão",
                "Aldeídos"
            ],
            "heart": [
                "Flor Branca",
                "Tuberosa",
                "Rosa"
            ],
            "base": [
                "Almíscar",
                "Amadeirado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_37",
        "name": "Avenue 2",
        "brand": "Al Rehab",
        "category": "Amadeirado",
        "coverImage": "./Assets/yara_ai_nobg.png",
        "modalImage": "./Assets/yara_ai_nobg.png",
        "glowColor": "rgba(201,122,126,0.3)",
        "description": "Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.",
        "notes": {
            "top": [
                "Pêssego",
                "Frutas Tropicais",
                "Lichia"
            ],
            "heart": [
                "Flor de Laranjeira",
                "Baunilha",
                "Rosa"
            ],
            "base": [
                "Almíscar Branco",
                "Atalcado",
                "Sândalo"
            ]
        }
    },
    {
        "id": "prod_38",
        "name": "Sultan 2",
        "brand": "Al Rehab",
        "category": "Amadeirado",
        "coverImage": "./Assets/asad_ai_nobg.png",
        "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": [
                "Canela",
                "Pimenta Preta",
                "Cardamomo"
            ],
            "heart": [
                "Âmbar",
                "Oud",
                "Rosa"
            ],
            "base": [
                "Baunilha",
                "Madeira de Cedro",
                "Almíscar"
            ]
        }
    },
    {
        "id": "prod_39",
        "name": "Blanc 2",
        "brand": "Al Rehab",
        "category": "Floral",
        "coverImage": "./Assets/dalal_ai_nobg.png",
        "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": [
                "Cítrico",
                "Laranja",
                "Bergamota"
            ],
            "heart": [
                "Caramelo",
                "Baunilha",
                "Doce"
            ],
            "base": [
                "Almíscar",
                "Âmbar",
                "Sândalo"
            ]
        }
    }
];
