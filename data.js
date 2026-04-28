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
        "id": "prod_4",
        "name": "Oud Modest",
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
        "id": "prod_5",
        "name": "Khamrah",
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
        "id": "prod_6",
        "name": "Fakhar",
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
        "id": "prod_7",
        "name": "Ameer Al Oudh",
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
        "id": "prod_8",
        "name": "Bade'e Al Oud",
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
        "id": "prod_9",
        "name": "Nebras",
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
        "id": "prod_10",
        "name": "Maahir",
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
        "id": "prod_11",
        "name": "Qaa'ed",
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
        "id": "prod_12",
        "name": "Raghba",
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
        "id": "prod_13",
        "name": "Ana Abiyedh",
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
